## Item-To-Add

When a value other than space is assigned to this property, a new chip is added to the Chips-Box control.

Multiple values can be added at the same time, enclosed between parentheses.

**Example** - Add a new item to the chips-box

```cobol
...
procedure division.
...
  modify screen-1-chip-1
         item-to-add "Apple"
...
```
