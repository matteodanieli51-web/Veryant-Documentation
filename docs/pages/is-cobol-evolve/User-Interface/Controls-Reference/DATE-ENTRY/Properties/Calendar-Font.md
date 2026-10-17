## Calendar-Font

This property specifies the font used by the pop-up calendar.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example -** Define a date-entry control with specific calendar-font

```cobol
working-storage section.
copy "isfonts.def".
77 Aharoni-10v0 handle of font.
...
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 12.6 cells
     lines 3.1 cells
     id 17
     century-date
     value-format davf-yyyymmdd
     calendar-font Bell-MT-10v0-b
     .
```
