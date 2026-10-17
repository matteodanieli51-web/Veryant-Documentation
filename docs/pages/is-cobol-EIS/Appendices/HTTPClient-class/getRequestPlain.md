### getRequestPlain

Returns the HTTP request as plain text.

#### General format

```cobol
void getRequestPlain( req )
```

#### Syntax rules

1. *req* is an alphanumeric data item.

#### General rules

1. This method should be called after a request performed via [doPostEx](./doPostEx).

#### Example

Print the request of the last POST on the console for debug purposes:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   01 request identified by "request".
      03 identified by "user".
         05 user pic x any length.
      03 identified by "pwd".
         05 pwd pic x any length.
   77 req-dump pic x any length.
...
   procedure division.
...
   move "admin" to user.
   move "2eec6fa53d1cce9321efac977e60d705" to pwd.
   http:>doPostEx("http://example.com/login", request).
   http:>getRequestPlain(req-dump).
   display req-dump upon sysout.
...
```
