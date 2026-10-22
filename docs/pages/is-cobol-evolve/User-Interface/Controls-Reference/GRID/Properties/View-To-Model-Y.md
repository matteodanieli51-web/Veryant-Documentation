## View-To-Model-Y

When inquired, this property allows you to retrieve the row number for the program corresponding with the row number on video identified by the [Y](./Y) property. This kind of information is useful after a sort, when the order of the rows on video doesn’t match with the order of the rows for the program.

When the [Y](./Y) property value is greater than the number of visible rows in the Grid, inquiring this property returns the value 0.

**Example** - Get the actual row number of the fifth row you see on video

```cobol
procedure division.
...
   inquire screen-1-gr-1(5, 1) view-to-model-y ws-vtm-y
...
```
