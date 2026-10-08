## GUI

isCOBOL offers some additional features that allows you to produce complex and flexible graphical user interfaces. The programmer can take advantage of:

- New graphical controls like CHIPS-BOX, RIBBON and SLIDER.
- The ability to render html in most all controls. The following code snippet shows how to show an animated GIF on the screen using the LABEL control:

```cobol
03 LABEL
  line   2 
  col   25
  lines  5 cells
  size   9 cells
  title  '<html><img src="file:Files/lb.gif"></img></html>' 
  .
```

- The ability to create tooltips for controls, with the new HINT property.

```cobol
03 ENTRY-FIELD
   line     2 
   col      25
   size     9 cells
   value    w-name
   hint     "Write the name here"
   . 
```

- The ability to use RGB values to set colors; e.g.:

```cobol
03 LABEL
   line              2
   col               25
   size              9 cells
   title             "gray label" 
   background-color  rgb x#c0c0c0
   .
```

- The ability to load GIF, PNG as well of BMP and JPG pictures for use both on the screen and while printing.
- The ability to retrieve user selected text from an ENTRY-FIELD. The following code snippet retrieves the text selected by the user from the ENTRY-FIELD named ef-1:

```cobol
INQUIRE ef-1 SELECTION-TEXT w-text.
```

- The ability to create a mask to help the user inputing data.

```cobol
03 ENTRY-FIELD
   line     2 
   col      25
   size     9 cells
   value    w-date
   format-string "##/##/####"
   . 
```

- The ability to display vertical labels.

```cobol
03 LABEL
   vertical
   line     2 
   col      25
   lines    15 cells
   size     8 cells
   title    "vertical text"
   . 
```

- The ability to filter the GRID content according to an automatic search field that appears when you press CTRL-F.
- The ability to have [Filterable-Columns](./pagina_in_creazione) in the GRID.
- The ability to reorder and sort GRID columns (see [Reordering-Columns](./pagina_in_creazione) and [Sortable-Columns](./pagina_in_creazione) for details)
- The ability to copy the GRID content to clipboard and export it to xls/xlsx spreadsheets. See [Heading-Menu-Popup](./pagina_in_creazione).
- The ability to select multiple rows and columns in a GRID. See [Selection-Mode](./pagina_in_creazione).
- The ability to display more lines of text in a single GRID cell. [Alignment](./pagina_in_creazione) of the column with multiline text must be “H”.
- The ability to merge cells in the GRID header. See [Cell-Columns-Span](./pagina_in_creazione) and [Cell-Rows-Span](./pagina_in_creazione).
- The ability to mix different DATA-TYPES in the same column, for example:

```cobol
DATA-TYPES ("U(1)L(0)", "9(3)X(2)")
```

- The ability to display controls inside GRID cells as explained at [GRID](./pagina_in_creazione).
- The ability to protect GRID cells both with read-only and skip approaches (see [Row-Protection](./pagina_in_creazione), [Column-Protection](./pagina_in_creazione) and [Cell-Protection](./pagina_in_creazione) for details)
- The ability to show and hide GRID rows and columns dynamically (see [Row-Hiding](./pagina_in_creazione) and [Column-Hiding](./pagina_in_creazione) for details)
- TREE-VIEW items can be edited by the user.
- The ability to add icons to COMBO-BOX items.

```cobol
MODIFY ComboBoxHandle, ITEM = 1, BITMAP-NUMBER = 20
```

- The ability to add icons to TAB-CONTROL page labels.

```cobol
MODIFY TabControlHandle, TAB-INDEX = 1 BITMAP-NUMBER = 1
```

- The ability to dynamically add and remove pages on TAB-CONTROL ( see [Insertion-Index](./pagina_in_creazione) and [Tab-To-Delete](./pagina_in_creazione) for details)
- The ability to change the text of TAB-CONTROL page labels without recreating the page ( see [Tab-Text](./pagina_in_creazione) for details)
- The ability to disable a TAB-CONTROL page to prevent users from selecting it ( see [Tab-Enabled](./pagina_in_creazione) for details )
- A new style for TAB-CONTROL, [Allow-Container](./pagina_in_creazione), that allows to bind screen entries to TAB-CONTROL pages and have the page switch managed automatically by the runtime.
- A brand new graphical control: the [SLIDER](./pagina_in_creazione).
- The ability to intercept mouse events on BITMAP control (see [MSG-MOUSE-CLICKED](./pagina_in_creazione), [MSG-MOUSE-ENTER](./pagina_in_creazione) and [MSG-MOUSE-EXIT](./pagina_in_creazione) for details).
- The ability to interface [JAVA-BEAN](./pagina_in_creazione) controls.
- The ability to show a custom icon on graphical windows ( see [Icon](./pagina_in_creazione) for details ).
- The ability to add an icon to STATUS-BAR panels and to color them with different colors( see [Panel-Bitmap](./pagina_in_creazione), [Panel-Bitmap-Number](./pagina_in_creazione), [Panel-Bitmap-Width](./pagina_in_creazione), [Panel-Bitmap-Alignment](./pagina_in_creazione) and [Panel-Color](./pagina_in_creazione)). It’s also possible to align the panel text inside the panel (see [Panel-Alignment](./pagina_in_creazione)).
- The ability to show both text and icon on a PUSH-BUTTON (see [Title-Position](./pagina_in_creazione) for details).
- The ability to unplug the TOOL-BAR from the window with the MOVEABLE style.

```cobol
display tool-bar moveable
        handle toolbar-handle.
```

- The ability to create MDI windows. This means that multiple windows can be included into a single container window.

    The syntax to create the container is:

```cobol
display mdi-parent window
                [...]
                handle h-main.
```

    The syntax to create a window inside the container is:

```cobol
display mdi-child window
                 upon h-main
                 [...]
                handle h-child.
```

- The ability to create notification windows, useful to notify the user about an event:

```cobol
display notification window
        bottom right
        before time 500
        lines 5 size 40
        handle h-notification.
```

- The ability to pop up a list of possible values while the user is editing an ENTRY-FIELD (see [Proposal](./pagina_in_creazione)).
- The ability to display bitmaps inside an ENTRY-FIELD and to have events upon mouse over and mouse click on these bitmaps.
- The ability to show a placeholder text within ENTRY-FIELD and ComboBox.
- The ability to copy text from character based screens and to paste text to character based Accept.
The user can select text from the screen by dragging the mouse with left button hold. The text is automatically copied in the clipboard as soon as the user releases the mouse button. The user can also paste some text from the clipboard by pressing the middle mouse button (usually identified by the scroll wheel); the pasted text is put in the keyboard buffer and the active ACCEPT gets it.
- The ability to have more row headings in the Grid with the property [Num-Row-Headings](./pagina_in_creazione).
- The ability to intercept new events [MSG-ICONIFIED](./pagina_in_creazione) and [MSG-DEICONIFIED](./pagina_in_creazione) for the Window when user reduces the window to task bar or restores it.
- The ability to automatically scale a picture in the Bitmap control with the property [Bitmap-Scale](./pagina_in_creazione).
- An easier management of Tab-Control pages through the style [Allow-Container](./pagina_in_creazione).
- The ability to show a Tab-Control as an [Accordion](./pagina_in_creazione) container.
- The ability to create modern tool-bars, also known as [RIBBON](./pagina_in_creazione).
- The ability to color the background of a windows with a gradient effect, for example:

```cobol
      *a window whose background color goes from gray to white
      *the code mixes the use of rbg color values and COBOL color values 
           display standard graphical window
                   gradient-color-1 rgb x#c0c0c0
                   gradient-color-2 16
                   gradient-orientation 0
```

    Alternatively, a bitmap can be displayed on the background, for example:

```cobol
           display standard graphical window
                   background-bitmap-handle watermark-bmp
```

    The same background effects are applicable also to the following controls: 
    FRAME, LIST-BOX, RIBBON, SCROLL-PANE, TAB-CONTROL, TOOL-BAR and TREE-VIEW.

- The ability to dynamically add or remove controls on the screen via DISPLAY UPON and DESTROY statements. The new controls are included in the accept of the screen like if they were declared at the bottom of the Screen Section.
- The ability to specify the width in pixels and the color of the border of boxed controls through the properties *Border-Width* and *Border-Color*.
- The ability to attach a layout manager to the windows, to have an automatic layout adaptation when the user resizes the window. See [Layout managers](./pagina_in_creazione) for more information.
- The ability to obtain a tree [table view](./pagina_in_creazione) by adding the style Table-View to the Tree-View control.
- The ability to gather a set of graphical controls either into a [SCROLL-PANE](./pagina_in_creazione) or a [SPLIT-PANE](./pagina_in_creazione).
- The ability to load new records in a Grid while the user scrolls down. See the [Lod-Threshold](./pagina_in_creazione) property and the [MSG-LOAD-ON-DEMAND](./pagina_in_creazione) event.
- The ability to drag and drop content from and to graphical controls on the screen. See the [Drag-Mode](./pagina_in_creazione) property.
For a quick demonstration of most GUI features, launch the isCOBOL Demo program.
