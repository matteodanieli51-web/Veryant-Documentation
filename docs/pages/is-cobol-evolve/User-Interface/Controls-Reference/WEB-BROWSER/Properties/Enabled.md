## Enabled

This property assumes a value of "0" if the Web-Browser control is disabled, "1" if it is enabled.

This property is supported only by the JavaFX implementation of the WEB-BROWSER control. It means that it will have effect only if the configuration property [iscobol.gui.webbrowser.class](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to "com.iscobol.fx.JFXWebBrowser".

**Example** - Define a web-browser control, initially disabled and enable it in procedure division

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 28.0 cells
     enabled 0
     id 15
     css-style-name "css-wb"
     value "https://www.veryant.com"
     .
...
procedure division.
...
  modify screen-1-wb-1 enabled 1
...
```
