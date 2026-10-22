## Accordion

When this style is set, the Tab-Control is shown as an Accordion container.

The Accordion layout is always the same, with buttons whose title is horizontal that scroll up and down when they’re clicked. [Bottom](./Bottom) and [Vertical](./Vertical) styles are ignored.

This style implicitly adds the [Allow-Container](./Allow-Container) style.

**Example** - Define an accordion with two pages

```cobol
screen section.
...
          03  screen-1-tc-1
              tab-control
              line                 2
              col                  2
              lines                17 cells
              size                 68 cells
              accordion
              .
           03 screen-1-tc-1-page1
              tab-group screen-1-tc-1 tab-group-value 1.
              05 label
                 line           4
                 col            4
                 title          "This is the first page"
                 .
              05 entry-field
                 line           6
                 col            4
                 .
           03 screen-1-tc-1-page2
              tab-group screen-1-tc-1 tab-group-value 2.
              05 label
                 line           4
                 col            4
                 title          "This is the second page"
                 .
              05 combo-box
                 line           6
                 col            4
                 .
```
