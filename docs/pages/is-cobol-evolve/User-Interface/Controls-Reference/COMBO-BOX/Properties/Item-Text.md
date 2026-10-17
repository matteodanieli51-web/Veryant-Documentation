## Item-Text

This property can be used to change or inquire the text of an item.

The [Item](./Item) property must be set first. Setting this property before the [Item](./Item) property is not advised as it may lead to unexpected behaviors.

**Example -** Modify a combo-box text for an item

```cobol
procedure division.
...
  modify screen-1-co-1 item 3 item-text "Changed item".
...
```
