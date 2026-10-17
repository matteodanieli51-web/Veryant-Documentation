## P$ Routines

The P$ library routines allow access to printing features.

| Routine | Feature |
| --- | --- |
| [P$CLEARDIALOG](./P$CLEARDIALOG) | resets the *Choose Printer* dialog |
| [P$CLEARFONT](./P$CLEARFONT) | clears font description |
| [P$DISABLEDIALOG](./P$DISABLEDIALOG) | disables automatic *Choose Printer* dialog |
| [P$DISPLAYDIALOG](./P$DISPLAYDIALOG) | shows the *Choose Printer* dialog |
| [P$DRAWBITMAP](./P$DRAWBITMAP) | prints a bitmap |
| [P$DRAWBOX](./P$DRAWBOX) | draws a box |
| [P$DRAWLINE](./P$DRAWLINE) | draws a line |
| [P$DRAWROUNDBOX](./P$DRAWROUNDBOX) | draws a rounded box |
| [P$ENABLEDIALOG](./P$ENABLEDIALOG) | enables automatic *Choose Printer* dialog |
| [P$GETDEVICECAPABILITIES](./P$GETDEVICECAPABILITIES) | retrieves device capabilities |
| [P$GETDIALOG](./P$GETDIALOG) | retrieves current *Choose Printer* dialog fields values |
| [P$GETFONT](./P$GETFONT) | retrieves current font description |
| [P$GETTEXTMETRICS](./P$GETTEXTMETRICS) | retrieves characteristics of the current font |
| [P$NEWPAGE](./P$NEWPAGE) | forces the next printer output to a new page. |
| [P$SETBOXSHADE](./P$SETBOXSHADE) | set color and density of the color used by [P$DRAWBOX](./P$DRAWBOX). |
| [P$SETDEFAULTMODE](./P$SETDEFAULTMODE) | changes default mode for positions and sizes |
| [P$SETDEFAULTUNITS](./P$SETDEFAULTUNITS) | changes default measurement unit for positions and sizes |
| [P$SETDIALOG](./P$SETDIALOG) | sets values for the *Choose Printer* dialog |
| [P$SETDOCUMENTNAME](./P$SETDOCUMENTNAME) | sets the print job name |
| [P$SETFONT](./P$SETFONT) | changes the current font |
| [P$SETPEN](./P$SETPEN) | sets the style, width and color of the pen |
| [P$SETPITCH](./P$SETPITCH) | sets the font pitch |
| [P$SETPOSITION](./P$SETPOSITION) | sets the position for the next print operation |
| [P$SETTEXTCOLOR](./P$SETTEXTCOLOR) | sets the text color |
| [P$SETTEXTPOSITION](./P$SETTEXTPOSITION) | sets the position for the next print operation adjusted from the top or bottom of the current font |
| [P$SETTOPMARGIN](./P$SETTOPMARGIN) | sets the top margin of the paper |
| [P$TEXTOUT](./P$TEXTOUT) | prints text |

**Note -** These routines are supported for RM/COBOL compatibility. In order to take advantage of every print feature provided by isCOBOL, refer to [WIN$PRINTER](../WIN$PRINTER/WIN$PRINTER).

### Examples:

**Example -** Create a graphical document

```cobol
       program-id. pprinter.

       input-output section.
       file-control.
       select print-job assign to printer spooler-name
           organization line sequential.

       file section.
       fd  print-job.
       01  print-record            pic x(80).

       working-storage section.
       copy "isgui.def".
       copy "iscrt.def".
       copy "isopensave.def".
       77  crt-status              is special-names crt status pic 9(5).
       77  hWin                    handle of window.
       77  close-win               pic 9 value 0.
       77  spooler-name            pic x(128).

       screen section.
       01  mask.
           03 push-button
              line                 2
              col                  2
              title                "&Print"
              exception-value      101
              .
           03 push-button
              line                  2
              col                   + 2
              title                 "Pre&view"
              exception-value       102
              .
           03 push-button
              line                 2
              col                  + 2
              title                "PD&F"
              exception-value      103
              .

       procedure division.
       main.
           call "c$guicfg" using "Printer Dialog Always=False"

           call "c$setdevelopmentmode"

           display independent graphical window
                   color  65793
                   with   system menu
                   title  "P$ Routines"
                   handle hWin
                   event  win-evt

           display Mask

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

           destroy mask
           destroy hwin
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


           string "-P PDF "       delimited by size
                  opnsav-filename delimited by trailing spaces
                                  into spooler-name

           perform print-procedure
           .

       normal-print.
           move "-p spooler" to spooler-name
           perform print-procedure
           .


       print-procedure.
           open output print-job
      *print of bitmap pictures
           call "p$drawbitmap" using "files/img.png",
                                     3, 3, "Absolute", "Metric"
      *print of colored strings (a red text in this case)
           call "p$settextcolor" using "Red"
           call "p$textout" using "colored string", 2, 9,
                                  "Absolute", "Metric"
      *print of graphical shapes (how to create a table)
           call "p$drawbox"  using 2, 10, "Absolute", "Metric"
                                  16,  5, "Metric"
           call "p$drawline" using 5, 10, "Absolute", "Metric"
                                   5, 15, "Absolute", "Metric"
           call "p$drawline" using 2, 12, "Absolute", "Metric"
                                  18, 12, "Absolute", "Metric"

           close print-job
           .


       win-evt.
           if event-type = cmd-close
              move 1 to close-win
           end-if.
```
