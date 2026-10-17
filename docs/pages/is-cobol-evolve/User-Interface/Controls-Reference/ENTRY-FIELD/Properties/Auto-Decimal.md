## Auto-Decimal

When set to a value greater than zero, the cursor automatically jumps to the next control as soon as the user has entered a number of decimal digits equal to the value of this property.

**Example** - Define an entry-field control with 2 digits of autodecimal

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     id 19
     3-d
     auto-decimal 2
     .
```
