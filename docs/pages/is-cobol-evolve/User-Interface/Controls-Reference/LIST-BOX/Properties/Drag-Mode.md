## Drag-Mode

This property specifies the drag & drop abilities of the control. Possible values are:

|  |  |
| --- | --- |
| 0 | No drag & drop abilities. This is the default. |
| 1 | The user can drag content from the control. The [MSG-DRAG](../Events/MSG-DRAG) event will be fired. |
| 2 | The user can drop content into the control. The [MSG-DROP](../Events/MSG-DROP) event will be fired. |
| 3 | The user can drag and drop content. The [MSG-DRAG](../Events/MSG-DRAG) event and the [MSG-DROP](../Events/MSG-DROP) event will be fired respectively. |

**Example** - Define a list-box with drag & drop capabilities

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     id 1
     drag-mode 3
     .
```
