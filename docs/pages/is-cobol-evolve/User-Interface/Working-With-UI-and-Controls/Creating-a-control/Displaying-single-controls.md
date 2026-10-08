# Creating a control

## Displaying single controls

The only way to create a control is to use the DISPLAY statement.

```cobol
DISPLAY control-class
 
{ { property-name          }  [IS ]  property-option [GIVING result-1] } ...
  { PROPERTY property-type }  [ARE]
                              [=  ]
  { style-name } ...
  { event-procedure }
  [ HANDLE [IN] control-handle ]
```

*control-class* is one of the supported controls. See the list at the top of this page.

*property-option* can be one of the following:

```cobol
  { property-value [LENGTH {IS} length-1 ] }
                           {= }                 
  { ( {property-value} ... )               }
  { [MULTIPLE] property-table              }
  { [TABLE   ] {= }                        }
```

*control-handle* is the handle that can be used to modify, inquire or destroy that control. If the HANDLE phrase is not specified, the control can be referenced only indicating its position. This technique is deprecated.

Each time such DISPLAY is executed, a new control is created. If it is displayed at the same location as an existing control with the TEMPORARY Style set, the existing control is destroyed first. It may not be easy to notice that the program is displaying unneeded controls because they may overlap exactly, however, performance will decrease dramatically without any apparent reason. Use the [MODIFY](../../../Language-Reference/Procedure-Division-Statements/MODIFY) Statement to update already displayed controls.
