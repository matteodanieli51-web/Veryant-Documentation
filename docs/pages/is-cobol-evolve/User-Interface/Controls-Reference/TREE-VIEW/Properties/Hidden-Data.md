## Hidden-Data

This property allows you to set or retrieve the hidden value of the item identified by the [Item](./Item) property. The hidden value is never shown to the user, its purpose is to give the programmer an easy way to store and retrieve information related to an item.

When the [Table-View](../Styles/Table-View) style is set, the hidden data is placed in the column identified by the [X](./X) property.

**Example** - Add an item to the tree-view and set an hidden-data for that item

```cobol
...
procedure division.
...
  modify screen-1-tv-1
         parent = null
         item-to-add "Option 1"
         giving tv-item-hdl
         .
  modify screen-1-tv-1
         item = tv-item-hdl
         hidden-data "PROG003"
         .
```
