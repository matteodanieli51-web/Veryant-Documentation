## No-Tab

Controls with this style set are skipped when the user navigates the screen using the Tab and the Backtab keys.

**Example** - Define a date-entry control that is not navigable with tab key

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     century-date
     no-tab
     value-format davf-yyyymmdd
     .
```
