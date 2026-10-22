#### Font embedding in PDF files

A PDF file might embed the TTF file of the fonts or not. If fonts are embedded, the PDF is heavier, but it will be viewable correctly everywhere, even on devices where the fonts are not installed. If the fonts are not embedded instead, then the PDF is lighter, but it will be viewable correctly only on devices where the fonts are installed, while generic fonts like Helvetica will be used where the fonts are not installed.

To instruct the Framework about the need of embedding fonts, you have to provide the folder (or folders) where TTF files are located. You can provide this information via the [iscobol.print.attribute.font_folder](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.print.attribute.font_folder_embed](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration properties or with the [FONT_FOLDER](./WINPRINT-SET-ATTRIBUTE) and [FONT_FOLDER_EMBED](./WINPRINT-SET-ATTRIBUTE) print attributes.

The Framework behaves as follows:

- if neither font_folder nor font_folder_embed are set, then the Framework looks for TTF files in C:\Windows\Fonts on Windows, /usr/share/fonts on Linux and /Library/Fonts on MacOS,
   - if TTF files are found, then they're embedded in the file and the identity-h encoding is used,
   - if TTF files are not found, then no font is referenced in the file, and the PDF readers will use generic fonts like Helvetica;
- if only font_folder_embed is set, then the Framework looks for TTF files in that folder (or folders),
   - if TTF files are found, then they're embedded in the file and the identity-h encoding is used,
   - if TTF files are not found, then no font is referenced in the file, and the PDF reader will use generic fonts like Helvetica;
- if only font_folder is set, then the Framework looks for TTF files in that folder (or folders),
   - if TTF files are found, then they're referenced in the file and the custom encoding is used
   - if TTF files are not found, then no font is referenced in the file, and the PDF reader will use generic fonts like Helvetica;
- if both font_folder and font_folder_embed are set, then the Framework looks for TTF files in those folders,
   - fonts found in the font_folder directories are only referenced in the PDF file,
   - fonts found in the font_folder_embed directories are embedded in the PDF file,
   - if the same directory is specified in both font_folder and font_folder_embed, the TTF files from that directory are embedded in the PDF file,
   - the PDF uses a custom encoding.

The following rule applies to fonts loaded via [W$CREATEFONT](../../W$CREATEFONT): if the font referenced in the print job is not installed in the system, only the specific TTF file loaded by [W$CREATEFONT](../../W$CREATEFONT) is included in the PDF. If the font is installed in the system, instead, then also alternative versions of the font may be included in the PDF in order to render bold and italic styles.
