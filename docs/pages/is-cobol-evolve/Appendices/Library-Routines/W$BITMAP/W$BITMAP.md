## W$BITMAP

The W$BITMAP library routine provides a number of functions to manage images. It recognizes and works with the following image formats: BMP, JPG, GIF, ICO and PNG.

With this library routine it is possible to load and unload (release memory) images, in addition to displaying them. Dealing with too many images can be inefficient. For this reason it is preferable to work with a file known as *imagelist*. This is a file containing a strip of images. The bitmap is then divided into several images with the size specified and the single image can be referenced by an index representing its position in the bitmap.

It’s also possible to generate images from text, e.g. transform a text string to a bitmap strip, and generate barcodes.

The CMYK (Cyan-Magenta-Yellow-Black four inks) color model is not supported. Bitmaps including this model  will fail to be loaded. 16-bit bitmaps are also not supported.

The RGB color 0xC0C0C0 is considered transparent color unless the configuration property [iscobol.gui.light_gray_is_transparent (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to false.

### Syntax:

```cobol
 CALL "W$BITMAP" USING opCode
                       parameters
                GIVING bitmapHandle
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| opCode | Function to be executed. Valid values, defined in [isgui.def](../../Copybooks/isgui.def), are: |  |
|  | [WBITMAP-BARCODE-BOX](./WBITMAP-BARCODE-BOX) | Generate a barcode. |
|  | [WBITMAP-DESTROY](./WBITMAP-DESTROY) | Destroy an image and releases the memory. |
|  | [WBITMAP-DISPLAY](./WBITMAP-DISPLAY) | Load an image into memory and then displays it on the screen. |
|  | [WBITMAP-LOAD](./WBITMAP-LOAD) | Load an image into memory. The image can then be shown on the GUI or used in print jobs. |
|  | [WBITMAP-LOAD-FROM-CLIENT](./WBITMAP-LOAD-FROM-CLIENT) | Load an image from the client machine into memory. The image can then be shown on the GUI or used in client-side print jobs. |
|  | [WBITMAP-LOAD-SYMBOL-FONT](./WBITMAP-LOAD-SYMBOL-FONT) | Generate an image from a string represented with a specific font and color. |
|  | [WBITMAP-LOAD-SYMBOL-FONT-EX](./WBITMAP-LOAD-SYMBOL-FONT-EX) | Generate an image from multiple strings represented with specific fonts and colors. |
| parameters | Parameters depend on the opcode. |  |

### Examples:

**Example -** Load a bitmap from disk and display it

```cobol
 working-storage section.
 copy "isgui.def".
 77  h-bitmap                pic s9(9) comp-4.

 screen section.
 01  Mask.
     03 Bmp1
        bitmap line 2 col 2
        lines 10 cells size 21 cells
        .
     03 Ef1
        entry-field read-only
        line 13 col 2 size 15 cells
        .

 procedure division.
 main.
    call "w$bitmap" using wbitmap-load, "images/img.png"
                              giving h-bitmap
    if h-bitmap < 0
       display message "W$BITMAP Error: " h-bitmap
    else
       modify Bmp1 bitmap-handle h-bitmap
    end-if.
    ...
```

**Example -** Generate a bitmap from the question mark symbol represented with Arial font to be used as icon for an about button

```cobol
 working-storage section.
 copy "isgui.def".
 copy "isfonts.def".
 77 arial-font   handle of font.
 77 bmp-question pic s9(9) comp-4.
 77 rgb-orange   pic s9(9) value -16737792.

 procedure division.

 MAIN.
*load the Arial font
    initialize wfont-data.
    move "Arial"    to wfont-name.
    move 10         to wfont-size.
    call "W$FONT"   using wfont-get-font
                          arial-font
                          wfont-data.
*get the question mark symbol
    call "W$BITMAP" using wbitmap-load-symbol-font
                          arial-font,
                          "?"
                          16 |I want a 16x16 icon
                          rgb-orange
                   giving bmp-question.
```

**Example -** Generate a QR code box that points to the Veryant website

```cobol
 working-storage section.
 copy "isgui.def".
 77 bb-handle pic s9(9) comp-4.
...
 procedure division.
...
       initialize wbitmap-bb-data.
       move 50 to wbitmap-bb-width, wbitmap-bb-height.
       set wbitmap-qrcode to true.
       call "w$bitmap" using wbitmap-barcode-box
                             "https://www.veryant.com"
                             wbitmap-bb-data
                      giving bb-handle.
...
```
