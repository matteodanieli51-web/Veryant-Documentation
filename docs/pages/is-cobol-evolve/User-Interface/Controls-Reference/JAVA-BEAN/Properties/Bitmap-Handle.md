## Bitmap-Handle

This property identifies the bitmap strip handle to be used for the Java-Bean.

Java-Bean properties that require either a java.awt.Image or a javax.swing.Icon as parameter can be passed a bitmap number that identifies which frame of the bitmap strip must be used.

**Example** - Define a Java-bean that creates a JLabel and adds an icon to it

```cobol
working-storage section.
77 icon-png pic s9(9) comp-4.
77 jlabel-1 object-reference "com.iscobol.gui.server.CobolGUIJavaBean".
...
screen section.
...
          03 screen-1-jb-1 Java-Bean
             clsid "javax.swing.JLabel"
             object jlabel-1
             line 5.1
             column 4.5
             size 33.5 cells
             lines 25.1 cells
             background-color 8
             foreground-color 3
             id 1
             no-box
             bitmap-handle icon-png
             bitmap-width 18
             .
...
procedure division.
...
  call "w$bitmap" using wbitmap-load "icon.png" giving
       icon-png.
...
  jlabel-1:>setProperty("icon", 1)
...
```
