## Proposal-Filter-Type

This Property specifies the filtering logic to be applied on the list of proposals.

The possible values for this property are:

|  |  |
| --- | --- |
| 0 | No filtering is performed. The entire list of proposals is shown.<br>You should use this value is you wish to dynamically (re)load the list while the user types text in the field. You can (re)load the list of proposals during the [NTF-CHANGED](../Events/NTF-CHANGED) event. |
| 1 | Items are filtered with a "contains" logic. Only proposals that contain the text typed in the field will be shown. The match is case insensitive. This is the default filtering logic. |
| 2 | Items are filtered with a "starts with" logic. Only proposals that start with the text typed in the field will be shown. The match is case insensitive. |

**Example** - Define an entry-field with a specific proposal filtering logic

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     proposal-filter-type 2
     .
...
procedure division.
...
  modify screen-1-ef-3
         proposal "rome"
         proposal "romania"
         proposal "romantic"
         proposal "ron"
         proposal "roll"
         .
...
```
