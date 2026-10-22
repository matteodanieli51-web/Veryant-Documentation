### getMethod

Returns the HTTP request method used for client and server calls.

#### General format

```cobol
String getMethod( )
```

#### General rules

1. The returned value is one of the following strings: CONNECT, DELETE, GET, HEAD, OPTIONS, POST, PUT.

#### Example

Get the current method:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   77 method pic x any length.
...
   procedure division.
...
   set method to http:>getMethod().
...
```
