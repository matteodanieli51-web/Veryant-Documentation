## Notify

This style causes a [CMD-CLICKED](../Events/CMD-CLICKED) event to be a terminating event. The ACCEPT statement will terminate when the user changes the Check-Box value.

**Example -** Define a check-box in screen section with the notify style

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 30
     id 11
     event procedure screen-1-cb-2-evt-proc
     title "Sugar for you coffee?"
     notify
     .
...
procedure division.
...
screen-1-cb-1-evt-proc.
   evaluate event-control-id
   when 11
      evaluate event-type
      when cmd-clicked
           display message "The check-box [Sugar for your coffee] was clicked"
      when other
      end-evaluate
   end-evaluate.
```
