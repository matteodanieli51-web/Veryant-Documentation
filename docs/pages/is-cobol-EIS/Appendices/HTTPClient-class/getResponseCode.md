### getResponseCode

Returns the numeric HTTP status code from the HTTP response.

#### General format

```cobol
void getResponseCode( rc )
```

#### Syntax rules

1. *rc* is a numeric data item.

#### General rules

1. This method should be called after a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).
2. Call this method to check if the method call was successful. The response code value for success is 200.

#### Example

Check if the last POST was successful:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   77 rc pic 9(3).
...
   procedure division.
...
   http:>getResponseCode(rc).
   if rc = 200
*> the request was successful
...
```
