## Color

This property allows you to set or retrieve the color of the Combo-Box control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a combo-box in screen section with grey background and light grey foreground all in the color property

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   color 265
   id 13
   3-d
   drop-down
   .
```

**Note -** Using the Windows Look and Feel, the background color of combo boxes with the [Drop-List](../Styles/Drop-Down-Drop-List-Static-List) style is shown only if [iscobol.gui.native_style (boolean) \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to false in the configuration.
