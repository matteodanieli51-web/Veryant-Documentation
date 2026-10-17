### WINPRINT-SET-ATTRIBUTE

The WINPRINT-SET-ATTRIBUTE function sets attributes for the next PDF created by writing on a file assigned to "-P PDF" or by using the *Save As* function in the print preview dialog.

This function overrides the default settings set in the configuration (see [Print Configuration](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties)).

**Note:** The attributes are set only for the first PDF print performed after the call to this op-code. If you need to set the attributes also for other PDF print jobs, then you need to call the op-code before each one of them.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-ATTRIBUTE
                          attributeName
                          attributeValue
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SET-ATTRIBUTE | Constant |  |
| *attributeName* | PIC X(n) | Identifies the attribute to set. Valid values are listed below. |
| *attributeValue* | PIC X(n) | Value for the attribute |

#### List of supported attributes:

| Attribute | Description and possible values |
| --- | --- |
| AUTHOR | The author of the PDF document. It can be any text. |
| ENCRYPTION | Numeric bitwise value where each bit sets a specific feature.<br>You can use the following data items, defined in [isprint.def](../../../Copybooks/isprint.def), to activate the desired feature:<br>If this value is set to 0 then no encryption takes place.<br>Permissions are applied only if combined with a valid encryption, otherwise *all-permissions* is assumed.<br>Usage example:<br>The resulting PDF will be printable, but it will not be possible to add annotations or copy the text to clipboard. |
| EXPIRES | The custom property "Expires". It can be any text. |
| FONT_FOLDER | The folders where the fonts used in the PDF document are installed. You can specify multiple folders separated by pipe, e.g. "C:\myCustomFonts\|C:\WINDOWS\Fonts". The fonts loaded from these folders are only referenced in the PDF.<br>See [Font embedding in PDF files](./Font-embdedding-in-PDF-files) for more information. |
| FONT_FOLDER_EMBED | The folders where the fonts used in the PDF document are installed. You can specify multiple folders separated by pipe, e.g. "C:\myCustomFonts\|C:\WINDOWS\Fonts". The fonts loaded from these folders are physically embedded in the PDF.<br>See [Font embedding in PDF files](./Font-embdedding-in-PDF-files) for more information. |
| JPEG | The compression applied to images in the PDF document. It can be "0" if you want to keep images unchanged (default) or it can range from "1" to "100" to indicate the image quality, where "1" is the lowest quality and "100" is the highest quality.<br>When this attribute is set, all images are internally translated to jpeg; this will remove transparency, if any. |
| KEYWORDS | The keywords of the PDF document. It can be any text. |
| OWNER_PASSWORD | The password of the owner of the document. If this value is not set, then a random password is created. It works only along with ENCRYPTION. |
| PDFA | Creates a PDF/A document following a specific standard. Possible values are "PDF/A-1A" and "PDF/A-1B", case insensitive. |
| PRODUCER | The producer of the PDF document. It can be any text. |
| SUBJECT | The subject of the PDF document, it can be any text. |
| TITLE | The title of the PDF document, it can be any text. |
| USER_PASSWORD | The password of the user of the document. If this value is not set, then a default password is used as specified in the PDF specifics. It works only along with ENCRYPTION. |

#### Return Code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
