## Mass-Update

Setting this property to "1" prevents the isCOBOL framework from repainting the Combo-Box control each time the program modifies it. This practice is recommended in order to increase performance when a large number of changes are applied to the Combo-Box control. At the end of the process it is necessary to reset the property to its default value of "0" to see the changes.

**Example -** Load three items into a combo-box under mass update

```cobol
modify screen-1-co-1 mass-update = 1
modify screen-1-co-1 item-to-add "item 1"
modify screen-1-co-1 item-to-add "item 2"
modify screen-1-co-1 item-to-add "item 3"
modify screen-1-co-1 mass-update = 0
```
