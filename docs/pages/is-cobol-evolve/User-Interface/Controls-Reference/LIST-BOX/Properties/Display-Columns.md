## Display-Columns

This property can be used to set or retrieve the starting position of each column in the List-Box. As a consequence, it defines the number of columns. The width of each column depends on the starting position of the next column. The last column always extends to the right side of the List-Box. If a column starts at a position that exceeds the [Size](./Size) of the List-Box, its content is never shown. This can be useful to store information, linked to each single item, that should not be seen by the user.

Since this property must be set for each column, a list of values is needed in order to determine the starting position of each column.

Setting this property to 0 resets the list.

When a single value greater than zero is set, it is appended to the list. This is useful to define a user-defined appearance. The snippet below defines three columns, 10 characters wide. The first column always starts at 1:

```cobol
MODIFY MY_LB, DISPLAY-COLUMNS = 1
MODIFY MY_LB, DISPLAY-COLUMNS = 11
MODIFY MY_LB, DISPLAY-COLUMNS = 21
```

When values are enclosed between parentheses, a new list is defined at once. This is the typical syntax used in the Screen Section definition of a List-Box. The snippet below defines a List-Box with three columns, 10 characters wide. The first column always starts at 1.

```cobol
DISPLAY-COLUMNS = (1, 11, 21)
```

When inquired, this property returns a buffer with the complete list of values, separated by a spaces.

**Example** - Define a list-box to host a group data item

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
          03 screen-1-lb-1 list-box
             line 2, col 2, lines 10, size 50 cells
             display-columns (1, 15, 30),
             data-columns (record-position of First_Name,
                           record-position of Last_Name,
                           record-position of City).
       ...
```
