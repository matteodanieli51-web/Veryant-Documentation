## Tab-Index

This property represents the Tab that the following properties refer to: [Bitmap-Handle](./Bitmap-Handle), [Bitmap-Number](./Bitmap-Number), [Bitmap-Width](./Bitmap-Width), and [Tab-Text](./Tab-Text).

**Example** - Modify a Ribbon control to disable the third page

```cobol
procedure division.
...
  modify screen-1-rbn-1-hdl tab-index 3 tab-enabled 0
...
```
