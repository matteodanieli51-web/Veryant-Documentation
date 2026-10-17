### WINPRINT-SET-HEADER-FOOTER

The WINPRINT-SET-HEADER-FOOTER function specifies the information to be printed on every page header and footer.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-HEADER-FOOTER
                          headerContent
                          footerContent
                         [font]
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SET-HEADER-FOOTER | Constant |  |
| headerContent | PIC X(n) | Specifies the text to be printed on the page header.<br>The following escape characters can be used inside this text:<br>&p = page number;<br>&P = total number of pages;<br>&b = the following information will be printed on the right side of the sheet;<br>&d = current date in short format according to the locale, e.g. 4/16/15;<br>&D = current date in long format according to the locale, e.g. April 16, 2015;<br>&u = name of the report;<br>&& = the character '&' |
| footerContent | PIC X(n) | Specifies the text to be printed on the page footer.<br>The following escape characters can be used inside this text:<br>&p = page number;<br>&P = total number of pages;<br>&b = the following information will be printed on the right side of the sheet;<br>&d = current date in short format according to the locale, e.g. 4/16/15;<br>&D = current date in long format according to the locale, e.g. April 16, 2015;<br>&u = name of the report;<br>&w = not handled;<br>&& = the character '&' |
| font | USAGE HANDLE OF FONT | Optional parameter.<br>Specifies the font handle to be used for the header and footer text. It should be previously loaded with the [WFONT-GET-FONT](../W$FONT/WFONT-GET-FONT) or the [WFONT-GET-CLOSEST-FONT](../W$FONT/WFONT-GET-CLOSEST-FONT) function.<br>Do not destroy this handle before closing the print file. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |

#### Example:

The following code will print page count information on the bottom right of each page.

```cobol
 move "&bPage &p of &P" to footer-data.
 call "win$printer"  using winprint-set-header-footer
                           header-data, footer-data.
```
