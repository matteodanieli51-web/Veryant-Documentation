### getResponsePlain

Returns the HTTP response as plain text.

#### General format

```cobol
void getResponsePlain( res )
```

#### Syntax rules

1. *res* is an alphanumeric data item.

#### General rules

1. This method should be called after a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).

#### Example

Retrieve the response as plain text and print it for debug purposes:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   77 response-plain pic x any length.
...
   procedure division.
...
   http:>getResponsePlain(response-plain).
   display response-plain upon sysout.
...
```
