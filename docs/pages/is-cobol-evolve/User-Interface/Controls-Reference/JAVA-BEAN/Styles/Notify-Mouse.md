## Notify-Mouse

When this style is set, the Java-Bean control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a Java-bean with notify-mouse style

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     id 1
     no-box
     notify-mouse
     .
...
```
