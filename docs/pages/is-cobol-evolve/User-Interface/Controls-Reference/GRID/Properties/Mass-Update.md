## Mass-Update

Setting this property to "1" prevents the isCOBOL framework from repainting the Grid control each time the program modifies it. This practice is recommended to increase performance when a large number of changes are applied to the Grid control. At the end of the process it is necessary to reset the property to its default value of "0" to see the changes.

**Example** - Add three records in mass update mode

```cobol
modify screen-1-gr-1 mass-update = 1
modify screen-1-gr-1 record-to-add gr-rec
modify screen-1-gr-1 record-to-add gr-rec
modify screen-1-gr-1 record-to-add gr-rec
modify screen-1-gr-1 mass-update = 0
```
