## Tab-To-Add

When this property is set to a value other than space, a new Tab is added to the Tab-Control control. The value of this property represents the title of the new Tab.

Multiple Tabs can be added at the same time, by enclosing their titles between parentheses.

**Example** - Add one page to a tab-control

```cobol
...
procedure division.
...
  modify screen-1-tc-1 insertion-index 2
         tab-to-add "Other Page"
...
```
