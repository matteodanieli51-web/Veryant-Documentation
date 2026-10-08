### acceptEx

Receives parameters from the HTTP by invoking [acceptFromJSON](./acceptFromJSON) or [acceptFromXML](./acceptFromXML) depending on the Content-type field. If no Content-type is available in the request header, then it invokes [acceptFromJSON](./acceptFromJSON) or [acceptFromXML](./acceptFromXML) depending on the [iscobol.rest.default_stream](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#rest_defualt_stream) configuration setting.

#### Format 1

```cobol
void acceptEx( params )
```

#### Format 2

```cobol
void acceptEx( params, hasDummyRoot )
```

#### Syntax rules

1. *params* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.
2. *hasDummyRoot* is an alphanumeric data item or literal hosting a boolean value (e.g. "0", "1", "true", "false", "yes", "no", "on" or "off"). If the boolean value is TRUE, then the top level item of Record-Definition is ignored and will not be retrieved from the JSON stream. This parameter can be NULL, in such case, FALSE is assumed.

#### General rules

1. *params* elements name matches the name of the parameter passed by the HTTP client.
2. the *hasDummyRoot* parameter is considered only when a JSON stream is intercepted.
3. In a JSON stream the following escapes are allowed: \\b, \\f, \\n, \\r, \\t, \\" and \\\\. Any other character preceeded by a backslash is considered invalid and makes the read fail unless you set [iscobol.jsonstream.allow_backslash_escaping_any_character (boolean)](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#jsonstream_allow_backslash_escaping_any_character) to true in the configuration.

#### Example

Consider the following HTTP requests:

Request with XML body

```cobol
Content-Type : text/xml
Content:
<?xml version="1.0" encoding="UTF-8"?><request><user>admin</user><md5pwd>2eec6fa53d1cce9321efac977e60d705</md5pwd></request>
```

Request with JSON body

```cobol
Content-Type : application/json
Content:
{"request":{"user":"admin","md5pwd":"2eec6fa53d1cce9321efac977e60d705"}}
```

They both can be intercepted with the following code:

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
           LNK-AREA:>acceptEx(request).
```
