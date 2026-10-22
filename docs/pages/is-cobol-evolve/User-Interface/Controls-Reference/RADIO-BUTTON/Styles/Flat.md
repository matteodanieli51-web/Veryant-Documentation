## Flat

When this style is set, the Radio-Button control has no 3-D effect. When the mouse pointer is moved over the Radio-Button control, it is highlighted.

**Example** - Define a radio button with flat style

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     font Calibri-10v00
     help-id 3020
     id 5
     background-high
     flat
     title "Option 2"
     .
```
