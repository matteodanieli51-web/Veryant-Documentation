## \{ Bottom | Center | Left | Right | Top \}

|  |  |
| --- | --- |
| Bottom | The button title and icon are placed at the top of the button area. |
| Center | The button title and icon are horizontally centered in the button area. This is the default. |
| Left | The button title and icon are horizontally left aligned in the button area. |
| Right | The button title and icon are horizontally right aligned in the button area. |
| Top | The button title and icon are placed at the bottom of the button area. |

The above styles have effect only if the [Multiline](./Multiline) style is not set.

Center, Left and Right can be combined with Top and Bottom as shown in the example below.

**Example** - Define a push-button whose title is placed in the top-left corner

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 7.4 cells
     lines 2.5 cells
     id 3
     title "Button 3"
     top left
     .
```
