## Notify-Change-Delay

This property specifies how many milliseconds the runtime has to wait before firing a [NTF-CHANGED](../Events/NTF-CHANGED) event when the user changes the content of the Entry-Field. In this way it’s possible to catch multiple changes in a single [NTF-CHANGED](../Events/NTF-CHANGED) event, increasing performance.

By default, the delay specified by the [iscobol.gui.entryfield.notify_change_delay \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property is used. If [iscobol.gui.entryfield.notify_change_delay \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is not set or is set to 0, then an [NTF-CHANGED](../Events/NTF-CHANGED) event is fired for each single change made by the user.

**Example** - Define an entry-field control with a delay of half second for change notifications

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     id 19
     notify-change
     notify-change-delay 500
     3-d.
```
