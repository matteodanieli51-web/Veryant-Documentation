## Drag-Mode

This property specifies the drag & drop abilities of the control. Possible values are:

|  |  |
| --- | --- |
| 0 | No drag & drop abilities. This is the default. |
| 1 | The user can drag content from the control. The [MSG-DRAG](../Events/MSG-DRAG) event will be fired. |
| 2 | The user can drop content into the control. The [MSG-DROP](../Events/MSG-DROP) event will be fired. |
| 3 | The user can drag and drop content. The [MSG-DRAG](../Events/MSG-DRAG) event and the [MSG-DROP](../Events/MSG-DROP) event will be fired respectively. |

**Example -** Define a date-entry control with drag & drop abilities

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     drag-mode 3
     id 17
     century-date
     value-format davf-yyyymmdd
     .
```
