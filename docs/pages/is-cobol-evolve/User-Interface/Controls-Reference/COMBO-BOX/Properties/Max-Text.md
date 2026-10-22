## Max-Text

This property can be used to set the maximum number of characters the user can enter.

If this property is set to 0, there is no limit to the number of characters the user can enter.

If this property is not specified, it is set to the same value as the [Size](./Size) property.

Double-byte characters count for 2. For example, with a Max-Text of 10 you can input 10 Latin characters or 5 Chinese characters.

**Example -** Define a combo-box in screen section with a limit on the number of characters to enter

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   id 13
   max-text 15
   layout-data 17
   3-d
   drop-down
   .
```
