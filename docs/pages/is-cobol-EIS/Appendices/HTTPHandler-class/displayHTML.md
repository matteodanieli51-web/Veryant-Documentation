### displayHTML

Returns an HTML stream to the HTTP client.

#### General format

```cobol
void displayHTML( html, docType )
```

#### Syntax rules

1. *html* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.
2. *docType* is an alphanumeric data item or literal.

#### General rules

1. *html* data item must be identified by html tags, in particular the item at level 01 must be IDENTIFIED BY “HTML”.
2. *docType* specifies the <!DOCTYPE\> declaration as described [here](http://www.w3schools.com/tags/tag_doctype.asp). It might be null.
3. The MIME type “text/html” is automatically applied.
4. The stream is returned when the program terminates (e.g. upon EXIT PROGRAM or GOBACK statements).

#### Example

The following COBOL program produces an HTML output with different text styles:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
          CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
          .
       WORKING-STORAGE SECTION.
       01  html identified by "html".
           03 identified by "p".
              05 identified by "b".
                 07 bold-text pic x any length.
           03 identified by "p".
              05 identified by "i".
                 07 italic-text pic x any length.
           03 identified by "p".
              05 plain-text pic x any length.
 
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           move "bold" to bold-text.
           move "italic" to italic-text.
           move "plain" to plain-text.
           LNK-AREA:>displayHTML(html, null).
           goback.
```
