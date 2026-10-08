### displayBinaryFile

Returns the content of a binary file as a response to the HTTP client. The file is treated as a sequence of bytes, no unicode conversion is applied.

#### General format

```cobol
void displayBinaryFile( fileName, mimeType )
```

#### Syntax rules

1. *fileName* and *mimeType* are alphanumeric data items.

#### General rules

1. It’s good practice to provide a valid MIME type along with the file name.
2. The content is returned when the program terminates (e.g. upon EXIT PROGRAM or GOBACK statements).

Example

Trigger the download of the file /opt/website/files/setup.zip:

```cobol
       CONFIGURATION SECTION.
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
           move "/opt/website/files/setup.zip" to the-file.
           move "application/zip"              to mime-type.
           LNK-AREA:>displayBinaryFile(the-file, mime-type).
```
