### displayTextFile

Returns the content of a binary file as a response to the HTTP client. The file is processed using the current encoding.

#### General format

```cobol
void displayTextFile( fileName, mimeType )
```

#### Syntax rules

1. *fileName* and *mimeType* are alphanumeric data items.

#### General rules

1. It’s good practice to provide a valid MIME type along with the file name.
2. The content is returned when the program terminates (e.g. upon EXIT PROGRAM or GOBACK statements).

#### Example

Return the content of the file /opt/website/files/TOS.txt:

```cobol       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
           .
 
       ...
       WORKING-STORAGE SECTION.
       01 the-file  pic x any length.
       77 mime-type pic x any length.
       ...
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           move "/opt/website/files/TOS.txt" to the-file.
           move "text/plain"                 to mime-type.
           LNK-AREA:>displayTextFile(the-file, mime-type).
```
