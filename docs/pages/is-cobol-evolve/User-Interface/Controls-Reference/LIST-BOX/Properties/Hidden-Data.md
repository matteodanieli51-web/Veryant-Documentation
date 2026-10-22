## Hidden-Data

This property can be used to change the hidden data of an item. The hidden value is never shown to the user, its purpose is to give the programmer an easy way to store and retrieve information related to an item.

The [Query-Index](./Query-Index) property must be set first. Setting this property before the [Query-Index](./Query-Index) property is not advised as it may lead to unexpected behaviors.

**Example** - Set hidden data for the third element

```cobol
procedure division.
...
   modify screen-1-lb-1 query-index=3 hidden-data="hidden text"
...
```
