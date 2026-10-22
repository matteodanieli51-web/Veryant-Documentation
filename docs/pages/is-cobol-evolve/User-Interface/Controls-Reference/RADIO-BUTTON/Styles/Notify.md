## Notify

This style causes a [CMD-CLICKED](../Events/CMD-CLICKED) event to be a terminating event. The ACCEPT statement will terminate when the user activates the Radio-Button.

**Example** - Define a radio button that fires the cmd-clicked event when the radio button is clicked

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 8.1 cells
     id 5
     notify
     title "Alternative Option Number 2"
     .
```
