## Paged

When this style is set, the Grid control is paged. It can contain only the rows that fit it. The vertical scroll-bar becomes useless and in its place four buttons are displayed.

If the [Shift] key is pressed, two of the four buttons change appearance and functionality.

The icons on the buttons can be customized by providing custom GIF files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

Pressing the buttons, the user can access the previous or next record and the first, last, previous and next page of records.

In response to the user's clicks, the following events are fired: [MSG-PAGED-PREV](../Events/MSG-PAGED-PREV), [MSG-PAGED-NEXT](../Events/MSG-PAGED-NEXT), [MSG-PAGED-FIRST](../Events/MSG-PAGED-FIRST), [MSG-PAGED-LAST](../Events/MSG-PAGED-LAST), [MSG-PAGED-PREVPAGE](../Events/MSG-PAGED-PREVPAGE), and [MSG-PAGED-NEXTPAGE](../Events/MSG-PAGED-NEXTPAGE).

See also the [File-Pos](../Properties/File-Pos) property.

**Example** - Define a grid with paged style

```cobol
screen section.
...
  03 screen-1-gr-2 Grid
     line 25.0
     column 3.1
     size 34.8 cells
     lines 16.2 cells
     id 2
     event procedure screen-1-gr-2-evt-proc
     no-box
     column-headings
     paged
     mouse-wheel-scroll 5
     row-dividers 1
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
```
