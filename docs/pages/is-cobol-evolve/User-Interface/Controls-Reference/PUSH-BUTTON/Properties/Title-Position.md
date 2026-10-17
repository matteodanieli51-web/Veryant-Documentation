## Title-Position

This property assigns the position of the title of the Push-Button control when either the [Bitmap](../Styles/Bitmap) style or the [Css-Icon](./Css-Icon) property is set; graphics and text are combined.

Valid values usable with the [Bitmap](../Styles/Bitmap) style are:

|  |  |
| --- | --- |
| 1 | On the left of the image |
| 2 | On the right of the image |
| 3 | Above the image |
| 4 | Below the image |
| 5 | Over the image, centered |
| 6 | Over the image, top-left |
| 7 | Over the image, top-centered |
| 8 | Over the image, top-right |
| 9 | Over the image, center-left |
| 10 | Over the image, center-right |
| 11 | Over the image, bottom-left |
| 12 | Over the image, bottom-centered |
| 13 | Over the image, bottom-right |

Valid values usable with the [Css-Icon](./Css-Icon) property are:

|  |  |
| --- | --- |
| 1 | On the left of the image |
| 2 | On the right of the image |
| 3 | Above the image |
| 4 | Below the image |

**Example** - Define a push-button that uses a bitmap and a text title and define the title position

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 93
     lines 24
     id 2
     title "Disable"
     bitmap-handle icon-png0
     bitmap-number 2
     bitmap-width 18
     title-position 2
     .
```
