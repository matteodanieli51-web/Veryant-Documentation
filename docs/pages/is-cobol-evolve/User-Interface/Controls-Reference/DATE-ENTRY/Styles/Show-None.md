## Show-None

When this style is set, a check-box is shown on the left of the Date-Entry control.

The [Value](../Properties/Value) of the Date-Entry is set as follows according to the check-box state:

- 0 if the check-box is not checked
- 9 if the check-box is not checked and the [Time](./Time) style is set
- the control content if the check-box is checked.

**Example** - Define a date-entry control with the show-none style

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
 show-none
     .
```
