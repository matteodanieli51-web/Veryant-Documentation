## Full-Height

When this style is not set, the upper line of the frame, where the title is usually shown, is drawn in a way that it is centered with respect to the title itself. Thus, the upper corners are not drawn at the exact position defined by the [Line](../Properties/Line) property, but half line below.

By setting this style, no adjustment is done and the frame starts exactly where defined.

The overall height of the frame is not affected by the setting of this style.

**Example** - Define a frame with full-height style

```cobol
screen section.
...
 03 screen-1-fr-1 Frame
    line 17.7
    column 20.0
    size 24.3 cells
    lines 27.8 cells
    id 16
    full-height
    .
```
