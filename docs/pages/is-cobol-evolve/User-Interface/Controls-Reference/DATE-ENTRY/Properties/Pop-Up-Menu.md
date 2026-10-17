## Pop-Up Menu

Use this property to associate a pop-up menu with the Date-Entry control by assigning a pop-up menu handle to it. The [MSG-INIT-MENU](../Events/MSG-INIT-MENU), [MSG-MENU-INPUT](../Events/MSG-MENU-INPUT) and [MSG-END-MENU](../Events/MSG-END-MENU) events may be generated.

**Example -** Define a date-entry with pop-up menu

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-de-1 Date-Entry
     pop-up menu hmenu
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     century-date
     max-val "20150515"
     min-val "20140515"
     value-format davf-yyyymmdd.
...
*> Use w$menu in procedure division to build the pop-up menu
...
```
