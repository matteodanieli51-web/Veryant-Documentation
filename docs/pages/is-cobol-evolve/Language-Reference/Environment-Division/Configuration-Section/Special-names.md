### SPECIAL-NAMES Paragraph

The SPECIAL-NAMES Paragraph contains definitions to be used by the program. The meaning of each definition is described below.

#### General format

```cobol
SPECIAL-NAMES.
 
  [ [ Switch-Name
 
      [ IS Mnemonic-Name ]
 
      [ ON STATUS IS Condition-Name-1 ]
 
      [ OFF STATUS IS Condition-Name-2 ] ] ...
 
    [ ALPHABET Alphabet-Name-1 IS { { Literal-1 [ { {THROUGH} Literal-2    } ] } ... } ] ...
                                                    {THRU            }
                                                  { { ALSO Literal-3 } ... }
                                  { ASCII      }
                                  { EBCDIC     }
                                  { NATIVE     }
                                  { STANDARD-1 }
                                  { STANDARD-2 }
 
    [ CLASS Class-Name-1 IS { Literal-4 [ {THROUGH} Literal-5 } ... ] ] ...
                                          {THRU   }
    [ CONSOLE IS { CRT       } ]
                 { Literal-6 }
 
    [ CRT STATUS IS crt-status ]
 
    [ CURRENCY SIGN IS Literal-7 [ WITH PICTURE SYMBOL Currency-Symbol ] ]
 
    [ DECIMAL-POINT IS COMMA ] 
 
    [ CURSOR IS cursor-name ]  
 
    [ EVENT OBJECT IS Class-Name-2 ]
 
    [ EVENT SOURCE IS Object-Reference ]
 
    [ EVENT STATUS IS Event-Status ]
 
    [ SCREEN CONTROL IS Screen-Control ]
 
    [ SYMBOLIC CHARACTERS {Symbolic-Character} ... [{IS } ] {Literal-8} ... ]. ]
                                                    {ARE}
 
    [ ENVIRONMENT-NAME IS Mnemonic-Name ]
 
    [ ENVIRONMENT-VALUE IS Mnemonic-Name ]
 
    [ SYSTEM-NAME IS Mnemonic-Name ]
 
    [ NUMERIC SIGN IS TRAILING SEPARATE ]
 
    [ CSP IS Name ]
 
    [ C01 IS Name ]    [ C02 IS Name ]  ...  [ C12 IS Name ]
 
    [ SYSIN IS SystemName ]
 
    [ SYSOUT IS SystemName ]
 
    [ SYSERR IS SystemName ]
 
    [ SYSOUT-FLUSH IS SystemName ]
 
    [ { SYSLST  } IS SystemName ]
      { SYSLIST }
 
    [ XML-SCHEMA  XmlSchemaName1 IS schema-name }
```

#### Syntax rules

1. Switch-Name can be one of the following:

  - SWITCH-0, SWITCH-1, SWITCH-2 ... SWITCH-26
  - SWITCH followed by a [Letter](../../Preface/Definitions#letter) from "A" to "Z" (bounded by quotation mark)
  - SWITCH followed by an [Integer](../../Preface/Definitions#integer) from 0 to 26.

2. *Alphabet-Name-1, Alphabet-Name-2, Class-Name-1, Class-Name-2, Condition-Name-1, Condition-Name-2, Event-Status, Mnemonic-Name, Object-Reference, Screen-Control, Symbolic-Character and SystemName* are [User-defined word](../../Preface/Definitions#user-defined-word)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
3. *Literal-1, Literal-2, Literal-3, Literal-4, Literal-5, Literal-6, Literal-7, Currency-Symbol, Literal-8 and Literal-9* are [Literals](../../Preface/Definitions#literal), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
4. *crt-status* is an unsigned integer [Numeric Data Item](../../Preface/Definitions#numeric-data-item)or a group [Data Item](../../Preface/Definitions#data-item).
5. *Class-Name-2* is a [Data Item](../../Preface/Definitions#data-item) that must refer to a class for object handling.
6. *Object-Reference* is a [Data Item](../../Preface/Definitions#data-item) that must refer to a class.
7. *Event-Status* is a [Data Item](../../Preface/Definitions#data-item) whose structure must match the structure of the data item event-status defined in [iscrt.def](.\)
8. *Screen-Control* is a [Data Item](../../Preface/Definitions#data-item) whose structure must match the structure of the data item screen-control defined in [iscrt.def](\).
9. *schema-name* can be either [Data Item](../../Preface/Definitions#data-item)s or [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.

General Rules

1. *Mnemonic-Name* can be used in the [SET](../../Procedure-Division-Statements/SET) Statement to alter the status of *Switch-Name*.
2. *Condition-Name-1* and *Condition-Name-2* can be used in a conditional expression to test the status of *Switch-Name*. *Condition-Name-1* is true when *Switch-Name* status is ON, *Condition-Name-2* it is OFF.
3. When the ALPHABET Phrase is specified, a reference to a collating sequence is defined.

  - ASCII, STANDARD-1 and STANDARD-2 specify the ASCII character set.
  - EBCDIC and NATIVE specify the EBCDIC character set.

4. if *Literal-1* is specified, *Alphabet-Name-1* will refer to a collating sequence.

  - The order in which the literals appear in the ALPHABET clause specifies, in ascending sequence, the ordinal number of the character within the collating sequence being specified.
  - When [Literal](../../Preface/Definitions#literal)s here specified are [Integer](../../Preface/Definitions#integer)s, they represent the ordinal number of a character within the native character set
  - When they are [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal)s, each character in the literal, starting with the leftmost character, is assigned successive ascending positions in the collating sequence being specified
  - Any characters within the native collating sequence, which are not explicitly specified in the literal phrase, assume a position, in the collating sequence being specified, greater than any of the explicitly specified characters. The relative order within the set of these unspecified characters is unchanged from the native collating sequence.
  - If the THROUGH phrase is specified, the set of contiguous characters in the native character set beginning with the character specified by the value of *Literal-1*, and ending with the character specified by the value of *Literal-2*, is assigned a successive ascending position in the collating sequence being specified. In addition, the set of contiguous characters specified by a given THROUGH phrase may specify characters of the native character set in either ascending or descending sequence.
  - If the ALSO phrase is specified, the characters of the native character set specified by the value of *Literal-1* and *Literal-3* are assigned to the same ordinal position in the collating sequence being specified or in the character code set that is used to represent the data. If *Alphabet-Name-1* is referenced in a SYMBOLIC CHARACTERS clause, only *Literal-1* is used to represent the character in the native character set.

5. The character that has the highest ordinal position in the program collating sequence is associated with the figurative constant HIGH-VALUE, except when this figurative constant is specified as a literal in the SPECIAL-NAMES paragraph. If more than one character has the highest position in the program collating sequence, the last character specified is associated with the figurative constant HIGH-VALUE.
6. The character that has the lowest ordinal position in the program collating sequence is associated with the figurative constant LOW-VALUE, except when this figurative constant is specified as a literal in the SPECIAL-NAMES paragraph. If more than one character has the lowest position in the program collating sequence, the first character specified is associated with the figurative constant LOW-VALUE.
7. When specified as literals in the SPECIAL-NAMES paragraph, the figurative constants HIGH-VALUE and LOW-VALUE are associated with those characters having the highest and lowest positions, respectively, in the native collating sequence.
8. When the CLASS phrase is specified, *Class-Name-1* consists if the exclusive set of characters defined by *Literal-4* and, optionally, *Literal-5*.

  - If *Literal-4* and *Literal-5* are [Integer](../../Preface/Definitions#integer)s, they represent the ordinal number of a character within the native character set.
  - If the THROUGH phrase is specified, the contiguous characters in the native character set beginning with the character specified by the value of *Literal-4*, and ending with the character specified by the value of *Literal-5*, are included in the set of characters identified by *Class-Name-1*. In addition, the contiguous characters specified by a given THROUGH phrase may specify characters of the native character set in either ascending or descending sequence.

9. When the CONSOLE phrase is specified, all ANSI-style [DISPLAY](../../Procedure-Division-Statements/DISPLAY) Statements will send information to the screen instead of sending them to the default output channel.
10. When the CRT STATUS phrase is specified, the value of the data item identified by *Crt-Status* will be updated with the last Exception or Termination value. If *Crt-Status* is defined as a group Data Item, it must have the following structure.

```cobol
01 CRT-STATUS.
   05 CRT-KEY-1   PIC X.
   05 CRT-KEY-2   PIC X COMP-X.
   05 CRT-KEY-3   PIC X COMP-X.
```

The first two fields are set as follows:

| CRT-KEY-1 | CRT-KEY-2 | Meaning |
| --- | --- | --- |
| “0” | “0” | Termination key pressed |
| “0” | “1” | Auto-skip out of last field |
| “1” | x”00” - x”FF” | Exception key pressed |
| “3” | x”00” | Statement timed out |
| “9” | x”00” | No items fall within screen |

If CRT-KEY-1 is "1", then CRT-KEY-2 contains the exception key value of the key that was pressed.

The third character always contains the same value that is returned by the CONTROL KEY phrase of the ACCEPT statement, if this value is in the range of 0 to 255. This is the same value returned when Crt-Status refers to a numeric data item instead of a group item.

When CRT-KEY-1 is set to "0", a normal termination has occurred. Any other value indicates an exception condition.

11. When the CURRENCY phrase is specified without the PICTURE SYMBOL clause, *Literal-7* represents the currency symbol to be used in the [PICTURE clause](\), in place of the default "$", as well as the symbol that the runtime will use when the data item is displayed.

When the CURRENCY phrase is specified with the PICTURE SYMBOL clause, *Literal-7* represents the symbol that the runtime will use when the data item is displayed, while *Currency-Symbol* represents the currency symbol to be used in the [PICTURE clause](\), in place of the default "$".

The currency symbol must be nonnumeric and is limited to a single character. It may be any character from the native character set except one of the following:

  - digits 0 through 9;
  - alphabetic characters consisting of the uppercase letters A, B, C, D, E, G, N, P, R, S, U, V, X, Z; the lowercase letters a through z; or the space;
  - special characters \* + - , . ; ( ) " = / '

If *Literal-7* is of class national, the associated currency symbol may be used only to define a numeric-edited item with usage national. However in some cases non-national currency symbol can be correctly displayed even when used with plain usage display items, whether the OS uses an 8-bit codepage and the currency character is included in it.

12. More than one CURRENCY phrase can be specified, for example:

```cobol
      CURRENCY SIGN IS "USD " WITH PICTURE SYMBOL "$"
      CURRENCY SIGN IS "EUR " WITH PICTURE SYMBOL "Y"
      CURRENCY SIGN IS "CHF " WITH PICTURE SYMBOL "F"
```

13. When the DECIMAL-POINT phrase is specified, the functions of comma and period are exchanged in the character-string of the [PICTURE clause](\) and in numeric literals.
14. When the Cursor phrase is specified, the numeric data-item specified after this clause contains the cursor position on the screen. It works on both character-based and graphical screens. cursor-name can be a four or six character data-term. When it is 4 characters long, then the first two digits represent the line number, while the last two digits the column number. When it is 6 characters long, then the first three digits represent the line number, while the last three digits the column number.
15. When the EVENT OBJECT phrase is specified, *Class-Name-2* identifies the class that will handle events. Currently, only references to "java.util.EventObject" are accepted.
16. When the EVENT SOURCE phrase is specified, *Object-Reference* identifies the object that fired the event. Currently, only references to "com.iscobol.gui.server.CobolGUIJavaBean" are accepted.
17. When the EVENT STATUS phrase is specified, the data item identified by *event-status* will be used for event handling. Refer to the [Event handling](\) section of the [isCOBOL Evolve: GUI Reference Guide](../../Key-Topics) for further details.
18. When the SCREEN CONTROL phrase is specified, the data item identified by *screen-control* will be used for handling the [ACCEPT](\) Statements. Refer to the [Embedded Procedures](\) section of the [isCOBOL Evolve: GUI Reference Guide](../../Key-Topics) for further details.
19. When the SYMBOLIC phrase is specified, Symbolic-Character defines a figurative constant representing *Literal-8*.
20. If *Literal-8* is an [Integer](../../Preface/Definitions#integer), it represents the ordinal number of a character within the native character set.
21. When the IN phrase is specified, and Literal-8 is an [Integer](../../Preface/Definitions), it represent the ordinal number of a character within the character set identified by *Alphabet-Name-2*.
22. When the SIGN IS TRAILING SEPARATE phrase is specified, all signed data-items in the program Data Division store the sign in a separate byte.
23. C01 - C12 are known as printer channels; they can be used for line and form-feeds (for exmaple form feed is writing to a new page). With the syntax C01 IS TO-TOP-OF-PAGE you just define TO-TOP-OF-PAGE as an alternate name for C01. In our code we would write WRITE FILE-REC FROM DATA-REC AFTER ADVANCING TO-TOP-OF-PAGE . The [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option is required to compile this syntax. Printer channels are affected by the property [iscobol.printer.channels](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#print-configuration).

#### SCREEN CONTROL

24. Before executing any Embedded Procedure, the following data items, defined in "[iscrt.def](\)", are updated:

```cobol
01  screen-control is special-names screen control.
    03  accept-control                           pic 9.
    03  control-value                            pic 999.
    03  control-handle                           handle.
    03  control-id                               pic xx comp-x.
```

| | |
| --- | --- |
| *accept-control* | Always set to zero. |
| *control-value* | The index of the current active control. That index is a progressive number that starts at 1 and is increased by one for each control that can be activated. Display-only controls (such as Labels) do not cause the number to increase. |
| *control-handle* | The handle of the current active control. |
| *control-id* | The ID of the current active control. The ID of the control is the value of the ID Property. If not explicitly set, a progressive number is assigned. Display-only controls (such as Labels) cause the number to increase. |
| | |

After the last statement of an Embedded Procedure has been executed, the value of *accept-control* is evaluated and the program behaves as explained below. This means that the programmer can influence the program behavior changing the value of *accept-control*.

| Value | Behavior |
| --- | --- |
| 0 | The program behavior is not changed, this is the default. |
| 1 | The control that has the same index set in *control-value* is activated. [A] |
| 2 | The ACCEPT Statement terminates and the termination value set in *control-value* is assigned to the special register CRT STATUS. |
| 3 | The ACCEPT Statement terminates and the exception value set in *control-value* is assigned to the special register CRT STATUS. This is the most common way to simulate that a Function key has been pressed. |
| 4 | The control that has the same ID set in *control-id* is activated. [B] If more controls have the same ID, one of them is activated arbitrarily. If *control-id* is invalid, then the focus is moved on the control whose ID is the nearest in a range of 1000 in both directions; if no control with a near ID is found in the range of 1000, then the focus is moved on the first control in the tab order. |

\[A\]\[B\]If the control is either invisible, disabled or protected, then the next enabled control in the screen tab order is activated. If the control doesn’t exist, then the ACCEPT terminates with the crt status set to zero.

The value of *accept-control* is evaluated also before every ACCEPT of the screen. This means that the programmer can influence the program behavior changing the value of *accept-control*. The rules listed above are applied, with the following difference:

\[A\]If the control is invisible, disabled, protected or doesn't exist, then the first enabled control whose tab order is the nearest to *control-value* is activated.

\[B\]If the control is invisible, disabled, protected or doesn't exist, then the first enabled control whose ID is the nearest to *control-id* is activated. If there are two controls whose ID value has the same distance to the requested ID, then the control with higher ID is activated.

Example

```cobol
       WORKING-STORAGE SECTION.
       copy "iscrt.def".
       77  key-status special-names crt status pic 9(5).
 
       SCREEN SECTION.
       01  Screen-1.
           03 Ef-1 entry-field line 2, col 2, id 101 after MOVE-CURSOR.
           03 Ef-2 entry-field line 4, col 2, id 102.
           03 Ef-3 entry-field line 6, col 2, id 103 enabled 0.
           03 Ef-4 entry-field line 8, col 2, id 501.
 
       PROCEDURE DIVISION.
 
       MAIN.
           display Screen-1.
           
           accept  Screen-1 until key-status = 27
                on exception
                   if key-status = 5
                      perform MOVE-CURSOR
                   end-if
           end-accept.
           
       MOVE-CURSOR.
           move 103 to control-id.
           move 4   to accept-control.
```

Running the above program, when the cursor is on Ef-1,

- if the user presses Tab, the focus goes on Ef-4,
- if the user presses F5, the focus goes on Ef-2.

#### EVENT STATUS

25. Before executing an Event Procedure, the following data items, defined in [iscrt.def](\) are updated:

```cobol
01  event-status is special-names event status.
    03  event-type                               pic x(4) comp-x.
    03  event-window-handle                      handle of window.
    03  event-control-handle                     handle.
    03  event-control-id                         pic xx comp-x.
    03  event-data-1                             signed-short.
    03  event-data-2                             signed-long.
    03  event-action                             pic x comp-x.
```

| | |
| --- | --- |
| *event-type* | Event that has been fired. Almost all controls fire events. Please refer to the Events section of each control to see what events it fires and when. Symbolic names are defined in "[isgui.def](\)". |
| *event-window-handle* | Handle of the window that contains the control that fired the event. |
| *event-control-handle* | Handle of the control that fired the event. If the event has been fired by a window, it is set to zero. |
| *event-control-id* | ID of the control that fired the event. If the event has been fired by a window, it is set to zero. |
| *event-data-1* | Data item whose meaning may vary from event to event. Refer to the event documentation to see if and how to use *event-data-1.* |
| *event-data-2* | Data item whose meaning may vary from event to event. Refer to the event documentation to see if and how to use *event-data-2.* |
| *event-action* | Always set to event-action-normal. |
| | |

After the last statement of an Event Procedure has been executed, the value of event-action is evaluated and the program behaves as explained below. This means that the programmer can influence the program’s behavior by changing the value of event-action. Symbolic names listed below are defined in "[isgui.def](\)".

| | |
| --- | --- |
| event-action-normal | This is the default value. The ACCEPT terminates if the event is a termination event. |
| event-action-terminate | This value causes the ACCEPT to terminate. |
| event-action-continue | This value causes the ACCEPT to continue even if the event is a termination event. |
| event-action-ignore | The event is ignored. At the end of the Event Procedure, the program returns directly to the ACCEPT statement and no further processing is done. |
| event-action-fail | The event fails. The program will behave as if the event never occurred. |
| event-action-complete | By setting this value, the programmer communicates to the Framework that the handling of the event is complete and no further processing is needed. |
| event-action-fail-terminate | This value combines the behaviors of event-action-fail and event-action-terminate. |
| | |

See [Controls Reference](\) for additional information about the EVENT-ACTION behavior in each control event.

#### XML-SCHEMA

26. XmlSchemaName1 specifies a name that can then be used in the VALIDATING phrase of the [XML PARSE](\) statement.
