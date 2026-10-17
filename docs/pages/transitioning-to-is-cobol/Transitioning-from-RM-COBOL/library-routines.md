## Library routines

The following RM/COBOL library routines are supported by isCOBOL:

| Library Routine | Known Limitations and differences |
| --- | --- |
| C$CARG |  |
| C$CENTURY |  |
| C$DARG |  |
| C$DELAY |  |
| C$GETENV |  |
| C$GETLASTFILENAME |  |
| C$GETLASTFILEOP |  |
| C$GUICFG |  |
| C$MBAR | Hovering the mouse over the menu items doesn’t update the status bar, but shows a tool tip instead. |
| C$NARG |  |
| C$RBMENU | Hovering the mouse over the menu items doesn’t update the status bar, but shows a tool tip instead. |
| C$RERR |  |
| C$SBAR |  |
| C$SCRD |  |
| C$SCWR | The optional parameters ATTRIBUTE-CODES and PALETTE-TABLE are not supported. |
| C$SETDEVELOPMENTMODE | Mode must be “Absolute”. |
| C$SETENV |  |
| C$SHOW | Only the flags SW-HIDE and SW-SHOWNORMAL are supported. Any other flag is treated as SW-SHOWNORMAL. |
| C$TBAR | Icon files are not included in the runtime, they must be provided separately in the form of png files.Hovering the mouse over the buttons doesn’t update the status bar, but shows a tool tip instead. |
| C$WRU | The second and third parameters are always 0. In isCOBOL the routine returns the class name stripped of the "class" extension, not the Program-Id. |
| DELETE |  |
| P$CLEARDIALOG |  |
| P$CLEARFONT |  |
| P$DISABLEDIALOG |  |
| P$DISPLAYDIALOG |  |
| P$DRAWBITMAP | Mode must be “Absolute”. |
| P$DRAWBOX | Mode must be “Absolute”. |
| P$DRAWLINE | Mode must be “Absolute”. |
| P$ENABLEDIALOG |  |
| P$GETDEVICECAPABILITIES | Only these attributes are supported:<br>"Driver Version" return 0;<br>"Technology" returns 2 (Printer)<br>"Horizontal Size" horizontal size of the biggest supported page<br>"Vertical Size" vertical size of the biggest supported page<br>"Horizontal Resolution" Width of the biggest printable area, in dots.<br>"Vertical Resolution" Height of the biggest printable area, in dots.<br>"Logical Pixels X" maximum horizontal resolution in DPI<br>"Logical Pixels Y" maximum vertical resolution in DPI<br>"Aspect X" same as "Logical Pixels X"<br>"Aspect Y" same as "Logical Pixels Y"<br>"Aspect XY" Diagonal of a square whose sides are the 2 above<br>"Physical Width" same as "Horizontal Size"<br>"Physical Height" same as "Vertical Size"<br>"Physical Offset X" starting x offset of the printable are<br>"Physical Offset Y" starting y offset of the printable are<br>"Scaling Factor X" always 0<br>"Scaling Factor Y" always 0. |
| P$GETDIALOG | Only these attributes are supported:<br>"Print Dialog Copies"<br>"Device Name"<br>"Orientation"<br>"Paper Size"<br>"Device Mode Copies"<br>"Default Source"<br>"Print Quality"<br>"Color" |
| P$GETFONT | Only these attributes are supported:<br>"Height"<br>"Width"<br>"Escapement"<br>"Weight"<br>"Italic"<br>"Underline"<br>"Strike Out"<br>"Pitch"<br>"Face Name" |
| P$GETTEXTMETRICS | Only these attributes are supported:<br>"Height"<br>"Ascent"<br>"Descent"<br>"Internal Leading"<br>"External Leading"<br>"Average Character Width"<br>"Maximum Character Width"<br>"Weight"<br>"Italic"<br>"Underlined"<br>"Struck Out"<br>"Pitch" |
| P$NEWPAGE | Can’t specify orientation. |
| P$SETDEFAULTMODE |  |
| P$SETDEFAULTUNITS |  |
| P$SETDIALOG | Only these attributes are supported:<br>"Print Dialog Copies"<br>"Device Name"<br>"Orientation"<br>"Paper Size"<br>"Device Mode Copies"<br>"Default Source"<br>"Print Quality"<br>"Color" |
| P$SETDOCUMENTNAME |  |
| P$SETFONT | Only these attributes are supported:<br>"Height"<br>"Width"<br>"Escapement"<br>"Weight"<br>"Italic"<br>"Underline"<br>"Strike Out"<br>"Pitch"<br>"Face Name" |
| P$SETPEN |  |
| P$SETPOSITION | Mode must be “Absolute”. |
| P$SETTEXTCOLOR |  |
| P$SETTEXTPOSITION | Mode must be “Absolute”. |
| P$SETTOPMARGIN | The measure unit in "Character" is not supported |
| P$TEXTOUT | Mode must be “Absolute”. |
| RENAME |  |
| SYSTEM |  |

All the other routines must be replaced with the corresponding isCOBOL routine or with an isCOBOL syntax that has the same effect, if possible.

The following table lists the known solutions to obtain the same effect of RM/COBOL routines.

| RM/COBOL routine | isCOBOL solution |
| --- | --- |
| C$BITMAP | Use W$BITMAP with WBITMAP-DISPLAY op-code |
| C$GETSYSINFO | Use WIN$VERSION for Windows information. On other systems, call system APIs.<br>Use C$GETPID to retrieve the process id.<br>Use J$NETADDRESS to retrieve the computer name. |
| C$LOGICALAND | Use CBL_AND |
| C$LOGICALOR | Use CBL_OR |
| C$LOGICALXOR | Use CBL_XOR |
| C$MEMORYALLOCATE | Use M$ALLOC |
| C$MEMORYDEALLOCATE | Use M$FREE |
| C$PLAYSOUND | Use WIN$PLAYSOUND |
| C$SECUREHASH | Use A$ENCRYPT |
| C$TBAREN | Modify the ENABLE property of buttons in the TOOL-BAR |
| C$TBARSEQ | Modify BITMAP and BITMAP-NUMBER properties of buttons in the TOOL-BAR |
| C$TITLE | Modify the TITLE property of the WINDOW |

If the routine that you’re looking for doesn’t appear in the above list, contact Veryant’s support to discuss about possible solutions.
