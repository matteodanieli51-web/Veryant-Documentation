## Input-Filter

This property is used to provide a filter to limit the characters that the user can input in a Combo-Box with the [Drop-Down](../Styles/Drop-Down-Drop-List-Static-List) style. This property doesn’t have effect on Combo-Boxes with the [Drop-List](../Styles/Drop-Down-Drop-List-Static-List) style.

The value of this property is a regular expression. Only characters that match the regular expression will appear in the Combo-Box when the user types or pastes them.

**Example -** Create a combo-box that accepts only letters and numbers (no grave letters or special characters allowed)

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   id 13
   3-d
   drop-down
   input-filter "[\sA-Za-z0-9]+"
   .
```
