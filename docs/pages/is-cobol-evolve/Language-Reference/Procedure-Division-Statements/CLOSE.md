## CLOSE

### Format 1

```cobol
CLOSE { File-Name [REEL] [ WITH {NO REWIND} ] } ... 
                                {LOCK     }
```

### Format 2

```cobol
CLOSE WINDOW Window-Handle [ WITH NO DISPLAY ]
```

### Format 3

```cobol
CLOSE POP-UP wcb [CONTROL Cntrl-String]
```

### Syntax rules

### General rules

1. The REEL clause is treated as a commentary.
2. The file connector referenced by File-Name shall be open. If the file connector is not open, the CLOSE statement is unsuccessful and the I-O status indicator for the file connector is set based on your FileStatus setting ([iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)).
3. The NO REWIND clause causes the current unit to be left in its current position.
4. When the LOCK clause is specified, the file connector referenced by file-name shall not be opened again during the execution of this run unit.
5. The execution of the CLOSE statement causes the value of the I-O status associated with file-name to be updated.
6. The file lock and any record locks associated with the file connector referenced by file-name are released by the execution of the CLOSE statement.
7. If more than one file-name is specified in a CLOSE statement, the result of executing this CLOSE statement is the same as if a separate CLOSE statement had been written for each file-name in the same order as specified in the CLOSE statement.
8. The Format 2 CLOSE has no effect on the main window, that is destroyed only when the runtime terminates.
9. The Format 3 CLOSE closes a window created by a Format 14 DISPLAY statement. The CONTROL is ignored.

### Examples

Format 1 - Close file

```cobol
close file1
```

Format 1- Close file and leave it locked for the rest of the run unit.

```cobol
close file1 lock
```

Format 2 - Display and accept screen on graphical window and then close the window

```cobol
       working-storage section.
       01 window-handle usage handle.
       01 cust-values.
          05 ws-cust-code  pic x(5).
          05 ws-cust-name  pic x(50).
 
       screen section.
       01 screen-1.
          03 scr-cust-code Entry-Field
             using ws-cust-code
             line 3.0
             column 21.4
             size 12.7 cells 
             lines 3.8 cells 
             id 1
             3-d.
          03 scr-cust-name Entry-Field
             using ws-cust-name
             line 8.7
             column 21.4
             size 24.5 cells 
             lines 4.6 cells 
             id 2
             3-d.
          03 scr-lab-1 Label
             line 2.7
             column 4.5
             size 13.5 cells 
             lines 3.7 cells 
             id 3
             title "Code :".
          03 scr-lab-2 Label
             line 9.3
             column 4.5
             size 13.5 cells 
             lines 3.7 cells 
             id 4
             title "Name :".
          03 scr-pb-save Push-Button
             line 16.4
             column 15.7
             size 15.5 cells 
             lines 6.4 cells 
             id 5
             title "Save".
         ...
 
       procedure division.
       display-and-accept.
          display standard  window background-low
              screen line 41
              screen column 91
              size 49.7
              lines 24.9
              cell width 10
              cell height 10
              label-offset 20
              color 257
              modeless
              title "Customers"
              handle window-handle.
           display screen-1.
           perform until exit-pushed
              accept screen-1 on exception 
                 perform is-screen-1-evaluate-func
              end-accept
           end-perform.
           close window window-handle.
       ...
```
