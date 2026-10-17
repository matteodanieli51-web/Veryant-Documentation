## Shading

The Bar control consists of a number of rows defined with the [Width](./Width) property that make the Bar control thicker or thinner.

The color of each single row is defined by the [Colors](./Colors) property. If not set, each row will be drawn with the color set in the [Color](./Color) or [Foreground-Color](./Foreground-Color) properties.

To obtain a 3-D effect, some rows must be drawn with a lighter or a darker color. This property allows you to draw lighter or darker rows, changing their brightness instead of their color definition

Valid values are:

|  |  |
| --- | --- |
| -2 | Very dark, usually black. |
| -1 | Darker than normal. |
| 0 | Unchanged. |
| 1 | Lighter than normal. |
| 2 | Very light, usually white. |

Since this property can be set for each row, a list of values is needed in order to determine the brightness of each row.

When values are enclosed between parentheses, a new list is defined at once.

**Example -** A typical 3-D Bar control.

```cobol
screen section.
...
  03 screen-1-br-2 Bar
     line 5.0
     column 12.0
     size 46.0 cells
     id 2
     color white low
     width 2
     shading (-1, 1)
     .
```
