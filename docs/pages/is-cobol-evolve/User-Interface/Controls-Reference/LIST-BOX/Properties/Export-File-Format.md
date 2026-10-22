## Export-File-Format

This property specifies the default file format in which List-Box data must be exported when the [Action](./Action) property is set to *action-export*.

Possible values (case insensitive) are:

| Value | Meaning |
| --- | --- |
| XLSX | Excel Workbook |
| XLS | Excel 97- Excel 2003 Workbook |

If the property is not set, then "XLS" is assumed.

The cell format in the generated spreadsheet will be numeric for values that represent a number and text for all the other values.

The numeric format in the generated spreadsheet is set according to the following rules:

- If the cell value contains the decimal and the group separator, the format is set to '#,##0.' plus a '0' for each digit after the decimal separator.
- If the cell value contains the decimal separator but not the group separator, the format is set to '0.' plus a '0' for each digit after the decimal separator.
- If the cell value contains the group separator but not the decimal separator, the format is set to '#,###'.
- If the cell value contains neither decimal nor group separator, no cell format is set.

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
