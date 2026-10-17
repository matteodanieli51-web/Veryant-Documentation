## Export-File-Name

This property specifies the name of the file to which Grid data must be exported when the ‘Export’ item is selected from the context menu (see [Heading-Menu-Popup](./Heading-Menu-Popup)) or when the [Action](./Action) property is set to *action-export*.

If the property is not set, then "isCobolGrid.xls" is assumed.

In thin client environment, the file name is resolved on the client machine.

In WebDirect environment, the file name is resolved on the web server machine. If the export was triggered from the context menu, then a Save As dialog is shown to allow the user to download the file.

**Example** - Define a grid with a XLSX file associated for the export feature

```cobol
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     export-file-name "output.xlsx"
     export-file-format "xlsx"
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     end-color 9
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
```
