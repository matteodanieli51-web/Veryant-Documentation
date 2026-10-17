## File-Pos

The content of this numeric property is the grid's record number that matches the current file position in the corresponding data file. The [Paged](../Styles/Paged) style must be set.

The File-Pos value will usually be either the last visible record in the grid or the first non-heading record visible.

For example, suppose that you have a grid with five lines and no headings. When you are moving forward through the file, File-Pos will usually be '5', matching the last record added to the grid.

If you click the Next Record button, the MSG-PAGED-NEXT event will indicate that only one READ NEXT is needed to retrieve the appropriate record. Instead, if you click the Previous Record button, the MSG-PAGED-PREV event will indicate that five READ PREVIOUS statements are needed to get the desired record. In this case, File-Pos will change to '1', indicating that only one READ PREVIOUS is needed to get another previous record while five READ NEXT statements are needed to get the next record.

File-Pos has three special values defined as constants in [isgui.def](../../../../Appendices/Copybooks/isgui.def):

|  |  |
| --- | --- |
| paged-at-start | The grid will not generate MSG-PAGED-PREV and MSG-PAGED-PREVPAGE events. |
| paged-at-end | The grid will not generate MSG-PAGED-NEXT and MSG-PAGED-NEXTPAGE events. |
| paged-empty | MSG-PAGED-NEXT, MSG-PAGED-NEXTPAGE, MSG-PAGE-PREV, and MSG-PAGED-PREVPAGE are not generated. Since it is possible that more records are added to the file and they could be seen by re-reading the file, this value will still generate MSG-PAGED-FIRST and MSG-PAGED-LAST events. |

The grid automatically manages File-Pos using the following rules:

- When a record is added to the grid in the topmost non-heading position, File-Pos is set to that position.
- When a record is added to the grid or past the last grid record, File-Pos is set to that position.
- If you set EVENT-ACTION-FAIL in response to a MSG-PAGED-NEXT event, File-Pos is set to Paged-At-End.
- If you set EVENT-ACTION-FAIL in response to a MSG-PAGED-PREV event, File-Pos is set to Paged-At-Start.
- If you set EVENT-ACTION-FAIL in response to a MSG-PAGED-FIRST or MSG-PAGED-LAST event, File-Pos is set to Paged-Empty.
- If a MSG-PAGED-FIRST event sets EVENT-ACTION (this is the default), File-Pos is set to Paged-At-Start.
- If a MSG-PAGED-LAST event sets EVENT-ACTION, File-Pos is set to Paged-At-End.
- If you reset the grid, File-Pos is set to Paged-Empty. Adding records to the grid will change this value.

The handling described above will correctly handle grids whose data is coming from an indexed data file if you move the file's record pointer only in response to grid events. In cases in which you move the file's record pointer independent of a grid request, you will need to do one of the following:

- Modify File-Pos to reflect the actual record position. You may use File-Pos numbers outside of the range of available grid records if needed. Set File-Pos to ‘1’ to point to the first record in the grid, ‘0’ to point to the record before that, ‘-1’ to point to two records before it, and so on. You can also use numbers larger than the last grid record to indicate a position beyond the end of the grid.
- Reposition the current file pointer to match the File-Pos value. You can do this by reading the appropriate record from the data file again. Note that a START may not be good enough. START positions the file pointer so that the next READ NEXT or READ PREVIOUS returns the selected record; it may not return the record positioned at either side of that record.
- Ignore the positioning information passed into the MSG-PAGED-NEXT and MSG-PAGED-PREV events, and the positioning information supplied by the grid control. Supply your own positioning logic. In this case, File-Pos may be incorrect, but File-Pos is irrelevant at this point because you are not using it.

**Example -** Enquire the file-pos property from a paged grid

```cobol
procedure division.
...
  inquire screen-1-gr-2 file-pos ws-fp
  display message ws-fp
...
```
