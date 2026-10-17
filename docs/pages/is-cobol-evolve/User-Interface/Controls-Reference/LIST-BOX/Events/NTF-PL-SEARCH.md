## NTF-PL-SEARCH

This event is fired when the user types a character in the search box and the value in the search box is not currently available in the list box.

The text typed can be retrieved by inquiring the [Search-Text](../Properties/Search-Text) property and the EVENT-DATA-1 data item contains the length of the text.

If the [Sort-Order](../Properties/Sort-Order) property is set to *pl-sort-none*, the event is fired for every character inserted or removed in the search-box.

If the [Sort-Order](../Properties/Sort-Order) property is not set to *pl-sort-none*

- the event is fired for every character removed from the search-box
- when a character is inserted, the event is fired if the search box text doesn’t match with any item in the list. Instead, if the search box text matches with an item in the list, such item is selected and the event is not fired.

The text matches with an item when the item is equal to the text or if it starts with the text.

If the [Sort-Order](../Properties/Sort-Order) is set to *pl-sort-default* or *pl-sort-native-ignore-case* or the List-Box has either the  [Upper](../Styles/Lower-Upper) style or the  [Lower](../Styles/Lower-Upper) style, then the case is not considered in the comparisons. The case is considered only if the [Sort-Order](../Properties/Sort-Order) is *pl-sort-native* and neither the  [Upper](../Styles/Lower-Upper)  style nor the [Lower](../Styles/Lower-Upper) style is present.
