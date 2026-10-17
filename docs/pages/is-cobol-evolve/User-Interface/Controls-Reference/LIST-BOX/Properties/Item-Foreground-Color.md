## Item-Foreground-Color

This property allows you to set or retrieve the foreground color of the list-box item identified by the [Query-Index](./Query-Index) property.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Change the third item of a list box to be white text on blue background

```cobol
procedure division.
...
  modify screen-1-lb-1 query-index 3
  modify screen-1-lb-1 item-background-color 9 item-foreground-color 15
...
```
