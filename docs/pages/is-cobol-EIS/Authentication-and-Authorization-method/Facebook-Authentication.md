## Facebook Authentication

Here we show an example of how to implement a program in order to authenticate the access using the Facebook authentication. You can find Facebook's documentation at the address: [https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/v2.0](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/v2.0).

This kind of authentication requires your program to redirect the login phase to the Facebook site and then performs some HTTP requests to the Facebook APIs. Your program will use the following classes:

```cobol
           configuration section.
           repository.
              class web-area as "com.iscobol.rts.HTTPHandler"
              class http-client as "com.iscobol.rts.HTTPClient"
              class http-params as "com.iscobol.rts.HTTPData.Params"
              class j-bigint as "java.math.BigInteger"
              class j-securernd as "java.security.SecureRandom"
              .
           working-storage section.
           01  params object reference http-params.
           01  http object reference http-client.
```

The classes j-bigint and j-securernd are used to create a secure random number whose purpose will be explained later.

In order to use the Facebook authentication, you need a Facebook App ID that you can create and retrieve on the App Dashboard ([https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)).

There you get a client ID and a client secret that are necessary in the authentication process.

Let's say that the URL of our program is “http://veryant.com/oauth/FBConnect”, then the WORKING-STORAGE SECTION will contain:

```cobol
       78  client-id value "<client-id-by-Facebook>".
       78  clsc value "<client-secret-by-Facebook>".
       78  redir value "http://veryant.com/oauth/FBConnect".
       78  realm value "http://veryant.com/oauth".
       01  state pic x any length.
```

The login process can be divided in three stages:

- Request the authentication from Facebook through a redirection;
- Get the authentication data in order to be able to query Facebook APIs;
- Get the logged user data.

The program is called two times: the first time by the user in order to start the authentication process and the second time by a Facebook redirection.

The first phase is simply a redirection where you specify what URL must be called back.

You must protect the security of your users by preventing request forgery attacks. In order to be sure that this callback is performed by the URL you actually called, a random id (state token) must be supplied. According to Google documentation ([https://developers.google.com/accounts/docs/OAuth2Login](https://developers.google.com/accounts/docs/OAuth2Login)): "One good choice for a state token is a string of 30 or so characters constructed using a high-quality random-number generator". These tokens are often referred to as cross-site request forgery (CSRF) tokens.

You can create this secure random id using the classes j-securernd and j-bigint as in following code:

```cobol
          set state=j-bigint:>new(130 j-securernd:>new):>toString(32).
```

The code for redirection then will be:

```cobol
       phase-1-redirection.
             set state=j-bigint:>new(130 j-securernd:>new):>toString(32).
             set params = http-params:>new
                      :>add ("client_id" client-id)
                      :>add ("display" "popup")
                      :>add ("response_type" "code")
                      :>add ("scope" "email")
                      :>add ("redirect_uri" redir)
                      :>add ("state" state)
              
             comm-area:>redirect (
               "https://www.facebook.com/dialog/oauth" params). 
```

The second phase begins when the same application is called back by Facebook, as specified by the redir variable. The program can easily tell if it is the first run or the second by the setting of the variables state and http-state: the former is set by phase 1 while the latter will be passed by Facebook in the redirection of the login. So the initial part of the program could be the following one:

```cobol
          linkage section.
          01  comm-area object reference web-area.
          procedure division using comm-area.
          main.
 
            accept client-id from environment "app_id_by_fb"
            accept clsc  from environment "app_secret_by_fb".
 
            accept redir from environment "realdir_fb".
 
            if user-email = ""
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
                 string  "Forged state! (" http-state ")(" state ")"
                         into err-msg
                 comm-area:>displayError(403 err-msg)
              end-if
            end-if.
```

The parameters received by Facebook are described in the following variable:

```cobol
       01  http-response identified by "_".
          03 identified by "state".
            05 http-state  pic x any length.
          03 identified by "code".
            05 http-code  pic x any length.
```

The parameter code (stored in http-code) is the one you need in order to get the authorization to query the Facebook APIs, along with your client ID and client secret. The source code of the second phase could be the following:

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
               "https://graph.facebook.com/oauth/access_token" params)
              http:>getResponseCode (response-code)
              if response-code = 200
                 http:>getResponseJSON (fb-token)
              else
                 comm-area:>displayError(response-code "")
                 goback
              end-if
            catch exception
              comm-area:>displayError(500 exception-object:>toString)
              goback
            end-try.
```

The fb-token data item is defined as follows:

```cobol
01  fb-token  identified by "".
    03 access_token identified by "access_token".
       05 access_token-data pic x any length.
    03 token_type identified by "token_type".
       05 token_type-data pic x any length.
    03 expires_in identified by "expires_in".
       05 expires_in-data pic x any length.
```

If the request is successful, the program will receive in access-token-data a character string, called "access token", that allows you to call anything among the Facebook APIs. You still don't have any information about the person who is logged, so you need to get some basic information.

In the third phase you may choose to call the API "me": this API returns a JSON payload whose data is described in the following variable:

```cobol
01  user-info identified by "".
    03 identified by "name".
       05 user-name  pic x any length.
    03 identified by "email".
       05 user-email  pic x any length.
    03 identified by "id".
       05 user-id  pic x any length.
```

The source code could be the following:

```cobol
       phase-3-get-info.
           string "https://graph.facebook.com/me?"
                  "fields=name,email&"
                  "access_token=" access_token-data
                  into authorization
            set http = http-client:>new
            try 
              http:>doGet (authorization)
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

Note that this time there is a STRING command instead of passing the parameters in the usual way. This is because the access token must be passed as it is.

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
