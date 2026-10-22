## Item-Text

This alphanumeric property is used to set or retrieve the text of an item identified by the [Item](./Item) property.

**Example** - Modify the text of the chip identified by wk-item

```cobol
working-storage section.
77 wk-item pic 9(2).
...
procedure division.
...
  modify screen-1-chip-1 item wk-item item-text "new text"
...
```
