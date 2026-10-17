## Has-Children

This property is used to set or inquire whether the item identified by the [Item](./Item) property has children.

When set to a non-zero value, the item is marked as if it had children, even if it does not actually contain any item. This way, when the user tries to expand it, the [MSG-TV-EXPANDING](../Events/MSG-TV-EXPANDING) and [MSG-TV-EXPANDED](../Events/MSG-TV-EXPANDED) events are fired. This technique is used to handle a Tree-View control with items loaded on demand.

Note that inquiring this property returns the value set by the previous MODIFY statement and not the actual state of the item. The correct way to know if an item has children or not is by modifying the [Next-Item](./Next-Item) property with the *tvni-child* flag and verify if it returns a valid handle or not.

**Example** - Add a parent item to the tree-view specifying that it will have children. Later, check if that item has children

```cobol
       working-storage section.
       77 w-item handle.
       77 hc-flg pic 9.
       ...
       procedure division.
       ...
           modify screen-1-tv-1 parent 0
                       item-to-add "Parent" giving w-item
                       has-children 1
       ...
           inquire screen-1-tv-1(w-item) has-children hc-flg
```
