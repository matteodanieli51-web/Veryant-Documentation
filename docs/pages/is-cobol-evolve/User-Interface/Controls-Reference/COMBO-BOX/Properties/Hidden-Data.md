## Hidden-Data

This property can be used to change or retrieve the hidden data of an item. The hidden value is never shown to the user, its purpose is to give the programmer an easy way to store and retrieve information related to an item.

The [Item](./Item) property must be set first. Setting this property before the [Item](./Item) property is not advised as it may lead to unexpected behaviors.

**Example -** Add some items to a combo-box including hidden data for each

```cobol
...
procedure division.
...
  modify screen-1-co-1
     item-to-add "Grey"
     hidden-data "i"
     item-to-add "Black"
     hidden-data "ii"
     item-to-add "White"
     hidden-data "iii".
```
