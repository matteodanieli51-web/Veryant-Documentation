## \{ 3-D | Boxed | No-Box \}

|  |  |
| --- | --- |
| 3-D | The box drawn around the Java-Bean control appears with a 3-D effect. |
| Boxed | A flat box is drawn around the Java-Bean control. |
| No-Box | No box is drawn around the Java-Bean control. Set this style when you need to save space. |

The visual result may vary with different Swing LAF (Look And Feel).

**Example** - Define a boxed java-bean

```cobol
screen section.
...
  03 screen-1-ef-3 Java-Bean
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     boxed
     .
```
