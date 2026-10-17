### setHeaderProperty

Sets HTTP header properties like cookies and charset.

#### General format

```cobol
void setHeaderProperty( key, value )
```

#### Syntax rules

1. *key* is an alphanumeric data item that specifies the name of the property to set
2. *value* is an alphanumeric data item that specifies the value for the property

#### General rules

1. This method should be called before a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).
2. *key* should be specified in lower case otherwise it’s not found. For example, in order to get the value of "Content-Type", look for "content-type".

#### Example

Set the Content-Language header to "en":

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
...
   procedure division.
...
   http:>setHeaderProperty("content-language", "en").
...
```
