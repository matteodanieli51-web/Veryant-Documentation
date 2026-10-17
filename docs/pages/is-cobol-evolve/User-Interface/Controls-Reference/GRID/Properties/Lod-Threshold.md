## Lod-Threshold

Setting this property to a value greater than zero activates the Load On Demand feature.

The value of this property specifies the percentage of vertical scrolling after which new records should be added in the Grid. The valid value range is between 1 and 100. Every value greater than 100 is considered as 100. When the percentage is reached, a [MSG-LOAD-ON-DEMAND](../Events/MSG-LOAD-ON-DEMAND) event is fired and the program can load new records in the Grid in response to this event.

Note - The Load On Demand feature can be activated only on Grids whose [Num-Rows](./Num-Rows) is zero.

**Example** - Define a grid that loads new records when the thumb of the vertical scroll-bar is at 80% of the scroll-bar

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     event procedure screen-1-gr-1-evt-proc
     hscroll
     adjustable-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     column-headings
     heading-color 200
     heading-divider-color 12
     num-rows 0
     lod-threshold 80
     vscroll
     .
...
```
