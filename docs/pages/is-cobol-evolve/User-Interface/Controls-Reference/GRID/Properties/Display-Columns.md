## Display-Columns

This property can be used to set or retrieve the starting position of each column in the Grid control. As a consequence, it defines the number of columns. The width of each column depends on the starting position of the next column. The width of the last column can be defined with the [Virtual-Width](./Virtual-Width) property. A column cannot be larger than the Grid width, so the Grid [Size](./Size) specifies also the maximum size of a column.

Since this property must be set for each column, a list of values is needed in order to determine the starting position of each column.

Setting this property to 0 resets the list.

When a single value greater than zero is set, it is appended to the list. This is useful to define a user-defined appearance. The snippet below defines three columns, 10 characters wide. The first column always starts at 1:

```cobol
MODIFY MY_GRID, DISPLAY-COLUMNS = 1
MODIFY MY_GRID, DISPLAY-COLUMNS = 11
MODIFY MY_GRID, DISPLAY-COLUMNS = 21
MODIFY MY_GRID, VIRTUAL-WIDTH = 30
```

When values are enclosed between parentheses, a new list is defined at once. This is the typical syntax used in the Screen Section definition of a Grid. The snippet below defines a grid with three columns, 10 characters wide. The first column always starts at 1.

```cobol
DISPLAY-COLUMNS = (1, 11, 21)
VIRTUAL-WIDTH   = 30
```

If two consecutive columns are given the same value, the resulting column will be hidden to the user.

When inquired, this property returns a buffer with the complete list of values, separated by a spaces. The value contained in that buffer can be used to restore the columns width with a single statement.

```cobol
*> get the current DISPLAY-COLUMNS setting
INQUIRE MY_GRID, DISPLAY-COLUMNS IN Buffer | Buffer contains "1 11 21"
*> use the Buffer variable to reset the DISPLAY-COLUMNS setting
MODIFY MY_GRID, DISPLAY-COLUMNS = Buffer
```

**Example** - Define a grid to host a group data item

```cobol
       WORKING-STORAGE SECTION.
       ...
       01  Cust-Data.
           03 First_Name pic x(20).
           03 Last_Name  pic x(30).
           03 City       pic x(50).
       ...
       SCREEN SECTION.
       ...
          03 screen-1-gr-1 grid
             line 2, col 2, lines 10, size 50 cells
             adjustable-columns
             column-headings, tiled-headings
             display-columns (1, 15, 30), virtual-width 60
             data-columns (record-position of First_Name,
                           record-position of Last_Name,
                           record-position of City).
       ...
```
