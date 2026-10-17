## Region-Background-Color

This property defines the background color used to paint an area of the Grid control. The area is always rectangular. Before setting the background color of that area, its bounds must be defined. The upper left cell is identified by the [Start-X](./Start-X) and [Start-Y](./Start-Y) properties, while the lower right cell is identified by the [X](./X) and [Y](./Y) properties.

Setting those properties after setting the [Region-Background-Color](./Region-Background-Color) property is not advised as this may lead to unexpected behaviors. A correct code will always look as shown in the snippet below.

Only one area can be changed at a time. Setting the color to an area with different coordinates does not produce a new colored area, it simply changes its location and color.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Change the background color of a region in the grid

```cobol
modify screen-1-gr-1,
       start-x                 = UpperLeftColumn,
       start-y                 = UpperLeftRow,
       x                       = LowerRightColumn,
       y                       = LowerRightRow,
       region-background-color = MyColor
```
