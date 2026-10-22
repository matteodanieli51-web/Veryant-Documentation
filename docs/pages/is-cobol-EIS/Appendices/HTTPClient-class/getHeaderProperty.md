### getHeaderProperty

Returns HTTP header properties like cookies and charset.

#### General format

```cobol
void getHeaderProperty( key, value )
```

#### Syntax rules

1. *key* is an alphanumeric data item that specifies the name of the property to read
2. *value* is an alphanumeric data item that receives the value of the property

#### General rules

1. This method should be called after a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).
2. *key* should be specified in lower case otherwise it’s not found. For example, in order to get the value of "Content-Type", look for "content-type".

#### Example

Get the current content type:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   77 ctype pic x any length.
...
   procedure division.
...
   http:>getHeaderProperty("content-type", ctype).
...
```
