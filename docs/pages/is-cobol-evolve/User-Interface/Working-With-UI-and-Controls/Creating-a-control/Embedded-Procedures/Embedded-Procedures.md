## Embedded Procedures

Embedded Procedures have been implemented to make programming even simpler. It is a way to attach a procedure, a paragraph, or a section to one or more controls and have them activated before the control activation, after the control activation, and when a function key is pressed.

Every Screen Section item, regardless of whether it is a group or a single control, can handle up to three different Embedded Procedures. If an Embedded Procedure is assigned to a group, it is inherited by all the groups or controls that it contains, unless they have their own embedded procedure set.

There are three kinds of Embedded Procedure:

- Before Procedure

```cobol
 [ BEFORE PROCEDURE IS procedure-1 [{THROUGH} procedure-2] ] [{OF} methodName]
                                    {THRU   }                 {IN}
```

When BEFORE PROCEDURE is declared for the control, the paragraph(s) procedure-1 (thru procedure-2) are executed when the control gets focus, just before accepting user input.

In a CLASS-ID program the method where the paragraphs are defined must be specified as well; methodName must be written as string literal as it is case sensitive; the referenced method must be without parameters; if the SCREEN SECTION is declared in the FACTORY paragraph, you cannot reference a method declared in the OBJECT paragraph, instead you can do the opposite.

- After Procedure

```cobol
  [ AFTER PROCEDURE IS procedure-3 [{THROUGH} procedure-4] ] [{OF} methodName]
                                    {THRU   }                 {IN}
```

When AFTER PROCEDURE is declared for the control, the paragraph(s) procedure-3 (thru procedure-4) are executed when the control looses focus or when the ACCEPT terminates, just after accepting user input.

In a CLASS-ID program the method where the paragraphs are defined must be specified as well; methodName must be written as string literal as it is case sensitive; the referenced method must be without parameters; if the SCREEN SECTION is declared in the FACTORY paragraph, you cannot reference a method declared in the OBJECT paragraph, instead you can do the opposite.

- Exception Procedure

```cobol
  [ EXCEPTION PROCEDURE IS procedure-5 [{THROUGH} procedure-6] ] [{OF} methodName]
                                        {THRU   }                 {IN}
```

When EXCEPTION PROCEDURE is declared for the control, the paragraph(s) procedure-5 (thru procedure-6) are executed each time the ACCEPT of user input is interrupted by an exception (for example when the user presses a function key).

In a CLASS-ID program the method where the paragraphs are defined must be specified as well; methodName must be written as string literal as it is case sensitive; the referenced method must be without parameters; if the SCREEN SECTION is declared in the FACTORY paragraphOBJECT paragraph, you cannot reference a method declared in the OBJECT paragraph, instead you can do the opposite.

Within Embedded Procedures, the [SCREEN CONTROL](../../../../Language-Reference/Environment-Division/Configuration-Section/Special-names#screen-control) special registry can be used to monitor and change the focus.
