## Destroying a control

When a control is no longer necessary, it should be destroyed. All the resources used by that control are released.

The syntax of the DESTROY Statement is:

### Format 1

```cobol
DESTROY {screen-name-1      } ... 
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

### Format 2

```cobol
DESTROY ALL CONTROLS
```

### Format 3

```cobol
DESTROY {window-handle }
```

Destroying every single control may be slow, the best approach is to destroy the whole Screen in which controls are defined. When a graphical window is destroyed, all controls associates to the window are automatically destroyed. The main application Window can't be destroyed.
