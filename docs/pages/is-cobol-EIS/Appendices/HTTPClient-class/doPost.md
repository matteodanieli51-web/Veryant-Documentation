### doPost

Executes an HTTP request using the POST method.

#### Format 1

```cobol
void doPost( strUrl )
```

#### Format 2

```cobol
void doPost( strUrl, params )
```

#### Syntax rules

1. *strUrl* is the URL to invoke.
2. *params* should contain an *HTTPData.Params* object where HTTP parameters are defined. See [HTTPData.Params class (com.iscobol.rts.HTTPData.Params)](../HTTPData-Params-class/HTTPData-Params-class) for more information.

#### General rules

1. In Format 1, if you need to pass HTTP parameters, you can use the [setParameter](./setParameter) method.

#### Example

Issue a POST request tohttp://example.com:

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
   http:>doPost("http://example.com/").
...
```
