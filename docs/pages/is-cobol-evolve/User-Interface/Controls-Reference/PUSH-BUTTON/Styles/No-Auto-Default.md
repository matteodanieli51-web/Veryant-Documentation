## No-Auto-Default

When this style is set, the current default button is not changed.

When this style is not set, the Push-Button control becomes the default button when activated. The default button is the button the system considers depressed when the user presses the [Enter] key. Only one button can be the default for each window. This is the default setting.

**Example** - Define a push-button with no-auto-default style

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 10.7 cells
     lines 5.3 cells
     id 3
     title "Cancel"
     no-auto-default
     .
```
