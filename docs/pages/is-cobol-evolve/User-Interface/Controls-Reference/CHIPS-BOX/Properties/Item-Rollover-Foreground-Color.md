## Item-Rollover-Foreground-Color

This property allows you to set or retrieve the foreground color of the chip identified by the [Item](./Item) property when the mouse pointer hovers over it. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Change the rollover background color of a chip in the chips-box

```cobol
working-storage section.
77 wk-item pic 9(2).
...
procedure division.
...
  modify screen-1-chip-1 item = wk-item
         item-rollover-foreground-color 12
         .
...
```
