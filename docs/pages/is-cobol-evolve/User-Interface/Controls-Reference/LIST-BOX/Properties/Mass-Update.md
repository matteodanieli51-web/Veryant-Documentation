## Mass-Update

Setting this property to "1" prevents the isCOBOL framework from repainting the List-Box control each time the program modifies it. This practice is recommended to increase performance when a large number of changes are applied to the List-Box control. At the end of the process it is necessary to reset the property to its default value of "0" to see the changes.

**Example** - Add three items in mass update mode

```cobol
procedure division.
...
  modify screen-1-lb-1 mass-update 1
  modify screen-1-lb-1 item-to-add "item 1"
  modify screen-1-lb-1 item-to-add "item 2"
  modify screen-1-lb-1 item-to-add "item 3"
  modify screen-1-lb-1 mass-update 0
...
```
