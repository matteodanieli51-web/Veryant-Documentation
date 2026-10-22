## Title-Position

This property assigns the position of the title of the Radio-Button control when the [Bitmap](../Styles/Bitmap) style is set; graphics and text are combined. Valid values are:

|  |  |
| --- | --- |
| 1 | On the left of the image |
| 2 | On the right of the image |
| 3 | Above the image |
| 4 | Below the image |

**Example** - Define a radio button with a bitmap and title, defining the title position to the right

```cobol
screen section.
...
  03 screen-1-rb-1 Radio-Button
     line 20.9
     column 5.4
     size 112
     lines 45
     id 4
     title "Option 1"
     bitmap-handle icon-png1
     square
     bitmap-number 1
     title-position 2
     .
```
