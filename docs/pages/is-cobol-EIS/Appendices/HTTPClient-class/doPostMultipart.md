#### doPostMultipart

Executes an HTTP request using the POST method sending the parameters using the multipart/form-data protocol.

#### General format

```cobol
void doPostMultipart( strUrl, parameters )
```

#### Syntax rules

1. *strUrl* is the URL to invoke.
2. *parameters* is an instance of [HTTPData.Params class (com.iscobol.rts.HTTPData.Params)](../HTTPData-Params-class/HTTPData-Params-class).

#### Example

Send filename and file to http://example.com/upload:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
       class http-params as "com.iscobol.rts.HTTPData.Params"
...
   working-storage section.
   77 http object reference http-client.
   77 params object reference http-params.
...
   procedure division.
   main.
   set params to http-params:>new().
   params:>add("name", "data.zip").
   params:>addFile("file", "C:/Downloads/data.zip")
   set http to http-client:>new().
   http:>doPostMultipart("http://example.com/upload", params).
...
```
