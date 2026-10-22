### LABEL

| Properties | |
| --- | --- |
| (name) | Specifies the control name. This property is set automatically when the control is drawn. |
| border color | Opens a dialog that allows the user to choose the border color. <br>![](../../images/IDEreportBClr.png) |
| border style | BOXED...The border is shown<br>NO-BOX...The border is not shown |
| border width | Specifies the width of the border. |
| color | Opens a dialog that allows the user to choose the color. <br>![](../../images/IDEreportClr.png) |
| column | Specifies the X coordinate of the report item. |
| font | Opens a dialog that allows the user to choose the font. <br>![](../../images/IDEreportFont.png) |
| hyperlink | Specifies a URL to navigate if the control is clicked when displayed in a web browser. |
| justification | Center<br>Left<br>Right<br>Unaligned |
| line | Specifies the Y coordinate of the report item. |
| lines | Specifies the width of the report item. |
| lock | TRUE...Locks the control on the Report Designer so that you cannot move it anymore by dragging it with the mouse.<br>FALSE...You can move the control on the Report Designer by dragging it with the mouse. |
| print condition | Specifies a condition (e.g. WRK-USER=”Admin”) that avoids the Report item to be printed when false. |
| size | Specifies the width of the report item. |
| title | Specifies the text shown on the report item |
| visible | TRUE... The report item is visible<br>FALSE... The report item is hidden |

| Events | |
| --- | --- |
| No Events available. | |

| Exceptions | |
| --- | --- |
| No Exceptions available. | |

| Procedures | |
| --- | --- |
| AfterPrint | Allows the user to create a paragraph that is performed after the report item has been printed. |
| BeforePrint | Allows the user to create a paragraph that is performed before printing the report item. |

| Variables | |
| --- | --- |
| color variable | Numeric variable that hosts the color value. |
| hyperlink variable | Alphanumeric variable that hosts the hyperlink. |
| title variable | Numeric variable that hosts the title. |
| visible variable | Numeric variable that hosts the visible state. |
