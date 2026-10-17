## \{ Permanent | Temporary \}

|  |  |
| --- | --- |
| Permanent | A control with this style applied can be destroyed only by using the DESTROY statement or when the parent window is destroyed. A permanent control is more efficient than a "temporary" one since it is not created each time a DISPLAY statement is executed. This style is set by default. |
| Temporary | Temporary controls are destroyed when a DESTROY statement is executed, when the parent window is destroyed, when another control is created in its same position, or when a Screen Section containing a BLANK SCREEN keyword is displayed. Temporary controls are less efficient than "permanent" ones since they are created each time a DISPLAY statement is executed. |

**Example** - Define a grid with temporary style

```cobol
screen section.
...
  03 screen-1-gr-2 Grid
     line 25.0
     column 3.1
     size 34.8 cells
     lines 16.2 cells
     id 2
     event procedure screen-1-gr-2-evt-proc
     no-box
     column-headings
     temporary
     mouse-wheel-scroll 5
     row-dividers 1
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
```
