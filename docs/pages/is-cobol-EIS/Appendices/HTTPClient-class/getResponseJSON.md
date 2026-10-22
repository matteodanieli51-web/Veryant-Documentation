### getResponseJSON

Returns the HTTP response parsed with JSON rules.

#### Format 1

```cobol
void getResponseJSON( json )
```

#### Format 2

```cobol
void getResponseJSON( json, encoding )
```

#### Format 3

```cobol
void getResponseJSON( json, encoding, hasDummyRoot )
```

#### Syntax rules

1. *json* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.
2. *encoding* is a string literal or data item that specifies the character set to be used while parsing the JSON stream. All the canonical names listed in the following Java documentation can be used as value for this property: [http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html)
3. *hasDummyRoot* is an alphanumeric data item or literal hosting a boolean value (e.g. "0", "1", "true", "false", "yes", "no", "on" or "off"). If the boolean value is TRUE, then the top level item of Record-Definition is ignored and will not be retrieved from the JSON stream. This parameter can be NULL, in such case, FALSE is assumed.

#### General rules

1. This method should be called after a request performed via one of the following methods: [doGet](./doGet), [doPost](./doPost), [doPostEx](./doPostEx) or [doPostMultipart](./doPostMultipart).
2. The following escapes are allowed: \\b, \\f, \\n, \\r, \\t, \\" and \\\\. Any other character preceeded by a backslash is considered invalid and makes the read fail unless you set [iscobol.jsonstream.allow_backslash_escaping_any_character (boolean)](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#jsonstream_allow_backslash_escaping_any_character) to true in the configuration.

#### Example

Consider the following response:

```cobol
Content-Type : application/json
Content:
{"response":{"status":"OK"}}
```

You can read it with the following code:

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
   http:>getResponseJSON(response).
...
```
