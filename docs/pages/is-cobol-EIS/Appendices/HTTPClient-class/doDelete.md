### doDelete

Executes an HTTP request using DELETE method.

#### Format 1

```cobol
void doDelete( strUrl )
```

#### Format 2

```cobol
void doDelete( strUrl, params )
```

#### Syntax rules

1. *strUrl* is the URL to invoke.
2. *params* should contain an *HTTPData.Params* object where HTTP parameters are defined. See [HTTPData.Params class (com.iscobol.rts.HTTPData.Params)](../HTTPData-Params-class/HTTPData-Params-class) for more information.

#### General rules

1. In Format 1, if you need to pass HTTP parameters, you can use the *setParameters*() method.

#### Example

Issue a DELETE request:

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
   http:>doDelete("http://example.com/trash/foo").
...
```
