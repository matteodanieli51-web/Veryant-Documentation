## Insertion-Index

This numeric property affects the position where a new Tab is added to a Tab-Control control when the [Tab-To-Add](./Tab-To-Add) property is set. If this property is set to a positive value, the Tab is inserted immediately before the Tab the property refers to. When set to 0, the new Tab is appended after the last existing Tab.

**Example** - Add one page to a tab-control

```cobol
...
procedure division.
...
  modify screen-1-tc-1 insertion-index 2
         tab-to-add "Other Page"
...
```
