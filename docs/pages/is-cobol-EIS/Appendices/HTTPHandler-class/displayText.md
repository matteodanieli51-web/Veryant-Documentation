### displayText

Returns raw text to the HTTP client.

#### Format 1

```cobol
void displayText( text )
```

#### Format 2

```cobol
void displayText( text, mimeType )
```

#### Syntax rules

1. *text* and *mimeType* are alphanumeric data items or literals.

#### General rules

1. In Format 1, the MIME type “text/plain” is automatically applied.
2. The text is returned when the program terminates (e.g. upon EXIT PROGRAM or GOBACK statements).

#### Example

Return a plain text string:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
 
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           LNK-AREA:>displayText("Some plain text").
```
