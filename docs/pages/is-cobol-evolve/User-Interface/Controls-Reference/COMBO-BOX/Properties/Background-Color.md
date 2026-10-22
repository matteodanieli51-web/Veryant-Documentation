## Background-Color

This property allows you to set or retrieve the background color of the Combo-Box control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a combo-box in screen section with dark cyan background color

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   background-color 3
   id 13
   3-d
   drop-down
   .
```

**Note -** Using the Windows Look and Feel, the background color of combo boxes with the [Drop-List](../Styles/Drop-Down-Drop-List-Static-List) style is shown only if [iscobol.gui.native_style (boolean) \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to false in the configuration.
