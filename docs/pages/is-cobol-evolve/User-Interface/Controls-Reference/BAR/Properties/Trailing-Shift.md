## Trailing-Shift

The Bar control consists of a number of rows defined with the [Width](./Width) property that make the Bar control thicker or thinner.

The width of each single row can be adjusted. Sometimes it is needed to obtain a better look where the right end (or the bottom, when the Bar control is vertical) of a Bar control connects to another one.

The value set here is the amount of pixels that are added to the row. Use negative values to subtract pixels.

Since this property can be set for each row, a list of values is needed in order to determine the exact size of each row.

When values are enclosed between parentheses, a new list is defined at once. The snippet below defines a Bar control that is 5 pixels wide and ends with a 45 degree angle.

```cobol
WIDTH          = 5
TRAILING-SHIFT = (0, 1, 2, 3, 4)
```

Setting this property to a value greater than or equal to 999 resets the list.

When a single value greater than zero is set, it is appended to the list. This is useful to define a user-defined appearance

**Example -** Define a user-defined appearance.

```cobol
modify screen-1-br-2, trailing-shift = 999 | resets the list of values
perform varying rowidx from 1 by 1 until rowidx > rowcount
   modify screen-1-br-2, trailing-shift = customshift(rowidx) | sets the size of the next row.
end-perform
```
