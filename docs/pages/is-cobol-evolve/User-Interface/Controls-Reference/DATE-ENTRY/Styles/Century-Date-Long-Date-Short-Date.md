## \{ Century-Date | Long-Date | Short-Date \}

|  |  |
| --- | --- |
| Century-Date | Same as Short-Date. The year has always four digits. |
| Long-Date | The date is displayed with the long date format. |
| Short-Date | The date is displayed with the short date format. |

Date and time formats depend on the system configuration.

**Example** - Define a date-entry control with century-date to allow 4 digits for the year

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     century-date
     value-format davf-yyyymmdd
     .
```
