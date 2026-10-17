#### Specifying foreground color and background color separately

When an color value is used with a property that defines either the foreground color or the background color, the value can be only 0 to 15 and the corresponding color is applied to foreground or background. The table below shows the possible values for BACKGROUND-COLOR and FOREGROUND-COLOR properties.

```cobol
0 Black
1 Blue
2 Green
3 Cyan
4 Red
5 Magenta
6 Brown
7 White
8 Dark Gray
9 Bright Blue
10 Bright Green
11 Bright Cyan
12 Bright Red
13 Bright Magenta
14 Yellow
15 Bright White
```

Brightness can be also affected by the following clauses:

```cobol
BACKGROUND-HIGH
BACKGROUND-LOW
BACKGROUND-STANDARD
HIGHLIGHT
LOWLIGHT
STANDARD
```

For example, a "BACKGROUND-COLOR 4 BACKGROUND-HIGH" is equivalent to "BACKGROUND-COLOR 12". Both syntaxes shows an high intensity red background.

When the REVERSE-VIDEO phrase is specified, background and foreground colors are swapped.

When the SAME phrase is specified, the whole screen item for which it is specified is displayed with the same colors and attributes of the screen position occupied by its first character.

This kind of color value is suitable for

- the BACKGROUND-COLOR and FOREGROUND-COLOR clauses of the [DISPLAY](../../../../../Language-Reference/Procedure-Division-Statements/DISPLAY) statement,
- the [Background-Color](../../../../../Appendices/Graphical-Control-List#background_color) and [Foreground-Color](../../../../../Appendices/Graphical-Control-List#foreground_color) properties of each control,
- the following special properties:
  - [Active-Tab-Background-Color](../../../../../Appendices/Graphical-Control-List#active_tab_background_color) and [Active-Tab-Foreground-Color](../../../../../Appendices/Graphical-Control-List#active_tab_foreground_color)
  - [Cell-Background-Color](../../../../../Appendices/Graphical-Control-List#cell_background_color) and [Cell-Foreground-Color](../../../../../Appendices/Graphical-Control-List#cell_foreground_color)
  - [Cell-Current-Background-Color](../../../../../Appendices/Graphical-Control-List#cell_current_background_color) and [Cell-Current-Foreground-Color](../../../../../Appendices/Graphical-Control-List#cell_current_foreground_color)
  - [Cell-Entry-Background-Color](../../../../../Appendices/Graphical-Control-List#cell_entry_background_color) and [Cell-Entry-Foreground-Color](../../../../../Appendices/Graphical-Control-List#cell_entry_foreground_color)
  - [Cell-Selected-Background-Color](../../../../../Appendices/Graphical-Control-List#cell_selected_background_color) and [Cell-Selected-Foreground-Color](../../../../../Appendices/Graphical-Control-List#cell_selected_foreground_color)
  - [Colors](../../../../../Appendices/Graphical-Control-List#colors)
  - [Column-Background-Color](../../../../../Appendices/Graphical-Control-List#column_background_color) and [Column-Foreground-Color](../../../../../Appendices/Graphical-Control-List#column_foreground_color)
  - [Column-Selected-Background-Color](../../../../../Appendices/Graphical-Control-List#column_selected_background_color) and [Column-Selected-Foreground-Color](../../../../../Appendices/Graphical-Control-List#column_selected_foreground_color)
  - [Cursor-Background-Color](../../../../../Appendices/Graphical-Control-List#cursor_background_color) and [Cursor-Foreground-Color](../../../../../Appendices/Graphical-Control-List#cursor_foreground_color)
  - [Disabled-Background-Color](../../../../../Appendices/Graphical-Control-List#disabled_background_color) and [Disabled-Foreground-Color](../../../../../Appendices/Graphical-Control-List#disabled_foreground_color)
  - [Drag-Background-Color](../../../../../Appendices/Graphical-Control-List#drag_background_color) and [Drag-Foreground-Color](../../../../../Appendices/Graphical-Control-List#drag_foreground_color)
  - [Heading-Background-Color](../../../../../Appendices/Graphical-Control-List#heading_background_color) and [Heading-Foreground-Color](../../../../../Appendices/Graphical-Control-List#heading_foreground_color)
  - [Heading-Cursor-Background-Color](../../../../../Appendices/Graphical-Control-List#heading_cursor_background_color) and [Heading-Cursor-Foreground-Color](../../../../../Appendices/Graphical-Control-List#heading_cursor_foreground_color)
  - [Item-Background-Color](../../../../../Appendices/Graphical-Control-List#item_background_color) and [Item-Foreground-Color](../../../../../Appendices/Graphical-Control-List#item_foreground_color)
  - [Panel-Background-Color](../../../../../Appendices/Graphical-Control-List#panel_background_color) and [Panel-Foreground-Color](../../../../../Appendices/Graphical-Control-List#panel_foreground_color)
  - [Region-Background-Color](../../../../../Appendices/Graphical-Control-List#region_background_color) and [Region-Foreground-Color](../../../../../Appendices/Graphical-Control-List#region_foreground_color)
  - [Rollover-Background-Color](../../../../../Appendices/Graphical-Control-List#rollover_background_color) and [Rollover-Foreground-Color](../../../../../Appendices/Graphical-Control-List#rollover_foreground_color)
  - [Row-Background-Color](../../../../../Appendices/Graphical-Control-List#row_background_color) and [Row-Foreground-Color](../../../../../Appendices/Graphical-Control-List#row_foreground_color)
  - [Row-Background-Color-Pattern](../../../../../Appendices/Graphical-Control-List#row_background_color_pattern) and [Row-Foreground-Color-Pattern](../../../../../Appendices/Graphical-Control-List#row_foreground_color_pattern)
  - [Row-Cursor-Background-Color](../../../../../Appendices/Graphical-Control-List#row_cursor_background_color) and [Row-Cursor-Foreground-Color](../../../../../Appendices/Graphical-Control-List#row_cursor_foreground_color)
  - [Row-Selected-Background-Color](../../../../../Appendices/Graphical-Control-List#row_selected_background_color) and [Row-Selected-Foreground-Color](../../../../../Appendices/Graphical-Control-List#row_selected_foreground_color)
  - [Selection-Background-Color](../../../../../Appendices/Graphical-Control-List#selection_background_color) and [Selection-Foreground-Color](../../../../../Appendices/Graphical-Control-List#selection_foreground_color)
  - [Tab-Background-Color](../../../../../Appendices/Graphical-Control-List#tab_background_color) and [Tab-Foreground-Color](../../../../../Appendices/Graphical-Control-List#tab_foreground_color)

When these colors are set to 0, the default color is restored.
