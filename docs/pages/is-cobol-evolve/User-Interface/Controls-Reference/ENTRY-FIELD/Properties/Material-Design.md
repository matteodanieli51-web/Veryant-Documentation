## Material-Design

This property applies a Material Design layout to the Entry-Field. With this layout, the placeholder text becomes a floating label when the field receives focus, and it enables the display of optional supporting text beneath the field. The text of the floating label and the supporting text are controlled by the [Md-Label](./Md-Label) and [Md-Supporting-Text](./Md-Supporting-Text) properties.

**Note -** Because the floating label and supporting text require additional vertical space, the field’s total height will exceed the value defined in the [Lines](./Lines) property.

Fields with a Material Design layout have a default left margin of 5 pixels unless they include a bitmap. You can change this margin by setting the [Margin-Width](./Margin-Width) property.

The border of fields with a Material Design layout is colored with the color specified by the [iscobol.gui.curr_border_color](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property. If this property is not set, then a blue color is used.

This property has three possible values:

|  |  |
| --- | --- |
| 0 | The field doesn’t have a Material Design layout (default) |
| 1 | The field has a boxed Material Design layout.<br>The box has rounded corners.<br>The rounding radius can be configured via the [Md-Radius](./Md-Radius) property |
| 2 | The field has an underlined Material Design layout |

**Note -** Using this property with a [MODIFY](../../../../Language-Reference/Procedure-Division-Statements/MODIFY) statement to change the layout after the control has been created is not supported.

**Example** - Define an entry-field control with a boxed Material Design layout

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     material-design 1
     md-label "Name"
     id 19
     .
```
