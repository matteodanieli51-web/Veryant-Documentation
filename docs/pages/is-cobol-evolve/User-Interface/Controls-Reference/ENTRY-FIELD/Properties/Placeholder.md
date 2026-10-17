## Placeholder

This property specifies a short hint that describes the expected value of an input field. The short hint is displayed in the input field before the user enters a value. The color of the placeholder text can be customized by setting [iscobol.gui.placeholder_color](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) in the configuration.

**Note -** The placeholder text is not necessarily displayed in the same position as the input text.

**Example** - Define an entry field with a placeholder text

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     id 20
     3-d
     placeholder "Enter your name here"
     .
```
