### SET-MOUSE-SHAPE

The SET-MOUSE-SHAPE modifies the shape of the mouse pointer.

#### Syntax:

```cobol
 CALL "W$MOUSE" USING SET-MOUSE-SHAPE
                      mouseShape
                     [bitmapHandle]
                     [column]
                     [line]
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| SET-MOUSE-SHAPE | Constant |  |  |
| *mouseShape* | any numeric data item or numeric literal | Specifies the new shape of the mouse pointer. Valid values, defined in [isgui.def](../../Copybooks/isgui.def), are: |  |
|  |  | ARROW-POINTER | It represents an arrow |
|  |  | BAR-POINTER | It represents a vertical bar |
|  |  | CROSS-POINTER | It represents a cross |
|  |  | CUSTOM-POINTER | It shows the custom image identified by *bitmapHandle.* The image is automatically scaled to fit the standard cursors dimensions in the current operating system. |
|  |  | HELP-POINTER | It represents a hand shape |
|  |  | WAIT-POINTER | It represents an work in progress animation |
| bitmapHandle | PIC S9(9) COMP-4 | Specifies the handle of a bitmap (see [W$BITMAP](../W$BITMAP/W$BITMAP)). This parameter should be passed only along with CUSTOM-POINTER. |  |
| column | PIC 9(n) | Specifies the X coordinate of the cursor hotspot, starting from the top-left corner. This parameter should be passed only along with CUSTOM-POINTER. If omitted, 0 is assumed. |  |
| line | PIC 9(n) | Specifies the Y coordinate of the cursor hotspot, starting from the top-left corner. This parameter should be passed only along with CUSTOM-POINTER. If omitted, 0 is assumed. |  |
