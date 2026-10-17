## Item-Hint

This alphanumeric property is used to set or retrieve the hint text of an item identified by the [Item](./Item) property. Such text is shown when the mouse pointer is placed on the Tree-View item.

When the Tree-View has the [Table-View](../Styles/Table-View) style, you can set the hint for the whole item or just for some columns, depending on whether or not you use the [X](./X) property. For example:

```cobol
  modify screen-1-tv-1 item wk-item item-hint "hint text"
```

or

```cobol
  modify screen-1-tv-1 ( wk-item ) item-hint "hint text"
```

set the hint on the entire item; the hint will appear when the mouse pointer hovers on any of the item columns. Instead

```cobol
  modify screen-1-tv-1 item wk-item x 3 item-hint "hint text"
```

or

```cobol
  modify screen-1-tv-1 ( wk-item, 3) item-hint "hint text"
```

set the hint only for the third column; the hint will appear only when the mouse pointer hovers on the third column.

**Example** - Modify the hint text of a specific item of a tree-view

```cobol
...
procedure division.
...
  modify screen-1-tv-1 item 1 item-hint "Hint of item 1"
...
```
