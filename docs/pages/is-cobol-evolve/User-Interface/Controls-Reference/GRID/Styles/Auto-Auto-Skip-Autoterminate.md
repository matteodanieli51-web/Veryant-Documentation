## Auto | Auto-Skip | Autoterminate

This style causes the GRID to fire the MSG-FINISH-ENTRY event as soon as a cell is filled by the user. A cell is considered filled when the maximum number of digits is reached according to [Data-Types](../Properties/Data-Types) property.

**Example** - Modify a grid to have autoterminate style

```cobol
procedure division.
...
  modify screen-1-gr-1 autoterminate
...
```
