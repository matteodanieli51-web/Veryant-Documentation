## Export-File-Format

This property specifies the default file format in which Grid data must be exported when the ‘Export’ item is selected from the context menu (see [Heading-Menu-Popup](./Heading-Menu-Popup)) or when the [Action](./Action) property is set to *action-export*.

Possible values (case insensitive) are:

| Value | Meaning |
| --- | --- |
| XLSX | Excel Workbook |
| XLS | Excel 97- Excel 2003 Workbook |

If the property is not set, then "XLS" is assumed.

The cell format in the generated spreadsheet is set according to the [Data-Types](./Data-Types) property of the column as follows:

| Data-Type | Spreadsheet cell format |
| --- | --- |
| 9 | numeric |
| D or E | date |
| I, L, P, U, X or Z | text |
| not set | text |

The numeric cell format in the generated spreadsheet is set according to the following rules:

- If the cell value contains the decimal and the group separator, the format is set to '#,##0.' plus a '0' for each digit after the decimal separator.
- If the cell value contains the decimal separator but not the group separator, the format is set to '0.' plus a '0' for each digit after the decimal separator.
- If the cell value contains the group separator but not the decimal separator, the format is set to '#,###'.
- If the cell value contains neither decimal nor group separator, no cell format is set.

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
