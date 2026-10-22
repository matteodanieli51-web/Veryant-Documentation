## On-Header

This style affects [Bitmap](./Bitmap) buttons displayed on a Ribbon. If this style is set, then the button appears also on the header line with a size of 16x16 pixels. The runtime takes care of resizing the bitmap automatically to fit the size of 16x16. Without this style, the button appears only on the tab-control area with the size set by [Lines](../Properties/Lines) and [Size](../Properties/Size) properties.

**Example** - Define a push-button with bitmap and on-header styles

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     on-header
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
