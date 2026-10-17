## Clsid

This property defines the class the Java-Bean control belongs to.

The class specified by this property must be either a subclass of java.awt.Component or a subclass of  javafx.scene.Node.

**Example** - Define a Java-bean control with Class ID

```cobol
screen section.
...
  03 chart1
     java-bean no-box
     clsid "javax.swing.JPanel"
     line 2
     col 3
     lines 16
     size 68
     object in JBPiePlot
     layout-data rlm-resize-both
     .
...
```
