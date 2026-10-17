## Js-Name

This property specifies the name of the JavaScript component included in the IWC-Panel.

**Example** - Define an iwc-panel that includes a component named f-map

```cobol
screen section.
...
  03 screen-1-ip-1 Iwc-Panel
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     id 10
     js-name "f-map"
     .
...
```
