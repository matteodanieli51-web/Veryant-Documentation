## No-Msg-Before-Navigate

This style prevents the generation of the MSG-BEFORE-NAVIGATE event. This is useful when

- the web site that you’re navigating must send data thru POST (e.g. a login form) and the MSG-BEFORE-NAVIGATE event handling performed by isCOBOL causes parameters to get lost.
- the Web-Browser is used to browse disk folders, by setting the [Value](../Properties/Value) property to a URL that begins with “file://”.
- the Web-Browser is used to show a file with an embedded component, for example if you load a PDF file that is rendered through the Acrobat ActiveX embedded in the browser.

This style is automatically applied if [iscobol.gui.webbrowser.no_msg_before_navigate (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to true in the configuration.

**Example** - Define a web-browser control with no-msg-before-navigate

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.9
     column 2.2
     size 62.2 cells
     lines 25.6 cells
     id 15
     no-msg-before-navigate
     value "https://www.veryant.com"
     .
```
