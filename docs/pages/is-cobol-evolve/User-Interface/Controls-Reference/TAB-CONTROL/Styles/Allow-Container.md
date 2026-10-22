## Allow-Container

When this style is set, the Tab-Control becomes a real container control. There is no need to manage the tab switch by intercepting the CMD-TABCHANGED event and updating the screen with the DISPLAY verb. The tab switch is automatically managed by the runtime Framework. It simplifies the coding and also reduces traffic in thin client environment.

There are two ways to add controls to a Tab-Control with the Allow-Container style:

- by using a Format 2 DISPLAY statement. E.g.

```cobol
display scr-page-1 upon screen1-tc-1(1)
```

   or

- by setting the attributes TAB-GROUP and TAB-GROUP-VALUE on the screen entry. E.g.

```cobol
       03  screen1-tc-1 tab-control
           tab-to-add ("Page1", "Page2")
           allow-container.
       03  scr-page-1 tab-group screen1-tc-1, tab-group-value 1.
           05 entry-field
              ...
       03  scr-page-2 tab-group screen1-tc-1, tab-group-value 2.
           05 list-box
              ...
```

By default, LINE and COLUMN coordinates of controls displayed on the Tab-Control are relative to the window top-left border. To make them relative to the tab top-left border, apply the [Relative-Offset](./Relative-Offset) style as well.

**Note -** Unlike standard Tab-Controls, a Tab-Control with the Allow-Container style creates the controls only when the page is added. Due to this rule, it's not good practice to resize a window with layout manager before performing [Tab-To-Add](../Properties/Tab-To-Add), otherwise the controls may not be positioned correctly.

**Example** - Define a tab-control with two pages with the allow-container style

```cobol
screen section.
...
          03  screen-1-tc-1
              tab-control
              line                 2
              col                  2
              lines                17 cells
              size                 68 cells
              allow-container
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
