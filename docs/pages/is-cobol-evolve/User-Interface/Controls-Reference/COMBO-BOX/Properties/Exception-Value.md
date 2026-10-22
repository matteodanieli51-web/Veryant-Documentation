## Exception-Value

If a numeric value different from "0" is set for this property and the [Notify-Selchange](../Styles/Notify-Selchange) style is set, an exception condition for the active screen is generated when the value of the Combo-Box control is modified.

**Example -** Define a combo-box with an exception value

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   exception-value 100
   id 13
   .
```
