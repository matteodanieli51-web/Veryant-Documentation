### STYLE Clause and Style-Name

#### Format 1

```cobol
{style-name} ...
```

#### Format 2

```cobol
STYLE {IS} style-flags
      {= } 
```

#### General rules

2. In the STYLE clause, *style-flags* is a numeric field that holds a value that specifies the styles to apply to the control. Each control type defines its own set of styles and how the *style-flags* value is interpreted. *Style-flags* holds the sum of the numbers that represent the desired styles. Each style's identifying number is defined in the file [iscontrols.def](../../../Appendices/Copybooks/iscontrols.def). If *style-flags* is omitted, the default style attributes are applied to the control.
3. A *style-name* is the name of a valid style for the type of control being acted upon. For example, some of the styles that apply to a button include: BITMAP, FRAMED, and NOTIFY. Each *style-name* causes that style to be applied to the control.
4. You may use both the STYLE phrase and individual style names for a particular control. The effect is to add the set of specified styles together. You would typically use the STYLE clause to specify styles that may change at runtime, and *style-name* for those styles that are fixed.
5. For more information about control styles, see [The STYLE common property](../../../User-Interface/Working-With-UI-and-Controls/Creating-a-control/The-STYLE-common-property).
