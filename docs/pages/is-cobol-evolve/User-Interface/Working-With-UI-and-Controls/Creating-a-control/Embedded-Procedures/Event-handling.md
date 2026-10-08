### Event handling

As explained above, Embedded Procedures can be used to handle the most common actions the user can do, such as activating and leaving a control.

The user can interact with controls in a number of ways, however, and creating a new Embedded Procedure for every possible action would be confusing and not efficient at all. Handling events is preferable in most cases.

```cobol
 [ EVENT PROCEDURE IS procedure-1 [{THROUGH} procedure-2] ] [{OF} methodName]
                                    {THRU   }                {IN}
```

When EVENT PROCEDURE is declared for the control, the paragraph(s) procedure-1 (thru procedure-2) are executed when the control fires an event.

In a CLASS-ID program the method where the paragraphs are defined must be specified as well; methodName must be written as string literal as it is case sensitive; the referenced method must be without parameters; if the SCREEN SECTION is declared in the FACTORY paragraph, you cannot reference a method declared in the OBJECT paragraph, instead you can do the opposite.

Events are categorized into three groups:

- **command events** (whose name begins with "CMD-") correspond to actions taken by the user that the program needs to act on, such as closing a window or pushing a button. When a command event occurs, the runtime system assigns a value to the EVENT STATUS and then terminates the current ACCEPT with an exception value of "96"
- **notify events** (whose name begins with "NTF-") correspond to informational events that the program may not have to act on, such as editing a text-field or resizing the window. When a notify event occurs, the runtime system assigns a value to the EVENT STATUS and then terminates the current ACCEPT with an exception value of "96"
- **messages** (whose name begins with "MSG-") pass information to a screen control's Event Procedure. This division is somewhat arbitrary, but corresponds to the most common situations. Messages are different from other events, because they do not terminate the current ACCEPT. Messages are sent only to a control's Event Procedure.

Event names are listed as constant items in the [isgui.def](../../../../Appendices/Copybooks/isgui.def) copybook.

Just one Event Procedure can be assigned to a control at a time and it is executed each time that control fires an event. Within Event Procedures, the [EVENT STATUS](../../../../Language-Reference/Environment-Division/Configuration-Section/Special-names#event-status) special registry can be used to monitor and change the event behavior.

Events cannot be nested, therefore in the event procedure code you shouldn’t:

- Perform other ACCEPTs of user input ( i.e. call another program that opens a new window and performs an ACCEPT on it).
- Perform actions that generate events ( i.e. use the grid [Action](../../../Controls-Reference/GRID/Properties/Action) property inside grid events ).

For the above needs, it’s suggested that you:

- Set a flag variable and make the event terminate the ACCEPT.

```cobol
TREEVIEW-EVENTS.
   if event-type = msg-tv-dblclick 
      move 1 to flag-call
      set event-action to event-action-terminate
   end-if.
```

- Test the flag and perform the proper action after the ACCEPT is terminated.

```cobol
accept Screen1 
  on exception
     |do something here
end-accept
if flag-call = 1
   move 0 to flag-call
   call "ProgramWithNewWindow" 
end-if
```

**Note**: Embedded and Event procedures are paragraphs and sections automatically executed by the runtime while the user interacts with the screen. The program jumps to these paragraphs as if a PERFORM statement was issued, then, when the paragraph code has been executed, the program returns to the ACCEPT statement. Therefore, it is strongly suggested that you avoid using GO TO statements into these paragraphs; if the program jumps outside these paragraphs through a GO TO statement, it may not be able to return to the ACCEPT, causing it to hang.

**Performance Tuning**: In the Thin Client environment, when the focus changes, no information is sent from the client to the server if:

- the control doesn't have embedded or event procedures
- the control doesn't format its value on exit (for example: numeric field with decimal or edit type)
- the focus change doesn't terminate the ACCEPT with TERMINATION or EXCEPTION

In this case the program will run faster.

#### The Hot Event feature

The isCOBOL Framework allows you to specify a program that will be automatically invoked when a particular event occurs. By using this feature you don’t need to code a EVENT PROCEDURE for every control, but you can have a centralized event handling performed by an external event handler program.

The association between the event and the event handler program is performed through the following configuration setting:

```cobol
iscobol.hot_event.<program_name>=<event_type>[,<event_type]
```

Where:

- *program_name* is the name of the event handler program,
- *event_type* is the event number as specified in the [isgui.def](../../../../Appendices/Copybooks/isgui.def) copybook.

You can specify multiple entries of this kind, one for each event handler program. You can also have multiple events managed by the same program, by specifying more event numbers separated by comma. For example, let’s say you wish to handle MSG-BEGIN-ENTRY and MSG-FINISH-ENTRY through an external program named GRIDENTRY and the MSG-BITMAP-CLICKED event through an external program named BMPCLICK. This is the necessary configuration:

```cobol
iscobol.hot_event.gridentry=16392,16393
iscobol.hot_event.bmpclick=16400
```

The event handler program, automatically invoked by the runtime, receives the EVENT-STATUS group item as parameter.

The event handler program is invoked before executing the EVENT PROCEDURE of the control that generated the event. The EVENT PROCEDURE, if any, will be executed later, unless the event handler program exits with a return code 1.

The event handler program can set the EVENT-ACTION item of EVENT-STATUS to control the runtime response to the event (i.e. fail, terminate ACCEPT, etcetera). EVENT-ACTION may be reset by the control’s EVENT PROCEDURE later, though.

This is the typical structure of an event handler program:

```cobol
       PROGRAM-ID. HOTEVT.
       WORKING-STORAGE SECTION.
       01 RC PIC 9(1).
          88 IMPROVE-EVENT-HANDLING VALUE 0.
          88 REPLACE-EVENT-HANDLING VALUE 1.
      * >>> your data items here <<<    
       LINKAGE SECTION. 
       01  EVENT-STATUS.
          03  EVENT-TYPE            PIC X(4) COMP-X.
          03  EVENT-WINDOW-HANDLE   HANDLE OF WINDOW.
          03  EVENT-CONTROL-HANDLE  HANDLE.
          03  EVENT-CONTROL-ID      PIC XX COMP-X.
          03  EVENT-DATA-1          SIGNED-SHORT.
          03  EVENT-DATA-2          SIGNED-LONG.
          03  EVENT-ACTION          PIC X COMP-X.
       PROCEDURE DIVISION USING EVENT-STATUS.
       MAIN.
      * >>> your program logic here <<<
           GOBACK RC.
```
