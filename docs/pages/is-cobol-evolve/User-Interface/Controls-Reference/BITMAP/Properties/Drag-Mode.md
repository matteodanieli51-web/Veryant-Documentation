## Drag-Mode

This property specifies the drag & drop abilities of the control. Possible values are:

|  |  |
| --- | --- |
| 0 | No drag & drop abilities. This is the default. |
| 1 | The user can drag content from the control. The [MSG-DRAG](../Events/MSG-DRAG) event will be fired. |
| 2 | The user can drop content into the control. The [MSG-DROP](../Events/MSG-DROP) event will be fired. |
| 3 | The user can drag and drop content. The [MSG-DRAG](../Events/MSG-DRAG) event and the [MSG-DROP](../Events/MSG-DROP) event will be fired respectively. |

**Example -** Define a bitmap that allows drag & drop

```cobol
screen section.
...
  03 screen-1-bi-2 Bitmap
     line 23.3
     column 51.4
     size 83 pixels
     lines 97 pixels
     drag-mode 3
     id 8
     .
...
```
