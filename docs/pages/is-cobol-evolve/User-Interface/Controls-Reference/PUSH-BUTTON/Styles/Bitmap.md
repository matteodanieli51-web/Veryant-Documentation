## Bitmap

The Push-Button control can contain graphics.

The [Bitmap-Handle](../Properties/Bitmap-Handle) property must be set.

When the [Title-Position](../Properties/Title-Position) property is set, both graphics and title are drawn. Otherwise, the title becomes the [Hint](../Properties/Hint) of the control.

The image specified by the [Bitmap-Handle](../Properties/Bitmap-Handle) property is truncated at the size specified by the [Bitmap-Width](../Properties/Bitmap-Width) property, if set, or at the size specified by the [Size](../Properties/Size) property otherwise. In the first case, changing the button size either by MODIFY statement or by Layout-Manager doesn’t alter the displayed portion of the image. In the second case, instead, changing the button size either by MODIFY statement or by Layout-Manager may unveil a new portion of the image.

**Example** - Define a push-button with bitmap style

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 93
     lines 24
     id 2
     bitmap
     title "Disable"
     bitmap-handle icon-png0
     bitmap-number 2
     bitmap-width 18
     title-position 2
     .
```
