## Last-Row-View

This numeric property contains the count of visible rows in the Grid control. Rows hidden via the [Row-Hiding](./Row-Hiding) property and rows hidden by the Grid’s filtering features are not counted.

**Example** - Inquire a grid to get the number of visible rows

```cobol
...
procedure division.
...
  inquire screen-1-gr-1 last-row-view ws-lr
...
```
