## High-Color

In order to obtain a 3-D effect, it is necessary to define a dark and a light color. This property defines the light color. See also the LOW-COLOR property.

See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a 3d raised frame control with high and low colors

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     font Arial-12v0
     id 16
     lowered
     low-color rgb 4130824
     high-color rgb 16777215
     .
```
