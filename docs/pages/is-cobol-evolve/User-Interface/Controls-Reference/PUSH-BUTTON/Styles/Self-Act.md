## Self-Act

When this style is set, all the events the Push-Button control fires are trapped and no Event Procedure is started. If either the [Exception-Value](../Properties/Exception-Value) property or the [Termination-Value](../Properties/Termination-Value) property is set, the ACCEPT Statement terminates with an Exception or Termination value.

**Example** - Define a push-button with self-act style

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 10.7 cells
     lines 5.3 cells
     id 3
     self-act
     title "Go..."
     .
```
