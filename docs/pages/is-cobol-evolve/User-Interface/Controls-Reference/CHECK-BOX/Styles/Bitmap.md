## Bitmap

The Check-Box control is rendered like a [bitmap Push-Button](../../PUSH-BUTTON/Styles/Bitmap). It appears pressed when the Check-Box control is checked.

The [Bitmap-Handle](../Properties/Bitmap-Handle) property must be set.

When the [Title-Position](../Properties/Title-Position) property is set, both the graphics and the title are drawn. Otherwise, the title becomes the hint of the control.

The image specified by the [Bitmap-Handle](../Properties/Bitmap-Handle) property is truncated at the size specified by the [Bitmap-Width](../Properties/Bitmap-Width) property, if set, or at the size specified by the [Size](../Properties/Size) property otherwise. In the first case, changing the button size either by MODIFY statement or by Layout-Manager doesn’t alter the displayed portion of the image. In the second case, instead, changing the button size either by MODIFY statement or by Layout-Manager may unveil a new portion of the image.

**Example -** Define a check-box in screen section with style bitmap

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 31
     id 11
     title "Sugar for you coffee?"
     bitmap
     .
```
