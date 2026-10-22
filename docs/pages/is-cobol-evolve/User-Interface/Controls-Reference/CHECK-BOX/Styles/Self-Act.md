## Self-Act

When this style is set, all the events the Check-Box control fires are trapped and no Event Procedure is started. If either the [Exception-Value](../Properties/Exception-Value) property or the [Termination-Value](../Properties/Termination-Value) property is set, the ACCEPT Statement terminates with an Exception or Termination value.

**Example -** Define a check-box in screen section that produces no events but an exception

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     exception-value 5025
     line 27.0
     column 10.0
     size 116
     lines 30
     id 11
     self-act
     title "Sugar for you coffee?"
     .
```
