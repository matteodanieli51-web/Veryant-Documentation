### WINPRINT-PRINT-BITMAP

The WINPRINT-PRINT-BITMAP function prints an image.

If you need to print text over the bitmap, do it after this call. If you do it before, the bitmap covers the text.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-PRINT-BITMAP
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-PRINT-BITMAP | Constant |  |  |
| WINPRINT-DATA<br>Group Item |  | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | 01  winprint-data.    03 wprtdata-print-bitmap.       05 wprtdata-bitmap           pic x(4) comp-n.       05 wprtdata-bitmap-row       pic 9(7)v99 comp-5.       05 wprtdata-bitmap-col       pic 9(7)v99 comp-5.       05 wprtdata-bitmap-height    pic 9(7)v99 comp-5.       05 wprtdata-bitmap-width     pic 9(7)v99 comp-5.       05 wprtdata-bitmap-flags     unsigned-short. |  |
|  |  | *wprtdata-bitmap*<br>Specifies the handle of the bitmap to be printed.<br>Do not destroy this handle before closing the print file. |  |
|  |  | *wprtdata-bitmap-row*<br>Specifies the vertical coordinate of top-left corner of the bitmap, in cells. The position refers to the physical left margin. |  |
|  |  | *wprtdata-bitmap-col*<br>Specifies the horizontal coordinate of top-left corner of the bitmap, in cells. The position refers to the physical left margin. |  |
|  |  | *wprtdata-bitmap-height*<br>Specifies the height of the printed image. |  |
|  |  | *wprtdata-bitmap-width*<br>Specifies the width of the printed image. |  |
|  |  | *wprtdata-bitmap-flags*<br>Specifies the units of measure for location (wprtdata-bitmap-row and wprtdata-bitmap-col) and dimensions (wprtdata-bitmap-width and wprtdata-bitmap-height) of the bitmap. The value is the sum of location unit and scale unit. |  |
|  |  | WPRTBITMAP-SCALE-CELLS | Scale values are expressed in cells. |
|  |  | WPRTBITMAP-SCALE-INCHES | Scale values are expressed in inches. |
|  |  | WPRTBITMAP-SCALE-CENTIMETERS | Scale values are expressed in centimeters. |
|  |  | WPRTBITMAP-SCALE-PIXELS | Scale values are expressed in pixels. |
|  |  | WPRTBITMAP-UNITS-INCHES | Location values are expressed in inches. |
|  |  | WPRTBITMAP-UNITS-CENTIMETERS | Location values are expressed in centimeters. |
|  |  | WPRTBITMAP-UNITS-PIXELS | Location values are expressed in pixels. |
|  |  | WPRTBITMAP-PRINTER-BITMAP | Keep the original bitmap dimensions, don’t scale the bitmap. |

#### Bitmap scaling

To scale a bitmap to a particular size, you must set WPRTDATA-BITMAP-FLAGS to the desired unit of measure and set the desired dimensions of the bitmap in WPRTDATA-BITMAP-WIDTH and WPRTDATA-BITMAP-HEIGHT. You can either set both dimensions or leave one dimension at zero. When one of the dimensions is set to zero, the relative proportions of the image are unchanged after the scaling of the other dimension is complete. To inform the runtime that the bitmap was designed directly for printing on the current printer and should not be scaled, set WPRTDATA-BITMAP-FLAGS to WPRTBITMAP-PRINTER-BITMAP. Setting both WPRTDATA-BITMAP-WIDTH and WPRTDATA-BITMAP-HEIGHT to zero without setting WPRTDATA-BITMAP-FLAGS to WPRTBITMAP-PRINTER-BITMAP may lead to unexpected results.

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
