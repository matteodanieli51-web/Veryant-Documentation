## Bitmap

The Radio-Button control is rendered like a [Bitmap](../../PUSH-BUTTON/Styles/Bitmap) [PUSH-BUTTON](../../PUSH-BUTTON/PUSH-BUTTON). It appears pressed when the Radio-Button control is selected.

The [Bitmap-Handle](../Properties/Bitmap-Handle) property must be set.

When the [Title-Position](../Properties/Title-Position) property is set, both graphics and title are drawn. Otherwise, the title becomes the [Hint](../Properties/Hint) of the control.

The image specified by the [Bitmap-Handle](../Properties/Bitmap-Handle) property is truncated at the size specified by the [Bitmap-Width](../Properties/Bitmap-Width) property, if set, or at the size specified by the [Size](../Properties/Size) property otherwise. In the first case, changing the button size either by MODIFY statement or by Layout-Manager doesn’t alter the displayed portion of the image. In the second case, instead, changing the button size either by MODIFY statement or by Layout-Manager may unveil a new portion of the image.

**Example** - Define a radio button with bitmap style

```cobol
screen section.
...
  03 screen-1-rb-1 Radio-Button
     line 20.9
     column 5.4
     size 112
     lines 45
     id 4
     bitmap
     title "Option 1"
     bitmap-handle icon-png1
     bitmap-number 1
     bitmap-rollover 3
     bitmap-pressed 2
     bitmap-width 18
     title-position 2
     group 1
     bitmap-selected 5
     bitmap-rollover-selected 4
     .
```
