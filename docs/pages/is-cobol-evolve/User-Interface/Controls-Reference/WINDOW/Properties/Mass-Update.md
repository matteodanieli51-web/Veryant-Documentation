## Mass-Update

Setting this property to "1" prevents the isCOBOL framework from repainting the window every time the program modifies it. This practice is recommended in order to have a smoother video refresh when a large number of changes are applied to the window. At the end of the process it is necessary to reset the property to its default value of "0" to see the changes and to be able to accept user input.

Setting this property doesn’t alter the mass update status of Combo-Boxes, Grids, List-Boxes and Tree-Views in the window; set their specific [Mass-Update](../../../../Appendices/Graphical-Control-List) property to enable or disable the mass update on these controls.

**Example -** display many fields under mass update

```cobol
modify window-handle1 mass-update = 1
display entry-field line 02, col 02, size 10
display entry-field line 04, col 02, size 10
display entry-field line 06, col 02, size 10
display entry-field line 08, col 02, size 10
display entry-field line 10, col 02, size 10
display entry-field line 12, col 02, size 10
display entry-field line 14, col 02, size 10
display entry-field line 16, col 02, size 10
display entry-field line 18, col 02, size 10
display entry-field line 20, col 02, size 10
modify window-handle1 mass-update = 0
```
