## Tab-Enabled

This property specifies whether the page identified by the [Tab-Index](./Tab-Index) property can be selected by the user or not. A value of 0 means that the page is disabled, so clicking on that page will produce no effect. A value of 1 means that the page is enabled, so the user can select it. Each page is enabled by default.

**Example** - Modify a tab-control to disable page 2

```cobol
procedure division.
...
  modify screen-1-tc-1 tab-index 2 tab-enabled 0
...
```
