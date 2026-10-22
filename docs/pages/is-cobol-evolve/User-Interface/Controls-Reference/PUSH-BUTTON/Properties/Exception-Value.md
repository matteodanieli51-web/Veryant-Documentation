## Exception-Value

If a numeric value different from "0" is set for this property, an exception condition for the active screen is generated when the Push-Button control is clicked.

**Example** - Define a push-button with an exception value

```cobol
screen section.
...
  01 screen-1
     exception procedure screen-1-exc-proc
     .
     03 screen-1-pb-2 Push-Button
        exception-value 2020
        line 5.2
        column 18.3
        size 9.3 cells
        lines 2.4 cells
        id 2
        event-list ( cmd-goto msg-validate )
        exclude-event-list 1
        title "Accept"
        .
...
procedure division.
...
screen-1-exc-proc.
  if key-status = 2020
     display message "Accept button was pushed"
  end-if
  .
```
