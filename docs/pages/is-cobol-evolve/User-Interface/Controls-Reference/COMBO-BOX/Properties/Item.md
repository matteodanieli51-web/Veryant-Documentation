## Item

This property identifies, through a number, a Combo-Box control item. The first item in the list is referenced with "1", the second with "2" and so on. This property must be set before the [Item-Text](./Item-Text), [Hidden-Data](./Hidden-Data), [Bitmap-Handle](./Bitmap-Handle) and [Bitmap-Number](./Bitmap-Number) properties to change or inquire the text, hidden data or the image of that item.

**Example -** Modify the text of the third element of the combo-box to "Hello world" and the image with the fourth bitmap in the bitmap strip referenced by the handle MY_BITMAP.

```cobol
modify screen-1-co-1
       item          = 3
       item-text     = "Hello World"
       bitmap-handle = my_bitmap
       bitmap-number = 4.
```

When inquired, this property returns a number specifying the currently selected list item or 0 if no item is selected.
