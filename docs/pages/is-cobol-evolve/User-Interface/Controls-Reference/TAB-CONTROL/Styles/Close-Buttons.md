## Close-Buttons

When this style is set, close buttons are shown over each tab. When the user clicks them, the corresponding tab is removed.

If either the [Accordion](./Accordion) style or the [Allow-Container](./Allow-Container) style is set, the runtime automatically removes the controls in the closed page, otherwise it’s the program's duty to perform this removal. In all cases, the [MSG-CLOSE](../Events/MSG-CLOSE) event is generated.

**Example** - Define a tab-control with closeable tabs

```cobol
screen section.
...
  03 screen-1-tc-1 Tab-Control
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9
     id 10
     close-buttons
     .
```
