## Flat

When this style is set, the Push-Button control has no 3-D effect.

When the mouse pointer is moved over the Push-Button control, it is highlighted. The hihlight effect is controlled by the following properties: [Rollover-Background-Color](../Properties/Rollover-Background-Color), [Rollover-Border-Color](../Properties/Rollover-Border-Color), [Rollover-Color](../Properties/Rollover-Color) and [Rollover-Foreground-Color](../Properties/Rollover-Foreground-Color). If none of these properties is set, the highlight effect is applied only to buttons with an icon and it depends on the current Look and Feel.

**Example** - Define a push-button with flat style

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 7.4 cells
     lines 2.5 cells
     id 3
     flat
     title "Save"
     .
```
