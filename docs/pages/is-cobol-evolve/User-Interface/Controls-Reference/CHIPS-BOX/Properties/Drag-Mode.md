## Drag-Mode

This property specifies the drag & drop abilities of the control. Possible values are:

|  |  |
| --- | --- |
| 0 | No drag & drop abilities. This is the default. |
| 1 | The user can drag content from the control. The [MSG-DRAG](../Events/MSG-DRAG) event will be fired. |
| 2 | The user can drop content into the control. The [MSG-DROP](../Events/MSG-DROP) event will be fired. |
| 3 | The user can drag and drop content. The [MSG-DRAG](../Events/MSG-DRAG) event and the [MSG-DROP](../Events/MSG-DROP) event will be fired respectively. |

**Example -** Define a chips-box with drag & drop abilities in screen section

```cobol
working-storage section.
...

screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     drag-mode 3
     id 10
     .
...
```
