## Paged

When this style is set, the List-Box control is paged. It can contain only the rows that fit it. The vertical scroll-bar becomes useless and in its place four buttons are displayed.

If the [Shift] key is pressed, two of the four buttons change appearance and functionality.

The icons on the buttons can be customized by providing custom GIF files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

Pressing the buttons, the user can access the previous or next record and the first, last, previous and next page of records.

In response to the user's clicks, the following events are fired: [NTF-PL-PREV](../Events/NTF-PL-PREV), [NTF-PL-NEXT](../Events/NTF-PL-NEXT), [NTF-PL-FIRST](../Events/NTF-PL-FIRST), [NTF-PL-LAST](../Events/NTF-PL-LAST), [NTF-PL-PREVPAGE](../Events/NTF-PL-PREVPAGE), and [NTF-PL-NEXTPAGE](../Events/NTF-PL-NEXTPAGE).

This style implies the [Unsorted](./Unsorted) style.

**Example** - Define a paged list-box

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     paged
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
```
