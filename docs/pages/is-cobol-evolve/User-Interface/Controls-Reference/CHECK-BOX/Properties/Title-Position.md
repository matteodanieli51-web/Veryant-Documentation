## Title-Position

This property assigns the position of the title of the Check-Box control when the [Bitmap](../Styles/Bitmap) style is set; graphics and text are combined. Valid values are:

|  |  |
| --- | --- |
| 1 | On the left of the image |
| 2 | On the right of the image |
| 3 | Above the image |
| 4 | Below the image |

**Example -** Define a check-box in screen section with a title on the right side

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 31
     id 11
     title "E-mail Results?"
     bitmap-handle my-cb-png
     bitmap-number 1
     bitmap-width 20
     title-position 2
     bitmap-selected 2
     title-position 2
     .
```
