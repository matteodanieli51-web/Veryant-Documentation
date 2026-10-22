## Sort-Order

This property affects the way items are searched in a paged list-box when the user types a text on a list-box with the [Paged](../Styles/Paged) style set.

|  |  |
| --- | --- |
| pl-sort-default | This is the default value, the same as pl-sort-native-ignore-case |
| pl-sort-none | No processing is done. The character is notified to the program, firing the [NTF-PL-SEARCH](../Events/NTF-PL-SEARCH) event. |
| pl-sort-native | The items in the list are searched with a case-sensitive search. In the case of a match, the item is selected. Then, the [NTF-PL-SEARCH](../Events/NTF-PL-SEARCH) event is fired. |
| pl-sort-native-ignore-case | It is the same as pl-sort-native, but the search is not case-sensitive. |

**Example** - Define a list-box with case-sensitive search

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     sort-order pl-sort-native
     .
```
