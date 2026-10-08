### getResponseMessage

Returns the text message, if any, from the HTTP response.

#### General format

```cobol
void getResponseMessage( msg )
```

#### Syntax rules

1. *msg* is an alphanumeric data item.

#### General rules

1. This method should be called after a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).
2. Call this method to check if the request was successful. The response message value for success is "HTTP/1.0 200 OK".

#### Example

Retrieve the response message:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   77 msg pic x any length.
...
   procedure division.
...
   http:>getResponseMessage(msg).
...
```
