### VALUE clause

The VALUE clause defines the initial value of data items.

#### Format 1

```cobol
VALUE IS {Literal-1} [ {+} Literal-2  [ ... {+} Literal-3] ] .   
         {NEXT     }   {-}                  {-}
                       {*}                  {*} 
                       {/}                  {/}
                       {**}                 {**}
```

#### Format 2

```cobol
    {VALUE IS  } { Literal-1 [ {THROUGH} Literal-2 ] } ...   
    {VALUES ARE}             {THRU   }    
       
        [ WHEN SET TO FALSE Literal-3 ]  
```

#### Syntax rules

1. *Literal-1*, *Literal-2* and *Literal-3* are [Literal](../../Preface/Definitions#literal), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document. The [category](./PICTURE-clause) of Literal-1 must match the [category](./PICTURE-clause) of the item being described.
2. A signed [Numeric Literal](../../Preface/Definitions#numeric-literal") must have a signed numeric [PICTURE](./PICTURE-clause) character-string associated with it.
3. All [Numeric Literal](../../Preface/Definitions#numeric-literal)s in a VALUE clause of an item must have a value which is within the range of values indicated by the [PICTURE clause](./PICTURE-clause), and must not have a value which would require truncation of nonzero digits. [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal)s in a VALUE clause of an item must not exceed the size indicated by the [PICTURE clause](./PICTURE-clause).
4. The VALUE clause must not be specified in any entry which is part of the description or redefinition of an external data record.

#### General rules

##### Format 1

1. The VALUE clause must not conflict with other clauses in the data description of the item or in the data description within the hierarchy of the item. The following rules apply:

a. If the category of the item is numeric, all literals in the VALUE clause must be numeric. If the literal defines the value of a working storage item, the literal is aligned in the data item according to the [Standard Alignment Rules](../Standard-Alignment-Rules).

b. If the category of the item is alphabetic, alphanumeric, alphanumeric edited, or numeric edited, all literals in the VALUE clause must be nonnumeric literals. The literal is aligned in the data item as if the data item had been described as alphanumeric (see [Standard Alignment Rules](../Standard-Alignment-Rules)). Editing characters in the [PICTURE clause](./PICTURE-clause) are included in determining the size of the data item but have no effect on initialization of the data item (see The [PICTURE clause](./PICTURE-clause)). Therefore, the VALUE for an edited item must be specified in an edited form.

c. Initialization is not affected by any [BLANK WHEN ZERO](./BLANK-WHEN-ZERO-clause) or [JUSTIFIED](./JUSTIFIED-clause) clause that may be specified.

2. Rules governing the use of the VALUE clause differ with the respective sections of the [Data Division](../Data-Division):

a. The VALUE clause cannot be used in the [FILE Section](../File-Section/File-Section). In the [FILE Section](../File-Section/File-Section), the VALUE clause may be used only in condition-name entries; therefore, the initial value of the data items in the [FILE Section](../File-Section/File-Section) is undefined.

b. The VALUE clause cannot be used in the [LINKAGE Section](../Linkage-Section). In the [LINKAGE Section](../Linkage-Section), the VALUE clause may be used only in condition-name entries.

c. VALUE clauses in the [WORKING-STORAGE Section](../Working-Storage-Section) of a program take effect only when the program is placed into its initial state. If the VALUE clause is used in the description of the data item, the data item is initialized to the defined value. If the VALUE clause is not associated with a data item, the initial value of that data item is low-values if the [EXTERNAL](./IS-EXTERNAL-clause) clause is specified, spaces otherwise.

3. The VALUE clause must not be stated in a data description entry that contains a [REDEFINES clause](./REDEFINES-clause), or in an entry that is subordinate to an entry containing a [REDEFINES clause](./REDEFINES-clause). This rule does not apply to condition-name entries.
4. If the VALUE clause is used in an entry at the group level, the literal must be a figurative constant or a nonnumeric literal, and the group area is initialized without consideration for the individual elementary or group items contained within this group. The VALUE clause cannot be stated at the subordinate levels within this group.
5. The VALUE clause must not be specified for a group item containing items subordinate to it with descriptions including [JUSTIFIED](./JUSTIFIED-clause), [SYNCHRONIZED](./SYNCHRONIZED-clause) or [USAGE](./USAGE-clause) (other than USAGE IS DISPLAY).
6. If a VALUE clause is specified in a data description entry of a data item which is associated with a variable occurrence data item, the initialization of the data item behaves as if the value of the data item referenced by the DEPENDING ON phrase in the OCCURS clause specified for the variable occurrence data item is set to the maximum number of occurrences as specified by that OCCURS clause. A data item is associated with a variable occurrence data item in any of the following cases:

a. It is a group data item which contains a variable occurrence data item.

b. It is a variable occurrence data item.

c. It is a data item that is subordinate to a variable occurrence data item.

7. If a VALUE clause is associated with the data item referenced by a [DEPENDING ON phrase](./OCCURS-clause), that value is considered to be placed in the data item after the variable occurrence data item is initialized.
8. A VALUE clause specified in a data description entry that contains an [OCCURS clause](./OCCURS-clause) or in a entry that is subordinate to an [OCCURS clause](./OCCURS-clause) causes every occurrence of the associated data item to be assigned the specified value.
9. The value returned by NEXT is the offset at which the next byte of storage occurs after the previous data declaration. (It is not the offset of the start of the next data declaration.) If that data declaration was of a table defined with an OCCURS clause, the value returned by NEXT is the offset at which the next byte of storage occurs after the first element of the table. If the identifier is part of an EXTERNAL record or a LINKAGE record, the offset is calculated from the start of the associated 01-level, otherwise the offset is calculated from the start of the Data Division. If identifier is a constant, the NEXT phrase points to the offset at which the next byte of storage occurs after the previous data declaration.
10. The NEXT clause requires [-m1](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#memory-options) compiler option in order to work correctly.
11. When VALUE is followed by an arithmetic operation:

a. The result of the operation is always an integer, if necessary a scale will be applied

b. Arithmetic operations are executed sequentially in the order they appear in the VALUE clause and not by respecting algebraic precedence rules.

12. When a VALUE clause is applied to an edited item, that item is treated as if it were alphanumeric. Editing characters in the PICTURE clause count toward the size of the item but have no effect on initialization.

##### Format 2

c. A Format 2 VALUE clause defines a [Condition-name condition](../../Procedure-Division/Conditional-expressions/Condition-name-condition).

