## Next-Item

This property returns an item ID. The value set to the property is the item whose ID is needed. It may refer to the whole Tree-View control or to another item. Valid values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

|  |  |
| --- | --- |
| tvni-child | The first child of the item identified by the [Item](./Item) property is returned. If it has no children, zero is returned. This does not mean that the item cannot be expanded, an item can be expanded when its [Has-Children](./Has-Children) property is set to a non-zero value. |
| tvni-first-visible | The id of the first visible item in the Tree-View control is returned. |
| tvni-next | The next sibling of the item identified by the [Item](./Item) property is returned. If the item identified by the [Item](./Item) property is the last of its level, zero is returned. |
| tvni-next-visible | The next visible item after the item identified by the [Item](./Item) property is returned. The [Item](./Item) property must refer to a visible item. If the item identified by the [Item](./Item) property is the last of its level, zero is returned. |
| tvni-parent | The parent of the item identified by the [Item](./Item) property is returned. If the item identified by the [Item](./Item) property is at the top level, zero is returned. |
| tvni-previous | The previous sibling of the item identified by the [Item](./Item) property is returned. If the item identified by the [Item](./Item) property is the first of its level, zero is returned. |
| tvni-previous-visible | The previous visible item before the item identified by the [Item](./Item) property is returned. The [Item](./Item) property must refer to a visible item. |
| tvni-root | The id of the very first item in the Tree-View control is returned. |
