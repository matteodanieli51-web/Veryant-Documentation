## Transparent-Color

isCOBOL automatically recognizes transparent colors or alpha channel in images that store such information (.gif, .png). For this reason this property should be used when it is necessary to have transparency with images stored in a format that does not contain transparency information. In this case, the RGB color set here is interpreted as "transparent" and all the pixels of the image containing this color are not displayed. If this property is used with images stored in gif or png format, the transparency activated by the property is added to the transparency already present in the image file.

The RGB color value is computed according to the following formula:

```cobol
(RED * 65536) + (GREEN * 256) + BLUE
```

**Example -** Define a push-button in screen section that uses an image having yellow brackground (not transparent background) and make that background to be transparent

```cobol
working-storage section.
...
77 img-bmp         pic s9(9) comp-4.
77 yellow-color    pic 9(9).
...
screen section.
...
  03 puth-button
     line 2.0, col 2.0
     lines 128.0, size 128.0
     transparent-color yellow-color
     bitmap
     bitmap-handle img-bmp
     bitmap-number 1
     .
...
procedure division.
...
     |the yellow RGB is #FFFF00 (255, 255, 0)
     compute yellow-color = (255 * 65536) + (255 * 256) + 0.
     call "w$bitmap" using wbitmap-load, "img.bmp"
                     giving img-bmp.
```
