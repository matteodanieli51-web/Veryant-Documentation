## Controls background

Most of the graphical controls can only have a [Background-Color](../../../Appendices/Graphical-Control-List#background_color).

[FRAME](../../Controls-Reference/FRAME/FRAME), [LIST-BOX](../../Controls-Reference/LIST-BOX/LIST-BOX), [RIBBON](../../Controls-Reference/RIBBON/RIBBON), [SCROLL-PANE](../../Controls-Reference/SCROLL-PANE/SCROLL-PANE), [TAB-CONTROL](../../Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../../Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../../Controls-Reference/TREE-VIEW/TREE-VIEW) and [WINDOW](../../Controls-Reference/WINDOW/WINDOW), instead, provide different background possibilities.

They can have three types of background:

- a single opaque background color, specified by [Background-Color](../../../Appendices/Graphical-Control-List#background_color),
- a gradient effect specified by the [Gradient-Color-1](../../../Appendices/Graphical-Control-List#gradient_color1), [Gradient-Color-1](../../../Appendices/Graphical-Control-List#gradient_color1) and [Gradient-Orientation](../../../Appendices/Graphical-Control-List#gradient_orientation),
- a background image specified by [Background-Bitmap-Handle](../../../Appendices/Graphical-Control-List#background_bitmap_handle) and [Background-Bitmap-Scale](../../../Appendices/Graphical-Control-List#background_bitmap_scale).

These backgrounds can’t be combined on the same control, only one of them can be used. If more than one background is specified, they are applied according to the following list of priorities. Items are listed from the most important to the least important:

1. the background image
2. the gradient effect
3. the background color

When scroll-bars are displayed on the control, allowing the user to change the visible content, the background doesn’t change along with the content of the control, but it remain fixed on the visible area of the control.
