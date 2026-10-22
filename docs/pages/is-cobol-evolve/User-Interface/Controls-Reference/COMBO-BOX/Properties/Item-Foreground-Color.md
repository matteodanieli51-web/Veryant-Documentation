## Item-Foreground-Color

This property can be used to change or inquire the foreground color of an item.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

The [Item](./Item) property must be set first. Setting this property before the [Item](./Item) property is not advised as it may lead to unexpected behaviors.

**Example -** Change the third item of a combo to be white text on blue background

```cobol
procedure division.
...
  modify screen-1-co-1 item 3 item-background-color 9 item-foreground-color 15.
...
```
