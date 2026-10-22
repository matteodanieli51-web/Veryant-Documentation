## Icon

When this property is set to a bitmap handle, the corresponding image becomes the window icon.

The bitmap handle can be obtained by calling the [WBITMAP-LOAD](../../../../Appendices/Library-Routines/W$BITMAP/WBITMAP-LOAD) function of W$BITMAP.

If this property points to an animated GIF, then no image is shown.

Custom icons can’t be used on FLOATING and MDI-CHILD windows.

**Example** - Display a window with a different icon

```cobol
working-storage section.
77 window-handle usage handle of window.
77 icon-ico      pic s9(9) comp-4.
...
procedure division.
...
  call "w$bitmap"
       using wbitmap-load "icon.png"
       giving icon-ico.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 64.0
          lines 55.8
          icon icon-ico
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 260
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          hint "App main window"
          handle window-handle
          .
```
