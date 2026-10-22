## No-Key-Letter

When this style is set, all "&" characters found in the title are treated as any other letter.

When this style is not set, the first "&" character in the title is not displayed; the next character can used, in conjunction with the [Alt] key, to activate the Label control. This is the default setting.

**Example** - Define a label that includes the & as part of the title

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     id 25
     center
     no-key-letter
     title "Main & Centered Title"
     .
```
