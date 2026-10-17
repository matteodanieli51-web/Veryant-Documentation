## Search-Text

**Note -** This property is not related to the [Search-Panel](./Search-Panel) feature.

As soon as this property is set to a value, the Grid control is searched for that value, according to the options set in the [Search-Options](./Search-Options) property.

The search begins at the cell identified by the [X](./X) and [Y](./Y) properties. Cells that are hidden due to [Row-Hiding](./Row-Hiding) and [Column-Hiding](./Column-Hiding) are not considered by the search.

If the search succeeds, the [X](./X) and [Y](./Y) properties are updated to match the coordinates of the cell that contains the searched text.

After the search, one of the following values is returned:

|  |  |
| --- | --- |
| 0 | Search failed. The [X](./X) and [Y](./Y) properties are left unchanged. |
| 1 | Search succeeded. |
| 2 | Search succeeded, but it reached the end (or the top) of the Grid control and continued from the top (or the end). |

#### 

**Example** - Search for the string "Phoenix" and advise the user if the string is not found

```cobol
 modify screen-2-gr-1 search-text "Phoenix" giving search-result.
 if search-result = 0
    display message "Not found" icon mb-error-icon
 end-if.
```
