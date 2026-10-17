## Export-File-Name

This property specifies the name of the file to which List-Box data must be exported  when the [Action](./Action) property is set to *action-export*.

If the property is not set, then "isCobolListBox.xls" is assumed.

In thin client environment, the file name is resolved on the client machine.

In WebDirect environment, the file name is resolved on the web server machine.

**Example** - Define a list-box with a XLSX document associated for the export feature

```cobol
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     export-file-format "xlsx"
     export-file-name "output.xlsx"
     event procedure screen-1-lb-1-evt-proc
     .
```
