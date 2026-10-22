## Object

This property returns the reference to the Java-Bean object. The argument of this property is a data item, defined as an object reference to the class "com.iscobol.gui.server.CobolGUIJavaBean". That data item can be used to invoke the setProperty, getProperty and callMethod methods (see Introduction above).

**Example** - Define a Java-bean with object property

```cobol
...
configuration section.
repository.
    class BorderLayout as "java.awt.BorderLayout"
    class JavaBean
          as "com.iscobol.gui.server.CobolGUIJavaBean"
...
working-storage section.
77  JBPiePlot   object reference JavaBean.
...
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
