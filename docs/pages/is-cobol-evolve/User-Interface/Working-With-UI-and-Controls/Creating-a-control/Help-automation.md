## Help automation

Help automation support is based on the concept of a help ID. A help ID is a special integer value assigned to a control. When a help request is sent to the help processor, the help ID of the associated control is sent as a parameter. Typically, each control is assigned a unique value. This allows the help processor to uniquely respond to each control. To create help that responds to the window, rather than an individual control within it, you can give all of the controls within a window the same help ID. Or you can mix the two approaches by giving some individual controls unique help IDs, while the remaining controls get a shared help ID. Because help IDs are associated with controls, help automation can't be used with character-based ACCEPT fields. Whether the control is defined in the Screen Section or in a DISPLAY statement, help IDs are assigned with the HELP-ID phrase. You can easily assign a screen-wide help ID to a window by specifying a HELP-ID for the top-level group item in the Screen Section description. You can override the screen-wide ID for a specific control by including the HELP-ID phrase in that control's definition. After setting up the help IDs, you must assign the help mode an exception value. This is done with the Format 13 [SET](../../../Language-Reference/Procedure-Division-Statements/SET) statement. For example, in order to have the F1 key trigger the item help, use

```cobol
SET EXCEPTION VALUES 1 TO ITEM-HELP
```

After the exception values are assigned, any control, menu item, or key that produces the specified exception value will produce the associated help action.

It’s also possible to associate the help automation to the mouse. Set [iscobol.help_program_mouse_stop_delay](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) to a value greater than zero in the configuration to produce the help action when the user leaves the mouse pointer over a control. For example, in order to trigger the item help when the mouse is left over a control for more than 2 seconds, set

```cobol
iscobol.help_program_mouse_stop_delay=2000
```

The last step in setting up help automation is to define the name of the help processor program. The help processor's entry point is always a COBOL program. The program can be the help processor itself. The program can also be a bridge to some other help processor, for example, on Windows, you may interface the Windows Help through the [$WINHELP](../../../Appendices/Library-Routines/$WINHELP/$WINHELP) library routine. Alternatively you may show an hint through the [W$HINT](../../../Appendices/Library-Routines/S$HINT) routine.

The help processor is named by the value of the configuration property [iscobol.help_program](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration). If such property is undefined, no help processor is called.

The help processor is passed only one parameter, the EVENT STATUS data item. It contains the event that generated the CALL. If the help was triggered via keyboard, then a CMD-HELP event is generated. If the help was triggered via mouse, then a CMD-HELP-MOUSE is generated. Both events contain all of the information needed to process the help request:

- the control's handle (in EVENT-CONTROL-HANDLE),
- the control’s ID (in EVENT-CONTROL-ID),
- the control’s help ID (in EVENT-DATA-2) and
- the handle of the control’s owning window (in EVENT-WINDOW-HANDLE).

The typical Linkage Section of an help program is:

```cobol
       LINKAGE SECTION.
       01  event-data.
           03  event-type            pic x(4) comp-x.
           03  event-window-handle   handle of window.
           03  event-control-handle  handle.
           03  event-control-id      pic xx comp-x.
           03  event-data-1          signed-short.
           03  event-data-2          signed-long.
           03  event-action          pic x comp-x.
```

A sample for this feature is installed along with isCOBOL. Run the *isCOBOL Samples* container, expand the news in 2019 R2 and select “Mouseover HOOK”.

In a help program it’s possible to know which program issued the help request by calling the [C$CALLEDBY](../../../Appendices/Library-Routines/C$CALLEDBY) routine.
