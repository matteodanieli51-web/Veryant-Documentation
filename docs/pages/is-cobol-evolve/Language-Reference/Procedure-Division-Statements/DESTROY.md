## DESTROY

#### Format 1

```cobol
DESTROY { Screen-Name-1 } ... [ UPON Screen-Group ]
        { Handle-1      }
```

#### Format 2

```cobol
DESTROY ALL CONTROLS
```

#### Format 3

```cobol
DESTROY CONTROL
```

Remaining phrases are optional, can appear in any order.

```cobol
  AT Screen-Location
 
  AT LINE NUMBER Line-Num [CELL  ]
                          [CELLS ]
                          [PIXEL ]
                          [PIXELS]
 
  AT {COLUMN  } NUMBER Col-Num [CELL  ]
     {COL     }                [CELLS ]
     {POSITION}                [PIXEL ]
     {POS     }                [PIXELS]
```

### Syntax rules

1. *Screen-name-1* is the name of a screen description entry found in the Screen Section.
2. *Handle-1* is a USAGE HANDLE or PIC X(10) data item.
3. *Screen-location* is an integer data item or literal that contains exactly 4 or 6 digits.
4. *Line-num* and *col-num* are numeric data items or literals. These may contain non-integer values.
5. *Screen-group* is a group item in Screen Section, so a Screen-name that is not associated to a control-class.

### General rules

#### Format 1

1. The DESTROY verb clears the screen of active controls and removes the assigned handle(s) from memory and sets the value to binary zeroes.
2. If *Handle-1* refers to a sub-window, the result is the same as a CLOSE WINDOW, causing all controls on that window to be DESTROYed. All child windows are also DESTROYed.
3. If *Handle-1* is a handle of a menu or layout manager, the controlling window should be DESTROYed before the handle
4. The DESTROY verb as no effect on the main window, that is destroyed only when the runtime terminates.
5. If *Handle-1* is a handle of bitmap or menu, the DESTROY verb has no effect. Use [WBITMAP-DESTROY](\) to destroy a bitmap handle and [WMENU-DESTROY](\) to destroy a menu handle.
6. If *Handle-1* is a handle of one of the system pre-defined font (fixed-font, traditional-font, default-font, small-font, medium-font or large-font) the DESTROY verb has no effect.
7. If the UPON clause is followed by a Screen-group, the item is removed from that group and the screen is updated to reflect the change.

#### Format 2

1. DESTROY ALL CONTROLS destroys all controls created for the current window.

#### Format 3

1. Format 3 DESTROY uses the LINE/COLUMN phrases to indicate which control to DESTROY.

### Examples

Format 1 - Destroy a screen.

```cobol
display input-screen-1
perform until esc-pressed
  accept input-screen-1
end-perform
destroy input-screen-1
```

Format 1 - Destroy window.

```cobol
display initial  window 
        screen line 10 screen column 10
        size 40.0 lines 25.0
        cell width 10 cell height 10
        title "Customer Information"
        handle cust-win-handle
...
destroy cust-win-handle
```

Format 3 - Destroy controls by line and col position.

```cobol
display entry-field line 5.0 col 20.0
display label line 5.0 col 3.0 title "Customer code: "
...
destroy control line 5.0 col 3.0
destroy control line 5.0 col 20.0
```
