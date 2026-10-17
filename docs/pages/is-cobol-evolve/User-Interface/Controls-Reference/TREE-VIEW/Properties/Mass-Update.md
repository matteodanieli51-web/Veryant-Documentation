## Mass-Update

Setting this property to "1" keeps the isCOBOL framework from repainting the Tree-View control every time the program modifies it. This practice is recommended to increase performance when a large number of changes are applied to the Tree-View control. At the end of the process it is necessary to reset the property to its default value "0" to see the changes.

**Example** - Load three items in mass update mode

```cobol
modify screen-1-tv-1 mass-update = 1
modify screen-1-tv-1 parent null, item-to-add "item-1"
modify screen-1-tv-1 parent null, item-to-add "item-2"
modify screen-1-tv-1 parent null, item-to-add "item-3"
modify screen-1-tv-1 mass-update = 0
```
