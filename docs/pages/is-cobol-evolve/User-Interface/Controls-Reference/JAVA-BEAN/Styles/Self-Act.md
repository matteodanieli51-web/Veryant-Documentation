## Self-Act

When this style is set, all the events the Java-Bean control fires are trapped and no Event Procedure is started.

**Example** - Define a Java-bean with self-act style

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
     self-act
     .
...
```
