## Inquiring a control

When the program needs to retrieve the value of a property, it must use the INQUIRE Statement

In order to make programs easier, the property VALUE is automatically updated, as long as it has been declared in Screen Section. Therefore, it is never needed to inquire the VALUE property, except during the event handling, because events may be asynchronous and the variable associated with the VALUE property may not be updated at the time the program needs it.

The syntax of the INQUIRE Statement is:

### Format 1

```cobol
INQUIRE {control-item } [ ( {index-1} ... ) ]
{CONTROL AT location}
 
  { { property-name          } [IN] { [MULTIPLE] property-value [LENGTH {IN} length-1 ] } } ...
    { PROPERTY property-type }      { [TABLE   ]                        {= }                              }
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

### Format 2

```cobol
INQUIRE {window-handle           } 
        {WINDOW [generic-handle] }
  { property-name [ IN ] property-value }
  {               [ =  ]                } ...
  [END-INQUIRE]
```

*property-name* can be one of the following:

- COLUMN
- HINT
- LINE
- LINES
- POP-UP MENU
- SCREEN COLUMN
- SCREEN LINE
- SIZE
- TITLE
- VISIBLE

The program can retrieve values of several properties with the same INQUIRE command:

```cobol
INQUIRE MyEntryField ENABLED IN EnabledVar, VALUE IN ValueVar.
```

produces the same effect as the following distinct statements:

```cobol
INQUIRE MyEntryField ENABLED IN EnabledVar.
INQUIRE MyEntryField VALUE IN ValueVar.
```
