## Use-Return

When this style is set, the user can type the [Enter] key to add a new line in a java-bean. Without it, the [Enter] key terminates the input.

**Example** - Define a Java-bean that uses RETURN and TAB keys without terminanting

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
     use-return
     use-tab
     .
...
```
