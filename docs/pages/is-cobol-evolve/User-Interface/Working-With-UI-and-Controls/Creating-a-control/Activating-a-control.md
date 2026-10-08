## Activating a control

Controls are activated by the ACCEPT Statement. The syntax is:

```cobol
ACCEPT {screen-name-1      } ... 
       {handle-1           }
       {CONTROL AT location} 
```

*location* is defined as follows:

```cobol
{ screen-loc [CELL  ]
             [CELLS ]
             [PIXEL ]
             [PIXELS]
 
 
  LINE NUMBER line-num [CELL  ]
                       [CELLS ]
                       [PIXEL ]
                       [PIXELS]
 
  {COLUMN  } NUMBER col-num [CELL  ]
  {COL     }                [CELLS ]
  {POSITION}                [PIXEL ]
  {POS     }                [PIXELS]
  
  }
```

When a whole Screen Section is activated, only one control is activated at a time and the other controls are automatically activated in response to the user's actions. By default, the \[Tab\] and \[Enter\] keys activate the next control, while the \[Shift+Tab\] key activates the previous one. The keyboard is fully configurable, so any key can be used to change the active control. Controls are also activated by the mouse click. The program can prevent a control from being activated. See the [Embedded Procedures](./Embedded-Procedures/Embedded-Procedures) and the [Event handling](./Embedded-Procedures/Event-handling) sections for further details.

When a single control is activated, no automatic activation occurs. The CMD-GOTO Event is fired instead, and all the information needed to activate the new control is provided.

The user can also use the function keys to access the various functions of the program. The easiest way to do that, is to include the ACCEPT Statement in a loop.

```cobol
77  Key-Pressed IS SPECIAL-NAMES CRT STATUS PIC 9(5).
78  KeyEsc VALUE 27.
78  KeyF6  VALUE 6.
 
.
.
.
 
PERFORM UNTIL Key-Pressed = KeyEsc
 
   ACCEPT MyScreen
 
   EVALUATE Key-Pressed
   WHEN KeyF6
        PERFORM A-FUNCTION
   END-EVALUATE
 
END-PERFORM
```

*Key-Pressed* is defined as the special register CRT STATUS containing the value associated with the function key that terminated the ACCEPT Statement.

Push-Buttons, Check-Boxes and Radio-Buttons with the SELF-ACT Style set do not need to be explicitly activated. In this way, a control not belonging to the Screen Section currently active can be handled with little programming effort.
