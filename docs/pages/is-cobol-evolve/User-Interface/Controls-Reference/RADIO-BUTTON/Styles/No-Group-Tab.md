## No-Group-Tab

When this style is set, the user may navigate between the radio buttons in the group by using the Tab and the Backtab keys. By default the Tab key cannot be used to navigate within individual radio buttons on the same group.

**Example** - Define a radio button that does not allow tab navigation in the group of radio buttons

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 8.1 cells
     id 5
     no-group-tab
     title "Alternative Option Number 2"
     .
```
