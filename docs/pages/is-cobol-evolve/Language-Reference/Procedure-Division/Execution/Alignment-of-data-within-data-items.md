## Alignment of data within data items

The standard rules for positioning data within an elementary item depend on the category of the receiving item.
These rules are:

1. If the receiving data item is described as a fixed-point numeric item:

a. The data is aligned by decimal point and is moved to the receiving digit positions with zero fill or truncation on either end as required.

b. When an assumed decimal point is not explicitly specified, the data item is treated as if it has an assumed decimal point immediately following its rightmost digit and is aligned as in rule 1a

2. If the receiving data item is described as a floating-point numeric item, the alignment of the data is specified by the IEEE (Institute of Electronics and Electrical Engineers) Standard 754.
3. If the receiving data item is a fixed-point numeric-edited data item, the data moved to the edited data item is aligned by decimal point with zero fill or truncation at either end as required within the receiving character positions of the data item, except where editing requirements cause replacement of the leading zeros.
4. If the receiving data item is a floating-point numeric-edited data item and the value to be edited is not zero, the data moved to the edited data item is aligned so that the leftmost digit is not zero.
5. If the receiving data item is alphabetic, alphanumeric, alphanumeric-edited, national, or national-edited, the sending data shall be moved, after any specified conversion, to the receiving character positions and aligned at the leftmost character position in the data item with space fill or truncation to the right, as required. If the [JUSTIFIED clause](../../Data-Division/Data-Description/JUSTIFIED-clause) is specified for the receiving item, alignment differs as specified in the JUSTIFIED clause.
