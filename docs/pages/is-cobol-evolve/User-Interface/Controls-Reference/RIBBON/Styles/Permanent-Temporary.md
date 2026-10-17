## \{ Permanent | Temporary \}

|  |  |
| --- | --- |
| Permanent | A control with this style applied can be destroyed only by using the DESTROY statement or when the parent window is destroyed. A permanent control is more efficient than a "temporary" one since it is not created each time a DISPLAY statement is executed. This style is set by default. |
| Temporary | Temporary controls are destroyed when a DESTROY statement is executed, when the parent window is destroyed, when another control is created in its same position, or when a Screen Section containing a BLANK SCREEN keyword is displayed. Temporary controls are less efficient than "permanent" ones since they are created each time a DISPLAY statement is executed. |

**Example** - Display a Ribbon control with temporary style

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Ops 1" "Ops 2" "Ops 3")
          bitmap-number ( 0 0 0)
          lines 4.4375
          color 134
          id 6
          hint "Ribbon tool bar"
          temporary
          collapse 1
          header-align 1
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
