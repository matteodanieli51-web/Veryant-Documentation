### doPostEx

Executes an HTTP request using the POST method specifying the data stream and having the MIME type set automatically.

#### Format 1

```cobol
void doPostEx( strUrl, content )
```

#### Format 2

```cobol
void doPostEx( strUrl, type, content )
```

#### Format 3

```cobol
void doPostEx( strUrl, type, content, hasDummyRoot )
```

#### Syntax rules

1. *strUrl* is the URL to invoke.
2. *content* contains the data stream.
3. *type* is the MIME type (i.e. "text/xml")
4. *hasDummyRoot* is an alphanumeric data item or literal hosting a boolean value (e.g. "0", "1", "true", "false", "yes", "no", "on" or "off"). If the boolean value is TRUE, then the top level item of Record-Definition is discarded and will not appear in the JSON stream . This parameter can be NULL, in such case, FALSE is assumed.

#### General rules

1. In Format 1, *type* is set to "application/json" or "application/xml" depending on the Content-type request header field. If no Content-type field is available in the request header, then the type is controlled by the [iscobol.rest.default_stream](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#rest_default_stream) configuration setting.
2. If *content* is an appropriately structured variable with external names and the type is set to "application/json", the method makes a request using the JSON format.
3. If *content* is an appropriately structured variable with external names but type is not set to "application/json", the method makes a request using the XML format.

#### Example

Issue a POST request with parameters:

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
...
   procedure division.
...
   move "admin" to user.
   move "2eec6fa53d1cce9321efac977e60d705" to pwd.
   http:>doPostEx("http://example.com/login", request).
...
```
