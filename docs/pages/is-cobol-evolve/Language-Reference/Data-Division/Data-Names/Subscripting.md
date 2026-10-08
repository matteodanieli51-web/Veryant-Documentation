### Subscripting

Subscripts are used when reference is made to an individual element within a table of like elements that have not been assigned individual data-names.

#### General format

```cobol
{Data-Name-1   } ( { {Integer-1   } [ {+} {Integer-2   } ] ... } ... )
{Condition-Name}     {Data-Name-2 }   {-} {Data-Name-3 }
                   {  ALL                                      }
                   {  Index-Name-1                             }
```

#### Syntax rules

1. The data description entry containing Data-Name-1 or the data name associated with Condition-Name must contain an OCCURS clause or must be subordinate to a data description entry which contains an OCCURS clause.
2. Except as defined in syntax rule 3, when a reference is made to a table element, the number of subscripts must equal the number of OCCURS clauses in the description of the table element being referenced. When more than one subscript is required, the subscripts are written in the order of successively less inclusive dimensions of the table.
3. Each table element reference must be subscripted except when such reference appears:

a. As the subject of a [SEARCH](../../Procedure-Division-Statements/SEARCH) Statement.

b. In a REDEFINES clause.

c. In the KEY IS Phrase of an OCCURS clause

4. *Data-name-2* and *Data-name-3* may be qualified and must be numeric [elementary items](../Concept-of-Levels/Concept-of-Levels) representing an integer.
5. *Integer-1* and *Integer-2* may be signed and, if signed, they must be positive.
6. *Index-Name-1* is a data description entry in the hierarchy of the table being referenced which contains an INDEXED BY phrase specifying the index name.

#### General rules

1. The value of the subscript must be a positive integer. The lowest possible occurrence number represented by a subscript is 1. The first element of any given dimension of a table is referenced by an occurrence number of 1. Each successive element within that dimension of the table is referenced by occurrence numbers of 2, 3, ... .The highest permissible occurrence number for any given dimension of the table is the maximum number of occurrences of the item as specified in the associated OCCURS clause.
2. The index name ALL is used as a function argument for a function that allows a variable number of arguments. It can be used only when the subscripted identifier is used as a function argument and can not be used when Condition-Name is specified. The index name ALL causes all occurrences of Data-Name-1 to be passed to the function.
