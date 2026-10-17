## DISPLAY

#### Format 1

```cobol
DISPLAY {identifier-1} ... [ UPON mnemonic-name-1 ] [WITH NO ADVANCING] [END-DISPLAY]
        {literal-1   }
```

#### Format 2

```cobol
DISPLAY screen-name-1
 
  [ AT { LINE NUMBER { identifier-2 } ]
                     { integer-1    }
 
  [ AT { COLUMN } NUMBER { identifier-3 } ]
       { COL    }        { integer-2    }  
 
  [UPON { Tab-Control-Handle (Page-Index) } ]
        { Ribbon-Handle (Page-Index)      }
        { New-Window                      }
        { Screen-Group                    }
        { Scroll-Pane-Handle              }
        { Split-Pane-Handle (Area-Index)  }
 
[END-DISPLAY]
```

#### Format 3

```cobol
DISPLAY [ ( Line-Num, Col-Num ) ] { Src-Item [ UPON New-Window ] }  [ END-DISPLAY ]
                                  { OMITTED                      }
```

Remaining phrases are optional, can appear in any order

```cobol
  AT Screen-Loc
 
  AT LINE NUMBER Line-Num
 
  AT {COLUMN  } NUMBER Col-Num
     {COL     }
     {POSITION}
     {POS     }
 
  WITH SIZE Length
 
  WITH NO ADVANCING
 
  {ERASE} [TO END OF] {LINE  }
  {BLANK}             {SCREEN}
 
  {ERASE} [EOS]
  {BLANK} [EOL]
 
  WITH  {BELL}
        {BEEP}
 
  {UNDERLINED}
  {HIGHLIGHT }
  {HIGH      }
  {BOLD      }
  {LOWLIGHT  }
  {LOW       }
  {STANDARD  }
 
  WITH {BLINKING}
       {BLINK   }
 
  {REVERSE-VIDEO}
  {REVERSE      }
  {REVERSED     }
 
  SAME
 
  WITH {COLOR } Color-Val
       {COLOUR}
 
  {FOREGROUND-COLOR } IS Fg-Color 
  {FOREGROUND-COLOUR}
 
  {BACKGROUND-COLOR } IS Bg-Color
  {BACKGROUND-COLOUR}
 
  SCROLL [UP  ] [ BY Scrl-Num {LINE } ]
         [DOWN]               {LINES}
 
  OUTPUT {JUSTIFIED} {LEFT    }
         {JUST     } {RIGHT   }
                     {CENTERED}
 
  WITH {CONVERSION}
       {CONVERT   }
 
  CONTROL Cntrl-String
```

#### Format 4

```cobol
DISPLAY {SUBWINDOW} [ UPON New-Window ] [END-DISPLAY]
        {WINDOW   }
```

Remaining phrases are optional, can appear in any order.

```cobol
  AT screen-loc
 
  AT LINE NUMBER Line-Num
 
  AT {COLUMN  } NUMBER Col-Num
     {COL     }
     {POSITION}
     {POS     }
 
  SIZE Length
 
  LINES Height
 
  {ERASE} SCREEN
  {BLANK}
 
  {REVERSE-VIDEO}
  {REVERSE      }
  {REVERSED     }
 
  WITH {COLOR } Color-Val
       {COLOUR}
 
  {FOREGROUND-COLOR } IS Fg-Color
  {FOREGROUND-COLOUR}
 
  {BACKGROUND-COLOR } IS Bg-Color
  {BACKGROUND-COLOUR}
 
  {HIGHLIGHT}
  {HIGH     }
  {BOLD     }
  {LOWLIGHT }
  {LOW      }
  {STANDARD }
 
  {BACKGROUND-HIGH    }
  {BACKGROUND-LOW     }
  {BACKGROUND-STANDARD}
 
  BOXED
 
  SHADOW
 
  [TOP   ] [CENTERED] TITLE IS Title
  [BOTTOM] [LEFT    ]
           [RIGHT   ]
 
  WITH NO SCROLL
 
  WITH NO WRAP
 
  CONTROL VALUE IS Control-Val
 
  POP-UP AREA IS Save-Area
```

#### Format 5

```cobol
DISPLAY SCREEN SIZE {80 }
                    {132}
 
  [ ON EXCEPTION statement-1 ] 
 
  [ NOT ON EXCEPTION statement-2 ] 
 
[ END-DISPLAY ] 
```

#### Format 6

```cobol
DISPLAY LINE [ UPON New-Window ] { SIZE Length  } [END-DISPLAY]
                                 { LINES Height }
```

Remaining phrases are optional, can appear in any order.

```cobol
  AT screen-loc
 
  AT LINE NUMBER Line-Num
 
  AT {COLUMN  } NUMBER Col-Num
     {COL     }
     {POSITION}
     {POS     }
 
  {REVERSE-VIDEO}
  {REVERSE      }
  {REVERSED     }
 
  WITH {COLOR } Color-Val
       {COLOUR}
 
  [CENTERED] TITLE IS title
  [LEFT    ]
  [RIGHT   ]
```

#### Format 7

```cobol
DISPLAY BOX [ UPON New-Window ][END-DISPLAY]
```

Remaining phrases are optional, can appear in any order.

```cobol
  AT screen-loc
 
  AT LINE NUMBER Line-Num
 
  AT {COLUMN  } NUMBER Col-Num
     {COL     }
     {POSITION}
     {POS     }
 
  SIZE Length
 
  LINES Height
 
  {REVERSE-VIDEO}
  {REVERSE      }
  {REVERSED     }
 
  WITH {COLOR } Color-Val
       {COLOUR}
 
  [TOP   ] [CENTERED] TITLE IS title
  [BOTTOM] [LEFT    ]
           [RIGHT   ]
```

#### Format 8

```cobol
DISPLAY Source UPON WINDOW [ { TOP    } ] [ { CENTERED }] TITLE  [END-DISPLAY]
                             { BOTTOM }     { LEFT     }
                                            { RIGHT    }
```

#### Format 9

```cobol
DISPLAY Title-1 UPON { FLOATING WINDOW Handle-1 } TITLE [END-DISPLAY]
                     { GLOBAL WINDOW            }
```

#### Format 10

```cobol
DISPLAY [ {FLOATING   } [GRAPHICAL] ] WINDOW
          {INDEPENDENT}
          {INITIAL    }
          {MDI-CHILD  }
          {MDI-PARENT }
          {STANDARD   }
  [ HANDLE IN Window-Handle ]
```

The following are optional phrases:

```cobol
 
  {MODELESS} 
  {MODAL   } 
 
  {LINK} TO THREAD 
  {BIND} 
 
  SCREEN LINE NUMBER screen-line 
 
  SCREEN {COLUMN  } NUMBER screen-col 
         {COL     } 
         {POSITION} 
         {POS     } 
 
  SCREEN-INDEX screen-idx
 
  AT screen-loc 
 
  AT LINE NUMBER line-num 
 
  AT {COLUMN  } NUMBER col-num 
     {COL     } 
     {POSITION} 
     {POS     }
 
  SIZE   length 
 
  LINES  height 
 
  FONT {IS} font-1 
       {= } 
 
  CONTROL FONT {IS} font-3 
               {= } 
 
  CELL  
   {SIZE  }  [IS] {cell-units                                 } 
   {HEIGHT}  [= ] {control-type-name  FONT font-2 [SEPARATE  ]} 
   {WIDTH }       {control-type-name  FONT        [OVERLAPPED]} 
 
  {ERASE} SCREEN 
  {BLANK} 
 
  {REVERSE-VIDEO} 
  {REVERSE      } 
  {REVERSED     } 
 
  WITH {COLOR } color-val 
       {COLOUR} 
 
  {FOREGROUND-COLOR } IS fg-color 
  {FOREGROUND-COLOUR} 
 
  {BACKGROUND-COLOR } IS bg-color 
  {BACKGROUND-COLOUR} 
 
  GRADIENT-COLOR-1  IS gd-color-1 
  GRADIENT-COLOR-2  IS gd-color-2 
  GRADIENT-ORIENTATION  IS gd-orientation 
 
  {HIGHLIGHT} 
  {HIGH     } 
  {BOLD     } 
  {LOWLIGHT } 
  {LOW      } 
  {STANDARD } 
   
  {BACKGROUND-HIGH    } 
  {BACKGROUND-LOW     } 
  {BACKGROUND-STANDARD} 
 
  { [USER-GRAY] [USER-WHITE] } 
  {        USER-COLORS       } 
 
  BOXED 
 
  SHADOW 
 
  TITLE-BAR 
 
  [TOP   ] [CENTERED] TITLE IS title 
  [BOTTOM] [LEFT    ] 
           [RIGHT   ] 
 
  WITH SYSTEM MENU 
 
  WITH NO SCROLL
 
  WITH NO WRAP 
 
  {NO-CLOSE} 
 
  {AUTO-RESIZE} 
 
  {RESIZABLE  } 
 
  MIN-SIZE  {= } min-size 
            {IS} 
  MAX-SIZE  {= } max-size 
            {IS} 
  MIN-LINES {= } min-lines 
            {IS} 
  MAX-LINES {= } max-lines 
            {IS} 
 
  CONTROL VALUE {IS} control-val 
                {= } 
 
  LAYOUT-MANAGER {IS} manager 
                 {= } 
 
  VISIBLE {IS} {TRUE         } 
          {= } {FALSE        } 
               {visible-state} 
 
  POP-UP MENU {IS}  {menu-1} 
              {= }  {NULL} 
 
  {POP-UP AREA IS } handle-name 
  {HANDLE {IS}    } 
          {IN} 
 
  CONTROLS-UNCROPPED 
 
  EVENT PROCEDURE IS { proc-1 [ {THROUGH} proc-2 ] } 
                                {THRU   } 
                     { NULL                        } 
 
  ACTION {IS} action 
         {= }
 
  LAYOUT {IS} layout 
         {= }
  UNDECORATED 
```

#### Format 11

```cobol
DISPLAY MESSAGE BOX { Text } ...
```

Remaining-Phrases are optional, can appear in any order.

```cobol
   CENTERED 
 
   TITLE {IS} Title 
         {= } 
 
   TYPE    {IS} Type 
           {= } 
   DEFAULT {IS} default 
           {= } 
 
   ICON {IS} icon 
        {= } 
 
   FONT {IS} font-1
        {= } 
 
  { COLOR            } {IS} color-val 
                       {= }
   {FOREGROUND-COLOR } {IS} fg-color
   {FOREGROUND-COLOUR} {= } 
   {BACKGROUND-COLOR } {IS} bg-color
   {BACKGROUND-COLOUR} {= } 
 
   BEFORE TIME  Timeout 
 
   {GIVING   } Value 
   {RETURNING} 
```

#### Format 12

```cobol
DISPLAY name UPON { ENVIRONMENT-NAME   } [END-DISPLAY]
                  { ENVIRONMENT-VALUE  }
 
  [ ON EXCEPTION Statement-1 ]
 
  [ NOT ON EXCEPTION Statement-2 ]
 
[END-DISPLAY]
```

#### Format 13

```cobol
DISPLAY {control-class  }
 
[ title ]
 
  [ { UPON New-Window         } ]
    { UPON Grid-Handle (y, x) }
    { UPON Screen-Group       }
 
  [ HANDLE IN Control-Handle ]
 
The following are optional phrases:
 
  { { Property-Name          } [IS ] { [MULTIPLE] Property-Value [ LENGTH {IS} Length-1 ] [ GIVING Result-1 ] } } ...
    { PROPERTY Property-Type } [ARE] { [TABLE   ]                         {= }                                  }
                               [=  ]
 
  { Style-Name } ...
 
  AT screen-loc 
 
  AT LINE NUMBER line-num 
 
  AT {COLUMN  } NUMBER col-num 
     {COL     } 
     {POSITION} 
     {POS     }
 
  SIZE   length 
 
  LINES  height 
 
  FONT {IS} font-1 
       {= } 
 
  WITH {COLOR } color-val 
       {COLOUR} 
 
  {FOREGROUND-COLOR } IS fg-color 
  {FOREGROUND-COLOUR} 
 
  {BACKGROUND-COLOR } IS bg-color 
  {BACKGROUND-COLOUR} 
 
  {BACKGROUND-HIGH    } 
  {BACKGROUND-LOW     } 
  {BACKGROUND-STANDARD} 
 
  VISIBLE {IS} {TRUE         } 
          {= } {FALSE        } 
               {visible-state} 
 
  EVENT PROCEDURE IS { proc-1 [ {THROUGH} proc-2 ] } 
                                {THRU   } 
                     { NULL                        }
```

#### Format 14

```cobol
DISPLAY POP-UP wcb [CONTROL Cntrl-String]
```

#### Format 15

```cobol
DISPLAY NOTIFICATION WINDOW
  [ HANDLE IN Window-Handle ]
```

The following are optional phrases:

```cobol
  SCREEN-INDEX screen-idx
 
  SIZE   length 
 
  LINES  height 
 
  FONT {IS} font-1 
       {= } 
 
  CONTROL FONT {IS} font-3 
               {= } 
 
  CELL  
   {SIZE  }  [IS] {cell-units                                 } 
   {HEIGHT}  [= ] {control-type-name  FONT font-2 [SEPARATE  ]} 
   {WIDTH }       {control-type-name  FONT        [OVERLAPPED]} 
 
  {ERASE} SCREEN 
  {BLANK} 
 
  {REVERSE-VIDEO} 
  {REVERSE      } 
  {REVERSED     } 
 
  WITH {COLOR } color-val 
       {COLOUR} 
 
  {FOREGROUND-COLOR } IS fg-color 
  {FOREGROUND-COLOUR} 
 
  {BACKGROUND-COLOR } IS bg-color 
  {BACKGROUND-COLOUR} 
 
  GRADIENT-COLOR-1  IS gd-color-1 
  GRADIENT-COLOR-2  IS gd-color-2 
  GRADIENT-ORIENTATION  IS gd-orientation 
 
  {HIGHLIGHT} 
  {HIGH     } 
  {BOLD     } 
  {LOWLIGHT } 
  {LOW      } 
  {STANDARD } 
   
  {BACKGROUND-HIGH    } 
  {BACKGROUND-LOW     } 
  {BACKGROUND-STANDARD} 
 
  { [USER-GRAY] [USER-WHITE] } 
  {        USER-COLORS       } 
 
  TOP  
  RIGHT
  BOTTOM 
  LEFT
 
  VISIBLE {IS} {TRUE         } 
          {= } {FALSE        } 
               {visible-state}
 
  BEFORE TIME  Timeout 
```

### Syntax rules

1. COLUMN, COL, POSITION and POS are synonymous.
2. ERASE and BLANK are synonymous.
3. BELL and BEEP are synonymous
4. HIGHLIGHT, HIGH and BOLD are synonymous.
5. LOWLIGHT and LOW are synonymous.
6. BLINKING and BLINK are synonymous.
7. REVERSE-VIDEO, REVERSE and REVERSED are synonymous.
8. COLOR and COLOUR are synonymous.
9. FOREGROUND-COLOR and FOREGROUND-COLOUR are synonymous.
10. BACKGROUND-COLOR and BACKGROUND-COLOUR are synonymous.
11. LINE and LINES, in the SCROLL phrase, are synonymous.
12. JUSTIFIED and JUST are synonymous.
13. CONVERSION and CONVERT are synonymous.
14. GIVING and RETURNING are synonymous.
15. *Mnemonic-name-1* can be SYSOUT, SYSERR, CONSOLE or CRT. CONSOLE is synonym of SYSOUT.

#### Format 1

16. Mnemonic-name-1 shall be associated with a hardware device in the SPECIAL-NAMES paragraph in the environment division.

#### Format 2

17. Identifier-2 and identifier-3 shall be unsigned integer data items.
18. Tab-Control-Handle is a USAGE HANDLE OF TAB-CONTROL data item or the screen name of a tab-control.
19. Page-Index and Area-Index are numeric data items or literal.
20. Screen-group shall reference a Screen Section group, so a Screen-name not associated to a control-class.
21. Ribbon-Handle is a USAGE HANDLE OF RIBBON data item or the screen name of a ribbon.
22. Scroll-Pane-Handle is a USAGE HANDLE OF SCROLL-PANE data item or the screen name of a scroll-pane.

#### Format 3

23. Src-Item is a literal or data item. It must be USAGE DISPLAY unless the CONVERSION phrase is also specified. Src-Item specifies the data to be displayed.
24. New-Window is a USAGE HANDLE OF WINDOW or PIC X(10) data item.
25. Screen-Loc is an integer data item or literal containing exactly 4 or 6 digits. It may also be a group item of 4 or 6 characters. If a numeric item is used, it must be a non-negative integer.
26. Line-Num, Col-Num, and Length are numeric data items or literals. They may be non-integer values. You can also specify the value with an arithmetic expression.
27. Color-Val and Scrl-Num are numeric data items or literals. Color-Val can also be an arithmetic expression, except when used in the Screen Section.
28. Fg-Color and Bg-Color are integer literals or numeric data items. They may be arithmetic expressions.
29. Timeout is a integer literal or numeric data item.
30. Cntrl-String is a nonnumeric literal or data item.
31. If the UPON phrase is used it must be the first optional phrase specified.
32. If the AT phrase is specified, neither the LINE nor the COLUMN phrase may be specified.
33. If the COLOR phrase is specified, neither the FOREGROUND-COLOR nor the BACKGROUND-COLOR phrase may be specified.
34. IS and "=" are synonymous.

#### Format 4

35. Title is an alphanumeric literal or data item
36. Save-area is a USAGE HANDLE OF WINDOW or PIC X(10) data item.

#### Format 5

37. Statement-1 and Statement-2 are imperative statements.

#### Format 6

38. Exactly one of the SIZE or LINES phrases must be specified. The selected phrase may appear anywhere in the statement.
39. The LINES phrase can take a numeric expression.

#### Format 8

40. Source is an alphanumeric data item or nonnumeric literal.

#### Format 9

41. Title-1 is an alphanumeric literal or identifier that contains the new title.
42. Handle-1 is the handle of the floating window in which the new title is applied.
43. If Handle-1 is a subwindow, then its parent window title is changed.

#### Format 10

44. New-Window is a USAGE HANDLE OF WINDOW or PIC X(10) data item. If used, the UPON phrase must be the first optional phrase specified
45. Font-1, font-2 and font-3 are data items described as USAGE HANDLE or HANDLE OF FONT. They should contain valid handles to screen fonts.
46. Cell-units is a positive integer data item or literal.
47. Control-type-name is one of the control type reserved words known by the compiler
48. Min-size, max-size, min-lines and max-lines are integer literals or data items.
49. The word "NO-CLOSE" is reserved by the compiler only when it appears in a Format 11 or 12 DISPLAY statement.
50. Manager is a USAGE HANDLE or HANDLE OF LAYOUT-MANAGER that contains a valid reference to a layout manager.
51. Visible-state is a numeric literal or data item.
52. Menu-1 is a USAGE HANDLE or HANDLE OF MENU data item.
53. Proc-1 and proc-2 are procedure names.
54. Action is a numeric literal or data item.
55. Height is a numeric data item or literal. It may be a non-integer value. You can also specify the value as an arithmetic expression
56. Layout is an alphanumeric literal or data item.
57. Grid-Handle is a USAGE HANDLE OF GRID data item or the screen name of a Grid control defined in the Screen Section. x and y are numeric literals or data items.

#### Format 11

58. The POP-UP/HANDLE phrase may be specified anywhere in the statement after the required initial elements
59. Text is a literal or data item
60. font-1 is a USAGE HANDLE OF FONT
61. Type, icon, color-val, bg-color, fg-color and default are numeric literals or data items
62. Value is a numeric data item

#### Format 12

63. name is an alphanumeric data item or literal that is the name of an environment variable or configuration variable

#### Format 13

64. Title may appear only once, either in a TITLE phrase or the initial title option. The title option must be the first option specified.

### General Rules

#### Format 1

1. If a figurative constant is specified as one of the operands, only a single occurrence of the figurative constant is displayed. A figurative constant other than ALL national literal shall be the alphanumeric representation of that figurative constant.
2. If the hardware device is capable of receiving data of the same size as the data item being transferred, then the data item is transferred.
3. If a hardware device is not capable of receiving data of the same size as the data item being transferred, then one of the following applies:

A. If the size of the data item being transferred exceeds the size of the data that the hardware device is capable of receiving in a single transfer, the data beginning with the leftmost character is stored aligned to the left in the receiving hardware device, and the remaining data is then transferred according to general rules 4 and 5 until all the data has been transferred.

B. If the size of the data item that the hardware device is capable of receiving exceeds the size of the data being transferred, the transferred data is stored aligned to the left in the receiving hardware device.

4. When a DISPLAY statement contains more than one operand, the size of the sending item is the sum of the sizes associated with the operands, and the values of the operands are transferred in the sequence in which the operands are encountered without modifying the positioning of the hardware device between the successive operands.
5. If the UPON phrase is not specified, the standard display device is used.
6. If the WITH NO ADVANCING phrase is specified, then the positioning of the hardware device shall not be reset to the next line or changed in any other way following the display of the last operand. If the hardware device is capable of positioning to a specific character position, it will remain positioned at the character position immediately following the last character of the last operand displayed. If the hardware device is not capable of positioning to a specific character position, only the vertical position, if applicable, is affected. This may cause overprinting if the hardware device supports overprinting.
7. If the WITH NO ADVANCING phrase is not specified, then after the last operand has been transferred to the hardware device, the positioning of the hardware device shall be reset to the leftmost position of the next line of the device.
8. If vertical positioning is not applicable on the hardware device, the vertical positioning shall be ignored.

#### Format 2

9. Column and line number positions are specified in terms of alphanumeric character positions.
10. The DISPLAY statement causes the transfer of data in accordance with the MOVE statement rules to each elementary screen item that is subordinate to screen-name-1 and is specified with the FROM, USING, or VALUE clause, from the data item or literal referenced in the FROM, USING, or VALUE clause. For the purpose of these specifications, all such screen items are considered to be referenced by the DISPLAY screen statement. The transfer of data to the elementary screen items is done in the order that the screen items are specified within screen-name-1.

**NOTE** - When two screen items overlap, the display on the screen for the common character positions is determined by the second screen item specified within screen-name-1.

The transfer takes place and each elementary screen item is displayed on the terminal display subject to any editing implied in the character-string specified in the PICTURE clause of each elementary screen description entry.

11. The LINE and COLUMN phrases give the position on the terminal display screen at which the screen record associated with screen-name-1 is to start. The position is relative to the leftmost character column in the topmost line of the display that is identified as column 1 of line 1. Each subordinate elementary screen item is located relative to the start of the containing screen record. Identifier-2 and identifier-3 are evaluated once at the start of execution of the statement.
12. If the LINE phrase is not specified, the screen record starts on line 1.
13. If the COLUMN phrase is not specified, the screen record starts in column 1.
14. If the execution of the DISPLAY statement is successful, the ON EXCEPTION phrase, if specified, is ignored and control is transferred to the end of the DISPLAY statement or, if the NOT ON EXCEPTION phrase is specified, to imperative-statement-2. If control is transferred to imperative-statement-2, execution continues according to the rules for each statement specified in imperative-statement-2. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-2, control is transferred to the end of the DISPLAY statement.
15. If the UPON clause is followed by a Tab-Control handle, the destination Tab-Control must have the [Allow-Container](../../User-Interface/Controls-Reference/TAB-CONTROL/Styles/Allow-Container) style. When the UPON clause is followed by a Tab-Control handle or a Ribbon handle, the screen will be bound to the page specified by Page-Index and the runtime will show it when the page is selected by the user.
16. If the UPON clause is followed by a Scroll-Pane handle, the screen will be added to the Scroll-Pane.
17. If the UPON clause is followed by a Split-Pane handle, the screen will be bound to the area specified by Aera-Index, that can be either 1 for the left/top area or 2 for the right/bottom area.
18. If the UPON clause is followed by a Screen-group, the content of screen-name-1 is added to the Screen identified by Screen-group like if it was declared in Screen Section at the bottom of that group

#### Format 3

19. The DISPLAY statement sends each of its Src-Items to the video terminal attached to the executing program. If more than one Src-Item is specified, each is treated as if it were in a separate DISPLAY statement in the order listed.
20. If the OMITTED option is used, then no Src-Item is sent to the screen. This can be used to cause the action of various optional phrases without sending any actual data, like BELL for instance. If a SIZE phrase is specified, then the OMITTED phrase will act like an alphanumeric src-item of the specified size whose value is identical to the characters located on the screen where the DISPLAY will occur. This can be used to modify the video attributes of the screen without changing the displayed data.
21. For example, DISPLAY OMITTED, SIZE 5, REVERSE will cause the five characters located at the current cursor location to be changed to reverse-video.
22. The CONTROL phrase provides the ability to modify the static attributes of the DISPLAY statement at runtime. The CONTROL data item is treated as a series of comma-separated keywords that control the action of the statement. Within the CONTROL data item, spaces are ignored and lower-case letters are treated as if they were upper-case. The keywords allowed in cntrl-string are:

```cobol
ERASE, ERASE EOL, ERASE EOS, NO ERASE
BEEP, NO BEEP
HIGH, LOW, STANDARD, OFF
BLINK, NO BLINK
REVERSE, NO REVERSE
TAB, NO TAB
PROMPT, NO PROMPT
CONVERT, NO CONVERT
UPDATE, NO UPDATE
ECHO, NO ECHO
UPPER, NO UPPER, LOWER, NO LOWER
UNDERLINED, NO UNDERLINE
LEFT, RIGHT, CENTERED, NO JUST
SAME
FCOLOR
BCOLOR
```

Any other keywords and spaces are discarded. If more than one keyword from within the above lines appears in cntrl-string, then only the rightmost one in the data item is used. Each of the keywords performs the same action as the statically declared attribute of the same name. When a CONTROL item conflicts with the statically declared attributes of the DISPLAY statement, the actions specified in the CONTROL item take precedence. The FCOLOR and BCOLOR keywords are used to set foreground and background colors respectively. These keywords must be followed by an equals sign and the name of a color taken from the following list: BLACK, BLUE, GREEN, CYAN, RED, MAGENTA, BROWN, and WHITE. The named color becomes the default foreground or background color for the window. Note that this is different from the COLOR phrase, which sets the color only for the current DISPLAY statement. The FCOLOR and BCOLOR keywords set the default colors for every subsequent DISPLAY until explicitly changed.

23. Line and column coordinates can be specified between parenthesis soon after the DISPLAY word. This is a Microsoft COBOL extension and requires the [-cms](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compile flag. In this case the UPON clause cannot be used.

#### Format 4

24. The DISPLAY SUBWINDOW verb creates or modifies the current Subwindow. The subwindow is a rectangular region of the screen. In essence, the current subwindow defines a virtual terminal screen that occupies some area of the user's physical screen. Line and column numbers for ACCEPT and DISPLAY statements are computed from the upper left-hand corner of the current subwindow. For example, the statement DISPLAY SPACE, ERASE SCREEN erases only the current subwindow.
25. When used with floating windows (Format 10), this verb creates a subwindow in the current floating window. Note that every floating window has an implicit subwindow. Each time a floating window is made current, its subwindow is also made current.
26. When used with floating windows, subwindow coordinates are relative to the current floating window. Initially, this is the main application window. The subwindow never extends past the boundaries of the current floating window.
27. The initial subwindow is set to the entire screen. When created inside a floating window, the subwindow is set to the floating window's display area (the area inside the borders, menu bar, toolbar, and title bar).
28. Any subwindows contained in a floating window are automatically closed if the floating window is closed.

##### ERASE Phrase

29. This phrase is implied by the BOXED and REVERSED phrases.

##### BOXED Phrase

30. The BOXED phrase causes a box to be drawn around the new window. The box is drawn outside of the window. Any portions of the box that lie off the screen will not be drawn.
31. The terminal's line drawing set is used to draw the box. If the terminal does not have a line drawing set, hyphens and vertical bar characters are used.
32. If the POP-UP phrase is also specified, the box will overlay any other boxes on the screen. If this phrase is not specified, the box drawn will be attached to any other boxes it intersects.
33. This phrase implies the ERASE phrase.

##### REVERSED Phrase

34. The REVERSED phrase exchanges the window's foreground and background colors. This will affect every ACCEPT and DISPLAY statement in the new window.
35. This phrase implies the ERASE phrase. Note that this will usually cause the entire window to be set to reverse video spaces when it is initially created.

##### COLOR Phrase

36. The COLOR phrase sets the window's foreground and background colors. These colors are used whenever the window is erased and as default colors for future ACCEPT and DISPLAY statements. Color-val contains a numeric representation of the colors to use.
37. If the foreground color is not specified, the new window inherits the current window's foreground color. If the background color is not specified, the new window inherits the current window's background color.

##### HIGH, LOW, and STANDARD Phrases

38. The HIGH, LOW, and STANDARD phrases set the foreground intensity of the subwindow. This affects any drawing done to the subwindow itself (such as its border or title). In addition, they set the default intensity for any future ACCEPT/DISPLAY statements made to this window.

The STANDARD option indicates that a system-dependent default value should be used. You can affect this value with the FOREGROUND-INTENSITY configuration option.

If no option is given, the current subwindow's foreground intensity is used (inherit the foreground intensity of the parent).

##### BACKGROUND-HIGH, BACKGROUND-LOW, and BACKGROUND-STANDARD Phrases

39. The BACKGROUND-HIGH, BACKGROUND-LOW, and BACKGROUND-STANDARD phrases set the background intensity for the subwindow. This works in a fashion analogous to the foreground intensity described above. Note that the COLOR phrase, if present, takes precedence over the BACKGROUND phrases.

##### CONTROL VALUE Phrase

40. The CONTROL VALUE phrase provides a method for specifying certain window characteristics at run time. Control-value must be a numeric expression that contains one or more of the following values added together:

| | |
| --- | --- |
| Boxed | 1 |
| Shadow | 2 |
| No Scroll | 4 |
| No Wrap | 8 |
| Reverse | 16 |
| | |

##### TITLE Phrase

41. The TITLE phrase causes a title to be printed in the window's border. This has effect only if the BOXED phrase is also specified.
42. One top title and one bottom title may be specified for each window. Top titles can be placed in one of three positions in the border region: top left, top center, or top right. Bottom titles can be placed in the bottom left, bottom center, or bottom right. If TOP or BOTTOM is not specified, TOP is used. If LEFT, CENTERED, or RIGHT is not specified, CENTERED is used.

##### NO SCROLL and NO WRAP Phrases

43. Specifying NO SCROLL disables automatic scrolling for the new window. Normally, when the cursor is moved past the bottom edge of the window, the window is scrolled up one line. If NO SCROLL is specified, then the window will not be scrolled. The bottom line will be overwritten instead. When NO SCROLL is specified, then the only way to scroll a window is explicitly with a SCROLL phrase on a Format 1 DISPLAY statement.
44. Specifying NO WRAP disables line wrap for the window. Normally, a line that extends past the right edge of the window is wrapped around to the next line. If NO WRAP is specified, then the line is truncated instead. This will leave the cursor logically positioned on the same line just to the right of the window's edge. Further output will not be visible until the cursor is repositioned inside the window.
45. The scroll and wrap states of the current window are saved when a pop-up window is created. When that pop-up window is closed, the scroll and wrap states of the old window are restored.

##### POP-UP AREA Phrase

46. The POP-UP AREA phrase causes the screen manager to save information about the current subwindow prior to creating the new window. This information can be used by the screen manager later to remove the new window and restore the saved window. This is meant to be used to create "pop-up" windows.
47. Boxed pop-up windows are automatically detached slightly from any intersecting line segments, such as the borders of other windows.
48. The save-area is an elementary data item described by a PICTURE X(10) clause. It is filled in with information about the current window dimensions and contents before the new window is created. This data item is required for restoration of a window and must not be subsequently modified in any way. It can be referenced in a CLOSE WINDOW verb to restore the saved window to the screen and re-establish the saved window as the current window.
49. Pop-up subwindows are an older technology that is not compatible with graphical controls. You should avoid using pop-up windows if you also use controls. Use floating windows instead.

##### SHADOW Phrase

50. The SHADOW phrase causes the window to appear to float over the screen, giving it a three-dimensional effect.

The way the shadow is displayed is determined by the SHADOW-STYLE setting of the SCREEN option in your runtime configuration file.

When a shadow is specified for a window, that window is automatically detached slightly from any intersecting line segments, such as the borders of other windows.

#### Format 5

51. The DISPLAY SCREEN verb is used to shift between the 80-column mode and 132-column mode of the terminal. On character-based systems, the terminal is physically set to either 132- or 80-column mode. For all systems, the main application window is then set to 132 columns wide; it is cleared, and its subwindow set to cover the entire interior. Some graphical systems simulate 132-column mode by scrolling the main application window.

A. In graphical environments, the MODIFY verb is the preferred method for changing the size of a graphical screen.

52. If the terminal hardware does not support the mode shifted to, the screen and current window do not change and the EXCEPTION phrase Statement-1 (if specified) executes. If the mode change is successful and the NOT EXCEPTION phrase is used, Statement-2 executes.

#### Format 6

53. The DISPLAY LINE verb provides the ability to draw horizontal and vertical lines in a machine- and terminal-independent fashion. The lines are drawn using the best mode available on the display device. Used together with the DISPLAY BOX verb, this verb provides the ability to draw forms on the user's screen.
54. If the SIZE phrase is specified, the line drawn is horizontal. The value of Length gives the size of the line in screen columns. If the LINES phrase is used instead, the line drawn is a vertical line and Height describes the number of screen rows to use.
55. Lines never wrap around or cause scrolling. If the LINES or SIZE phrase would cause the line to leave the current window, the line is truncated at the edge of the window.

##### AT, LINE, and COLUMN Phrases

56. The value of Line-Num gives the starting row of the line. The value of Col-Num gives the starting column. The value of Screen-Loc gives the starting row and column. Lines are always drawn to the right or downwards as appropriate. Screen-Loc, Line-Num, and Col-Num must specify a position that is contained in the current window.

57. If the LINE NUMBER phrase is not specified, line 1 is used. If the COLUMN NUMBER phrase is missing, column 1 is used.

##### TITLE Phrase

58. The TITLE phrase has effect only when you are drawing horizontal lines. When it is specified, Title-String is printed in part of the line.
59. The title may be printed near the right side, near the left side, or in the center of the line depending whether the RIGHT, LEFT, or CENTERED phrase is specified. If none is specified, CENTERED is used.

#### Format 7

60. The DISPLAY BOX verb provides the ability to draw a box in a machine- and terminal-independent manner. The best drawing mode of the display device is used. If the lines used in drawing a box intersect other lines already present on the screen, the appropriate intersection characters are used.
61. You specify the location of the box by providing the location of the upper-left corner. You specify the size of the box by providing a height and a width.

##### AT, LINE, and COLUMN Phrases

62. The AT, LINE NUMBER, and COLUMN NUMBER phrases operate in the same manner as they do when they are used in a DISPLAY LINE statement (Format 6).

##### SIZE and LINES Phrases

63. The SIZE phrase specifies the width of the box. The LINES phrase specifies its height. Length and Height must specify values greater than one. If the SIZE phrase is absent, the box will extend to the right edge of the current window. If the LINES phrase is missing, the box will extend to the bottom of the current window.

##### TITLE Phrase

64. The TITLE phrase operates in the same manner as it does for a DISPLAY WINDOW verb (Format 4).

#### Format 8

65. The DISPLAY UPON WINDOW TITLE verb is used to modify a boxed subwindow's title. Either the top or bottom title may be modified.
66. If any of the positioning phrases is used, the new title is placed in the indicated position.
67. If neither the TOP/BOTTOM nor the CENTERED/LEFT/RIGHT option is used, then the window's title is modified in its current position. If the window has a top and bottom title, the top title is modified.
68. If the TOP/BOTTOM phrase is omitted, TOP is implied.
69. If the CENTERED/LEFT/RIGHT phrase is not used, CENTERED is implied.

#### Format 9

70. DISPLAY UPON FLOATING WINDOW TITLE is used to change the title of the main application window or floating window. When you are changing a floating window's title, Handle-1 identifies which window to change.
71. The case of the title will be exactly as given in Title-1
72. The MODIFY verb can also be used to change a window's title.

#### Format 10

73. The syntax for DISPLAY FLOATING WINDOW is a superset of the DISPLAY WINDOW verb. This simplifies conversion of DISPLAY WINDOW statements to DISPLAY FLOATING WINDOW statements.
74. The DISPLAY FLOATING WINDOW verb creates a new floating window and stores a handle to the window in Handle-name. Use the value of Handle-name with other verbs (such as DESTROY) when you need to refer to the window.
75. After the new window is created, it becomes both the current and active window.
76. The window created may be either modal or modeless. A modal window is a window that the user cannot leave until it is closed. A modeless window is a window that the user can leave (switch to another window) while it is still open. These names are derived from the idea that a modal window enters a new mode in the program (for example, selecting a file to open) while a modeless window does not (since the user can continue working on tasks in other windows).
77. The DISPLAY FLOATING WINDOW verb also creates a new subwindow that exactly covers the interior of the floating window. This is identical to an implied DISPLAY SUBWINDOW statement (with no options). Any HIGH, LOW, STANDARD, BACKGROUND-HIGH, BACKGROUND-LOW, BACKGROUND-STANDARD, REVERSE, COLOR, NO SCROLL, or NO WRAP phrases specified in the DISPLAY FLOATING WINDOW verb are inherited by the implied subwindow.
78. Each window has a controlling thread. A window's controlling thread is the most recent thread to have created that window or done an ACCEPT from that window. When a thread performs an ACCEPT from a window, and that thread is not the controlling thread of the active window, the thread suspends. The thread remains suspended until the window it is accessing becomes active (either because the user activates it or the program does).
79. Most of the optional phrases have the same meaning as they do for DISPLAY SUBWINDOW. However, note the following exceptions:

A. The ERASE SCREEN phrase is always implied by DISPLAY FLOATING WINDOW, so specifying this phrase has no additional effect.

B. Most GUIs (including Windows) cannot display shadowed pop-up windows. On these systems, the SHADOW phrase has no effect. On character-based systems, the SHADOW phrase has its normal effect.

C. All GUIs create borders around their windows. If there is a choice of border thickness, specifying BOXED will select a thicker border than omitting BOXED. Under character-based systems, the BOXED phrase determines whether or not there will be a border.

D. The HIGH, LOW, STANDARD, BACKGROUND-HIGH, BACKGROUND-LOW, BACKGROUND-STANDARD, REVERSE, COLOR, NO WRAP, and NO SCROLL phrases do not directly affect the created window. Instead, they are passed on to the initial subwindow as described in Rule 5, above.

E. Most GUIs (including Windows) cannot display more than one window title and do not give you a choice of title position. On these systems, the specified TITLE appears in the location determined by the GUI (usually top center, or top left). If you specify more than one title, the TOP title is the one used. If you specify only one title (either TOP or BOTTOM), it is used regardless of the title location.

80. If *Handle-1* points to a subwindow, the parent window title is updated.

##### GRAPHICAL Phrase

81. The optional GRAPHICAL phrase directs the compiler to use a default CELL phrase equivalent to:

CELL SIZE = LABEL FONT

This phrase establishes the window's coordinate space based on the font used by controls that occupy the window. The CELL phrase can still be used and any values set in that phrase take precedence over the default value established with GRAPHICAL option. In other words, if you specify only a CELL HEIGHT or CELL WIDTH, then the other dimension receives the default assignment.

The intent of the GRAPHICAL option is to make it easier to consistently establish an appropriate coordinate space for windows that contain only controls (see the discussion of cell sizing and coordinate space that is included with the CELL phrase rules, below).

For example, the window that is specified with:

DISPLAY FLOATING WINDOW,

CELL SIZE = LABEL FONT

can be more simply specified with:

DISPLAY FLOATING GRAPHICAL WINDOW

##### UPON Phrase

82. The UPON phrase specifies the parent of the new floating window. Parent-window must be a valid floating window handle. If the UPON phrase is omitted, the current window is used as the parent. If you create a new floating window in the scope of an UPON phrase, the new window becomes the current window when the DISPLAY statement terminates.
83. The UPON Grid-Handle phrase allows you to create graphical controls over grid cells. Use x and y to indicate the cell coordinates.

##### MODAL and MODELESS Phrases

84. The word MODAL is accepted only by floating windows. Floating windows are modal by default, so this word is just commentary in the display of a floating window. When a modal window is active, all other windows are disabled. The user cannot activate another window, including any of its components (such as its menu or close button).
85. The word MODELESS makes a window modeless. All windows except for floating windows are modeless by default. When a modeless window is active, the user can activate another window by using the host system's techniques for doing so (for example, by clicking on another window with the mouse). When this happens, any ACCEPT that is active is terminated by a CMD-ACTIVATE event. Your program should respond by performing an ACCEPT in the window requested by the user. Alternatively, you can link your modeless window to a thread, see rule 1 under LINK TO THREAD and BIND TO THREAD Phrases (below).

##### LINK TO THREAD and BIND TO THREAD Phrases

86. The LINK TO THREAD phrase allows the runtime to automate the handling of the CMD-ACTIVATE event. If the user activates a window created with the LINK TO THREAD phrase, the runtime will examine that window to see if it has a controlling thread different from the current thread. If it does, then the current thread suspends and the thread controlling the newly active window is allowed to run. The runtime handles all aspects of the window activation. The CMD-ACTIVATE event is not returned to the program in this case. If the controlling thread of the new window is the same as the current thread, then the runtime does not perform any special handling and the CMD-ACTIVATE event is passed on to your program. In order to get the best benefit from the LINK TO THREAD phrase, you should arrange to have a separate thread control each modeless window in your program.
87. The BIND TO THREAD phrase has the same effect as the LINK TO THREAD phrase. In addition, the window is automatically destroyed when its controlling thread terminates.

##### SCREEN LINE and SCREEN COLUMN Phrases

88. The SCREEN LINE and SCREEN COLUMN phrases determine the initial location of the window on the screen. Screen-line and screen-col give the coordinates of the upper left corner of the window in screen base units. Screen base units are machine dependent. On character systems, they are character cells. On graphical systems, they are pixels. The upper left corner of the screen is location "1,1". Under Windows, the runtime ensures that the initial window is fully visible, so the specified location may not be used if that would place a portion of the window off the screen (the closest allowed location is used). Windows other than the initial window may be placed arbitrarily. On graphical systems, the location of a floating window is interpreted to mean the location of its exterior. On character systems, the location is the same as it is for subwindows: the location of the window's interior.

##### SCREEN-INDEX Phrase

89. The SCREEN-INDEX phrase specifies the index of the monitor where the window should be displayed in a multi-monitor environment.

##### LINE, COLUMN, and AT Phrases

90. The LINE phrase indicates the starting row of the new window. This is always relative to the first line of the parent window. Non-integer values are allowed. If the LINE phrase is omitted, then the new window is first centered vertically over the parent window and then adjusted to be fully on the screen.
91. The COLUMN phrase works the same as the LINE phrase, except that it controls the horizontal positioning.
92. The AT phrase screen-loc item must be either a 4-digit or 6-digit number. The first half of this number is the starting row, the second half the starting column. These values are interpreted in the same manner as they are for the LINE and COLUMN phrases.

##### SIZE and LINES Phrases

93. The SIZE phrase indicates the width of the interior of the new window. If it is omitted, then the width is the same as the main application window. If there is no main application window available, the default size of the floating window is the same as the current window.
94. The LINES phrase indicates the height of the new window's interior. If it is omitted, then the height is the same as the main application window. As with the SIZE phrase, a non-integer number of lines may be specified. Any partial lines created are always displayed as spaces with the background color. The minimum value for LINES is "1" (one).

##### FONT Phrase

95. The FONT phrase assigns the font that will be used for all textual ACCEPT and DISPLAY statements used in the window. This also sets the default cell size to the size of the "0" (zero) character described by font-1. The cell size determines the height of one row and the width of one column. The font described by font-1 must be a fixed-width font. If it is not, or if the FONT phrase is not specified, then the font used is the same as the one used by the parent window.

##### CONTROL FONT Phrase

96. The CONTROL FONT phrase specifies the default font to use for any graphical controls displayed in this window. If you omit the CONTROL FONT phrase, a system default is used (the font "DEFAULT-FONT").

##### CELL Phrase

97. The CELL phrase defines the height, or width, or height and width of one cell in the window. A cell defines the height of one row and the width of one column. The default cell size is set by the size of the font used in the window.
98. The cell size is described in terms of cell units. The exact meaning of a cell unit is machine-dependent. Typically, for character-based systems, one cell unit is equal to the height or width (as appropriate) of one screen character. On graphical systems, a cell unit is typically one pixel in size. When developing programs, you should avoid writing code that depends on fixed (hard-coded) values for cell units.
99. The HEIGHT option of the CELL phrase defines the cell height for the new window. The WIDTH option defines the width. The SIZE phrase defines both the height and width together.
100. The cell-units option sets the cell's height, or width, or both, to the value of cell-units.
101. The control-type-name phrase causes the cell height, or width, or both, to be based on a particular font and control type. The system measures the size of font-2 when it is used in a control described by control-type-name, and sets the cell size accordingly. This option is typically used to set the coordinate space of the window to one that is convenient for aligning several controls of a particular type and font. Note that the font handle (font-2) is not required. When it is omitted, the window's CONTROL FONT is used. Also note that if the font handle is omitted, the optional word FONT is required (in order to avoid ambiguity with the FONT phrase).
102. If the SEPARATE option is specified, then a system-dependent amount is added to the measured font height to provide for some vertical separation between controls. This is typically used to provide some space between boxed entry-fields on adjacent rows. On the other hand, if OVERLAPPED is specified, the height is reduced by the size of the top border of a boxed entry field. This causes boxed fields on adjacent rows to share a common border.
103. The runtime currently limits control-type-name to be either a "LABEL" or "ENTRY-FIELD". If another control type name is used, the runtime treats it as if it were type "LABEL".
104. If a window's cell width does not match the width of its font, or if its cell height is less than the height of its font, then the effects of a textual ACCEPT or DISPLAY statement in that window are undefined. If its cell height is larger than its font's height, then the characters are positioned at the top of each cell, and the lower portion of the cell is filled with the text's background color.
105. In particular, if the relative size of the font you use in your controls changes in relation to the system's fixed font, then you will experience problems, including overlapping controls. This is because the default cell size that defines the coordinate space is based on a fixed-size font in order to maintain compatibility with character-based applications. The size relationship between the variable-pitch font used in controls and the default fixed-font that defines the coordinate space determines the appearance of the screen. If the relationship changes, the appearance of the screen changes. One way that this can happen is if the end user's machine is missing one of the fonts. In this case, Windows will substitute a different font, which may be a different size. To avoid these problems, define your coordinate space based on the same font that your controls use (with the CELL phrase). Then if the font changes the entire screen is rescaled uniformly.
106. For example, the following statement defines the coordinate space based on the font used with entry fields. This definition allows you to easily position entry fields vertically with "LINE 1", "LINE 2", etc., and have it look right.

CELL SIZE IS ENTRY-FIELD FONT SEPARATE

##### USER-GRAY, USER-WHITE, and USER-COLORS Phrases

107. The USER-GRAY, USER-WHITE, and USER-COLORS phrases provide a convenient way of matching your application's normal colors to those chosen by the user. The USER-GRAY option causes the palette manager to map color number "8" (low-intensity white) to the color that the user has chosen to use with 3-D objects on the host system. Similarly, USER-WHITE maps color number "16" (high-intensity white) to the color the user has chosen to be the normal background color for application windows. If you arrange your application so that it uses color number "8" as the background for regions populated with graphical controls, and color number "16" for plain text regions, your application will look much like other applications on the system.
108. The USER-COLORS phrase indicates that you want to apply both the USER-GRAY and USER-WHITE options. These phrases are effective only on host graphical systems that have a palette manager. On other systems, these phrases have no effect. Also, note that the palette applies to the entire application. Because of this, you usually specify these options only on the first window you create.

##### TITLE-BAR Phrase

109. The TITLE-BAR phrase indicates that you want to have a title bar placed along the top edge of the new window. This phrase is automatically implied by the TITLE phrase (exception: this is not true if you also use the CONTROL VALUE phrase). Under some GUIs (including Windows), you must place a title bar in order to move the floating window with the mouse. Without a title bar, the user's ability to move the window depends on the host GUI. Note that you can have a title bar without specifying a title.

##### SYSTEM MENU Phrase

110. The SYSTEM MENU phrase causes a system menu (also known as a close box) to appear on the created window. This menu allows the user to close the floating window. It may also have additional properties depending on the host system. Under Windows, this menu contains the Move and Close operations. If you include a system menu, your program must be ready to act on a close window event (cmd\_close) at any timeNO-CLOSE Phrase

111. The NO-CLOSE phrase causes the window's "Close" menu option to be disabled. This option can be applied only when the window is created and its effects cannot be reversed (the associated window's "Close" option is permanently disabled). The NO-CLOSE option takes precedence over other settings, including the setting of the QUIT_MODE configuration variable.

##### AUTO-RESIZE and RESIZABLE Phrases

112. The AUTO-RESIZE phrase specifies that the window be displayed with resizable borders. When the window is created, it is displayed full size as defined by the SIZE and LINES phrases. By dragging the resizable borders the user can reduce or increase the size of the window. The runtime automatically adds scroll bars as needed and manages any required scrolling. The window also has a maximize button that allows the user to immediately resize the window to its full size. The exact representation and functioning of the resizable borders and the maximize button is host system dependent. Although the user can change the physical size of the window, the logical size does not change. Neither do controls in the window change size or position. If AUTO-RESIZE is omitted, the window is a fixed size.

The RESIZABLE phrase creates a window that the user can resize but omits the automatic handling provided by the AUTO-RESIZE phrase. When the user resizes the window, the size of the logical window is changed to match the new physical window. Any area that is new is displayed with spaces in the window's background color. Any area that has been removed is lost (although any permanent controls in that area will still exist). The window's subwindow is resized to fill the interior of the resized window. The subwindow's background color is changed to match the window's background color. Other traits of the subwindow remain unchanged. The program receives a NTF-RESIZED event to inform it of the new size. See the section on events for details. Windows that have the RESIZABLE attribute can use a resize layout manager to help handle the resizing and positioning of controls in the window.

For windows with the RESIZABLE phrase, min-size and min-lines set the windows' smallest width and height respectively. This value is expressed in character cells (fractional cells are ignored). If omitted, or set to zero, the smallest window size is determined by the host system. Similarly, the max-size and max-lines values set the window's largest width and height. If omitted, or set to zero, the host system determines the largest size (usually the entire screen). For windows without the RESIZABLE phrase, these values are ignored.

##### ACTION Phrase

113. The ACTION phrase allows you to programmatically maximize, minimize, or restore a window. To use ACTION, assign it one of the following values (these names are found in isgui.def):

| | |
| --- | --- |
| ACTION-MAXIMIZE | maximizes the window. It has the same effect as if the user clicked the "maximize" button. Allowed only for windows that have RESIZABLE or AUTO-RESIZE specified or implied for them. |
| ACTION-MAXIMIZE-POSTPONED | same as ACTION-MAXIMIZE, but the maximization occurs at the first display of a Screen Section item or graphical control (not considering Ribbon, Status-bar and Tool-bar) over the window. |
| ACTION-MINIMIZE | minimizes the window. Allowed only with INDEPENDENT windows that have the AUTO-MINIMIZE property set to true. It is not supported with other types of floating windows; if set, it is ignored by the runtime. · ACTION-MINIMIZE has the same effect as if the user clicked the "minimize" button. |
| ACTION-RESTORE | If the window is currently maximized or minimized, restores the window to its previous size and position; otherwise, it has no effect. Allowed only for windows that can be maximized or minimized. |
| | |

114. If you assign an ACTION value that is not allowed, then there is no effect other than to trigger the ON EXCEPTION phrase of the MODIFY statement (if present). Note that you can use the ACTION phrase to create a window that is initially maximized or minimized.

##### CONTROL VALUE Phrase

115. The CONTROL VALUE phrase allows you to specify certain attributes of the new window at run time instead of at compile time. Control-val must be a numeric expression. In it, you can specify certain floating window traits by adding together any of the following values:

| | |
| --- | --- |
| Boxed | 1 |
| Shadow | 2 |
| No Scroll | 4 |
| No Wrap | 8 |
| Reverse | 16 |
| Title-Bar | 32 |
| System Menu | 64 |
| User-Gray | 128 |
| User-White | 256 |
| | |

For each value specified, the corresponding attribute is given to the new window. When a value is not specified, the presence or absence of that trait depends on the other phrases included in the DISPLAY FLOATING WINDOW statement. Note that you can only give traits to a window with the CONTROL VALUE phrase; you cannot negate traits specified by the DISPLAY FLOATING WINDOW statement. For example, if you want to specify at run time whether or not a window gets a shadow, you should omit the SHADOW phrase from the DISPLAY FLOATING WINDOW statement and use a CONTROL VALUE phrase to add shadowing when you want it.

##### LAYOUT-MANAGER Phrase

116. The LAYOUT-MANAGER phrase attaches a layout manager to the window.

##### VISIBLE Phrase

117. The VISIBLE option determines whether the window created is visible or invisible. If the FALSE option is used, or visible-state is the value zero, then the window is invisible. Otherwise, the window is visible. If the VISIBLE phrase is omitted, then the window is visible.

##### POP-UP MENU Phrase

118. The POP-UP MENU phrase associates a pop-up menu with the window. If menu-1 is specified, then the menu associated with menu-1 becomes the pop-up menu. If NULL is specified, the window is not given a pop-up menu. Pop-up menus are activated by a machine-dependent technique. Under Windows, the technique is to right-click on the window's background.

##### CONTROLS-UNCROPPED Phrase

119. Normally, when you create a control in a window, the control is cropped to fit the current subwindow's dimensions. In addition, if the control's home position is outside of the current subwindow, the control is not created. Adding the phrase CONTROLS-UNCROPPED overrides these rules. When this phrase is used, the control is created with the specified location and dimensions, regardless of whether the control will be physically in the window.

This can be useful when you are dealing with RESIZABLE windows. Sometimes a resizable window is too small to show all of the controls that your program creates. Normally, these controls either would not be created or would be cropped. This could produce odd results when the window is later resized larger by the user. Although the resized window is now large enough to show everything, the controls still show their cropped appearance, because their (cropped) creation size is recorded in the controls as their actual size. Specifying CONTROLS-UNCROPPED avoids the cropping behavior.

This style is useful also when you want to place a combo-box near the bottom of a window. Because the size of the drop-down portion of the combo-box is determined by the control's overall height, cropping the control limits the drop-down box to the window's boundaries. If you want the box to drop down beyond the edge of the window, you need to use the CONTROLS-UNCROPPED window style to allow this.

##### EVENT PROCEDURE Phrase

120. A window's event procedure is executed whenever an event is processed for that window. The event procedure is executed as if it were the target of a PERFORM statement. Only the window's own events trigger the event procedure. Events generated by controls contained in the window do not trigger the window's event procedure (they trigger the control's event procedure instead). The event procedure executes while the event is being processed, before the event causes termination of any executing ACCEPT statement.
121. Specifying proc-1 assigns that procedure as the window's event procedure. Flow of control returns at the end of proc-1, unless proc-2 is specified, in which case flow of control returns at the end of proc-2. If you specify the NULL option, the window does not have an event procedure. This is the default, so the NULL option is treated as commentary
122. DISPLAY INITIAL WINDOW verb creates the main application window. The main application window has several special properties. If it is minimized, all other windows in the application are also minimized. If it is closed, the application terminates. A program can have only one main application window.

If you attempt to create a main application window after one already exists, the DISPLAY INITIAL WINDOW statement will have no effect other than to set handle-name to NULL.

The runtime automatically constructs the main application window if needed. This occurs any time a screen operation is dictated by the program and the program has not yet constructed a main application window. When this occurs, the runtime executes the following implied statement:

A. DISPLAY INITIAL WINDOW

B. TITLE-BAR,

C. SYSTEM MENU,

D. AUTO-MINIMIZE,

E. AUTO-RESIZE.

123. The main application window is always modeless. A modeless window is one where the user can switch to another window while the current window is still open. You can include the word MODELESS in the statement as commentary.
124. The INDEPENDENT phrase creates an independent window. Independent windows act like additional main application windows. Independent windows have the following traits:

Independent windows do not have a parent. As a result, any other window in the application can be placed over them. Also, destroying another window in the application will not destroy the independent window.

Although they do not have a parent, independent windows use the current window to determine their default fonts, cell size, and colors. Also, independent windows use the current window when determining their position. This is computed in the same manner as it is for floating windows.

Independent windows can be minimized separately. Under Windows and Windows NT, each visible independent window has its own button on the task bar.

Independent windows process their close box in the same manner as floating windows--by generating a CMD-CLOSE event.

Independent windows can be created before the main window. In this case, there is no current window to provide defaults, so the independent window uses the same defaults as the main application window would.

If an independent window is current when the main application window is created, the defaults for the main window are derived from the independent window.

125. Most of the phrases allowed for DISPLAY INITIAL WINDOW work in exactly the same way that they work in other DISPLAY WINDOW statements. The following rules are supplemental.

##### SCREEN-LINE and SCREEN-COLUMN Phrases

126. Under Windows, the runtime ensures that the initial window is fully visible, so the location specified by screen-line and screen-col may not be used if that would place a portion of the window off the screen (the closest allowed location is used).

##### AUTO-MINIMIZE Phrase

127. The AUTO-MINIMIZE phrase indicates that a minimize button should be displayed. The runtime handles the minimizing and restoring of the application automatically. If you do not specify AUTO-MINIMIZE, the user is not allowed to minimize the application.

In addition, the AUTO-MINIMIZE phrase implies the SYSTEM MENU and TITLE-BAR phrases.

##### UNDECORATED Phrase

128. The UNDECORATED phrase turns off native decorations like frame and title bar.

##### STANDARD Phrase

129. The STANDARD option is identical to the INITIAL option except that it automatically implies the following options:

A. TITLE-BAR

B. SYSTEM MENU

C. AUTO-MINIMIZE

D. USER-COLORS

130. For graphical systems, a black foreground on a white background. For character-based systems, a white foreground on a black background. You may override these default colors with the various color setting phrases.
131. DISPLAY TOOL-BAR adds a toolbar to the current floating or main-application window. A toolbar is a region of the window that is devoted to holding buttons and other controls that are used as mouse accelerators that the user can activate with the mouse to quickly specify a program operation. Toolbars extend across the entire width of the window. They appear at either the top or the bottom of the window depending on the host system. Under Microsoft Windows, toolbars appear at the top of the window.
132. You may have more than one toolbar associated with a particular window. All toolbars associated with a window are stacked vertically in the order that they are created.
133. Like menu-bars, the space that a toolbar occupies is not part of the body (client area) of the window. When you create a toolbar, the window it is attached to is enlarged to accommodate the space required by the toolbar unless the window is RESIZABLE. Toolbars automatically grow and shrink horizontally to match the width of the owning window.
134. In several respects, toolbars act like windows. Because of this, they are called child windows of the window they are attached to. When you create a toolbar, a handle that identifies it is returned in handle-name. Like other window handles, you can use handle-name in an UPON phrase of a DISPLAY statement to direct output to the toolbar. You can also use handle-name in a DESTROY statement to remove the toolbar. Unlike other windows, toolbars are not made current or active when they are created. This means that the only way to place a control on the toolbar is with the UPON phrase.
135. Toolbars cannot take textual output (i.e., text-style ACCEPT and DISPLAY statements cannot refer to a toolbar). You can only place graphical controls on a toolbar. However, any type of graphical control may be placed on a toolbar. Most commonly, push buttons appear on toolbars (either text or bitmap buttons), as well as bitmap check-boxes and radio-buttons.
136. Font-1 identifies the default font to use for any controls shown in the toolbar. If font-1 is not specified, DEFAULT-FONT is used.
137. Height specifies the height of the toolbar. Height units are derived from the height of font-1 (or DEFAULT-FONT if font-1 is not used). If height is omitted, then the toolbar uses a host-dependent default height.
138. The toolbar directly uses the background-color and background-intensity only when it is drawn. The foreground-color and intensity are used as defaults for controls displayed on the toolbar. Any color and intensity elements that are omitted from the DISPLAY TOOL-BAR statement are inherited from the window that the toolbar is attached to.
139. It’s good practice to populate a toolbar with controls that can act like function keys. In this way, the toolbar acts in a manner that is very similar to a menu bar. This simplifies other programming because you do not need to attempt to directly activate the controls on the toolbar. Controls that can act like function keys are buttons (push buttons, check boxes and radio buttons). Use the SELF-ACT style for buttons placed on a toolbar. For check boxes and radio buttons, use both the SELF-ACT and NOTIFY styles.

#### Format 11

140. Format 11 (DISPLAY MESSAGE BOX) creates a modal pop-up window with a title-bar, a text message, an icon (where available) and user defined push buttons. It then waits for the user to push one of the buttons and returns the results at which point the window is destroyed. Message boxes come in "OK" and "Yes/No" formats, with an optional "Cancel" button in each format. Message boxes are a programming convenience when you need to create a simple dialog box that can fit one of these predefined formats.

Text forms the body of the message box. It is the string of text that the user will see. When more than one text item is specified, they are concatenated together to form a single string that the user sees.

The message string is split across multiple lines in the box. The maximum line length is the space in pixels occupied by 53 occurrences of the character "0" using the message box font.

When the line length is reached:

- if there is no space before the line length limit, then the runtime breaks the text and shows the exceeding part on the next line,
- if there's a space before the line length limit, then this space is replaced by a line feed so the text after the space goes on the next line.

If you want to force the text to a new line, you can embed an ASCII line-feed character (h"0A" in COBOL) where you want the new line to start. If you want to insert a tabulation, you can embed an ASCII tab character (h"09" in COBOL). For example, the following code produces a message box with two lines of text, with the second line indented by one tabulation:

```cobol
78  NEWLINE      VALUE H"0A". 
78  TABULATION   VALUE H"09". 
...
DISPLAY MESSAGE BOX,  
"This is line 1", NEWLINE,  
 
TABULATION "and this is line 2" .
```

141. When text is numeric, it is converted to a text string using the CONVERT phrase rules. Leading spaces in the resulting string are suppressed in the message. When text is numeric-edited, leading spaces are suppressed in the message, and the rest of the item is displayed without modification. For all other data types, text is displayed without modification.
142. Title is displayed in the message box's title bar. If title is omitted, the message box displays the same title as the application's main window.
143. Type, icon, default and value use a set of constants to describe the type of message box and the buttons it contains. These constants have level 78 definitions for them in the COPY library "isgui.def" supplied with the compiler. These constants are as follows:

```cobol
78  MB-OK                    VALUE 1.
78  MB-YES-NO                VALUE 2.
78  MB-OK-CANCEL             VALUE 3.
78  MB-YES-NO-CANCEL         VALUE 4.
78  MB-RETRY-CANCEL          VALUE 5.
78  MB-ABORT-RETRY-IGNORE    VALUE 6.
78  MB-CANCEL-RETRY-CONTINUE VALUE 7.
 
78  MB-YES                   VALUE 1.
78  MB-NO                    VALUE 2.
78  MB-CANCEL                VALUE 3.
78  MB-ABORT                 VALUE 4.
78  MB-RETRY                 VALUE 5.
78  MB-IGNORE                VALUE 6.
78  MB-CONTINUE              VALUE 7.
 
78  MB-DEFAULT-ICON          VALUE 1.
78  MB-WARNING-ICON          VALUE 2.
78  MB-ERROR-ICON            VALUE 3.
```

A. Type describes the set of buttons contained in the box. The possible values are:

| Type Value | Buttons |
| --- | --- |
| MB-OK | "OK" button |
| MB-YES-NO | "Yes" and "No" buttons |
| MB-OK-CANCEL | "OK" and "Cancel" buttons |
| MB-YES-NO-CANCEL | "Yes", "No" and "Cancel" buttons |
| MB-RETRY-CANCEL | "Retry" and "Cancel" buttons |
| MB-ABORT-RETRY-IGNORE | "Abort", "Retry" and "Ignore" buttons |
| MB-CANCEL-RETRY-CONTINUE | "Cancel", "Retry" and "Continue" buttons |

i. If type is omitted, or if it contains an invalid value, then MB-OK is used.

B. Icon describes the icon that will appear. The icon appears only under Windows. On other systems, the icon selected is ignored. If icon is set to MB-ERROR-ICON, then a "stop" icon is shown. If icon is set to MB-WARNING-ICON, then an "exclamation" icon displays. If icon is set to MB-DEFAULT-ICON, then boxes with "OK" buttons will display an "information" icon, and boxes with "Yes/No" buttons will display a "question mark" icon. If icon is omitted or contains an invalid value, then MB-DEFAULT-ICON is used. Icons are customizable by providing custom GIF files as described in [Default icons](../../User-Interface/Working-With-UI-and-Controls/Default-Icons).

C. Font-1 describes the font used to rendered the text in the message box. If omitted, the font specified by [iscobol.gui.messagebox.font](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-ingerface-gui) is used.

D. Color-val, bg-color and fg-color describe the colors used in the dialog. If omitted, the colors specified by [iscobol.gui.messagebox.bcolor](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-ingerface-gui) and [iscobol.gui.messagebox.fcolor](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-ingerface-gui) are used.

E. Default describes which button will be the default button (i.e., the button used if the user simply presses "return"). The possible values are:

| Value | Buttons |
| --- | --- |
| MB-OK | "OK" button |
| MB-YES | "Yes" buttons |
| MB-NO | "No" button |
| MB-CANCEL | "Cancel" button |
| MB-ABORT | "Abort" button |
| MB-RETRY | "Retry" button |
| MB-IGNORE | "Ignore" button |
| MB-CONTINUE | "Continue" button |

i. If default is omitted, or contains an invalid value, then the default button will be the first button.

F. Timeout is the number of hundreds of seconds to wait for user input. Once this timeout is expired, the message box dialog is automatically closed. If Timeout is omitted, then the message box dialog stays active until the user performs some action.

G. The CENTERED clause causes the message box dialog to be centered in the current screen. Without this clause, the message box dialog is centered in the parent window or, if there is no parent window, it’s displayed in the top left corner of the current screen. The CENTERED clause can be also activated via the [iscobol.gui.messagebox.centered (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-ingerface-gui) configuration property.

144. Value will contain the identity of the button the user pressed to leave the message box. It uses the same values as default does, described above. For example, if the user presses the "No" button, then value will contain MB-NO.
145. On Windows systems, the system sound associated to the message type is played when the message box is displayed.
146. By default, the runtime renders message box icons and fonts according to the currently active Look & Feel. To use standardized icons and fonts—regardless of the selected Look & Feel—set the [iscobol.gui.messagebox.native_style (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-ingerface-gui) configuration property to false.

#### Custom message box implementation

147. It’s possible to provide a custom implementation of the message box dialog through a COBOL program with the following structure:

```cobol
       PROGRAM-ID. MyMessageBox.
       
       CONFIGURATION SECTION.
 
       INPUT-OUTPUT SECTION.
 
       FILE SECTION.
 
       WORKING-STORAGE SECTION.
       77  rc                       pic s9.
 
       LINKAGE SECTION.
       
       77  msgbox-text              pic x any length.
       77  msgbox-title             pic x any length.
       77  msgbox-type              pic 9. 
       77  msgbox-icon              pic 9(5).
       77  msgbox-default-btn       pic 9. 
       77  msgbox-timeout           pic 9(5).
       77  msgbox-centered          pic 9.
           88 is-centered           value 1 false 0.
           
 
       PROCEDURE DIVISION USING  msgbox-text
                                 msgbox-title
                                 msgbox-type 
                                 msgbox-icon
                                 msgbox-default-btn
                                 msgbox-timeout
                                 msgbox-centered
                                 .
 
       MAIN.
      *-----------------------------------------------------------------*
      *                     your logic here    
      *-----------------------------------------------------------------*
           GOBACK rc.
```

The program receives the message box specifications as Linkage parameters and can return a numeric exit code, that is useful to communicate the user choice for yes-no messages.

To associate the COBOL program to the message box implementation, use the [iscobol.gui.messagebox.custom_prog](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-interface-gui) configuration property, e.g.

```cobol
iscobol.gui.messagebox.custom_prog=MYMESSAGEBOX
```

The program will be searched for either in the Classpath or in the code-prefix on the server machine, like a standard COBOL program that gets called through a [CALL](./CALL) statement.

If you prefer to have the program searched for either in the Classpath or in the code-prefix on the client machine, like a standard COBOL program that gets called through a [CALL](./CALL) CLIENT statement, set the property as follows:

```cobol
iscobol.gui.messagebox.custom_prog=MYMESSAGEBOX,C
```

#### Format 12

148. DISPLAY UPON ENVIRONMENT-NAME sets ENVIRONMENT-NAME to the variable or Runtime Framework property setting specified by name. The value of the variable identified by ENVIRONMENT-NAME can be queried with a Format 8 ACCEPT statement.
149. DISPLAY UPON ENVIRONMENT-VALUE sets the value of the variable identified by ENVIRONMENT-NAME. This value can be queried with a Format 8 ACCEPT statement.
150. DISPLAY UPON ENVIRONMENT-VALUE fails if ENVIRONMENT-NAME hosts the name of a configuration variable whose value cannot be changed. In this case Statement-1 (if specified) is executed. Otherwise, Statement-2 (if specified) is executed.

#### Format 13

151. A Format 13 DISPLAY creates a new control and displays it either on the screen or within a [GRID](../../User-Interface/Controls-Reference/GRID/GRID) cell depending on the UPON phrase. A handle to the new control is returned in Control-Handle and is used in future references to the control.
152. control-class identifies the type of the control. See [Controls Reference](../../User-Interface/Controls-Reference/Controls-Reference) for the list of available controls.
153. y and x are respectively the row and column coordinates that identify a [GRID](../../User-Interface/Controls-Reference/GRID/GRID) cell.
154. Screen-group shall reference a Screen Section group, so a Screen-name not associated to a control-class.
155. IIf the UPON clause is not specified, the control is added to the current Screen but not included in the Accept of the Screen. It must be accepted separately. If the UPON clause followed by a screen-group is specified, the control is added to the Screen identified by Screen-group as if it was declared in Screen Section at the bottom of that group.

#### Format 14

156. Since this statement causes the creation of a pop-up window, the CONTROL is supported only for documentative purposes. The wcb data item should be defined as follows:

```cobol
       01  WCB.
           03 WCB-HANDLE PIC 999 BINARY(2) VALUE 0.
           03 WCB-NUM-ROWS PIC 999 BINARY(2).
           03 WCB-NUM-COLS PIC 999 BINARY(2).
           03 WCB-LOCATION-REFERENCE PIC X.
              88 WCB-SCREEN-RELATIVE VALUE "S".
              88 WCB-WINDOW-RELATIVE VALUE "W".
           03 WCB-BORDER-SWITCH PIC X.
              88 WCB-BORDER-ON VALUE "Y" FALSE "N".
           03 WCB-BORDER-TYPE PIC 9.
              88 WCB-BORDER-WCB-CHAR VALUE 0.
              88 WCB-BORDER-PLUS-MINUS-BAR VALUE 1.
              88 WCB-BORDER-LINE-DRAW VALUE 2.
              88 WCB-BORDER-DBL-LINE-DRAW VALUE 3.
           03 WCB-BORDER-CHAR PIC X.
           03 WCB-FILL-SWITCH PIC X.
              88 WCB-FILL-ON VALUE "Y" FALSE "N".
           03 WCB-FILL-CHAR PIC X.
           03 WCB-TITLE-LOCATION PIC X.
              88 WCB-TITLE-TOP VALUE "T".
              88 WCB-TITLE-BOTTOM VALUE "B".
           03 WCB-TITLE-JUSTIFICATION PIC X.
              88 WCB-TITLE-CENTER VALUE "C".
              88 WCB-TITLE-LEFT VALUE "L".
              88 WCB-TITLE-RIGHT VALUE "R".
           03 WCB-TITLE-LENGTH PIC 999 BINARY(2).
              88 WCB-TITLE-LENGTH-COMPUTE VALUE 0.
           03 WCB-TITLE PIC X(40).
```

The border is always drawn in the same way and fill characters are not supported, hence the variables WCB-BORDER-SWITCH, WCB-BORDER-TYPE, WCB-BORDER-CHAR, WCB-FILL-SWITCH and WCB-FILL-CHAR are ignored.

The pop-up window created by this statement must be closed with a Format 3 CLOSE statement.

#### Format 15

157. Notification windows are undecorated dialogs that host SCREEN SECTION items. The items are displayed over the window with a Format 2 DISPLAY statement. Only labels and bitmaps should be displayed on a notification window.
158. The window appears in the position specified by the styles TOP, BOTTOM, RIGHT and LEFT. These styles can be used alone or combined together. For example, in order to display the notification window in the top-right corner of the screen, use both TOP and RIGHT.
159. ACCEPT can’t be performed on notification windows . The screen hosted by a notification window never has the focus and accepting that screen would make the ACCEPT terminate with CRT STATUS set to 97 (no input fields). However, it’s possible to display SELF-ACT buttons on a notification window; when these buttons are clicked, their EXCEPTION-VALUE is intercepted by the ACCEPT on the active window. A notification window is automatically closed when the user clicks on it or when Timeout expires.
160. If the notification window is displayed as hidden (with the VISIBLE attribute set to false) and made visible later (modifying the VISIBLE attribute to true), then a fade-in effect is applied. A fade-out effect is always applied when the window is destroyed.

### Examples

Format 1 - Display to sysout where no GUI terminal exist

```cobol
display "Hello World!" upon sysout
```

Format 2 - Display screen from screen section

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
           destroy window-handle.
       ...
```

Format 3 - Display variables and literals on specific line and column

```cobol
display "Customer Code : " line 2 col 10
         cust-code         line 2 col 30
        "Customer Name : " line 3 col 10
         cust-full-name    line 3 col 30
end-display
```

Format 3 - Display variables and literals with Microsoft COBOL compliant syntax

```cobol
display (2,10) "Customer Code : " cust-code
display (3,10) "Customer Name : " cust-last-name ", " cust-first-name
```

Format 4 - Display text window with some contents and title

```cobol
display window erase
display "Press Enter to Exit" upon window bottom centered title
display "This is a help text..." line 4 col 5
display "This is a help text..." line 5 col 5
accept omitted
```

Format 5 - Change screen size to 132 on text only devices

```cobol
display screen size 132
```

Format 6 - Display lines on text only screen

```cobol
display line size 80 at line 2 col 1 centered title "Customers screen"
display line size 80 at line 23 col 1
```

Format 7 - Display box on text only screen

```cobol
display box at line 2 size 80 lines 22
```

Format 8 - Display text window with some contents and title

```cobol
display window erase
display "Press Enter to Exit" upon window bottom centered title
display "This is a help text..." line 4 col 5
display "This is a help text..." line 5 col 5
accept omitted
```

Format 9 - Display title upon floating window

```cobol
display "Select a customer from list" upon floating window sub-win-handle title
```

Format 10 - Display graphical window and display/accept a screen on it

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
           destroy window-handle.
       ...
```

Format 11 - Display message box to request an answer

```cobol
display message "Please confirm the deletion of this invoice"
   type mb-yes-no
   giving delete-answer
end-display
if delete-answer = mb-yes
   delete customers
else
   display message "Delete action cancelled"
end-if
```

Format 12 - Display upon environment-name

```cobol
display "envfullname" upon environment-name
display "Adam Smith" upon environment-value
accept f-name from environment-value
```

Format 13 - Display combo-box upon grid cell, row 2, col 1

```cobol
display combo-box upon my-grid-handle (2,1)
        handle in my-combo-box-handle
end-display
```

Format 13 - Create a Screen with 2 entry-fields and dynamically add a OK button to it

```cobol
       WORKING-STORAGE SECTION.
       77 w-user pic x any length.
       77 w-pwd  pic x any length.
       77 ok-btn handle of push-button.
 
       SCREEN SECTION.
       01 screen-1.
          03 entry-field line 2, col 2, size 10 cells, using w-user.
          03 entry-field line 4, col 2, size 10 cells, using w-pwd.
 
       PROCEDURE DIVISION.
       ...
           display screen-1.
           display push-button ok-button line 6, col 2
                   upon screen-1
                   handle ok-btn.
```

Format 15 - Display a “job done” notification on the bottom left of the screen

```cobol
working-storage section.
...
77 n-win handle of window.
...       
screen section.
...
01 job-complete-scr.
   03 label "Job completed" line 2, col 2.
...       
procedure division.
...
display notification window
        background-color rgb x#ffffff
        lines 4, size 40
        bottom right
        before time 200
        handle n-win.
display job-complete-scr upon n-win.
```
