## Search-Options

**Note -** This property is not related to the [Search-Panel](./Search-Panel) feature.

This property affects the way the information stored in the Grid control is searched. No search is done until either the [Search-Text](./Search-Text) property or the [Search-Text-In-View](./Search-Text-In-View) property is set.

The argument passed to this property is the group item GRID-SEARCH-OPTIONS defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def). Before using that item, it must be initialized with the INITIALIZE Statement. The following variables or conditions can be set to affect the search behavior:

**GRID-SEARCH-FORWARDS**

   When set to true, the default, the information is searched forwards, otherwise the information is searched backwards.

**GRID-SEARCH-WRAP**

   When set to true, the default, the search does not terminate when the last cell (or the first cell in the case GRID-SEARCH-FORWARDS is set to false) is reached, but automatically continues from the first (or last) cell until the starting cell is reached.

**GRID-SEARCH-IGNORE-CASE**

   When set to true, the default, a case-insensitive search is performed.

**[ GRID-SEARCH-MATCH-ANY | GRID-SEARCH-MATCH-LEADING | GRID-SEARCH-MATCH-ALL ]**

|  |  |
| --- | --- |
| GRID-SEARCH-MATCH-ANY | A substring search is performed. This is the default. |
| GRID-SEARCH-MATCH-LEADING | The search succeeds when the data begins with the searched text. |
| GRID-SEARCH-MATCH-ALL | The search succeeds only when the data matches the searched text exactly. |

**[ GRID-SEARCH-VISIBLE | GRID-SEARCH-HIDDEN | GRID-SEARCH-ALL-DATA ]**

|  |  |
| --- | --- |
| GRID-SEARCH-VISIBLE | The search affects only the visible data put in the cells by the user or by the program with the [Cell-Data](./Cell-Data), [Insert-Rows](./Insert-Rows), [Record-Data](./Record-Data) or [Record-To-Add](./Record-To-Add) properties. This is the default. |
| GRID-SEARCH-HIDDEN | The search affects only the hidden data put in the cells by the program with the [Hidden-Data](./Hidden-Data) property. |
| GRID-SEARCH-ALL-DATA | The search affects both visible and hidden data. |

**GRID-SEARCH-SKIP-CURRENT**

   When set to true, the current cell is skipped and the search starts from the next one. The default value is true.

**GRID-SEARCH-MOVES-CURSOR**

   When set to true, the cursor is automatically moved to the cell containing the searched text. The default value is false.

**GRID-SEARCH-COLUMN**

   When set to a value greater than zero, the search is performed only in that column. The default value zero means that all columns are to be searched.

   When setting the column for the [Search-Text](./Search-Text) property, you have to refer to the Grid model, so to the column layout defined by the program.

   When setting the column for the [Search-Text-In-View](./Search-Text-In-View) property, you have to refer to the Grid view, so to the column layout that the user is currently seeing. This layout might not match with the layout defined by the program if some columns have been moved or hidden.

**Example** - Modify a grid to set the search options prior to search

```cobol
working-storage section.
copy "isgui.def".
01 search-result pic 9.
...
procedure division.
   set grid-search-forwards     to true
   set grid-search-wrap         to true
   set grid-search-ignore-case  to true
   set grid-search-match-any    to true
   set grid-search-skip-current to false
   set grid-search-moves-cursor to true
   set grid-search-all-columns  to true
   modify h-grid, search-options grid-search-options.
   modify h-grid (1,1)
          search-text "part"
          giving search-result
          .
...
```
