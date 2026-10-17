## Use-Tab

When this style is set, the user can use the [Tab] key to add a tab character in an entry-field. Without it, the [Tab] key is used to move from control to control.

**Example** - Define an entry-field that allows the use of the TAB key to input a tab character in the field

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     multiline
     3-d
     use-tab.
```
