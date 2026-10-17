### How to specify the parent data item

The parent data item of a host variable can be referenced using a separator dot or the OF keyword. The IN keyword cannot be used as the compiler may confuse it with a stored procedure parameter type.

Given the following group items:

```cobol
01 group-1.
   03 item-1 pic x(30).
01 group-2.   
   03 item-1 pic 9(9).
```

In order to avoid ambiguous identifiers, you can reference item-1 of group-1 in these ways

- :group1.item-1
- :item-1 of group1
