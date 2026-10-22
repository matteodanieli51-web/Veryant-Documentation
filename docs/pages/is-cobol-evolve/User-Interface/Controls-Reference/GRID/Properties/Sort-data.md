## Sort-data

This property can be used to set or retrieve the sort action of each column of the grid.

It can be used in the [MSG-BEGIN-SORT](../Events/MSG-BEGIN-SORT) event as well as before issuing a sort by modifying the [Action](./Action) property.

When inquired it returns a string containing a sequence of numbers that describe the sort action of the columns. When modified, it expects a similar string. The format of the string is as follows:

For each column, six digits are returned. The result of sort-data for a grid with two columns will look like this: "PPPPODPPPPOD", where:

PPPP     **->**	is the priority. A value of zero means that the column is not involved in the sort.

O           **->**	is the ordering type. A value of 1 means ascending, a value of 2 means descending and a value of 0 means unset

D           **->**	is the data type. It must be set to 1. Currently this is the only available value.

For example 000111000000 means that an ascending sort has been issued on the first col.

**Example** - Order a grid ascending on the first column and descending on the second column

```cobol
procedure division.
...
  modify screen-1-gr-1 sort-data "000111000221"
  modify screen-1-gr-1 action action-sort
...
```
