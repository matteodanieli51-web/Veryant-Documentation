## Screen Designer Reference

This section lists all the Properties you can set for controls drawn on the window and for the window itself. If set to a value different than default, then properties are generated in the source code, otherwise they’re not.

The Property view in the Screen Designer allows the user to set the initial value of a property, that is the value that appears in Screen Section. The value of a property can be inquired or modified in the code of Event Paragraph (that will become program Procedure Division) through INQUIRE and MODIFY statements.

For additional information about control properties and styles, consult [Controls Reference](../../../is-cobol-evolve/User-Interface/Controls-Reference/Controls-Reference).

Property view items are grouped in the following categories:

| | |
| --- | --- |
| Properties | Control properties constant values and styles generated in the Screen Section of the program. |
| Events | Paragraphs that manage specific event procedures |
| Exceptions | Paragraphs that manage specific exception procedures |
| Procedures | Paragraphs that manage Events, Exceptions and focus change |
| Variables | Each variable of the program Data Division can be associated with the items below. When a variable is specified, it’s generated in place of the corresponding constant value you may have set between Properties. |
| | |
