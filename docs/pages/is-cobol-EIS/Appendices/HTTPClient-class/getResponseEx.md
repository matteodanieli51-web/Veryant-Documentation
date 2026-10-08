### getResponseEx

Returns the HTTP response parsed with JSON or XML rules depending on the Content-type response header field. If no Content-type is available, then it uses the format specified by the [iscobol.rest.default_stream](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#rest_default_stream) configuration setting.

#### General format

```cobol
void getResponseEx( data )
```

#### Syntax rules

1. *data* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.
2. In a JSON response the following escapes are allowed: \\b, \\f, \\n, \\r, \\t, \\" and \\\\. Any other character preceeded by a backslash is considered invalid and makes the read fail unless you set [iscobol.jsonstream.allow_backslash_escaping_any_character (boolean)](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#jsonstream_allow_backslash_escaping_any_character) to true in the configuration.

#### General rules

1. This method should be called after a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).

#### Example

Consider the following responses:

```cobol
Content-Type : application/json
Content:
{"response":{"status":"OK"}}
```

```cobol
Content-Type : text/xml
Content:
<response><status>OK</status></response>
```

You can read both responses with the following code:

```cobol
...
   configuration section.
   repository.
       class http-client as "com.iscobol.rts.HTTPClient"
...
   working-storage section.
   77 http object reference http-client.
   01 response identified by "response".
      03 identified by "status".
         05 status-data pic x any length.
...
   procedure division.
...
   http:>getResponseEx(response).
...
```
