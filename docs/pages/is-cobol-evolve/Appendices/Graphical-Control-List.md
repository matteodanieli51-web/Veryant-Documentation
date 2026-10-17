# Graphical Control List

The following four tables represent supported Graphical Controls. Please refer to the isCOBOL Graphic Controls Reference manual for more details.

1. Table one contains the list of all Control and for each, the related properties, styles and events.
2. Table two contains the list of all properties and for each the controls that support that property.
3. Table three contains the list of all styles and for each the controls that support that style.
4. Table four contains the list of all events and for each the controls that support that event.
5. Table five contains the list of all properties and for each the statements allowed on that property.

## Table 1

This table shows the list of all properties, styles and events for each graphical control.

| Name | Properties | Styles | Events |
| --- | --- | --- | --- |
| [BAR](../User-Interface/Controls-Reference/BAR/BAR) | Col, Color, Colors, Column, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Id, Layout-data,Leading-Shift, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Position-Shift, Shading, Size, Trailing-Shift, Visible, Width. | Bold, Dashed, Dot-Dash, Dotted, Height-In-Cells, High, Highlight, Low, Lowlight, Notify-Mouse, No-Tab, Permanent, Standard, Temporary, Width-In-Cells. | MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT. |
| [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP) | Background-Color, Bitmap-End, Bitmap-Handle, Bitmap-Number, Bitmap-Raw-Height, Bitmap-Raw-Width, Bitmap-Scale, Bitmap-Start, Bitmap-Timer, Bitmap-Width, Col, Column, Css-Style-Name, Custom-Data, Drag-Mode, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Layout-data, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Size, Transparent-Color, Visible | Background-High, Background-Low, Background-Standard, Bold, Height-In-Cells, High, Highlight, Low, Lowlight, No-Tab, Notify-Mouse, Permanent, Standard, Temporary, Width-In-Cells. | MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT. |
| [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX) | Background-Color, Bitmap-Disabled, Bitmap-Disabled-Selected, Bitmap-Handle, Bitmap-Number, Bitmap-Pressed, Bitmap-Rollover, Bitmap-Rollover-Selected, Bitmap-Scale, Bitmap-Width, Border-Color, Border-Width, Check-Off-Value, Check-On-Value, Col, Color, Column, Css-Style-Name, Custom-Data, Disabled-Background-Color, Disabled-Color, Disabled-Foreground-Color, Drag-Mode, Enabled, Event-List, Exception-Value, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Layout-data, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Rollover-Background-Color, Rollover-Border-Color, Rollover-Color, Rollover-Foreground-Color, Size, Termination-Value, Title, Title-Position, Value, Visible. | Background-High, Background-Low, Background-Standard, Bitmap, Bold, Flat, Framed, Height-In-Cells, High, Highlight, Left-Text, Low, Lowlight, Multiline, No-Tab, Notify, Notify-Mouse, Permanent, Self-Act, Square, Standard, Temporary, Transparent, Unframed, Vtop, Width-In-Cells. | CMD-CLICKED, CMD-GOTO, CMD-HELP, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-VALIDATE. |
| [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) | Background-Color, Bitmap, Bitmap-Number, Bitmap-Width, Border-Color, Chips-Border-Width, Chips-Type, Chips-Radius, Chips-Rollover-Border-Width, Col, Color, Column, Custom-Data, Drag-Mode, Enabled, Font, Foreground-Color, Help-Id, Hint, Id, Item, Item-Background-Color, Item-Border-Color, Item-Color, Item-Foreground-Color, Item-Rollover-Background-Color, Item-Rollover-Color, Item-Rollover-Foreground-Color, Item-Text, Item-To-Add, Item-To-Delete, Last-Item, Layout-Data, Line, Lines, Mass-Update, Max-Heigth, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Reset-List, Size, Visible. | 3-D, Background-High, Background-Low, Background-Standard, Bold, Boxed, Height-In-Cells, High, Highlight, Low, Lowlight, No-Box, No-Tab, Notify-Mouse, Permanent, Temporary, Unsorted, Width-In-Cells. | CMD-CLICKED, MSG-CLOSE, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT. |
| [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX) | Background-Color, Bitmap-Handle, Bitmap-Number, Bitmap-Width, Col, Color, Column, Css-Style-Name, Cursor, Custom-Data, Drag-Mode, Enabled, Event-List, Exception-Value, Exclude-Event-List, Font, Foreground-Color, Help-Id, Input-Filter, Insertion-Index, Item, Item-Background-Color, Item-Color, Item-Foreground-Color, Item-Height, Item-Text, Item-To-Add, Item-To-Delete, Hidden-Data, Hint, Layout-data, Line, Lines, Mass-Update, Max-Height, Max-Text, Max-Width, Min-Height, Min-Width, Placeholder, Pop-Up Menu, Pos, Position, Query-Index, Reset-List, Selection-Background-Color, Selection-Color, Selection-Foreground-Color, Size, Termination-Value, Trunc-Value, Value, Visible. | Background-High, Background-Low, Background-Standard, Bold, Drop-Down, Drop-List, Height-In-Cells, High, Highlight, Low, Lower, Lowlight, No-Tab, Notify-Dblclick, Notify-Mouse, Notify-Selchange, Permanent, Standard, Static-List, Temporary, Unsorted, Upper, Width-In-Cells. | CMD-DBLCLICK, CMD-GOTO, CMD-HELP, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-VALIDATE, NTF-SELCHANGE. |
| [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) | Background-Color, Bitmap-Handle, Bitmap-Number, Bitmap-Width, Border-Color, Border-Width, Col, Color, Column, Css-Style-Name, Custom-Data, Decoration-Background, Display-Format, Drag-Mode, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Illegal-Date-Value, Layout-data, Line, Lines, Max-Height, Max-Val, Max-Width, Maxday-Characters, Min-Height, Min-Val, Min-Width, Pop-Up Menu, Pos, Position, Size, Sunday-Foreground, Value, Value-Format, Visible, Weekday-Foreground | Allow-Empty, Background-High, Background-Low, Background-Standard, Bold, Century-Date, Decoration-Background-Visible, Decoration-Borders-Visible, Height-In-Cells, High, Highlight, Long-Date, Low, Lowlight, No-F4, No-Tab, No-Updown, Notify-Change, Notify-Mouse, Numeric, Permanent, Read-Only, Right-Align, Short-Date, Spinner, Standard, Temporary, Time, Today-Button-Visible, Week-Of-Year-Visible, Width-In-Cells. | CMD-GOTO, CMD-HELP, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-VALIDATE, NTF-CHANGED |
| [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) | Action, Auto-Decimal, Background-Color, Bitmap-Disabled, Bitmap-Handle, Bitmap-Hint, Bitmap-Number, Bitmap-Rollover, Bitmap-Trailing-Disabled, Bitmap-Trailing-Hint, Bitmap-Trailing-Number, Bitmap-Trailing-Rollover, Bitmap-Width, Border-Color, Border-Width, Col, Color, Column, Css-Style-Name, Cursor, Cursor-Col, Cursor-Row, Custom-Data, Drag-Mode, Enabled, Event-List, Exclude-Event-List, Fill-Char, Font, Foreground-Color, Format-String, Help-Id, Hint, Id, Input-Filter, Layout-data, Line, Lines, Margin-Width, Material-Design, Max-Height, Max-Lines, Max-Text, Max-Val, Max-Width, Md-Label, Md-Radius, Md-Supporting-Text, Min-Height, Min-Val, Min-Width, Notify-Change-Delay, Placeholder, Pop-Up Menu, Pos, Position, Proposal, Proposal-Delay, Proposal-Filter-Type, Proposal-Index, Proposal-Min-Text, Proposal-To-Delete, Reset-Proposals, Selection-Text, Size, Spell-Checking, Text-Orientation, Text-Wrapping, Trunc-Value, Validation-Errmsg, Validation-Opts, Validation-Regexp Value, Visible, Visible-Proposal-Count. | 3-D, Auto, Auto-Spin, Background-High, Background-Low, Background-Standard, Bold, Boxed, Center, Centered, Height-In-Cells, High, Highlight, Left, Low, Lower, Lowlight, Multiline, No-Autosel, No-Box, No-Tab, No-Wrap, Notify-Change, Notify-Mouse, Numeric, Permanent, Proposals-Unsorted, Read-Only, Right, Secure, Spinner, Standard, Temporary, Upper, Use-Return, Use-Tab, Vscroll, Vscroll-bar, Width-In-Cells. | CMD-GOTO, CMD-HELP, MSG-BITMAP-CLICKED, MSG-BITMAP-DBLCLICK, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-SPIN-DOWN, MSG-SPIN-UP, MSG-VALIDATE, NTF-CHANGED. |
| [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) | Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Col, Color, Column, Css-Style-Name, Custom-Data, Event-List, Exclude-Event-List, Fill-Color, Fill-Color2, Fill-Percent, Font, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation, Help-Id, High-Color, Hint, Id, Layout-data, Line, Lines, Low-Color, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Size, Title, Title-Position, Visible. | Alternate, Background-High, Background-Low, Background-Standard, Bold, Engraved, Full-Height, Heavy, Height-In-Cells, High, Highlight, Low, Lowered, Lowlight, No-Tab, Notify-Mouse, Permanent, Raised, Rimmed, Standard, Temporary, Transparent, Very-Heavy, Width-In-Cells | MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT. |
| [GRID](../User-Interface/Controls-Reference/GRID/GRID) | Action, Alignment, Background-Color, Bitmap, Bitmap-Number, Bitmap-Trailing, Bitmap-Width, Border-Color, Border-Width, Cell-Alignment, Cell-Background-Color, Cell-Color, Cell-Columns-Span, Cell-Current-Background-Color, Cell-Current-Color, Cell-Current-Font, Cell-Current-Foreground-Color, Cell-Current-Protection, Cell-Data, Cell-Entry-Background-Color, Cell-Entry-Color, Cell-Entry-Foreground-Color, Cell-Font, Cell-Foreground-Color, Cell-Hint, Cell-Protection, Cell-Rows-Span, Cell-Secure, Cell-Selected-Background-Color, Cell-Selected-Color, Cell-Selected-Foreground-Color, Cells-Selected, Col, Color, Column, Column-Background-Color, Column-Color, Column-Dividers, Column-Filter, Column-Font, Column-Foreground-Color, Column-Headings-Height, Column-Headings-Layout, Column-Hiding, Column-Protection, Column-Selected-Background-Color, Column-Selected-Color, Column-Selected-Foreground-Color, Columns-Selected, Css-Style-Name, Cursor-Background-Color, Cursor-Color, Cursor-Foreground-Color, Cursor-Frame-Color, Cursor-Frame-Width, Cursor-X, Cursor-Y, Custom-Data, Data-Columns, Data-Types, Display-Columns, Divider-Color, Drag-Background-Color, Drag-Color, Drag-Foreground-Color, Drag-Mode, Editor-Show-Always, Enabled, End-Color, Entry-Reason, Event-List, Exclude-Event-List, Export-File-Format, Export-File-Name, Export-File-Open, File-Pos, Filter-Types, Finish-Reason, Font, Foreground-Color, Heading-Background-Color, Heading-Color, | 3-D, Adjustable-Columns, Auto, Background-High, Background-Low, Background-Standard, Bold, Boxed, Centered-Headings, Column-Headings, Filterable-Columns, Height-In-Cells, High, Highlight, Hscroll, Low, Lowlight, No-Box, No-Autosel, No-Cell-Drag, No-Tab, Notify-Mouse, Paged, Permanent, Reordering-Columns, Row-Headings, Sortable-Columns, Standard, Temporary, Tiled-Headings, Use-Tab, Vscroll, Width-In-Cells | CMD-GOTO, CMD-HELP, MSG-BEGIN-DRAG, MSG-BEGIN-ENTRY, MSG-BEGIN-HEADING-DRAG, MSG-BEGIN-HEADING-MENU-POPUP, MSG-BEGIN-SORT, MSG-BITMAP-CLICKED, MSG-BITMAP-DBLCLICK, MSG-CANCEL-ENTRY, MSG-COL-WIDTH-CHANGED, MSG-DRAG, MSG-DROP, MSG-END-DRAG, MSG-END-HEADING-DRAG, MSG-END-MENU, MSG-FINISH-ENTRY, MSG-FINISH-FILTER, MSG-FINISH-SORT, MSG-GD-DBLCLICK, MSG-GOTO-CELL, MSG-GOTO-CELL-DRAG, MSG-GOTO-CELL-MOUSE, MSG-GOTO-CELL-OUT-NEXT, MSG-GOTO-CELL-OUT-PREV, MSG-GRID-RBUTTON-DOWN, MSG-GRID-RBUTTON-UP, MSG-HEADING-DRAGGED, MSG-HEADING-CLICKED, MSG-HEADING-MENU-POPUP, MSG-INIT-MENU, MSG-LOAD-ON-DEMAND, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-PAGED-FIRST, MSG-PAGED-LAST, MSG-PAGED-NEXT, MSG-PAGED-NEXTPAGE, MSG-PAGED-PREV, MSG-PAGED-PREVPAGE, MSG-VALIDATE. |
| [GRID](../User-Interface/Controls-Reference/GRID/GRID) (continued) | Heading-Cursor-Background-Color, Heading-Cursor-Color, Heading-Cursor-Foreground-Color, Heading-Divider-Color, Heading-Font, Heading-Foreground-Color, Heading-Menu-Popup, Heading-Rollover-Background-Color, Heading-Rollover-Color, Heading-Rollover-Foreground-Color, Help-Id, Hidden-Data, Hint, Hscroll-Pos, Id, Input-Filter, Insert-Rows, Insertion-Index, Last-Row, Last-Row-View, Layout-data, Line, Lines, Lm-On-Columns, Lod-Threshold, Mass-Update, Max-Height, Max-Width,Min-Height, Min-Width, Model-To-View-Y, Mouse-Wheel-Scroll, Num-Col-Headings, Num-Row-Headings, Num-Rows, Pop-Up Menu, Pos, Position, Protection, Record-Data, Record-To-Add, Record-To-Delete, Region-Background-Color, Region-Color, Region-Foreground-Color, Reordering-Col-Index, Reset-Grid, Row-Background-Color, Row-Background-Color-Pattern, Row-Capacity, Row-Color, Row-Color-Pattern, Row-Cursor-Background-Color, Row-Cursor-Color, Row-Cursor-Foreground-Color, Row-Dividers, Row-Font, Row-Foreground-Color, Row-Foreground-Color-Pattern, Row-Hiding, Row-Protection, Row-Rollover-Background-Color, Row-Rollover-Color, Row-Rollover-Foreground-Color, Row-Selected-Background-Color, Row-Selected-Color, Row-Selected-Foreground-Color, Rows-Filtered, Rows-Per-Page, Rows-Selected, Search-Options, Search-Panel, Search-Text, Search-Text-In-View, Selection-Mode, |  |  |
| [GRID](../User-Interface/Controls-Reference/GRID/GRID) (continued) | Separation, Size, Sort-data, Sort-Types, Start-X, Start-Y, VPadding, View-Cursor-Y, View-To-Model-Y, Virtual-Width, Visible, Vscroll-Pos, X, Y. |  |  |
| [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL) | Background-Color, Col, Color, Column, Css-Base-Style-Name, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Js-Name, Layout-data, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Size, Value, Visible. | Background-High, Background-Low, Background-Standard, Bold, Height-In-Cells, High, Highlight, Low, Lowlight, No-Tab, Notify-Mouse, Permanent, Standard, Temporary, Width-In-Cells. | CMD-GOTO, CMD-HELP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-VALIDATE, NTF-IWC-EVENT |
| [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) | Background-Color, Border-Color, Border-Width, Clsid, Col, Column, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Init-Params, Init-Signature, Layout-data, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Object, Pop-Up Menu, Pos, Position, Size, Visible. | 3-D, Background-High, Background-Low, Background-Standard, Bold, Boxed, Height-In-Cells, High, Highlight, Low, Lowlight, No-Box, No-Tab, Notify-Mouse, Permanent, Self-Act, Standard, Use-Return, Use-Tab, Temporary, Width-In-Cells. | MSG-END-MENU, MSG-INIT-MENU, MSG-JB-EVENT, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT. |
| [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL) | Background-Color, Col, Color, Column, Css-Style-Name, Custom-Data, Drag-Mode, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Label-Offset, Layout-data, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Size, Title, Visible. | Background-High, Background-Low, Background-Standard, Bold, Bottom, Center, Centered, Height-In-Cells, High, Highlight, Left, Low, Lowlight, No-Key-Letter, No-Tab, Notify-Mouse, Permanent, Right, Standard, Temporary, Top, Transparent, Vertical, Width-In-Cells | MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT. |
| [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) | Action, Alignment, Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Border-Color, Border-Width, Col, Color, Column, Data-Columns, Css-Style-Name, Custom-Data, Display-Columns, Dividers, Drag-Mode, Enabled, Event-List, Exception-Value, Exclude-Event-List, Export-File-Format, Export-File-Name, Export-File-Open, Font, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation, Help-Id, Hint, Id, Hidden-Data, Insertion-Index, Item-Background-Color, Item-Color, Item-Foreground-Color, Item-Rollover-Background-Color, Item-Rollover-Color, Item-Rollover-Foreground-Color, Item-To-Add, Item-To-Delete, Item-Value, Layout-data, Line, Lines, Lm-On-Columns, Mass-Update, Max-Height, Max-Width, Min-Height, Min-Width, Mouse-Wheel-Scroll, Pop-Up Menu, Pos, Position, Query-Index, Reset-List, Row-Background-Color-Pattern, Row-Color-Pattern, Row-Foreground-Color-Pattern, Rows-Selected, Search-Panel, Selection-Background-Color, Selection-Color, Selection-Foreground-Color, Search-Text, Selection-Mode, Selection-Index, Separation, Size, Sort-Order, Termination-Value, Thumb-Position, Value, Visible. | 3-D, Background-High, Background-Low, Background-Standard, Bold, Boxed, Check-List, Height-In-Cells, High, Highlight, Low, Lower, Lowlight, No-Box, No-Tab, Notify-Dblclick, Notify-Selchange, Notify-Mouse, Paged, Permanent, Standard, Temporary, Unsorted, Upper, Width-In-Cells. | CMD-DBLCLICK, CMD-GOTO, CMD-HELP, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-VALIDATE, NTF-PL-FIRST, NTF-PL-LAST, NTF-PL-NEXT, NTF-PL-NEXTPAGE, NTF-PL-PREV, NTF-PL-PREVPAGE, NTF-PL-SEARCH, NTF-SELCHANGE. |
| [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) | Background-Color, Bitmap-Disabled, Bitmap-Handle, Bitmap-Number, Bitmap-Pressed, Bitmap-Rollover, Bitmap-Scale, Bitmap-Width, Border-Color, Border-Width, Col, Color, Column, Css-Style-Name, Custom-Data, Disabled-Background-Color, Disabled-Color, Disabeld-Foreground-Color, Drag-Mode, Enabled, Event-List, Exception-Value, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Layout-data, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Rollover-Background-Color, Rollover-Border-Color, Rollover-Color, Rollover-Foreground-Color, Size, Termination-Value, Title, Title-Position, Transparent-Color, Visible. | Background-High, Background-Low, Background-Standard, Bitmap, Bold, Bottom, Cancel-Button, Center, Default-Button, Escape-Button, Flat, Framed, Height-In-Cells, High, Highlight, Left, Low, Lowlight, Multiline, No-Auto-Default, No-Tab, Notify-Mouse, Ok-Button, On-Header, Permanent, Right, Self-Act, Square, Standard, Temporary, Top, Transparent, Unframed, Width-In-Cells. | CMD-CLICKED, CMD-GOTO, CMD-HELP, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-VALIDATE. |
| [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) | Background-Color, Bitmap-Disabled, Bitmap-Disabled-Selected, Bitmap-Handle, Bitmap-Number, Bitmap-Pressed, Bitmap-Rollover, Bitmap-Rollover-Selected, Bitmap-Scale, Bitmap-Width, Border-Color, Border-Width, Col, Color, Column, Css-Style-Name, Custom-Data, Disabled-Background-Color, Disabled-Color, Disabled-Foreground-Color, Drag-Mode, Enabled, Event-List, Exception-Value, Exclude-Event-List, Font, Foreground-Color, Group, Group-Value, Help-Id, Hint, Id, Layout-data, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Rollover-Background-Color, Rollover-Border-Color, Rollover-Color, Rollover-Foreground-Color, Size, Termination-Value, Title, Title-Position, Value, Visible. | Background-High, Background-Low, Background-Standard, Bitmap, Bold, Flat, Framed, Height-In-Cells, High, Highlight, Left-Text, Low, Lowlight, Multiline, No-Tab, Notify, Notify-Mouse, Permanent, Self-Act, Square, Standard, Temporary, Transparent, Unframed, Vtop, Width-In-Cells. | CMD-CLICKED, CMD-GOTO, CMD-HELP, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-VALIDATE. |
| [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON) | Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Bitmap-Handle, Bitmap-Number, Bitmap-Width, Collapse, Color, Css-Style-Name, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation, Header-Align, Hint, Id, Insertion-Index, Layout-Manager, Lines, Pop-Up Menu, Reset-Tabs, Tab-Enabled, Tab-Hint, Tab-Index, Tab-Text, Tab-To-Add, Tab-To-Delete, Value, Visible. | Background-High, Background-Low, Background-Standard, Bold, Height-In-Cells, High, Highlight, Laf-Colors, Low, Lowlight, No-Tab, Notify-Mouse, Permanent, Standard, Temporary, Width-In-Cells. | CMD-TABCHANGED, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT. |
| [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR) | Background-Color, Col, Color, Column, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Layout-data, Line, Lines, Max-Height, Max-Val, Max-Width, Min-Height, Min-Width, Min-Val, Min-Width, Page-Size, Pop-Up Menu, Pos, Position, Size, Visible. | Background-High, Background-Low, Background-Standard, Bold, Height-In-Cells, High, Highlight, Horizontal, Low, Lowlight, No-Tab, Notify-Mouse, Permanent, Standard, Temporary, Track-Thumb, Width-In-Cells. | CMD-GOTO, CMD-HELP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-SB-THUMB, MSG-VALIDATE. |
| [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE) | Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Border-Color, Col, Color, Column, Css-Base-Style-Name, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation, Hint, Id, Max-Height, Min-Height, Max-Width, Min-Width, Layout-Data, Line, Lines, Pop-Up Menu, Pos, Position, Size, Visible. | Background-High, Background-Low, Background-Standard, Bold, Boxed, Height-In-Cells, High, Highlight, Low, Lowlight, No-Box, No-Tab, Notify-Mouse, Permanent, Standard, Temporary, Transparent, Width-In-Cells. | MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT. |
| [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) | Background-Color, Col, Color, Column, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Id, Layout-data, Line, Lines, Major-Tick-Spacing, Max-Height, Max-Val, Max-Width, Min-Height, Min-Val, Min-Width, Minor-Tick-Spacing, Pop-Up Menu, Pos, Position, Size, Value, Visible. | Background-High, Background-Low, Background-Standard, Bold, Height-In-Cells, High, Highlight, Horizontal, Inverted, Low, Lowlight, No-Tab, Notify-Mouse, Permanent, Show-Labels, Show-Ticks, Standard, Temporary, Transparent, Width-In-Cells. | CMD-GOTO, CMD-HELP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-SL-THUMB, MSG-VALIDATE. |
| [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE) | Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Border-Color, Col, Color, Column, Css-Base-Style-Name, Css-Style-Name, Custom-Data, Divider-Location, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation, Hint, Id, Layout-Data, Line, Lines, Max-Divider-Location, Max-Height, Max-Width, Min-Divider-Location, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Size, Split-Orientation, Visible. | Background-High, Background-Low, Background-Standard, Bold, Boxed, Height-In-Cells, High, Highlight, Low, Lowlight, No-Box, No-Tab, Notify-Mouse, Permanent, Standard, Temporary, Transparent, Width-In-Cells. | MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, NTF-SP-RESIZED. |
| [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) | Background-Color, Col, Color, Column, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Help-Id, Hint, Layout-data, Line, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Panel-Bitmap, Panel-Bitmap-Alignment, Panel-Background-Color, Panel-Bitmap-Number, Panel-Bitmap-Width, Panel-Color, Panel-Foreground-Color, Panel-Hint, Panel-Index, Panel-Style, Panel-Text, Panel-Widths, Pop-Up Menu, Pos, Position, Visible. | Background-High, Background-Low, Background-Standard, Bold, Grip, High, Highlight, Low, Lowlight, No-Tab, Notify-Mouse, Permanent, Standard, Temporary. | CMD-GOTO, CMD-HELP, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-ST-DBLCLICK, MSG-VALIDATE. |
| [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) | Active-Tab-Background-Color, Active-Tab-Border-Color, Active-Tab-Border-Width, Active-Tab-Color, Active-Tab-Foreground-Color, Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Bitmap-Handle, Bitmap-Number, Bitmap-Width, Col, Color, Column, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation, Help-Id, Hint, Id, Insertion-Index, Line, Layout-data, Lines, Max-Height, Max-Width, Min-Height, Min-Width, Pop-Up Menu, Pos, Position, Reset-Tabs, Size, Tab-Alignment, Tab-Background-color, Tab-Border-Color, Tab-Border-Width, Tab-Color, Tab-Delay, Tab-Enabled, Tab-Foreground-Color, Tab-Hint, Tab-Index, Tab-Rollover-Color, Tab-Text, Tab-To-Add, Tab-To-Delete, Tab-Widths, Value, Visible. | Accordion, Allow-Container, Background-High, Background-Low, Background-Standard, Bold, Bottom, Close-Buttons, Height-In-Cells, High, Highlight, Low, Lowlight, Multiline, No-Box, No-Tab, Notify-Mouse, Permanent, Relative-Offset, Standard, Tab-Flat, Temporary, Vertical, Width-In-Cells. | CMD-HELP, CMD-TABCHANGED, MSG-CLOSE, MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-VALIDATE. |
| [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR) | Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Cell Height, Cell Size, Cell Width, Color, Control Font, Custom-Data, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation,Help-Id, Hint, Id, Layout-Mana, Lines, Pop-Up Menu. | Background-High, Background-Low, Background-Standard, Bold, High, Highlight, Laf-Colors, Low, Lowlight, Moveable, Multiline, Standard. | MSG-END-MENU, MSG-INIT-MENU, MSG-MENU-INPUT. |
| [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) | Action, Alignment, Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Bitmap-Handle, Bitmap-Number, Bitmap-Trailing, Bitmap-Width, Border-Color, Border-Width, Col, Color, Column, Column-Hiding, Css-Style-Name, Custom-Data, Data-Columns, Display-Columns, Drag-Mode, Enabled, End-Color, Ensure-Visible, Event-List, Exclude-Event-List, Expand, Font, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation, Has-Children, Heading-Background-Color, Heading-Color, Heading-Font, Heading-Foreground-Color, Heading-Menu-Popup, Heading-Rollover-Background-Color, Heading-Rollover-Color, Heading-Rollover-Foreground-Color, Help-Id, Hidden-Data, Hint, Id, Item, Item-Background-Color, Item-Color, Item-Foreground-Color, Item-Hint, Item-Rollover-Background-Color, Item-Rollover-Color, Item-Rollover-Foreground-Color, Item-Text, Item-To-Add, Item-To-Delete, Item-To-Empty, Items-Selected, Layout-data, Line, Lines, Lm-On-Columns, Mass-Update, Max-Height, Max-Width, Min-Height, Min-Width, Next-Item, Parent, Placement, Pop-Up Menu, Pos, Position, Record-Data, Reset-List, Search-Panel, Selection-Background-Color, Selection-Color, Selection-Foreground-Color, Selection-Mode, Size, Sort-Types, Value, Virtual-Width, Visible, VPadding, X. | 3-D, Adjustable-Columns, Background-High, Background-Low, Background-Standard, Bold, Boxed, Buttons, Centered-Headings, Column-Headings, Flat, Height-In-Cells, High, Highlight, Lines-At-Root, Low, Lowlight, No-Box, No-Tab, Notify-Mouse, Permanent, Reordering-Columns, Show-Lines, Show-Sel-Always, Sortable-Columns, Standard, Temporary, Tiled-Headings, Width-In-Cells. | CMD-GOTO, CMD-HELP, MSG-BEGIN-ENTRY, MSG-CANCEL-ENTRY, MSG-DRAG, MSG-DROP, MSG-END-MENU, MSG-FINISH-ENTRY, MSG-INIT-MENU, MSG-MENU-INPUT, MSG-MOUSE-CLICKED, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-TV-DBLCLICK, MSG-TV-EXPANDED, MSG-TV-EXPANDING, MSG-TV-SELCHANGE, MSG-TV-SELCHANGE-OUT-NEXT, MSG-TV-SELCHANGE-OUT-PREV, MSG-TV-SELCHANGING, MSG-VALIDATE. |
| [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) | Busy, Col, Column, Css-Style-Name, Custom-Data, Enabled, Event-List, Exclude-Event-List, Font, Go-Back, Go-Forward, Go-Home, Go-Search, Help-Id, Hint, Id, Layout-data, Line, Lines, Max-Height, Max-Progress, Max-Width, Min-Height, Min-Width, Pos, Position, Progress, Refresh, Size, Status-Text, Stop-Browser, Title, Value, Visible. | Background-High, Background-Low, Background-Standard, Bold, Height-In-Cells, High, Highlight, Low, Lowlight, No-Msg-Before-Navigate, No-Tab, Notify-Mouse, Permanent, Standard, Temporary, Use-Alt, Use-Return, Width-In-Cells. | MSG-MOUSE-ENTER, MSG-MOUSE-EXIT, MSG-WB-BEFORE-NAVIGATE, MSG-WB-DOWNLOAD-BEGIN, MSG-WB-DOWNLOAD-COMPLETE, MSG-WB-NAVIGATE-COMPLETE, MSG-WB-PROGRESS-CHANGE, MSG-WB-STATUS-TEXT-CHANGE, MSG-WB-TITLE-CHANGE. |
| [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) | Action, Background-Bitmap-Handle, Background-Bitmap-Scale, Background-Color, Cell Height, Cell Size, Cell Width, Col, Color, Column, Control Font, Custom-Data, Enabled, Font, Foreground-Color, Gradient-Color-1, Gradient-Color-2, Gradient-Orientation, Help-Id, Hint, Icon, Layout-manager, Line, Lines, Mass-Update, Max-Lines, Max-Size, Min-Lines, Min-Size, Pop-Up Menu, Pos, Position, Screen-Index, Screen Col, Screen Column, Screen Line, Screen Pos, Screen Position, Size, Title, Visible, Window-State. | Auto-Resize, Background-High, Background-Low, Background-Standard, Bind To Thread, Blank, Bold, Boxed, Controls-Uncropped, High, Highlight, Iwc-Dockable, Laf-Colors, Link To Thread, Low, Lowlight, Modal, Modeless, No Scroll, No Wrap, No-Close, Permanent, Resizable, Reverse, Shadow, Standard, System Menu, Temporary, Title-Bar, User-Colors, User-Gray, User-White. | CMD-ACTIVATE, CMD-CLOSE, MSG-CLOSE, MSG-DEICONIFIED, MSG-END-MENU, MSG-ICONIFIED, MSG-INIT-MENU, MSG-MENU-INPUT, NTF-RESIZED. |

## Table 2

This table shows the list of all graphical controls for each property.

| | |
| --- | --- |
| Action | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Active-Tab-Background-Color <span id="active_tab_background_color"></span> | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Active-Tab-Border-Color | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Active-Tab-Border-Width | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Active-Tab-Color | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Active-Tab-Foreground-Color <span id="active_tab_foreground_color"></span> | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Alignment | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Auto-Decimal | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Background-Bitmap-Handle <span id="background_bitmap_handle"></span> | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Background-Bitmap-Scale <span id="background_bitmap_scale"></span> | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Background-Color <span id="background_color"></span> | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Bitmap | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Bitmap-Disabled | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Bitmap-Disabled-Selected | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Bitmap-End | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP) |
| Bitmap-Handle | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Bitmap-Hint | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Bitmap-Number | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Bitmap-Pressed | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Bitmap-Raw-Height | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP) |
| Bitmap-Raw-Width | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP) |
| Bitmap-Rollover | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Bitmap-Rollover-Selected | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Bitmap-Scale | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Bitmap-Start | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP) |
| Bitmap-Timer | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP) |
| Bitmap-Trailing | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Bitmap-Trailing-Disabled | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Bitmap-Trailing-Hint | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Bitmap-Trailing-Number | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Bitmap-Trailing-Rollover | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Bitmap-Width | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Border-Color <span id="border_color"></span> | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE) |
| Border-Width | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Busy | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Cell Height | [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Cell Size | [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Cell Width | [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Cell-Alignment | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Background-Color <span id="cell_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Columns-Span | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Current-Background-Color <span id="cell_current_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Current-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Current-Font | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Current-Foreground-Color <span id="cell_current_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Current-Protection | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Data | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Entry-Background-Color <span id="cell_entry_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Entry-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Entry-Foreground-Color <span id="cell_entry_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Font | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Foreground-Color <span id="cell_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Hint | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Protection | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Rows-Span | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Secure | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Selected-Background-Color <span id="cell_selected_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Selected-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cell-Selected-Foreground-Color <span id="cell_selected_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cells-Selected | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Check-Off-Value | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX) |
| Check-On-Value | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX) |
| Chips-Border-Width | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) |
| Chips-Type | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) |
| Chips-Radius | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) |
| Chips-Rollover-Border-Width | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) |
| Clsid | [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) |
| Col | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Color <span id="color"></span> | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Colors <span id="colors"></span> | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Column | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX) |
| Column-Background-Color <span id="column_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Dividers | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Filter | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Font | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Foreground-Color <span id="column_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Headings-Height | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Headings-Layout | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Hiding | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Column-Protection | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Selected-Background-Color <span id="column_selected_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Selected-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Column-Selected-Foreground-Color <span id="column_selected_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Columns-Selected | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Control Font | [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Css-Base-Style-Name | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Css-Style-Name | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Cursor | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX) |
| Cursor-Background-Color <span id="cursor_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cursor-Col | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Cursor-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cursor-Foreground-Color <span id="cursor_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cursor-Frame-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cursor-Frame-Width | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cursor-Row | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Cursor-X | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Cursor-Y | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Custom-Data | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Data-Columns | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Data-Types | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Decoration-Background | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Disabled-Background-Color <span id="disabled_background_color"></span> | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Disabled-Color | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Disabled-Foreground-Color <span id="disabled_foreground_color"></span> | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Display-Columns | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Display-Format | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Divider-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Divider-Location | [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE) |
| Dividers | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Drag-Background-Color <span id="drag_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Drag-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Drag-Foreground-Color <span id="drag_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Drag-Mode | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Editor-Show-Always | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Enabled | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| End-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Ensure-Visible | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Entry-Reason | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Event-List <span id="event_list"></span> | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Exception-Value | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Exclude-Event-List <span id="exlude_event_list"></span> | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Expand | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Export-File-Format | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Export-File-Name | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Export-File-Open | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| File-Pos | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Fill-Char | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Fill-Color | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Fill-Color2 | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Fill-Percent | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Filter-Types | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Finish-Reason | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Font | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Foreground-Color <span id="foreground_color"></span> | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Format-String | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Go-Back | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Go-Forward | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Go-Home | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Go-Search | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Gradient-Color-1 <span id="gradient_color1"></span> | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Gradient-Color-2 | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Gradient-Orientation <span id="gradient_orientation"></span> | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Group | [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Group-Value | [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Has-Children | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Heading-Background-Color <span id="heading_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Heading-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Heading-Cursor-Background-Color <span id="heading_cursor_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Heading-Cursor-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Heading-Cursor-Foreground-Color <span id="heading_cursor_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Heading-Divider-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Heading-Font | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Heading-Foreground-Color <span id="heading_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Heading-Menu-Popup | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Heading-Rollover-Background-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Heading-Rollover-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Heading-Rollover-Foreground-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Help-Id | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Hidden-Data | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| High-Color | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Hint | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Hscroll-Pos | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Icon | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Id | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), , [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Illegal-Date-Value | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Init-Params | [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) |
| Init-Signature | [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) |
| Input-Filter | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Insertion-Index | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Insert-Rows | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Item | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Background-Color <span id="item_background_color"></span> | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Border-Color | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) |
| Item-Color | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Foreground-Color <span id="item_foreground_color"></span> | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Height | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX) |
| Item-Hint | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Rollover-Background-Color | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Rollover-Border-Color | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) |
| Item-Rollover-Color | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Rollover-Foreground-Color | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Text | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-To-Add | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-To-Delete | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-To-Empty | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Item-Value | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Items-Selected | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Js-Name | [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), |
| Label-Offset | [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL) |
| Last-Item | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) |
| Last-Row | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Last-Row-View | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Layout-data | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Layout-manager | [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Leading-Shift | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Line | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Lines | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Lm-On-Columns | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Lod-Threshold | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Low-Color | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Major-Tick-Spacing | [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| Margin-Width | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Mass-Update | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Material-Design | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Maxday-Characters | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Max-Divider-Location | [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE) |
| Max-Height | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Max-Lines | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Max-Progress | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Max-Size | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Max-Text | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Max-Val | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| Max-Width | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Md-Label | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Md-Radius | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Md-Supporting-Text | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Min-Divider-Location | [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE) |
| Min-Height | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Min-Lines | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Min-Size | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Min-Val | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| Min-Width | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Minor-Tick-Spacing | [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| Model-To-View-Y | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Mouse-Wheel-Scroll | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Next-Item | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Notify-Change-Delay | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Num-Col-Headings | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Num-Row-Headings | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Num-Rows | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Object | [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) |
| Page-Size | [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR) |
| Panel-Background-Color <span id="panel_background_color"></span> | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Bitmap | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Bitmap-Alignment | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Bitmap-Number | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Bitmap-Width | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Color | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Foreground-Color <span id="panel_foreground_color"></span> | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Hint | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Index | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Style | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Text | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Panel-Widths | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Parent | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Placeholder | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Placement | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Pop-Up Menu | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX) [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Pos | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Position | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Position-Shift | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Progress | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Proposal | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Proposal-Delay | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Proposal-Filter-Type | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Proposal-Index | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Proposal-Min-Text | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Proposal-To-Delete | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Protection | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Query-Index | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Record-Data | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Record-To-Add | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Record-To-Delete | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Refresh | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Region-Background-Color <span id="region_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Region-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Region-Foreground-Color <span id="region_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Reordering-Col-Index | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Reset-Grid | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Reset-List | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Reset-Proposals | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Reset-Tabs | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Rollover-Background-Color <span id="rollover_background_color"></span> | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Rollover-Border-Color | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Rollover-Color | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Rollover-Foreground-Color <span id="rollover_foreground_color"></span> | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Row-Background-Color <span id="row_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Background-Color-Pattern <span id="row_background_color_pattern"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Row-Capacity | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Color-Pattern | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Row-Cursor-Background-Color <span id="row_cursor_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Cursor-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Cursor-Foreground-Color <span id="row_cursor_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Dividers | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Font | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Foreground-Color <span id="row_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Foreground-Color-Pattern <span id="row_foreground_color_pattern"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Row-Hiding | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Protection | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Rollover-Background-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Rollover-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Rollover-Foreground-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Selected-Background-Color <span id="row_selected_background_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Selected-Color | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Row-Selected-Foreground-Color <span id="row_selected_foreground_color"></span> | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Rows-Per-Page | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Rows-Selected | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Screen Col | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Screen Column | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Screen Line | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Screen Pos | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Screen Position | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Screen-Index | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Search-Options | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Search-Panel | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Search-Text | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Search-Text-In-View | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Selection-Background-Color <span id="selection_background_color"></span> | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Selection-Color | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Selection-Foreground-Color <span id="selection_foreground_color"></span> | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Selection-Index | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Selection-Mode | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Selection-Text | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Separation | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Shading | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Size | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Sort-data | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Sort-types | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Sort-Order | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Spell-Checking | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Split-Orientation | [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE) |
| Start-X | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Start-Y | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Status-Text | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Stop-Browser | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Sunday-Foreground | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Tab-Alignment | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Background-Color <span id="tab_background_color"></span> | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Border-Color | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Border-Width | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Color | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Delay | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Enabled | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Foreground-Color <span id="tab_foreground_color"></span> | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Hint | [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Index | [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Rollover-Color | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Text | [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-To-Add | [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-To-Delete | [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Tab-Widths | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Termination-Value | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Text-Orientation | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Text-Wrapping | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Thumb-Position | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Title | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Title-Position | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Trailing-Shift | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Transparent-Color | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Trunc-Value | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Validation-Errmsg | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Validation-Opts | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Validation-Regexp | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Value | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Value-Format | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| View-Cursor-Y | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| View-To-Model-Y | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Virtual-Width | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Visible | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Visible-Proposal-Count | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| VPadding | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Vscroll-Pos | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Weekday-Foreground | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Width | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Window-State | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| X | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Y | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| | |

## Table 3

This table shows the list of all graphical controls for each style.

| | |
| --- | --- |
| 3-D | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Adjustable-Columns | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Accordion | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Allow-Container | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Allow-Empty | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Alternate | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Auto | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Auto-Resize | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Auto-Spin | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Background-High | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Background-Low | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Background-Standard | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Bind To Thread | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Bitmap | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Blank | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Bold | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Bottom | [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Boxed | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Buttons | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Cancel-Button | [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Center | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Centered | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL) |
| Centered-Headings | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Century-Date | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Check-List | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Close-Buttons | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Column-Headings | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Controls-Uncropped | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Dashed | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Decoration-Background-Visible | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Decoration-Borders-Visible | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Default-Button | [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Dot-Dash | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Dotted | [BAR](../User-Interface/Controls-Reference/BAR/BAR) |
| Drop-Down | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX) |
| Drop-List | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX) |
| Engraved | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Escape-Button | [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Filterable-Columns | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Flat | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Framed | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Full-Height | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Grip | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| Heavy | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Height-In-Cells | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| High | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON) [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Highlight | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Horizontal | [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| Hscroll | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Inverted | [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| Iwc-Dockable | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Laf-Colors | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR) |
| Left | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Left-Text | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Lines-At-Root | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Link To Thread | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Long-Date | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Low | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Lower | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Lowered | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Lowlight | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Modal | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Modeless | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Moveable | [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR) |
| Multiline | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR) |
| No Scroll | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| No Wrap | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| No-Auto-Default | [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| No-Autosel | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| No-Box | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| No-Cell-Drag | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| No-Close | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| No-F4 | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| No-Key-Letter | [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL) |
| No-Msg-Before-Navigate | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| No-Tab | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| No-Wrap | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Notify | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Notify-Change | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Notify-Dblclick | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Notify-Mouse | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Notify-Selchange | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| No-Updown | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Numeric | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Ok-Button | [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| On-Header | [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Paged | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Permanent | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Raised | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Read-Only | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Relative-Offset | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Reordering-Columns | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Resizable | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Reverse | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Right | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Right-Align | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Rimmed | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Row-Headings | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Secure | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Self-Act | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) |
| Shadow | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Short-Date | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Show-Labels | [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| Show-Lines | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Show-Sel-Always | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Show-Ticks | [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| Sortable-Columns | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Spinner | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Square | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Standard | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Static-List | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX) |
| System Menu | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Tab-Flat | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Temporary | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Tiled-Headings | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| Time | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Title-Bar | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Today-Button-Visible | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Top | [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON) |
| Track-Thumb | [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR) |
| Transparent | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE) |
| Unframed | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Unsorted | [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| Upper | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| User-Colors | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Use-Alt | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Use-Return | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| User-Gray | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| User-White | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| Use-Tab | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| Vertical | [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| Very-Heavy | [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME) |
| Vscroll | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| Vscroll-Bar | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| Vtop | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| Week-Of-Year-Visible | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY) |
| Width-In-Cells | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| | |

## Table 4

This table shows the list of all graphical controls for each event.

| | |
| --- | --- |
| CMD-ACTIVATE | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| CMD-CLICKED | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) |
| CMD-CLOSE | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| CMD-DBLCLICK | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| CMD-GOTO | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| CMD-HELP | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| CMD-TABCHANGED | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON) |
| MSG-BEGIN-DRAG | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-BEGIN-ENTRY | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-BEGIN-HEADING-DRAG | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-BEGIN-HEADING-MENU-POPUP | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-BEGIN-SORT | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-BITMAP-CLICKED | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-BITMAP-DBLCLICK | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-CANCEL-ENTRY | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-CLOSE | [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| MSG-COL-WIDTH-CHANGED | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-DEICONIFIED | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| MSG-DRAG | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-DROP | [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-END-DRAG | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-END-HEADING-DRAG | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-END-MENU | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| MSG-FINISH-ENTRY | [GRID](../User-Interface/Controls-Reference/GRID/GRID), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-FINISH-FILTER | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-FINISH-SORT | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-GOTO-CELL | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-GD-DBLCLICK | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-GOTO-CELL-DRAG | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-GOTO-CELL-MOUSE | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-GOTO-CELL-OUT-NEXT | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-GOTO-CELL-OUT-PREV | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-GRID-RBUTTON-DOWN | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-GRID-RBUTTON-UP | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-HEADING-CLICKED | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-HEADING-DBLCLICK | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-HEADING-DRAGGED | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-HEADING-MENU-POPUP | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-ICONIFIED | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| MSG-INIT-MENU | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| MSG-JB-EVENT | [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) |
| MSG-LOAD-ON-DEMAND | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-MENU-INPUT | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TOOL-BAR](../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| MSG-MOUSE-CLICKED | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-MOUSE-DBLCLICK | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) |
| MSG-MOUSE-ENTER | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| MSG-MOUSE-EXIT | [BAR](../User-Interface/Controls-Reference/BAR/BAR), [BITMAP](../User-Interface/Controls-Reference/BITMAP/BITMAP), [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [CHIPS-BOX](../User-Interface/Controls-Reference/CHIPS-BOX/CHIPS-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [FRAME](../User-Interface/Controls-Reference/FRAME/FRAME), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [JAVA-BEAN](../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN), [LABEL](../User-Interface/Controls-Reference/LABEL/LABEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [RIBBON](../User-Interface/Controls-Reference/RIBBON/RIBBON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SCROLL-PANE](../User-Interface/Controls-Reference/SCROLL-PANE/SCROLL-PANE), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [SPLIT-PANE](../User-Interface/Controls-Reference/SPLIT-PANE/SPLIT-PANE), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW), [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| MSG-PAGED-FIRST | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-PAGED-LAST | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-PAGED-NEXT | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-PAGED-NEXTPAGE | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-PAGED-PREV | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-PAGED-PREVPAGE | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-ROW-HEIGHT-CHANGED | [GRID](../User-Interface/Controls-Reference/GRID/GRID) |
| MSG-SB-THUMB | [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR) |
| MSG-SL-THUMB | [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER) |
| MSG-SPIN-DOWN | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| MSG-SPIN-UP | [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| MSG-ST-DBLCLICK | [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) |
| MSG-TV-DBLCLICK | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-TV-EXPANDED | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-TV-EXPANDING | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-TV-SELCHANGE | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-TV-SELCHANGE-OUT-NEXT | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-TV-SELCHANGE-OUT-PREV | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-TV-SELCHANGING | [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-VALIDATE | [CHECK-BOX](../User-Interface/Controls-Reference/CHECK-BOX/CHECK-BOX), [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD), [GRID](../User-Interface/Controls-Reference/GRID/GRID), [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX), [PUSH-BUTTON](../User-Interface/Controls-Reference/PUSH-BUTTON/PUSH-BUTTON), [RADIO-BUTTON](../User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON), [SCROLL-BAR](../User-Interface/Controls-Reference/SCROLL-BAR/SCROLL-BAR), [SLIDER](../User-Interface/Controls-Reference/SLIDER/SLIDER), [STATUS-BAR](../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR), [TAB-CONTROL](../User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL), [TREE-VIEW](../User-Interface/Controls-Reference/TREE-VIEW/TREE-VIEW) |
| MSG-WB-BEFORE-NAVIGATE | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| MSG-WB-DOWNLOAD-BEGIN | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| MSG-WB-DOWNLOAD-COMPLETE | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| MSG-WB-NAVIGATE-COMPLETE | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| MSG-WB-PROGRESS-CHANGE | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| MSG-WB-STATUS-TEXT-CHANGE | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| MSG-WB-TITLE-CHANGE | [WEB-BROWSER](../User-Interface/Controls-Reference/WEB-BROWSER/WEB-BROWSER) |
| NTF-CHANGED | [DATE-ENTRY](../User-Interface/Controls-Reference/DATE-ENTRY/DATE-ENTRY), [ENTRY-FIELD](../User-Interface/Controls-Reference/ENTRY-FIELD/ENTRY-FIELD) |
| NTF-IWC-EVENT | [IWC-PANEL](../User-Interface/Controls-Reference/IWC-PANEL/IWC-PANEL) |
| NTF-PL-FIRST | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| NTF-PL-LAST | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| NTF-PL-NEXT | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| NTF-PL-NEXTPAGE | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| NTF-PL-PREV | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| NTF-PL-PREVPAGE | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| NTF-PL-SEARCH | [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| NTF-RESIZED | [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) |
| NTF-SELCHANGE | [COMBO-BOX](../User-Interface/Controls-Reference/COMBO-BOX/COMBO-BOX), [LIST-BOX](../User-Interface/Controls-Reference/LIST-BOX/LIST-BOX) |
| | |

## Table 5

This table shows the list of all properties and when to use them; during the control creation (display), the modifications and inquires made by the program later.

| Property | Display | Modify | Inquire | Notes |
| --- | --- | --- | --- | --- |
| Action | x | x |  |  |
| Active-Tab-Background-Color | x | x | x |  |
| Active-Tab-Border-Color | x | x | x |  |
| Active-Tab-Border-Width | x | x | x |  |
| Active-Tab-Color | x | x | x |  |
| Active-Tab-Foreground-Color | x | x | x |  |
| Alignment | x | x |  |  |
| Auto-Decimal | x | x | x |  |
| Background-Bitmap-Handle | x | x | x |  |
| Background-Bitmap-Scale | x | x | x |  |
| Background-Color | x | x | x | This property can’t be modified or inquired on the [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) control. |
| Bitmap | x | x |  |  |
| Bitmap-Disabled | x | x | x |  |
| Bitmap-Disabled-Selected | x | x | x |  |
| Bitmap-End | x | x | x |  |
| Bitmap-Handle | x | x | x |  |
| Bitmap-Hint | x | x | x |  |
| Bitmap-Number | x | x | x |  |
| Bitmap-Pressed | x | x | x |  |
| Bitmap-Raw-Height |  |  | x |  |
| Bitmap-Raw-Width |  |  | x |  |
| Bitmap-Rollover | x | x | x |  |
| Bitmap-Rollover-Selected | x | x | x |  |
| Bitmap-Scale | x | x | x |  |
| Bitmap-Start | x | x | x |  |
| Bitmap-Timer | x | x | x |  |
| Bitmap-Trailing | x | x |  |  |
| Bitmap-Trailing-Disabled | x | x | x |  |
| Bitmap-Trailing-Hint | x | x | x |  |
| Bitmap-Trailing-Number | x | x | x |  |
| Bitmap-Trailing-Rollover | x | x | x |  |
| Bitmap-Width | x | x | x |  |
| Border-Color | x | x | x |  |
| Border-Width | x | x | x |  |
| Busy |  |  | x |  |
| Cell Height | x |  |  |  |
| Cell Size | x |  |  |  |
| Cell Width | x |  |  |  |
| Cell-Alignment | x | x | x |  |
| Cell-Background-Color | x | x | x |  |
| Cell-Color | x | x | x |  |
| Cell-Columns-Span | x | x |  | Preferably use modify instead of display for setting this property |
| Cell-Current-Background-Color |  |  | x |  |
| Cell-Current-Color |  |  | x |  |
| Cell-Current-Font |  |  | x |  |
| Cell-Current-Foreground-Color |  |  | x |  |
| Cell-Current-Protection |  |  | x |  |
| Cell-Data | x | x | x |  |
| Cell-Entry-Background-Color | x | x | x |  |
| Cell-Entry-Color | x | x | x |  |
| Cell-Entry-Foreground-Color | x | x | x |  |
| Cell-Font | x | x | x |  |
| Cell-Foreground-Color |  | x | x |  |
| Cell-Hint |  | x | x |  |
| Cell-Protection |  | x | x |  |
| Cell-Rows-Span | x | x |  | Preferably use modify instead of display for setting this property |
| Cell-Secure | x | x | x |  |
| Cell-Selected-Background-Color | x | x | x |  |
| Cell-Selected-Color | x | x | x |  |
| Cell-Selected-Foreground-Color | x | x | x |  |
| Cells-Selected |  |  | x |  |
| Check-Off-Value | x | x | x |  |
| Check-On-Value | x | x | x |  |
| Chips-Border-Width | x | x | x |  |
| Chips-Type | x |  | x |  |
| Chips-Radius | x | x | x |  |
| Chips-Rollover-Border-Width | x | x | x |  |
| Clsid | x |  |  |  |
| Col | x | x | x |  |
| Color | x | x | x | This property can’t be modified or inquired on the [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) control. |
| Colors | x | x | x |  |
| Column | x | x | x |  |
| Column-Background-Color |  | x | x |  |
| Column-Color |  | x | x |  |
| Column-Dividers | x | x |  |  |
| Column-Filter | x | x | x | The property can be inquired and modified only when Filter-Types is 3. |
| Column-Font |  | x | x |  |
| Column-Foreground-Color |  | x | x |  |
| Column-Headings-Height |  | x | x |  |
| Column-Headings-Layout |  | x | x |  |
| Column-Hiding |  | x | x |  |
| Column-Protection |  | x | x |  |
| Column-Selected-Background-Color | x | x | x |  |
| Column-Selected-Color | x | x | x |  |
| Column-Selected-Foreground-Color | x | x | x |  |
| Columns-Selected | x | x | x |  |
| Control Font | x |  |  |  |
| Css-Style-Name | x | x |  |  |
| Cursor | x | x | x |  |
| Cursor-Background-Color | x | x | x |  |
| Cursor-Col | x | x | x |  |
| Cursor-Color | x | x | x |  |
| Cursor-Foreground-Color | x | x | x |  |
| Cursor-Frame-Color | x | x | x |  |
| Cursor-Frame-Width | x | x | x |  |
| Cursor-Row | x | x | x |  |
| Cursor-X | x | x | x |  |
| Cursor-Y | x | x | x |  |
| Custom-Data | x | x | x |  |
| Data-Columns | x | x |  |  |
| Data-Types | x | x |  |  |
| Decoration-Background | x | x | x |  |
| Disabled-Background-Color | x | x | x |  |
| Disabled-Color | x | x | x |  |
| Disabled-Foreground-Color | x | x | x |  |
| Display-Columns | x | x | x |  |
| Display-Format | x | x | x |  |
| Divider-Color | x | x | x |  |
| Divider-Location | x | x | x |  |
| Dividers | x | x |  |  |
| Drag-Background-Color | x | x | x |  |
| Drag-Color | x | x | x |  |
| Drag-Foreground-Color | x | x | x |  |
| Drag-Mode | x | x | x |  |
| Editor-Show-Always | x | x |  |  |
| Enabled | x | x | x |  |
| End-Color | x | x | x |  |
| Ensure-Visible |  | x |  |  |
| Entry-Reason |  |  | x |  |
| Event-List | x | x |  |  |
| Exception-Value | x | x | x |  |
| Exclude-Event-List | x | x |  |  |
| Expand |  | x |  |  |
| Export-File-Format | x | x | x |  |
| Export-File-Name | x | x | x |  |
| Export-File-Open | x | x | x |  |
| File-Pos | x | x | x |  |
| Fill-Char | x | x | x |  |
| Fill-Color | x | x | x |  |
| Fill-Color2 | x | x | x |  |
| Fill-Percent | x | x | x |  |
| Filter-Types | x | x | x |  |
| Finish-Reason |  |  | x |  |
| Font | x | x | x | This property can’t be modified or inquired on the [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) control. |
| Foreground-Color | x | x | x | This property can’t be modified or inquired on the [WINDOW](../User-Interface/Controls-Reference/WINDOW/WINDOW) control. |
| Format-String | x | x | x |  |
| Gradient-Color-1 | x | x | x |  |
| Gradient-Color-2 | x | x | x |  |
| Gradient-Orientation | x | x | x |  |
| Go-Back |  | x |  |  |
| Go-Forward |  | x |  |  |
| Go-Home |  | x |  |  |
| Go-Search |  | x |  |  |
| Group | x | x | x |  |
| Group-Value | x | x | x |  |
| Has-Children |  | x | x |  |
| Heading-Background-Color | x | x | x |  |
| Heading-Color | x | x | x |  |
| Heading-Cursor-Background-Color | x | x | x |  |
| Heading-Cursor-Color | x | x | x |  |
| Heading-Cursor-Foreground-Color | x | x | x |  |
| Heading-Divider-Color | x | x | x |  |
| Heading-Font | x | x | x |  |
| Heading-Foreground-Color | x | x | x |  |
| Heading-Menu-Popup | x | x | x |  |
| Heading-Rollover-Background-Color | x | x | x |  |
| Heading-Rollover-Color | x | x | x |  |
| Heading-Rollover-Foreground-Color | x | x | x |  |
| Help-Id | x | x | x |  |
| Hidden-Data |  | x | x |  |
| High-Color | x | x | x |  |
| Hint | x | x | x |  |
| Hscroll-Pos | x | x | x |  |
| Icon | x |  |  |  |
| Id | x | x | x |  |
| Init-Params | x |  |  |  |
| Init-Signature | x |  |  |  |
| Input-Filter | x | x | x |  |
| Insertion-Index |  | x | x |  |
| Insert-Rows |  | x |  |  |
| Item |  | x | x |  |
| Item-Background-Color |  | x | x |  |
| Item-Border-Color |  | x | x |  |
| Item-Color |  | x | x |  |
| Item-Foreground-Color |  | x | x |  |
| Item-Height | x | x |  |  |
| Item-Hint |  | x | x |  |
| Item-Rollover-Background-Color |  | x |  |  |
| Item-Rollover-Border-Color |  | x |  |  |
| Item-Rollover-Color |  | x |  |  |
| Item-Rollover-Foreground-Color |  | x |  |  |
| Item-Text |  | x | x |  |
| Item-To-Add | x | x |  | Preferably use modify instead of display for setting this property |
| Item-To-Delete |  | x |  |  |
| Item-To-Empty |  | x |  |  |
| Item-Value |  | x | x |  |
| Items-Selected | x | x | x |  |
| Js-Name | x |  |  |  |
| Label-Offset | x | x | x |  |
| Last-Item |  |  | x |  |
| Last-Row |  |  | x |  |
| Last-Row-View |  |  | x |  |
| Layout-data | x | x | x |  |
| Layout-manager | x |  |  |  |
| Leading-Shift | x | x |  |  |
| Line | x | x | x |  |
| Lines | x | x | x |  |
| Lm-On-Columns | x | x |  |  |
| Lod-Threshold | x | x | x |  |
| Low-Color | x | x | x |  |
| Major-Tick-Spacing | x | x | x |  |
| Margin-Width | x | x | x |  |
| Mass-Update | x | x | x | Preferably use modify instead of display for setting this property |
| Material-Design | x |  | x |  |
| Maxday-Characters | x | x | x |  |
| Max-Divider-Location | x | x | x |  |
| Max-Height | x | x | x |  |
| Max-Lines | x | x | x |  |
| Max-Progress | x | x | x |  |
| Max-Size | x | x | x |  |
| Max-Text | x | x | x |  |
| Max-Val | x | x | x |  |
| Md-Label | x | x | x |  |
| Md-Radius | x | x | x |  |
| Md-Supporting-Text | x | x | x |  |
| Max-Width | x | x | x |  |
| Min-Divider-Location | x | x | x |  |
| Min-Height | x | x | x |  |
| Min-Lines | x | x | x |  |
| Minor-Tick-Spacing | x | x | x |  |
| Min-Size | x | x | x |  |
| Min-Val | x | x | x |  |
| Min-Width | x | x | x |  |
| Model-To-View-Y |  |  | x |  |
| Mouse-Wheel-Scroll | x | x | x |  |
| Next-Item |  | x |  |  |
| Notify-Change-Delay | x | x | x |  |
| Num-Col-Headings | x | x | x |  |
| Num-Row-Headings | x | x | x |  |
| Num-Rows | x | x | x |  |
| Object | x |  |  |  |
| Page-Size | x | x | x |  |
| Panel-Background-Color |  | x | x |  |
| Panel-Bitmap |  | x | x |  |
| Panel-Bitmap-Alignment |  | x | x |  |
| Panel-Bitmap-Number |  | x | x |  |
| Panel-Bitmap-Width |  | x | x |  |
| Panel-Color |  | x | x |  |
| Panel-Foreground-Color |  | x | x |  |
| Panel-Hint |  | x | x |  |
| Panel-Index |  | x | x |  |
| Panel-Style |  | x | x |  |
| Panel-Text |  | x | x |  |
| Panel-Widths | x | x |  |  |
| Parent |  | x |  |  |
| Placeholder | x | x | x |  |
| Placement |  | x |  |  |
| Pop-Up Menu | x | x |  |  |
| Pos | x | x | x |  |
| Position | x | x | x |  |
| Position-Shift | x | x | x |  |
| Progress | x | x | x |  |
| Proposal | x | x |  |  |
| Proposal-Delay | x | x | x |  |
| Proposal-Filter-Type | x | x | x |  |
| Proposal-Index |  | x | x |  |
| Proposal-Min-Text | x | x | x |  |
| Proposal-To-Delete |  | x |  |  |
| Protection | x | x | x |  |
| Query-Index |  | x |  |  |
| Record-Data | x | x | x | Preferably use modify instead of display for setting this property |
| Record-To-Add | x | x |  | Preferably use modify instead of display for setting this property |
| Record-To-Delete |  | x |  |  |
| Refresh | x | x | x |  |
| Region-Background-Color |  | x | x |  |
| Region-Color |  | x | x |  |
| Region-Foreground-Color |  | x | x |  |
| Reordering-Col-Index | x | x | x |  |
| Reset-Grid |  | x |  |  |
| Reset-List |  | x |  |  |
| Reset-Proposals |  | x |  |  |
| Reset-Tabs |  | x |  |  |
| Rollover-Background-Color | x | x | x |  |
| Rollover-Border-Color | x | x | x |  |
| Rollover-Color | x | x | x |  |
| Rolover-Foreground-Color | x | x | x |  |
| Row-Background-Color |  | x | x |  |
| Row-Background-Color-Pattern | x | x |  |  |
| Row-Capacity |  |  | x |  |
| Row-Color |  | x | x |  |
| Row-Color-Pattern | x | x |  |  |
| Row-Cursor-Background-Color |  | x | x |  |
| Row-Cursor-Color |  | x | x |  |
| Row-Cursor-Foreground-Color |  | x | x |  |
| Row-Dividers | x | x |  |  |
| Row-Font |  | x | x |  |
| Row-Foreground-Color |  | x | x |  |
| Row-Foreground-Color-Pattern | x | x |  |  |
| Row-Hiding |  | x | x |  |
| Row-Protection |  | x | x |  |
| Row-Rollover-Background-Color | x | x | x |  |
| Row-Rollover-Color | x | x | x |  |
| Row-Rollver-Foreground-Color | x | x | x |  |
| Row-Selected-Background-Color | x | x | x |  |
| Row-Selected-Color | x | x | x |  |
| Row-Selected-Foreground-Color | x | x | x |  |
| Rows-Filtered |  |  | x |  |
| Rows-Per-Page | x | x | x |  |
| Rows-Selected | x | x | x |  |
| Screen Col | x |  |  |  |
| Screen Column | x |  |  |  |
| Screen Line | x |  |  |  |
| Screen Pos | x |  |  |  |
| Screen Position | x |  |  |  |
| Screen-Index | x | x | x |  |
| Search-Options | x | x | x |  |
| Search-Panel | x | x |  |  |
| Search-Text |  | x |  |  |
| Search-Text-In-View |  | x |  |  |
| Selection-Background-Color | x | x | x |  |
| Selection-Color | x | x | x |  |
| Selection-Foreground-Color | x | x | x |  |
| Selection-Index | x | x | x |  |
| Selection-Mode | x | x | x |  |
| Selection-Text |  |  | x |  |
| Separation | x | x |  |  |
| Shading | x | x |  |  |
| Size | x | x | x |  |
| Sort-Data | x | x | x |  |
| Sort-Types | x | x | x |  |
| Sort-Order | x | x | x |  |
| Spell-Checking | x | x | x |  |
| Split-Orientation | x |  | x |  |
| Start-X |  | x |  |  |
| Start-Y |  | x |  |  |
| Status-Text | x | x | x |  |
| Stop-Browser |  | x |  |  |
| Sunday-Foreground | x | x | x |  |
| Tab-Alignment |  | x | x |  |
| Tab-Background-Color | x | x | x |  |
| Tab-Border-Color | x | x | x |  |
| Tab-Border-Width | x | x | x |  |
| Tab-Color | x | x | x |  |
| Tab-Delay | x | x | x |  |
| Tab-Enabled |  | x | x |  |
| Tab-Foreground-Color | x | x | x |  |
| Tab-Hint | x | x | x |  |
| Tab-Index | x | x | x |  |
| Tab-Rollover-Color | x | x | x |  |
| Tab-Text |  | x | x |  |
| Tab-To-Add | x | x |  | Preferably use modify instead of display for setting this property |
| Tab-To-Delete |  | x |  |  |
| Tab-Widths | x | x | x |  |
| Termination-Value | x | x | x |  |
| Text-Orientation | x | x | x |  |
| Text-Wrapping | x | x | x |  |
| Thumb-Position | x | x | x |  |
| Title | x | x | x |  |
| Title-Position | x | x | x |  |
| Trailing-Shift | x | x | x |  |
| Transparent-Color | x | x | x |  |
| Trunc-Value |  |  | x |  |
| Validation-Errmsg | x | x | x |  |
| Validation-Opts | x | x | x |  |
| Validation-Regexp | x | x | x |  |
| Value | x | x | x |  |
| Value-Format | x | x | x |  |
| View-Cursor-Y |  |  | x |  |
| View-To-Model-Y |  |  | x |  |
| Virtual-Width | x | x | x |  |
| Visible | x | x | x |  |
| Visible-Proposal-Count | x | x | x |  |
| VPadding | x | x | x |  |
| Vscroll-Pos | x | x | x |  |
| Weekday-Foreground | x | x | x |  |
| Width | x | x | x |  |
| Window-State |  |  | x |  |
| X |  | x | x |  |
| Y |  | x | x |  |
