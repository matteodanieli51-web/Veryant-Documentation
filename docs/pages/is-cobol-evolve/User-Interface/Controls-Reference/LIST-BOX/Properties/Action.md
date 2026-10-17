## Action

A specific action is performed when a value is assigned to this property. Only the following symbolic value, included in the copy file [isgui.def](../../../../Appendices/Copybooks/isgui.def), can be assigned. The table below shows the action related to it:

|  |  |
| --- | --- |
| action-copy | The content of the List-Box is copied to the clipboard. If [Selection-Mode](./Selection-Mode) is set to a value greater than 0, only the selected rows are copied. Using Java7 or greater, the text format (font and colors) is copied as well. |
| action-export | The content of the List-Box is exported to the file name indicated by [Export-File-Name](./Export-File-Name) in the format indicated by [Export-File-Format](./Export-File-Format). |

**Example** - Modify the action property of a List-Box

```cobol
...
procedure division.
...
  modify screen-1-lb-1 action action-export
...
```
