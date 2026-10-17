## Twitter Authentication

If you need to implement a program in order to access some Twitter APIs using the application-only authentication, the following will explain how to do it. Also the example shows how to read some Tweets once connected. You can find Twitter's documentation at the address: [https://developer.twitter.com/en/docs/basics/authentication/overview/application-only](https://developer.twitter.com/en/docs/basics/authentication/overview/application-only).

In order to use this kind of authentication you need to have a configured application on Twitter to get a "Consumer Key" (or "API Key") and a "Consumer secret" (or "API Secret").

These two strings are basically equivalent to a login name and a password to be used in an HTTP Basic Authentication.

Your COBOL program will define at least 2 classes: the class for doing an HTTP connection and the class for passing parameters in the HTTP requests, e.g.:

```cobol
          CONFIGURATION SECTION.
          REPOSITORY. 
             class http-client as "com.iscobol.rts.HTTPClient"
             class http-params as "com.iscobol.rts.HTTPData.Params"
             .
 
          WORKING-STORAGE SECTION.
          77  http object reference http-client.
          77  parms object reference http-params.
```

So the first HTTP request will be a typical POST request using the Basic authentication and supplying the parameter "grant_type" whose value will be "client_credentials".

```cobol
           set parms = http-params:>new
                    :>add ("grant_type", "client_credentials")
 
           set http = http-client:>new.
           http:>setAuth ("<Consumer-key-by-Twitter>"
                          "<Consumer-secret-by-Twitter>").
           try
              http:>doPost (
               "https://api.twitter.com/oauth2/token" parms)
              http:>getResponseCode (response-code)
```

The response to this request will be a JSON-encoded payload: if the response code is different from 200 (OK), the JSON payload will be something like the following:

```cobol
          {"errors":[
               {"label":"authenticity_token_error","code":99,"message":
                    "Unable to verify your        credentials"}]}
```

while if the response will be 200 the JSON payload will be something like this:

```cobol
      {"token_type":"bearer","access_token":
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2FAAAAAAAAAAAAAAAAAAAA3DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAA"}
```

In order to get the data from this payload you can define the following structure in isCOBOL:

```cobol
       01  twitter-auth identified by "".
           03 identified by "token_type".
              05 token-type  pic x any length.
           03 identified by "access_token".
              05 access-token  pic x any length.
```

So you can get the two strings with something like:

```cobol
             if response-code = 200
                http:>getResponseJSON (twitter-auth)
```

According to the official documentation, you must verify that the token type is "bearer" and then you can use the access token to call the APIs you need, allowed by this authentication method.

For example, you can implement the "user_timeline" API: in order to do this, we need to use the access token as "bearer" instead of the login/password used previously. The new method *setAuth* (*ICobolVar a*) of HTTPClient do exactly this. You can also pass all the supported parameters. See [https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline](https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline) for the full documentation. E.g.:

```cobol
 if token-type = "bearer"
    http:>setAuth (access-token)
    set parms = http-params:>new
                           :>add ("count", "20")
                           :>add ("screen_name", "VeryantCOBOL");;
    http:>doGet ("https://api.twitter.com/1.1/statuses/user_timeline.json" parms)
```

In this case you perform the GET request according to the official documentation. This request will return two different JSON payloads depending on the success of the call, but, differently from what happened in the previous API, it seems that the response code is 200 in any case. This means that you cannot know which isCOBOL structure you must use in order to get the data from the payload.

The two formats returned by the above API are very different: when there is an error the format is very similar to the one already seen above when the authorization fails. If the operation return successfully, however, the payload will be an array of objects, whose length depends on the "count" parameter, each one including about 100 fields (see [https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline](https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-user_timeline) for a complete description).

In our example we are interested only in few fields, so we have defined a structure like the following:

```cobol
       01  twitter identified by space.
           03 array identified by space occurs dynamic 
                                            capacity cnt.
              05 identified by "text".
                 07 twittext pic x any length.
              05 identified by "user".
                 07 identified by "screen_name".
                    09 screen-name pic x any length.
```

The first 03 item is the data we need for our application.

This is the full program:

```cobol
       PROGRAM-ID. tweet.
 
       CONFIGURATION SECTION.
       REPOSITORY. 
           class http-client as "com.iscobol.rts.HTTPClient"
           class http-params as "com.iscobol.rts.HTTPData.Params"
           .
 
       WORKING-STORAGE SECTION.
       77  http object reference http-client.
       77  parms object reference http-params.
       77  i int.
       77  some-text pic x any length.
       77  response-code pic 999.
 
       77  api-key     pic x any length.
       77  api-secret  pic x any length.
 
       01  twitter-auth identified by "".
           03 identified by "token_type".
              05 token-type  pic x any length.
           03 identified by "access_token".
              05 access-token  pic x any length.
 
       01  twitter identified by space.
           03 array identified by space occurs dynamic capacity cnt.
              05 identified by "text".
                 07 twittext pic x any length.
              05 identified by "user".
                 07 identified by "screen_name".
                    09 screen-name pic x any length.
 
       PROCEDURE DIVISION.
       MAIN.
 
           accept api-key from environment "api_key"
           accept api-secret from environment "api_secret"
 
           set parms = http-params:>new
                    :>add ("grant_type", "client_credentials")
 
           set http = http-client:>new.
           http:>setAuth (api-key api-secret)
           try
              http:>doPost (
               "https://api.twitter.com/oauth2/token" parms)
              http:>getResponseCode (response-code)
              if response-code = 200
                 http:>getResponseJSON (twitter-auth)
                 if token-type = "bearer"
                    http:>setAuth (access-token)
                    set parms = http-params:>new
                       :>add ("count", "20")
                       :>add ("screen_name", "VeryantCOBOL");;
                    http:>doGet ("https://api.twitter.com/1.1"-
                                 "/statuses/user_timeline.json" parms)
                    if response-code = 200
                       display "Connection OK Response code=" 
                                         response-code;;
                       http:>getResponseJSON (twitter)
                       perform show-results
                    else
                       display "Response code=" response-code;;
                       http:>getResponsePlain (some-text)
                       display some-text
                       goback
                    end-if
                 else
                    display "wrong token-type=" token-type
                 end-if
              else
                 display "Connection problem. Response code=" 
                                               response-code;;
                 http:>getResponsePlain (some-text)
                 display some-text
                 goback
              end-if
           catch exception
              display exception-object:>toString
              goback
           end-try.
           goback.
 
       show-results.
           display "Total number of Tweets [" cnt "]"
           perform varying i from 1 by 1 until i > cnt
              display "Tweet " i
              display "@" screen_name(i) ": " twittext (i)
           end-perform.
```

where "api_key" and "api_secret" are the "Consumer Key" (or "API Key") and a "Consumer secret" (or "API Secret") are retrieved from the configuration file.
