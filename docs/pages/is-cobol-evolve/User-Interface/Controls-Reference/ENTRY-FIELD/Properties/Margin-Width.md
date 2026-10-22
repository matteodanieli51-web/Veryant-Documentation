## Margin-Width

This property allows you to set or retrieve the amount of space between the four borders of the Entry-Field control and the text inside the control. The property is a list of four values that specify the width in pixels of the top, left, bottom and right margin respectively.

Setting the property to -1 resets the margins.

Passing less than four values assumes that the remaining values are the default values in the current Look & Feel.

When the Entry-Field control doesn't have the [Multiline](../Styles/Multiline) style, top and bottom margins are ignored, regardless of the value of the [Lines](./Lines) property.

When the Entry-Field control has a bitmap, the bitmap width is added to the left margin.

When the Entry-Field control has a trailing bitmap, the bitmap width is added to the right margin.

The margin width set by this property might be influenced by the layout provided by the [iscobol.gui.native_style (boolean) \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting for the control.

**Example** - Define an entry-field control with 3 pixels of padding space on the left and on the right of the text

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     margin-width (0 3 0 3)
     id 19
     .
```
