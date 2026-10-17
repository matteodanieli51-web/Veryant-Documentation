## Insertion-Index

This numeric property affects the position where a new Tab is added to a Ribbon control when the [Tab-To-Add](./Tab-To-Add) property is set. If this property is set to a positive value, the Tab is inserted immediately before the Tab the property refers to. When set to 0, the new Tab is appended after the last existing Tab.

**Example** - Modify a Ribbon control to add 1 page at position 1

```cobol
...
  modify screen-1-rbn-1-hdl
         insertion-index 1 tab-to-add "Page one"
...
```
