## Proposal

This property adds a new item to the list of proposals associated with the Entry-Field. Multiple values are allowed if specified between parenthesis. If the [Proposals-Unsorted](../Styles/Proposals-Unsorted) style is set, the position of the new proposal can be controlled by the [Proposal-Index](./Proposal-Index) property.

Proposals are not supported on fields with one or more of the following attributes:

- a [Format-String](./Format-String),
- the [Auto-Decimal](./Auto-Decimal) property set to a value greater than 0,
- the [{ Auto-Spin | Spinner }](../Styles/Auto-Spin-Spinner) styles,
- the [Multiline](../Styles/Multiline) style,
- the [Read-Only](../Styles/Read-Only) style,
- the [Secure](../Styles/Secure) style.

The color of the matching text in the proposals list can be customized by setting [iscobol.gui.matching_text_color](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) in the configuration.

**Example -** Define a list of proposals for an entry-field on procedure division.

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     proposal-delay 400
     .
...
procedure division.
...
  modify screen-1-ef-3
         proposal "rome"
         proposal "romania"
         proposal "romantic"
         proposal "ron"
         proposal "roll"
         .
...
```
