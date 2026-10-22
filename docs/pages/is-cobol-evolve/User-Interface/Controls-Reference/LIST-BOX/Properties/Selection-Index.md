## Selection-Index

This property allows you to set or retrieve the currently selected item of the list. Setting it to -1 clears any selection.

**Example** - Retrieve the index of the sected item

```cobol
procedure division.
...
   inquire screen-1-lb-1 selection-index w-index
...
```
