## Tab-Delay

This property is supported only along with the [Accordion](../Styles/Accordion) style. It allows you to set or retrieve the time used to change tab. The time is expressed in milliseconds.

**Example** - Define an accordion where a tab change requires 1 second

```cobol
...
screen section.
...
  03 screen-1-tc-1 Tab-Control
     accordion
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     tab-flat
     tab-background-color 0
     tab-foreground-color 15
     tab-delay 1000
     id 10
     bitmap-width 16
     .
...
```
