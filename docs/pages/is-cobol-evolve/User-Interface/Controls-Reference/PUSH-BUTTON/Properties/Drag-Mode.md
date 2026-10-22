## Drag-Mode

This property specifies the drag & drop abilities of the control. Possible values are:

|  |  |
| --- | --- |
| 0 | No drag & drop abilities. This is the default. |
| 1 | The user can drag content from the control. The [MSG-DRAG](../Events/MSG-DRAG) event will be fired. |
| 2 | The user can drop content into the control. The [MSG-DROP](../Events/MSG-DROP) event will be fired. |
| 3 | The user can drag and drop content. The [MSG-DRAG](../Events/MSG-DRAG) event and the [MSG-DROP](../Events/MSG-DROP) event will be fired respectively. |

**Example** - Define a disabled push-button with drag & drop capabilities

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     drag-mode 3
     title "Accept"
     .
...
```
