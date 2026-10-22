## Labels-Increment

This property sets the text of the numeric labels of the Slider by creating an enumeration that starts from [Min-Val](./Min-Val). For example, if you set Labels-Increment to 10 and Min-Val is  zero, then the following labels will be created: 0, 10, 20, 30 ...

**Example** - Define a slide-bar with minimum and maximum value and the labels increment

```cobol
screen section.
...
  03 screen-1-sl-1 Slider
     line 32.1
     column 12.8
     size 38.2 cells
     lines 4.0 cells
     color 133
     font Calibri-9v0
     help-id 7002
     id 9
     horizontal
     min-val 10
     max-val 100
     labels-increment 10
     .
```
