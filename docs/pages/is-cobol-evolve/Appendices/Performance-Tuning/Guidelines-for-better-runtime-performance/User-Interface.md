### User Interface

The isCOBOL architecture separates the UI from the back end processing using a client/server logic. The UI is managed by the client part while the back end is managed by the server part. Every time the user interaction causes some COBOL code to be executed (e.g. the user leaves a field that has an After Procedure) and everytime the program must update the video or accept the user input, client/server traffic is generated.

When the client part and the server part are executed by two different JVM processes (e.g. in thin client) then the performance may be affected by the client/server communication and the below suggestions beneficial effects will be more evident.

The main objective is to reduce the number of embedded and event procedures handled by the program so that the user interface must not send too much information to the server part while the user is interacting with it. For example, if you take advantage of Before and After procedures to color the current Entry-Field while the user navigates on the screen, then you may think to instruct the runtime by setting [iscobol.gui.curr_bcolor](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_curr_bcolor) and [iscobol.gui.curr_fcolor](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_curr_fcolor) properties in the configuration instead of coding embedded procedures.

#### UI changes bufferization

isCOBOL includes an internal optimizer that gathers data of all DISPLAY and MODIFY (if the GIVING clause is omitted) statements and sends this data to the client

- when [iscobol.gui.cstimeout \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_cstimeout) expires
- when [iscobol.gui.csmaxbuffersize \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_csmaxbuffersize) is reached
- where either [WFLUSH-REFRESH](../../Library-Routines/W$FLUSH/WFLUSH-REFRESH) or [WFLUSH-ALLOW](../../Library-Routines/W$FLUSH/WFLUSH-ALLOW) W$FLUSH op-codes are called
- when user input is requested, i.e. due to an ACCEPT statement or after a message box has been displayed
- when the CBL_READ_SCR_CHATTRS routine is called, or the equivalent statement ACCEPT dest-item FROM SCREEN is performed
- when an INQUIRE is performed, unless [WFLUSH-INHIBIT](../../Library-Routines/W$FLUSH/WFLUSH-INHIBIT) W$FLUSH op-code was called. Note that not all INQUIREs cause network traffic, it depends if the Framework needs to communicate with the UI in order to retrieve the inquired attribute.
- when a MODIFY with GIVING clause is performed, except for TREE-VIEW’s ITEM-TO-ADD
- when a MODIFY of VISIBLE or ENABLED properties is performed on a window handle
- when a SET INPUT WINDOW or a SET I-O WINDOW is performed
- when a print file or a file whose class is “com.iscobol.io.RemoteRelative” is open
- when a CALL CLIENT is performed
- when events are generated client-side (it may happen in a multi-thread environment where the user interacts with the screen while another thread is performing MODIFY or INQUIRE that are being gathered by the optimizer)
- The same optimizer is not available for COBOL-WOW programs. COBOL-WOW programs can use the [WOWSTARTBUFFERING](../../Library-Routines/WOW-Routines/WOWSTARTBUFFERING) and [WOWSTOPBUFFERING](../../Library-Routines/WOW-Routines/WOWSTOPBUFFERING) library routines to control the buffering of UI changes.

#### Event Lists

isCOBOL also offers the ability to discard some events so that when they happen the client doesn’t communicate with the server. This feature is obtained by setting the EVENT-LIST and EXCLUDE-EVENT-LIST properties. See [Controls Reference](../../../User-Interface/Controls-Reference/Controls-Reference) for details.

The drag events of Grid control can be disabled also through the configuration property [iscobol.gui.grid.no_cell_drag (boolean) \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_grid_no_cell_drag) or the style [No-Cell-Drag](../../../User-Interface/Controls-Reference/GRID/Styles/No-Cell-Drag).

#### Good practice to load huge lists of proposals

The list of proposals for an Entry-Field control might be very large in some cases. Preloading this list before the user provides input is not recommended, as it consumes time and memory. Most of the items will likely be discarded once the user types a few characters.

When you have a large proposal list, it's better to load the list on demand. To do this, follow these steps:

- use the NTF-CHANGED event to intercept the text typed by the user; In the code of that event:
  - modify the PROPOSAL-DELAY property to a very high value, e.g. 10000
  - reset the current proposals list by modifying the RESET-PROPOSALS property
  - retrieve the proper proposals according to the text typed by the user and add them to the field by modifying the PROPOSAL property
  - restore the original delay by modifying the PROPOSAL-DELAY property to the value 500 (or whatever value it was set before you changed it to 10000).

#### Programming Tips

Some tips to write programs optimized for the client/server environment:

- use MODIFY instead of DISPLAY to update the screen. Modify acts on a single property, while DISPLAY redraws the whole control (or screen)
- if possible, avoid using the GIVING clause with MODIFY unless you’re using [Item-To-Add](../../../User-Interface/Controls-Reference/TREE-VIEW/Properties/Item-To-Add) in TREE-VIEW
- use absolute values for LINE, COLUMN, LINES and SIZE properties
- use the MASS-UPDATE feature when you need to load a Combo-Box, a Grid, a List-Box or a Tree-View. Using MASS-UPDATE when you need to change several controls on a Window will provide a smoother refresh.
- setting [iscobol.gui.curr_bcolor](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_curr_bcolor) and [iscobol.gui.curr_fcolor](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_curr_fcolor) in the configuration is preferable than changing the EntryField colors in its embedded procedures.
- setting [Row-Cursor-Color](../../../User-Interface/Controls-Reference/GRID/Properties/Row-Cursor-Color) (or [Row-Cursor-Background-Color](../../../User-Interface/Controls-Reference/GRID/Properties/Row-Cursor-Background-Color) and [Row-Cursor-Foreground-Color](../../../User-Interface/Controls-Reference/GRID/Properties/Row-Cursor-Foreground-Color)) in the Screen Section is preferable than changing the [Region-Color](../../../User-Interface/Controls-Reference/GRID/Properties/Region-Color) (or [Region-Background-Color](../../../User-Interface/Controls-Reference/GRID/Properties/Region-Background-Color) and [Region-Foreground-Color](../../../User-Interface/Controls-Reference/GRID/Properties/Region-Foreground-Color)) property inside Grid event procedures.
- use the [Search-Options](../../../User-Interface/Controls-Reference/GRID/Properties/Search-Options) and [Search-Text](../../../User-Interface/Controls-Reference/GRID/Properties/Search-Text) properties instead of scanning the Grid content with a loop of INQUIRE of the CELL-DATA property when you’re looking for a text in the Grid.
- use ACTION-COPY and ACTION-EXPORT instead of scanning the Grid content with a loop of INQUIRE of the CELL-DATA property if you need to implement the copy of the Grid content to a Excel spreadsheet or to the clipboard.
- huge processing cycles that periodically display the progress can be made faster by disabling the update of the UI by calling [WFLUSH-DISABLE-UI](../../Library-Routines/W$FLUSH/WFLUSH-DISABILE-UI) before the processing and then calling [WFLUSH-ENABLE-UI](../../Library-Routines/W$FLUSH/WFLUSH-ENABLE-UI) when the processing is completed.
- if a lot of INQUIREs must be performed (e.g. if you have a cycle that checks the content of each row in a Grid), consider buffering them through [WFLUSH-INHIBIT](../../Library-Routines/W$FLUSH/WFLUSH-REFRESH) and [WFLUSH-ALLOW](../../Library-Routines/W$FLUSH/WFLUSH-REFRESH).
- attach embedded procedures only to those controls where you actually need to do something when the focus is gained or lost and avoid defining embedded procedures on Screen group items as they would be executed for every control in the group.
- Use [Format-String](../../../User-Interface/Controls-Reference/ENTRY-FIELD/Properties/Format-String) on ENTRY-FIELD only if you actually need it and avoid using PIC if the picture doesn’t include any kind of editing (e.g. there’s no point in having PIC X(10) among ENTRY-FIELD’s properties). FORMAT-STRING and PIC generate client/server traffic.
- Delay the NTF-CHANGED event by setting [iscobol.gui.entryfield.notify_change_delay \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#gui_entryfield_notify_change_delay) in the configuration (if you wish to affect all the entry-fields) or by modifying the property [Notify-Change-Delay](../../../User-Interface/Controls-Reference/ENTRY-FIELD/Properties/Notify-Change-Delay) (if you wish to affect specific entry-fields). If the user types quickly, the runtime would generate too many NTF-CHANGED events. With this delay you can reduce the number of events generated.
