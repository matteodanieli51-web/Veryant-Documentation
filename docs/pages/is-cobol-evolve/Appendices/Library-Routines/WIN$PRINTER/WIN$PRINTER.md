## WIN$PRINTER

The WIN$PRINTER library routine provides a number of functions to manage printers and print jobs.

### Syntax:

```cobol
 CALL "WIN$PRINTER" USING opCode
                          parameters
                   GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| opCode | Function to be executed. Valid values, defined in [isprint.def](../../Copybooks/isprint.def).<br>The WIN$PRINTER functions can be divided in two groups: printer management functions and print job management functions. Print job management functions require an X11 display.<br>Functions are listed below: |  |
|  | Printer management functions |  |
|  | [WINPRINT-GET-CURRENT-INFO](./WINPRINT-GET-CURRENT-INFO) | Retrieve information concerning the currently selected printer. A more complete set of information can be retrieved with the [WINPRINT-GET-CURRENT-INFO-EX](./WINPRINT-GET-CURRENT-INFO-EX) function. |
|  | [WINPRINT-GET-CURRENT-INFO-EX](./WINPRINT-GET-CURRENT-INFO-EX) | Retrieve complete information concerning the currently selected printer. |
|  | [WINPRINT-GET-NO-ASYNC-JOBS](./WINPRINT-GET-NO-ASYNC-JOBS) | Retrieve the number of asynchronous print jobs. |
|  | [WINPRINT-GET-NO-PRINTERS](./WINPRINT-GET-NO-PRINTERS) | Retrieve the number of printers installed on the host system. |
|  | [WINPRINT-GET-PRINTER-INFO](./WINPRINT-GET-PRINTER-INFO) | Retrieve information concerning a specific printer. |
|  | [WINPRINT-GET-PRINTER-INFO-EX](./WINPRINT-GET-PRINTER-INFO-EX) | Retrieve complete information concerning a specific printer. |
|  | [WINPRINT-GET-PRINTER-MEDIA](./WINPRINT-GET-PRINTER-MEDIA) | Returns the supported trays and paper sizes. |
|  | [WINPRINT-SET-ATTRIBUTE](./WINPRINT-SET-ATTRIBUTE/WINPRINT-SET-ATTRIBUTE) | Set PDF file attributes. |
|  | [WINPRINT-SET-PRINTER](./WINPRINT-SET-PRINTER) | Select a printer and set some of its features. Use the [WINPRINT-SET-PRINTER-EX](./WINPRINT-SET-PRINTER-EX) function to set more features. |
|  | [WINPRINT-SET-PRINTER-AS](./WINPRINT-SET-PRINTER-AS) | In an Application Server environment this function redirects the print job on the server machine or the client machine. By default, print jobs are redirected on the client machine. |
|  | [WINPRINT-SET-PRINTER-EX](./WINPRINT-SET-PRINTER-EX) | Select a printer and set its features. |
|  | [WINPRINT-SETUP](./WINPRINT-SETUP) | Show a dialog window to choose the current printer. |
|  | [WINPRINT-SUPPORTED](./WINPRINT-SUPPORTED) | Check if the host system supports the WIN$PRINTER library routine. |
|  | [WINPRINT-UPDATE-PRINTERS](./WINPRINT-UPDATE-PRINTERS) | Reloads the list of available printers. |
|  | Print job management functions |  |
|  | [WINPRINT-CANCEL-JOB](./WINPRINT-CANCEL-JOB) | Cancel the print job. |
|  | [WINPRINT-CLEAR-DATA-COLUMNS](./WINPRINT-CLEAR-DATA-COLUMNS) | Erase any column setting previously defined by the [WINPRINT-SET-DATA-COLUMNS](./WINPRINT-SET-DATA-COLUMNS) function. |
|  | [WINPRINT-CLEAR-PAGE-COLUMNS](./WINPRINT-CLEAR-PAGE-COLUMNS) | Erase any page setting previously defined by the [WINPRINT-SET-PAGE-COLUMN](./WINPRINT-SET-PAGE-COLUMN) function. |
|  | [WINPRINT-GET-PAGE-LAYOUT](./WINPRINT-GET-PAGE-LAYOUT) | Retrieve the number of lines and columns currently available. |
|  | [WINPRINT-GRAPH-BRUSH](./WINPRINT-GRAPH-BRUSH) | Set the fill-area of the shape drawn by [WINPRINT-GRAPH-DRAW](./WINPRINT-GRAPH-DRAW). |
|  | [WINPRINT-GRAPH-DRAW](./WINPRINT-GRAPH-DRAW) | Draw a line or a box. |
|  | [WINPRINT-GRAPH-PEN](./WINPRINT-GRAPH-PEN) | Set the border of the shape drawn by [WINPRINT-GRAPH-DRAW](./WINPRINT-GRAPH-DRAW). |
|  | [WINPRINT-PRINT-BITMAP](./WINPRINT-PRINT-BITMAP) | Print an image. |
|  | [WINPRINT-SET-BACKGROUND-COLOR](./WINPRINT-SET-BACKGROUND-COLOR) | Set the text background color. |
|  | [WINPRINT-SET-CURSOR](./WINPRINT-SET-CURSOR) | Change the cursor position. |
|  | [WINPRINT-SET-CUSTOM-PAPER](./WINPRINT-SET-CUSTOM-PAPER) | Sets the paper size. |
|  | [WINPRINT-SET-DATA-COLUMNS](./WINPRINT-SET-DATA-COLUMNS) | Set the starting position of information in the print buffer for each column, starting at 1. |
|  | [WINPRINT-SET-FONT](./WINPRINT-SET-FONT) | Set the font to be used by the subsequent [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statements. |
|  | [WINPRINT-SET-HEADER-FOOTER](./WINPRINT-SET-HEADER-FOOTER) | Print information on each page header and footer. |
|  | [WINPRINT-SET-LINES-PER-PAGE](./WINPRINT-SET-LINES-PER-PAGE) | Changes the number of printable lines per page. |
|  | [WINPRINT-SET-MARGINS](./WINPRINT-SET-MARGINS) | Set page margins. |
|  | [WINPRINT-SET-PAGE-COLUMN](./WINPRINT-SET-PAGE-COLUMN) | Split page into columns and set columns' settings. |
|  | [WINPRINT-SET-STD-FONT](./WINPRINT-SET-STD-FONT) | Select one of the pre-defined font to be used by the subsequent [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statements. |
|  | [WINPRINT-SET-TEXT-COLOR](./WINPRINT-SET-TEXT-COLOR) | Set the text color. |
| parameters | Parameters depend on the opcode. |  |

### Return code:

returnCode can be any signed numeric data item. The meaning depends on the opcode.

### Examples:

**Example -** Calling win$printer with different op-codes to generate a graphical document

```cobol
       program-id. winprinter.

       input-output section.
       file-control.
       select print-job assign to printer spooler-name
           organization line sequential.

       file section.
       FD  print-job.
       01  print-record            pic x(80).

       working-storage section.
       copy "isgui.def".
       copy "iscrt.def".
       copy "isopensave.def".
       copy "isprint.def".
       77  crt-status              special-names crt status pic 9(5).
       77  hWin                    handle of window.
       77  close-win               pic 9 value 0.

       77  hBmp                    pic s9(9) comp-4.
       77  spooler-name            pic x(128).
       77  printer-num             pic 9(3).
       77  winprint-status         pic s99.


       screen section.
       01  Mask.
           03 label
              line                 2
              col                  2
              size                 10 cells
              title                "Printers:"
              .
           03 cb-printers
              combo-box
              line                 4
              col                  2
              size                 30 cells
              .
           03 push-button
              line                 7
              col                  2
              title                "&Print"
              exception-value      101
              .


           03 push-button
              line                  7
              col                   + 2
              title                 "Pre&view"
              exception-value       102
              .
           03 push-button
              line                 7
              col                  + 2
              title                "PD&F"
              exception-value      103
              .

       procedure division.
       main.
           call "w$bitmap" using wbitmap-load, "files/img.png"
                          giving hBmp

           display independent graphical window
                   color  65793
                   with   system menu
                   title  "win$printer routine"
                   handle hWin
                   event  win-evt

           display Mask

           perform get-printers-names

           perform until crt-status = 27 or close-win = 1
             accept Mask
                    on exception
                       continue
             end-accept
             evaluate crt-status
                      when 101
                           perform normal-print
                      when 102
                           perform print-preview
                      when 103
                           perform print-pdf
             end-evaluate
           end-perform

           destroy Mask
           destroy hWin
           call "w$bitmap" using wbitmap-destroy, hBmp
           goback
           .


       print-preview.

           move "-p preview" to spooler-name
           perform print-procedure
           .


       print-pdf.
           initialize opensave-data, spooler-name.
           accept opnsav-default-dir from environment "user-path"
           move "PDF Files (*.pdf)|*.pdf" to opnsav-filters
           move "pdf"                     to opnsav-default-ext
           call "c$opensavebox" using opensave-save-box
                                      opensave-data
           if return-code < 0
              exit paragraph
           end-if

           string "-p pdf "       delimited by size
                  opnsav-filename delimited by trailing spaces
                                  into spooler-name

           perform PRINT-PROCEDURE
           .

       normal-print.
           move "-p spooler" to spooler-name

           initialize winprint-selection
           inquire cb-printers value winprint-name
           call "win$printer" using winprint-set-printer
                                    winprint-selection

           perform print-procedure
           .



       get-printers-names.
           modify cb-printers reset-list 1
           perform varying printer-num from 1 by 1 until 1 = 2
              initialize winprint-selection
              move printer-num to winprint-no-of-printers
              call "win$printer" using winprint-get-printer-info
                                       winprint-selection
                                giving winprint-status
              if winprint-status < 1
                 exit perform
              end-if
              modify cb-printers item-to-add winprint-name

              if wprt-is-default
                  modify cb-printers value winprint-name
              end-if
           end-perform
           .


       print-procedure.
           open output print-job
      *print of bitmap pictures
           initialize wprtdata-print-bitmap
           move hBmp to wprtdata-bitmap
           move 3    to wprtdata-bitmap-row
           move 3    to wprtdata-bitmap-col
           move 5    to wprtdata-bitmap-height
           move 6    to wprtdata-bitmap-width
           move wprtbitmap-scale-centimeters to wprtdata-bitmap-flags
           add  wprtbitmap-units-centimeters to wprtdata-bitmap-flags
           call "win$printer" using winprint-print-bitmap
                                     winprint-data
      *print of colored strings (RGB = 96,106,232)
           initialize wprtdata-text-color.
           compute wprtdata-text-color = (232 * 65536) +
                                         (106 * 256)  +
                                          96
           call "win$printer" using winprint-set-text-color
                                    wprtdata-text-color
           write print-record from "colored string"
      *print of graphical shapes (how to create a table)
           initialize wprtdata-draw
           move 2  to wprtdata-draw-start-x
           move 10  to wprtdata-draw-start-y
           move 18 to wprtdata-draw-stop-x
           move 15 to wprtdata-draw-stop-y
           move wprtunits-centimeters to wprtdata-draw-units
           move wprt-draw-rectangle   to wprtdata-draw-shape
           call "win$printer" using winprint-graph-draw
                                    winprint-data
           initialize wprtdata-draw
           move 5  to wprtdata-draw-start-x
           move 10 to wprtdata-draw-start-y
           move 5  to wprtdata-draw-stop-x
           move 15 to wprtdata-draw-stop-y
           move wprtunits-centimeters to wprtdata-draw-units
           move wprt-draw-line        to wprtdata-draw-shape
           call "win$printer" using winprint-graph-draw
                                    winprint-data
           initialize wprtdata-draw


           move 2  to wprtdata-draw-start-x
           move 12 to wprtdata-draw-start-y
           move 18 to wprtdata-draw-stop-x
           move 12 to wprtdata-draw-stop-y
           move wprtunits-centimeters to wprtdata-draw-units
           move wprt-draw-line        to wprtdata-draw-shape
           call "win$printer" using winprint-graph-draw
                                    winprint-data

           close print-job
           .


       win-evt.
           if event-type = cmd-close
              move 1 to close-win
           end-if.
```
