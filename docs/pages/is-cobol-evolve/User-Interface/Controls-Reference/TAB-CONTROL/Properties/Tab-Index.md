## Tab-Index

This property represents the Tab that the following properties refer to: [Bitmap-Handle](./Bitmap-Handle), [Bitmap-Number](./Bitmap-Number), [Bitmap-Width](./Bitmap-Width), and [Tab-Text](./Tab-Text).

**Example** - Modify a tab-control to disable page 2

```cobol
procedure division.
...
  modify screen-1-tc-1 tab-index 2 tab-enabled 0
...
```
