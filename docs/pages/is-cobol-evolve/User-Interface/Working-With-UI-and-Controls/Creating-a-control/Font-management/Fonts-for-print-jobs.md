### Fonts for print jobs

You can load fonts for print jobs from the underlying host sytem and from disc files.

To load a font from the underlyting host system, use the [WFONT-GET-FONT](../../../../Appendices/Library-Routines/W$FONT/WFONT-GET-FONT) function.

To load a font from a disc file, use the [W$CREATEFONT](../../../../Appendices/Library-Routines/W$CREATEFONT) routine and then the [WFONT-GET-FONT](../../../../Appendices/Library-Routines/W$FONT/WFONT-GET-FONT) function.

In order to specify that the font will be used in a print job, set WFDEVICE-WIN-PRINTER to true in the WFONT-DATA structure before calling the [WFONT-GET-FONT](../../../../Appendices/Library-Routines/W$FONT/WFONT-GET-FONT) function.

If the load is successful, the [WFONT-GET-FONT](../../../../Appendices/Library-Routines/W$FONT/WFONT-GET-FONT) returns a handle to the font that you can use with the [WINPRINT-SET-FONT](../../../../Appendices/Library-Routines/WIN$PRINTER/WINPRINT-SET-FONT) function.
