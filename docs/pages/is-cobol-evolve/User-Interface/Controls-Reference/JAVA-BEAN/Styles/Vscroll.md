## Vscroll

When this style is set, the object identified by the [Clsid](../Properties/Clsid) property is created inside a ScrollPane object.

**Example** - Define a Java-bean that uses vscroll style

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
     vscroll
     .
...
```
