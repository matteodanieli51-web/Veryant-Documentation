## \{ Permanent | Temporary \}

|  |  |
| --- | --- |
| Permanent | A control with this style applied can be destroyed only by using the DESTROY statement or when the parent window is destroyed. A permanent control is more efficient than a "temporary" one since it is not created each time a DISPLAY statement is executed. This style is set by default. |
| Temporary | Temporary controls are destroyed when a DESTROY statement is executed, when the parent window is destroyed, when another control is created in its same position, or when a Screen Section containing a BLANK SCREEN keyword is displayed. Temporary controls are less efficient than "permanent" ones since they are created each time a DISPLAY statement is executed. |

**Example -** Define a combo-box in screen section with a temporary style

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     temporary
     3-d
     drop-down
     .
```
