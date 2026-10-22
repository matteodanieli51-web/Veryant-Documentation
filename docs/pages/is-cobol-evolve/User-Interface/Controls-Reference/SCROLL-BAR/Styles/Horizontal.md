## Horizontal

When this style is set, the Scroll-Bar control is horizontal.

When it is not set, the Scroll-Bar control is vertical. This is the default setting.

**Example** - Define a horizontal scroll-bar

```cobol
screen section.
...
  03 screen-1-sb-2 Scroll-Bar
     line 39.1
     column 12.8
     size 38.4
     lines 3.8
     id 10
     horizontal
     .
```
