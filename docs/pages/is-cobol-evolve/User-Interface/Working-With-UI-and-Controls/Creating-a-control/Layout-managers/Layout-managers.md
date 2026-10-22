## Layout managers

isCOBOL includes a layout manager facility that can be applied to help manage some of the tricky aspects of a screen's layout. A layout manager is a specialized piece of software that is attached to a window and that manages the placement and size of controls in that window. Individual layout managers have their own rules regarding how controls are sized and placed.

By default, a window does not have a layout manager attached to it. For such windows, controls are sized and placed according to their Line, Column, Lines and Size properties. When a layout manager is attached to a window, the layout manager determines the size and placement of controls, although it is free to use the Line, Column, Lines and Size properties to help make decisions. A control can provide additional information about itself, including special size and placement parameters, to the layout manager through the Layout-Data property. The precise meaning of Layout-Data varies from layout manager to layout manager.

Layout managers operate whenever a new control is placed in the window or the window is resized.

Layout managers can be applied on Window, Tool-Bar and Ribbon through the Layout-Manager property. isCOBOL supports the following layout mangers:

- [LM-RESIZE](./LM-RESIZE)
- [LM-RESPONSIVE](./LM-RESPONSIVE)
- [LM-SCALE](./LM-SCALE)
- [LM-WRAP](./LM-WRAP)
- [LM-ZOOM](./LM-ZOOM)

The [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook includes the data items that you can use to set the Layout-Manger property.
