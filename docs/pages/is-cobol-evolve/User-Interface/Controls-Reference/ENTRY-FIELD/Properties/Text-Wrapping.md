## Text-Wrapping

This property specifies the text wrapping adopted by a [Multiline](../Styles/Multiline) entry-field.

Possible values are:

| Value | Meaning | Behavior |
| --- | --- | --- |
| 0 | AUTO | CHAR-WRAP is adopted if the [Value](./Value) is national. WORD-WRAP is adopted otherwise. |
| 1 | WORD-WRAP | Regardless of the [Value](./Value) type, break the line between words. |
| 2 | CHAR-WRAP | Regardless of the [Value](./Value) type, break the line between characters. |

**Example** - Define an entry-field control with word wrap

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     multiline
     text-wrapping 1
     .
```
