## Exclude-Event-List

If this property is set to "1", then none of the events in the [Event-List](../../BITMAP/Properties/Event-List) property are fired. If this property is set to "0", then only the events listed in the [Event-List](../../BITMAP/Properties/Event-List) property are fired. If it’s omitted, then all the events are fired. Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example -** Define an iwc-panel including event handling for ntf-iwc-event only

```cobol
screen section.
...
  03 screen-1-ip-1 Iwc-Panel
     line 15.8
     column 33.5
     size 63 pixels
     id 9
     js-name "f-map"
     event-list ( ntf-iwc-event )
     exclude-event-list 0
     .
```
