## Use-Return

When this style is set, the user can type the [Enter] key to add a new line in a multiline entry-field. Without it, the [Enter] key terminates the input and a new line can be added by pressing [Ctrl+Enter].

**Example** - Define a multiline entry-field that allows the use of the ENTER key to separate lines

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
     use-return.
```
