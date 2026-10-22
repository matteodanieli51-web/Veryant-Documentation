## Self-Act

When this style is set, all the events the Radio-Button control fires are trapped and no Event Procedure is started. If either the [Exception-Value](../Properties/Exception-Value) property or the [Termination-Value](../Properties/Termination-Value) property is set, the ACCEPT Statement terminates with an Exception or Termination value.

**Example** - Define a radio button with self-act style

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 8.1 cells
     id 5
     self-act
     title "Alternative Option Number 2"
     .
```
