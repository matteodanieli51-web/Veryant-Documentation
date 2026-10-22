## Item-Height

This property allows you to specify the height of the text area of the Combo-Box control. The unit of measure is inherited from the [Lines](./Lines) property.

**Example -** Define a combo-box in screen section. The text area has a height of 2 lines while the list has height of 10 lines

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
 line 19.0
 column 23.0
 size 12.0 cells
 lines 10.0
 item-height 2.0
 id 13
 3-d
 drop-down
   .
```
