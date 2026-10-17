## Screen Description

A screen description entry specifies attributes, behavior, size, and location of a screen item so that it can be referenced by an ACCEPT screen or a DISPLAY screen Statement. The screen description entry allows data items to be associated with the screen item so that the contents of the data item are displayed within the screen item or the value keyed into a screen item by the operator is placed in the data item.

### Format 1

```cobol
Level-Number { Screen-Name } [ AUTO clause            ]
             { FILLER      } [ Background Intensity   ]
                             [ Foreground Intensity   ]
                             [ {BELL}                 ]
                               {BEEP}
                             [ BLANK clause           ]
                             [ BLANK WHEN ZERO clause ] 
                             [ {BLINKING}             ]
                               {BLINK   }
                             [ COLOR clause           ]
                             [ COLUMN clause          ]
                             [ CONTROL clause         ]
                             [ ENABLED clause         ]
                             [ LINE clause            ]
                             [ FROM clause            ]
                             [ {FULL        }         ]
                               {LENGTH-CHECK}
                             [ HELP-ID clause         ]
                             [ JUSTIFIED clause       ]
                             [ NO-ECHO clause         ]
                             [ OCCURS clause          ]
                             [ OUTPUT clause          ]
                             [ PICTURE clause         ]
                             [ PROMPT clause          ]
                             [ {REQUIRED   }          ]
                               {EMPTY-CHECK}
                             [ REVERSE clause         ]
                             [ SAME                   ]
                             [ SCROLL-GROUP clause    ]
                             [ SIGN clause            ]
                             [ SIZE clause            ]
                             [ TO clause              ]
                             [ UNDERLINED clause      ]
                             [ UPPER and LOWER clauses]
                             [ USING clause           ]
                             [ VALUE clause           ]
                             [ VISIBLE clause         ]
                             [ ZERO-FILL clause       ]
                             [ Embedded Procedures    ]
```

### Format 2

```cobol
Level-Number { Screen-Name } {control-type-name} [ title ]
             { FILLER      } [ Background Intensity   ]
                             [ Foreground Intensity   ]
                             [ {BELL}                 ]
                               {BEEP}
                             [ {BLINKING}             ]
                               {BLINK   }
                             [ CLINE [ NUMBER ] num   ]
                             [ CCOL [ NUMBER ]  num   ]
                             [ CLINES num  [ CELLS ]  ]
                             [ CSIZE  num  [ CELLS ]  ]
                             [ COLOR clause           ]
                             [ COLUMN clause          ]
                             [ CONTROL clause         ]
                             [ ENABLED clause         ]
                             [ LINE clause            ]
                             [ FROM clause            ]
                             [ {FULL        }         ]
                               {LENGTH-CHECK}
                             [ HELP-ID clause         ]
                             [ IDENTIFICATION clause  ]
                             [ JUSTIFIED clause       ]
                             [ KEY clause       ]
                             [ NO-ECHO clause         ]
                             [ OCCURS clause          ]
                             [ PICTURE clause         ]
                             [ PROMPT clause          ]
                             [ {REQUIRED   }          ]
                               {EMPTY-CHECK}
                             [ REVERSE clause         ]
                             [ SAME                   ]
                             [ SCROLL-GROUP clause    ]
                             [ SIZE clause            ]
                             [ SPLIT-GROUP clause    ]
                             [ TAB-GROUP clause       ]
                             [ TAB-GROUP-VALUE clause ]
                             [ TO clause              ]
                             [ USING clause           ]
                             [ VALUE clause           ]
                             [ VISIBLE clause         ]
                             [ PROPERTY and Property-Name Clauses ]
                             [ STYLE Clause and Style-Name        ]
                             [ Embedded Procedures    ]
```

### Syntax rules

1. *Screen-Name* is a [User-defined word](../../Preface/Definitions#user-defined-word), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.

### General rules

1. *Level-Number* may be any number from 1 through 49
2. Clauses may be specified in any order.
3. For an elementary screen item, the associated screen description entry shall include at least one of the following:
  - a FROM, TO, USING or VALUE clause;
  - a BLANK (or ERASE) clause;
  - a BELL clause.
4. If the FULL clause is specified, the JUSTIFIED clause shall not be specified.
5. If the same clause, other than an OCCURS clause, is specified at more than one level in the hierarchy of a screen item, the clause that appears at the lowest level of the hierarchy is the one that takes effect.
6. If the HIGHLIGHT and LOWLIGHT clauses are both specified in the hierarchy of a screen item, the clause that appears at the lowest level of the hierarchy is the one that takes effect.
7. The PICTURE clause may be omitted when an alphanumeric, national or numeric literal is specified in the USING clause. A PICTURE clause is implied as follows:

a. if the literal is alphanumeric, 'PICTURE X(length)'

b. if the literal is national, 'PICTURE N(length)'

c. if the literal is numeric, 'PICTURE 9(length)'

8. If the AUTO and TAB clauses are both specified in the hierarchy of a screen item, the AUTO clause takes effect. If the AUTO clause is implied (see the '-va' compile-time option in “[Compiler Options](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options)“ in the isCOBOL Evolve User's Guide) and the TAB clause is specified, the TAB clause takes effect.
9. BELL and BEEP are synonymous and are treated as a commentary.
10. BLINKING and BLINK are synonymous and are treated as a commentary.
11. FULL and LENGTH-CHECK are synonymous and are treated as a commentary.
12. REQUIRED and EMPTY-CHECK are synonymous and are treated as a commentary.
13. The SAME clause is treated as a commentary.
14. CLINE, CCOL, CLINES and CSIZE are treated as a commentary.

#### Format 2

1. A Format 2 Screen Section entry defines a screen control.
2. *Control-type-name* identifies the type of the control. The exact set of controls and their types is discussed in [Controls Reference](../../../User-Interface/Controls-Reference/Controls-Reference)).
3. When you DISPLAY a Screen Section control, the following steps are performed:

a. If this is the first DISPLAY of this control, the runtime builds a new control of the specified type.

b. The various properties specified by the Screen Section control phrases are set. Unspecified properties are then assigned default values when the control is initially created. Properties are assigned in the order listed in the Screen Section, except that the VALUE property is always assigned last.

c. The control is displayed or updated on the screen.

d. The cursor is positioned after the control.

4. When you ACCEPT a Screen Section control, that control receives the input focus, and the runtime system processes user actions until the user terminates the ACCEPT according to the rules for the ACCEPT verb.
5. When you DISPLAY a Screen Section group item, each subsidiary Screen Section entry is displayed. When you ACCEPT a Screen Section group item, the cursor (or input focus) is placed according to the rules for the ACCEPT verb, and the runtime proceeds to accept data from the user for each field or control. The runtime automatically handles cursor movements between the fields and controls.
6. Screen Section controls are assigned field numbers in the same way as Format 1 Screen Section entries. If the control is activatable (the user can interact with the control), it is given a field number. Controls that cannot take user input (e.g., Label controls) are not given field numbers. Field numbers are assigned sequentially, starting with "1", for each appropriate Format 1 or Format 2 Screen Section entry subordinate to a given 01-level group item. For Screen Section controls that omit the IDENTIFICATION clause, but have an implied field number, the corresponding control is given that field number as its ID. Note that the field number is not assigned until the control is created.
7. If you specify a PICTURE, the memory for that picture is allocated in the Screen Section entry. Each DISPLAY of that entry moves the data in the FROM or USING data item to itself using the standard MOVE rules. That entry is then used as the value of the control. Each ACCEPT of that entry stores the control's value in the Screen Section entry and then moves the entry into the TO or USING data item in accordance with the standard MOVE rules. If you omit the PICTURE clause, the control's value is retrieved directly from the FROM or USING item and stored directly in the TO or USING item. Note that specifying a PICTURE allocates additional memory. As a result, it is preferable to use the PICTURE clause only in cases where you need to reformat the data (e.g., by specifying a numeric-edited picture).
8. If you specify a FROM or USING item, and you do not specify a title, the runtime will substitute the from-item or using-item for the title if the corresponding control type does not take a value (i.e., is a Label, Push-Button, or Frane). This allows you to associate a PICTURE with a Label control. Because the picture formats the value of the control, and because a Label does not take a value, this rule allows the picture-string to set the value of the label's title.
