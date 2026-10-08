## Google Authentication

Here we show an example about how to implement a program in order to authenticate the access using Google authentication. You can find Google's documentation at the address: https://developers.google.com/accounts/docs/OAuth2Login.

This kind of authentication requires your program to redirect the login phase on the Google site and then performs some HTTP requests to the Google APIs. Your program will use the following classes:

```cobol
          configuration section.
          repository.
            class web-area    as "com.iscobol.rts.HTTPHandler"
            class http-client as "com.iscobol.rts.HTTPClient"
            class http-params as "com.iscobol.rts.HTTPData.Params"
            class j-bigint    as "java.math.BigInteger"
            class j-securernd as "java.security.SecureRandom"
            .
          working-storage section.
 
          01  params object reference http-params.
          01  http object reference http-client
```

The classes *j-bigint* and *j-securernd* are used to create a secure random number whose purpose will be explained later.

According to Google's documentation "Before your application can use Google's OAuth 2.0 authentication system for user login, you must set up a project in the Google Developers Console ([https://console.developers.google.com/](https://console.developers.google.com/)) to obtain OAuth 2.0 credentials, set a redirect URI, and (optionally) customize the branding information that your users see on the user-consent screen. You can also use the Developers Console to create a service account, enable billing, set up filtering, and do other tasks. For more details, see the Google Developers Console Help ([https://developers.google.com/console/help/console](https://developers.google.com/console/help/console))"

There you get a client ID and a client secret that will be necessary in the authentication process.

Let's say that the URL of our program is http://veryant.com/ismobile3/OpenIDConnect then the WORKING-STORAGE SECTION will contain:

```cobol
          78  client-id value "<client-id-by-Google>".
          78  clsc value "<client-secret-by-Google>".
          78  redir value "http://veryant.com/oauth/GOOGLEConnect".
          78  realm value "http://veryant.com/oauth".
          01  state pic x any length.
```

The login process can be divided in three stages:

- Request the authentication from Google through a redirection;
- Get the authentication data in order to be able to query Google APIs;
- Get the data about the logged user.

The program will be called two times: the first time by the user in order to start the authentication process, the second time by a Google redirection.

The first phase is simply a redirection in which you must specify what URL must be called back.

You must protect the security of your users by preventing request forgery attacks. In order to be sure that this callback is performed by the URL you actually called, a random id (state token) must be supplied. According to Google documentation: "One good choice for a state token is a string of 30 or so characters constructed using a high-quality random-number generator". These tokens are often referred to as cross-site request forgery (CSRF) tokens.

You can create this secure random id using the classes j-securernd and j-bigint as in following code:

```cobol
        set state=j-bigint:>new(130 j-securernd:>new):>toString(32).
```

The code for redirection then will be:

```cobol
       phase-1-redirection.
            set state to 
                    j-bigint:>new(130 j-securernd:>new):>toString(32).
            set params = http-params:>new
                      :>add ("client_id" client-id)
                      :>add ("response_type" "code")
                      :>add ("scope" "openid email")
                      :>add ("redirect_uri" redir)
                      :>add ("state" state)
                      :>add ("openid.realm" realm)
            comm-area:>redirect ("https://accounts.google.com/o/oauth2/auth" params).
```

Note that the SCOPE parameter has the value "openid email": if you do not include "email" then the logger will not share his email address with your application.

The second phase begins when the same application is called back by Google, as specified by the redir variable. The program can easily tell if it is the first run or the second by the setting of the variables state and http-state: the former is set by phase 1 while the latter will be passed back by Google in the redirection of the login. So the initial part of the program could be the following:

```cobol
          linkage section.
          01  comm-area object reference web-area.
          procedure division using comm-area.
          main.
 
            accept client-id from environment "client_id_by_google"
            accept clsc  from environment "client_secret_by_google".
 
            accept redir from environment "realdir".
            accept realm from environment "realm".
 
 
            if user-email = space 
              perform do-auth
            else
              perform run-first-program
            end-if.
            goback.
              
          do-auth.
            initialize http-response.
            comm-area:>accept(http-response).
            if http-state = space
              perform phase-1-redirection
            else
              if http-state = state
                 perform phase-2-get-auth-token
                 perform phase-3-get-info
                 perform set-first-program
                 perform run-first-program
              else
                 comm-area:>displayError(403 "Forged state!")
              end-if
            end-if.
```

The parameters received back by Google are described in the following variable:

```cobol
       01  http-response identified by "_".
          03 identified by "state".
            05 http-state  pic x any length.
          03 identified by "code".
            05 http-code  pic x any length.
```

The parameter code (stored in http-code) is the one you need in order to get the authorization to query the Google APIs, along with your client ID and client secret. The source code of the second phase could be the following:

```cobol
       phase-2-get-auth-token.
            set http = http-client:>new
            set params = http-params:>new
                :>add ("code" http-code)
                :>add ("client_id" client-id)
                :>add ("client_secret" clsc)
                :>add ("redirect_uri" redir)
                :>add ("grant_type" "authorization_code")
            try
              http:>doPost (
                      "https://accounts.google.com/o/oauth2/token"
                      params)
              http:>getResponseCode (response-code)
              if response-code = 200
                 http:>getResponseJSON (google-auth)
              else
                 comm-area:>displayError(response-code "")
                 goback
              end-if
            catch exception
              comm-area:>displayError(500 exception-object:>toString)
              goback
            end-try.
```

If the request is successful, the program will receive a JSON payload, containing two strings of characters called "access_token" and "token_type" that allow you to call anything among the Google APIs. This is the isCOBOL description of the JSON:

```cobol
       01  google-auth identified by "_".
           03 identified by "access_token".
              05 access-token  pic x any length.
           03 identified by "token_type".
              05 token-type  pic x any length.
           03 identified by "expires_in".
              05 expires-in  pic 9(9).
           03 identified by "id_token".
              05 id-token  pic x any length.
```

In the third phase you may choose to call the API "userinfo": this API returns a JSON payload whose data are described in the following variable:

```cobol
          01  user-info identified by "_".
            03 identified by "id".
              05 user-id  pic x any length.
            03 identified by "email".
              05 user-email  pic x any length.
            03 identified by "verified_email".
              05 user-verified-email  pic x any length.
            03 identified by "name".
              05 user-name  pic x any length.
            03 identified by "given_name".
              05 user-given-name  pic x any length.
            03 identified by "family_name".
              05 user-family-name  pic x any length.
            03 identified by "link".
              05 user-link  pic x any length.
            03 identified by "picture".
              05 user-picture  pic x any length.
            03 identified by "gender".
              05 user-gender  pic x any length.
```

You still don't have any information about the person who logged in, so you need to get some basic information.

In the third phase you may choose to call the API "userinfo": this API returns a JSON payload whose data are described in the following variable:

```cobol
       01  user-info identified by "_".
           03 identified by "id".
              05 user-id  pic x any length.
           03 identified by "email".
              05 user-email  pic x any length.
           03 identified by "verified_email".
              05 user-verified-email  pic x any length.
           03 identified by "name".
              05 user-name  pic x any length.
           03 identified by "given_name".
              05 user-given-name  pic x any length.
           03 identified by "family_name".
              05 user-family-name  pic x any length.
           03 identified by "link".
              05 user-link  pic x any length.
           03 identified by "picture".
              05 user-picture  pic x any length.
           03 identified by "gender".
              05 user-gender  pic x any length.
```

In order to query the Google APIs you need to put an authorization property in the header of each request: the property key will be "Authorization" while the property value will be the concatenation of the "token\_type" plus the "access_token" separated by a space character. The source code could be the following:

```cobol
       phase-3-get-info.
            string token-type " " access-token into authorization
            try 
              http:>setHeaderProperty ("Authorization" authorization)
              http:>doGet (
                     "https://www.googleapis.com/oauth2/v2/userinfo")
              http:>getResponseCode (response-code)
              if response-code = 200
                 http:>getResponseJSON (user-info)
              else
                 comm-area:>displayError(response-code "")
                 goback
              end-if
            catch exception
              comm-area:>displayError(500 exception-object:>toString)
              goback
            end-try.
```

If the call is successful, then the only thing left to do is start the next program, i.e. the first program in the application, for example:

```cobol
       set-first-program.
            set environment "openid.email" to user-email.
            accept data-dir from environment "file.prefix"
            string data-dir "/" user-email into data-dir
      
            call "c$makedir" using data-dir
            set environment "file.prefix" to data-dir.
 
         run-first-program.
            comm-area:>redirect ("_index.html").
```

For Complete examples of Facebook and Google authentications see the installed samples under sample\\eis\\other\\oauth.
