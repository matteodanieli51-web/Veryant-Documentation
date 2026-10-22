## \{ Permanent | Temporary \}

|  |  |
| --- | --- |
| Permanent | A control with this style applied can be destroyed only by using the DESTROY statement or when the parent window is destroyed. A permanent control is more efficient than a "temporary" one since it is not created each time a DISPLAY statement is executed. This style is set by default. |
| Temporary | Temporary controls are destroyed when a DESTROY statement is executed, when the parent window is destroyed, when another control is created in its same position, or when a Screen Section containing a BLANK SCREEN keyword is displayed. Temporary controls are less efficient than "permanent" ones since they are created each time a DISPLAY statement is executed. |

**Example** - Define a date-entry control that is temporary

```cobol
screen section.
...
  03 screen-1-de-2 Date-Entry
     line 28.5
     column 49.7
     size 13.6 cells
     lines 4.3 cells
     id 18
     century-date
     value-format davf-yyyymmdd
     calendar-font Default-Font
     temporary
     .
```
