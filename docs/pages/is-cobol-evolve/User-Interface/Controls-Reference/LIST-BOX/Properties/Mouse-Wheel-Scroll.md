## Mouse-Wheel-Scroll

This property specifies how many records must scroll in the list at each mouse wheel movement. It has effect only if the list has the [Paged](../Styles/Paged) style.

**Example** - Define a list-box that scrolls three records at each mouse wheel movement

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     mouse-wheel-scroll 3
     .
...
```
