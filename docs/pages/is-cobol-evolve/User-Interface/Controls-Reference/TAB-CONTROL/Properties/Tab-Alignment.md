## Tab-Alignment

This property defines the title text alignment of the page identified by the [Tab-Index](./Tab-Index) property in a tab-control with the [Accordion](../Styles/Accordion) style.

Possible values are:

|  |  |
| --- | --- |
| C | The text is centered (default) |
| L | The text is left aligned |
| R | The text is right aligned |

When values are enclosed between parentheses, the [Tab-Index](./Tab-Index) property is ignored, the 1st value refers to the 1st Tab, the 2nd value refers to the 2nd Tab and so on.

```cobol
TAB-ALIGNMENT = ("L", "C")
```

When set to space or spaces, the list is reset.

When a single value other than space is set, it is appended to the list. This is useful to define a user-defined appearance.

**Example** - Make the title of the second page right aligned

```cobol
procedure division.
...
  modify screen-1-tc-1 tab-index 2 tab-alignment "R"
...
```
