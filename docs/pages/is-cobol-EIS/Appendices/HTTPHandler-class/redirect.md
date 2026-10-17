### redirect

Issues a redirect.

#### General format

```cobol
void redirect( newPage )
```

#### Syntax rules

1. *newPage* is an alphanumeric data item or literal.

#### General rules

1. if *newPage* starts with a protocol (e.g. "http:"), then it is used as is, otherwise it is considered a relative URL and it is appended to the webapp base URL.

#### Example

Redirect to https://www.veryant.com:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA     AS "com.iscobol.rts.HTTPHandler"
       ...
       LINKAGE SECTION.
       77 LNK-AREA OBJECT REFERENCE WEB-AREA.
       ...
       PROCEDURE DIVISION USING LNK-AREA.
       ...
           LNK-AREA:>redirect("https://www.veryant.com").
       ...
```
