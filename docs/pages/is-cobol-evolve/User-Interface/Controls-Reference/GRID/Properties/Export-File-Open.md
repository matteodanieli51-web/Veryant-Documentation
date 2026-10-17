## Export-File-Open

When this property is set to 1, the file specified by [Export-File-Name](./Export-File-Name) is automatically opened with the associated application when ready.

In thin client environment, the file is opened on the client machine.

**Example** - Define a grid with auto opening of the exported xlsx file

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
     export-file-open 1
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
