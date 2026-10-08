## Modifying a control

The MODIFY Statement can be used to change a single property or to set or reset a style. Generally, the best way to interact with a control is to change only the properties that need to be changed.

The syntax of the MODIFY Statement is:

### Format 1

```cobol
MODIFY {control-item       } [ ( {index-1} ... ) ]
       {CONTROL AT location}
 
  { property-name          }  [IS ]    { property-option [GIVING result-1] } ...
  { PROPERTY property-type }  [ARE] 
                              [=  ]
  { [NOT] style-name } ...
 
  { event-procedure } 
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

*property-option* can be one of the following:

```cobol
  { property-value [LENGTH {IS} length-1 ] }
                           {= }             
  { ( {property-value} ... )               }
  { [MULTIPLE] property-table              }
  { [TABLE   ] {= }                        }
```

### Format 2

```cobol
MODIFY {window-handle           } 
       {WINDOW [generic-handle] }
 
  { property-name [IS ] property-value }
  {               [=  ]                } ...
 
  { [NOT] style-name } ...
 
  [ ON EXCEPTION statement-1]
 
  [ NOT ON EXCEPTION statement-2 ]
 
  { event-procedure } 
   
  [END-MODIFY]
```

When more than one property or style are changed with the same MODIFY Statement, the changes occur in the exact order they are written. The statement

```cobol
MODIFY MyEntryField, ENABLED = 1, VALUE = "New value"
```

produces the same effect than the following distinct statements:

```cobol
MODIFY MyEntryField, ENABLED = 1
MODIFY MyEntryField, VALUE = "New value"
```

Generally speaking, we recommend the use of the MODIFY Statement, unless a lot of controls are to be changed at the same time. If your program uses a number of controls to display the content of a record and you load a new record, you should update the screen displaying the whole Screen Section that defines all the controls. Modifying every single control may be slower.
