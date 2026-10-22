## Export-File-Open

When this property is set to 1, the file specified by [Action](./Action) is automatically opened with the associated application when ready.

In thin client environment, the file is opened on the client machine.

**Example** - Define a list-box with auto opening of the XLSX document associated to the export feature

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
     export-file-open 1
     event procedure screen-1-lb-1-evt-proc
     .
```
