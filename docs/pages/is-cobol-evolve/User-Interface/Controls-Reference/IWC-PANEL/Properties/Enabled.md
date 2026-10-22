## Enabled

This property assumes a value of "0" if the IWC-Panel control is disabled, "1" if it is enabled.

**Exmple -** Define a disabled iwc-panel in screen section and enable it later in procedure division

```cobol
screen section.
...
  03 screen-1-ip-1 iwc-panel
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     color 260
     id 10
     js-name "f-map"
     .

...
procedure division.
...
   if enable-iwc
      modify screen-1-ip-1 enabled 1
   end-if
   .
...
```
