## Css-Icon

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

When the [Title-Position](./Title-Position) property is set, both graphics and title are drawn. Otherwise, the title becomes the [Hint](./Hint) of the control.

When this property is set, [Bitmap-Handle](./Bitmap-Handle) is ignored.

**Example** - Define a push-button with a Font Awesome icon

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     css-icon "fa-check"
     title "OK"
     .
```
