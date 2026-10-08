### processHtmlFile

Process an HTML file, replacing items delimited by %% characters with the corresponding COBOL data item.

#### General format

```cobol
boolean processHtmlFile (htmlFile)
```

#### Syntax rules

1. *htmlFile* is a level 01 data item for which the [IS IDENTIFIED clause](../../../is-cobol-evolve/Language-Reference/Data-Division/Data-Description/IS-IDENTIFIED-clause) has been used.

#### General rules

1. *htmlFile’s* 01 level is identified by the name of the HTML file to be processed while the subsequent variable identifiers are searched for in the file inside the delimiters '%%' (or prefixed by colon, depending on the [iscobol.http.value_prefix_colon (boolean)](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#http_value_prefix_colon) setting). The file is loaded in the directory (or directories) specified by the configuration property [iscobol.http.html_template_prefix \*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#http_html_template_prefix).
2. If the file name doesn't end with the extension ".html" nor ".htm" the method appends ".html" to the name. If the file with this name doesn't exist then it appends the extension ".htm". If still the file doesn't exist then the method looks for a file with the exact name.
3. The method returns true if the operation is successful and false otherwise: in the latter case an error message will be included in the HTML output.

#### Example

Consider having a file named "mypage.html" with the following content:

```cobol
<html>
  <p>This page has been shown by %%cobolname%%</p>
</html>
```

The following COBOL program will display the above HTML with "isCOBOL" instead of "cobolname".

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
          CLASS WEB-AREA AS "com.iscobol.rts.HTTPHandler"
          .
       WORKING-STORAGE SECTION.
       01  html identified by "mypage".
           03 identified by "cobolname".
              05 cob-name pic x any length.
 
       LINKAGE SECTION.
       01 LNK-AREA OBJECT REFERENCE WEB-AREA.
 
       PROCEDURE DIVISION USING LNK-AREA.
       MAIN.
           move "isCOBOL" to cob-name.
           LNK-AREA:>processHtmlFile(html).
```
