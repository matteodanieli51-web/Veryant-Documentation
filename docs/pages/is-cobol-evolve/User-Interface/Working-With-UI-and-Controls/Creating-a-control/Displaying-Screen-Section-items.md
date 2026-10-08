## Displaying Screen Section items

A control can also be defined as part of a Screen Section item:

```cobol
level-number [control-handle] control-class
 
  { property-name  [IS]  property-value  }...
 
  { style-name } ...
  
  { embedded-procedure }   
  { event-procedure } 
  
  .
```

*embedded-procedure* is defined as stated below. Refer to the [Embedded Procedures](./Embedded-Procedures/Embedded-Procedures) section for a more detailed explanation.

```cobol
  [ BEFORE PROCEDURE IS procedure-1 [{THROUGH} procedure-2] ][{OF} methodName]
                                     {THRU   }                {IN}
 
  [ AFTER PROCEDURE IS procedure-3 [{THROUGH} procedure-4] ][{OF} methodName]
                                    {THRU   }                {IN}
 
  [ EXCEPTION PROCEDURE IS procedure-5 [{THROUGH} procedure-6] ][{OF} methodName]
                                        {THRU   }                {IN}
```

*event-procedure* is defined as stated below. Refer to the [Event handling](./Embedded-Procedures/Event-handling) section for a more detailed explanation.

```cobol
  [ EVENT PROCEDURE IS procedure-1 [{THROUGH} procedure-2] ][{OF} methodName]
                                    {THRU   }                {IN}
```

A Screen Section item can also consist of a group containing controls. This is useful to create or destroy several controls with a single statement. This practice grants better performance, in comparison with the creation or destruction of one control at a time.

Below, is a sample of how a Screen Section item looks like:

```cobol
01  MyScreen.
    03 MyLabel LABEL
  LINE           2
  COL            2
  SIZE           10 CELLS
  TITLE          "This is a label"
  .
    03 MyEntryField ENTRY-FIELD
  LINE           2
  COL            13
  SIZE           20 CELLS
  VALUE          AnyDataItem
     .
```

*MyScreen* is the handle of the whole Screen Section item. *MyLabel* and *MyEntryField* are the handles of the controls.

The following statement creates the label and the entry-field at the position specified above and sets all of their properties:

```cobol
DISPLAY MyScreen
```

If the same statement is executed again, all the properties are updated. An internal optimizer ensures that the properties are updated only when needed.

If the program displays a single item that has already been created, only its properties are updated. The optimizer works with single item DISPLAYs, too. The following statement updates only the properties defined for the Entry-Field identified by the handle *MyEntryField*.

```cobol
DISPLAY MyEntryField
```
