### acceptFromJSON

Receives parameters from the HTTP assuming that they’re passed as a JSON stream.

#### Format 1

```cobol
void acceptFromJSON( params )
```

#### Format 2

```cobol
void acceptFromJSON( params, hasDummyRoot )
```

#### Syntax rules

1. *params* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.
2. *hasDummyRoot* is an alphanumeric data item or literal hosting a boolean value (e.g. "0", "1", "true", "false", "yes", "no", "on" or "off"). If the boolean value is TRUE, then the top level item of Record-Definition is ignored and will not be retrieved from the JSON stream. This parameter can be NULL, in such case, FALSE is assumed.

#### General rules

1. *params* elements name matches the name of the parameter passed by the HTTP client.
2. The following escapes are allowed: \\b, \\f, \\n, \\r, \\t, \\" and \\\\. Any other character preceeded by a backslash is considered invalid and makes the read fail unless you set [iscobol.jsonstream.allow_backslash_escaping_any_character (boolean)](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#jsonstream_allow_backslash_escaping_any_character) to true in the configuration.

#### Example

Consider the following HTTP request:

```cobol
Content-Type : application/json
Content:
{"request":{"user":"admin","md5pwd":"2eec6fa53d1cce9321efac977e60d705"}}
```

It can be intercepted with the following code:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
 
       ...
       WORKING-STORAGE SECTION.
       01 request identified by "request".
          03 identified by "user".
             05 user pic x any length.
          03 identified by "md5pwd".
             05 pwd pic x any length.
       ...
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           LNK-AREA:>acceptFromJSON(request).
```
