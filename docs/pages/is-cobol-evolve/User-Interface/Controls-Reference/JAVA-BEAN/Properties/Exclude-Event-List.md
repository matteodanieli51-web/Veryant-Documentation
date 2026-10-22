## Exclude-Event-List

All the Java-Bean events included in the [Event-List](./Event-List) are always fired. This property specify how to treat COBOL events included in the [Event-List](./Event-List), if any.

When the property is not set, all the COBOL events are fired along with the Java-Bean events.

When the property is set to 0, only the COBOL events included in the Event-List are fired along with the Java-Bean events.

When the property is set to 1, all the COBOL events except the ones included in the [Event-List](./Event-List) are fired along with the Java-Bean events.

Preventing the runtime from generating some events may speed up performance in client/server environments.

**Note -** Excluding focus change events like CMD-GOTO and MSG-VALIDATE may avoid AFTER and BEFORE embedded procedures to be triggered.

**Example** - Exclude CMD-GOTO COBOL event and manage propertyChange and mouse Java events

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     event-list( "propertyChange", "mouse", cmd-goto )
     exclude-event-list 1
     id 1
     no-box
     .
...
```
