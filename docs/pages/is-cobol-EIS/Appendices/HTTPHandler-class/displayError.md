### displayError

Returns a numeric error code to the HTTP client.

#### General format

```cobol
void displayError( errNum, errText )
```

#### Syntax rules

1. *errNum* is a numeric data item or literal
2. *errText* is an alphanumeric data item or literal.

#### General rules

1. You should provide a valid HTTP status code as described in the [latest HTTP/1.1 RFC](http://www.rfc-editor.org/rfc/rfc2616.txt) at page 39.
2. The error is returned when the program terminates (e.g. upon EXIT PROGRAM or GOBACK statements).

#### Example

Return an authentication failed error:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
 
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           LNK-AREA:>displayError(403, "Invalid user name or password").
```
