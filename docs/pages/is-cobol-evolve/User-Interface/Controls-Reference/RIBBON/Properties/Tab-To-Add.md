## Tab-To-Add

When this property is set to a value other than space, a new Tab is added to the Tab-Control control. The value of this property represents the title of the new Tab.

Multiple Tabs can be added at the same time, by enclosing their titles between parentheses.

**Example** - Modify a Ribbon control to add 1 page at position 1

```cobol
...
  modify screen-1-rbn-1-hdl
         insertion-index 1 tab-to-add "Page one"
...
```
