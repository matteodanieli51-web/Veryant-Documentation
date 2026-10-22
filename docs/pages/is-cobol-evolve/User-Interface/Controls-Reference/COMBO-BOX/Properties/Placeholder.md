## Placeholder

This property specifies a short hint that describes the expected value of an input field. The short hint is displayed in the input field before the user enters a value. It doesn't affect  [Drop-List](../Styles/Drop-Down-Drop-List-Static-List) combo-boxes.

The color of the placeholder text can be configured by setting [iscobol.gui.placeholder_color](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) in the configuration.

**Note -** The placeholder text is not necessarily displayed in the same position as the input text.

**Example -** Define a combo-box with a placeholder text

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
   placeholder "Select the language"
   .
```
