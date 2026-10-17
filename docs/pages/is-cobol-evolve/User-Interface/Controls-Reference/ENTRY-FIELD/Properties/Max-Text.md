## Max-Text

This property can be used to set the maximum number of characters the user can enter.

If this property is set to 0, there is no limit to the number of characters the user can enter.

If this property is not specified, it is set to the same value as the [Size](./Size) property.

Double-byte characters count for 2. For example, with a Max-Text of 10 you can input 10 Latin characters or 5 Chinese characters.

**Example** - Define an entry-field control that accepts 10 characters maximum

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     max-text 10
     .
```
