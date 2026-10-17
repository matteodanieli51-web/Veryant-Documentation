## Standard Alignment Rules

The standard rules for positioning data within an [elementary item](./Concept-of-Levels/Concept-of-Levels) depend on the category of the receiving item. These rules are:

1. If the receiving data item is described as numeric:

a. The data is aligned by decimal point and is moved to the receiving digit positions with zero fill or truncation on either end as required.

b. When an assumed decimal point is not explicitly specified, the data item is treated as if it has an assumed decimal point immediately following its rightmost digit and is aligned as in paragraph 1a.

2. If the receiving data item is a numeric edited data item, the data moved to the edited data item is aligned by decimal point with zero fill or truncation at either end as required within the receiving character positions of the data item, except where editing requirements cause replacement of the leading zeros.
3. If the receiving data item is alphanumeric (other than a numeric edited data item), alphanumeric edited, or alphabetic, the sending data is moved to the receiving character positions and aligned at the leftmost character position in the data item with space fill or truncation to the right, as required.

If the [JUSTIFIED clause](./Data-Description/JUSTIFIED-clause) is specified for the receiving item, these standard rules are modified.
