## Data-Columns

This property describes where each column begins in the data added to the List-Box. The data in a row of the List-Box control can be set or retrieved using either a single alphanumeric or a group variable. This property describes the starting position of the information in that variable for each column, starting at 1. The ending position cannot be directly set, it is the character before the first character of the next column.

For example, suppose we have a three-column List-Box, with the following information: First Name, Last Name, City. The buffer necessary to add data to this List-Box should be structured in a way similar to this:

```cobol
01  List-Box-Data.
    03 First_Name pic x(20).
    03 Last_Name  pic x(30).
    03 City       pic x(50).
```

The values for DATA-COLUMNS are the offsets of First_Name, Last_Name and City, so 1, 21 and 51.

Since this property must be set for each column, a list of values is needed in order to determine the starting position of each column.

Setting this property to 0 resets the list.

When a single value greater than zero is set, it is appended to the list. This is useful to define a user-defined appearance. The snippet below defines how to distribute List-Box-Data fields into three columns of the List-Box. The first column always starts at 1:

```cobol
MODIFY MY_LB, DATA-COLUMNS = 1
MODIFY MY_LB, DATA-COLUMNS = 21
MODIFY MY_LB, DATA-COLUMNS = 51
```

When values are enclosed between parentheses, a new list is defined at once. This is the typical syntax used in the Screen Section definition of a List-Box. The snippet below defines how to distribute List-Box-Data fields into three columns of the List-Box. The first column always starts at 1.

```cobol
DATA-COLUMNS = (1, 21, 51)
```

Instead of hard-coded values, it is possible to use the RECORD-POSITION syntax:

```cobol
DATA-COLUMNS = (RECORD-POSITION OF First_Name,
                RECORD-POSITION OF Last_Name,
                RECORD-POSITION OF City)
```

This syntax avoids problems due to the modification of the item size in the buffer.

When using standard alphanumeric items, the offset of data columns is calculated in bytes, not in digits, so you should pay attention if you’re using a variable length encoding (e.g. UTF-8) to store data in the List-Box record buffer.

When using national items, you can’t take advantage of the RECORD-POSITION syntax. You need to use values calculated on the items length in digits, For example, for the following group item:

```cobol
01  List-Box-Data USAGE-GROUP NATIONAL.
    03 First_Name pic N(20).
    03 Last_Name  pic N(30).
    03 City       pic N(50).
```

the correct DATA-COLUMNS setting is:

```cobol
DATA-COLUMNS = (1, 21, 51)
```

and not (1, 41, 101) as RECORD-POSITION would return.

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
