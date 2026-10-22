## \{ Auto-Spin | Spinner \}

|  |  |
| --- | --- |
| Auto-Spin | This style is equivalent to the SPINNER style, but here the spinner handling is simplified. When the user clicks the up or the down arrow, the entry-field value is automatically increased or decreased by 1. The valid range of values is controlled by the [Min-Val](../Properties/Min-Val) and [Max-Val](../Properties/Max-Val) properties. |
| Spinner | If this style is applied, the spinner arrows are displayed on the left of the entry-field to increment and decrement the entry-field content. The [MSG-SPIN-UP](../Events/MSG-SPIN-UP) event and the [MSG-SPIN-DOWN](../Events/MSG-SPIN-DOWN) event are fired when the user clicks the up or the down arrow. It is programmer's responsibility to activate procedures to increase or decrease the entry-field value. |

**Example** - Define an entry-field with auto-spin style

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     auto-spin
     .
```

**Example** - Define an entry-field with the spinner style and program the events of spin up and down  to add 5 and substract 5 to the current value respectively

```cobol
working-storage section.
77 ws-num   pic 9(4).
...
screen section.
...
  03 screen-1-ef-5 Entry-Field
     line 50.1
     column 19.9
     size 10.7 cells
     lines 3.0 cells
     id 23
     spinner
     event procedure screen-1-ef-5-evt-proc
     3-d
     value 0
     .
...
procedure division.
...
screen-1-ef-5-evt-proc.
  evaluate event-control-id
  when 23
    evaluate event-type
    when msg-spin-up   perform screen-1-ef-5-evt-msg-spin-up
    when msg-spin-down perform screen-1-ef-5-evt-msg-spin-down
    when other
    end-evaluate
  end-evaluate.

screen-1-ef-5-evt-msg-spin-up.
  inquire screen-1-ef-5 value ws-num
  add 5 to ws-num
  modify screen-1-ef-5 value ws-num
  .
screen-1-ef-5-evt-msg-spin-down.
  inquire screen-1-ef-5 value ws-num
  if ws-num > 0
     add -5 to ws-num
     modify screen-1-ef-5 value ws-num
  end-if
  .
...
```
