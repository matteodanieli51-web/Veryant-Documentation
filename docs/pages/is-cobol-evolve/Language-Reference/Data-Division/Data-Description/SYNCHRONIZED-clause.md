### SYNCHRONIZED clause

The SYNCHRONIZED clause specifies the alignment of an elementary item on the natural boundaries of the computer memory (see [Item Alignment](../Item-Alignment)).

#### General format

```cobol
{SYNCHRONIZED}  [LEFT ]
{SYNC        }  [RIGHT]
```

#### Syntax rules

1. This clause may only appear with an elementary item.
2. SYNC is an abbreviation for SYNCHRONIZED.

#### General rules

1. The SYNCHRONIZED clause has effect only on numeric binary variables (COMP, COMP-4, COMP-5, BINARY) when at least one of the compiler options [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options), [-ca](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options), [-dcmi](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#data-options) is specified. Otherwise, the SYNCHRONIZED clause is treated as commentary only.
2. If either the [-dcmi](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#data-options) or the [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option is specified, then the SYNCHRONIZED clause on a non-elementary item applies also to its subordinate items, otherwise the SYNCHRONIZED clause affects only elementary items.
3. This clause specifies that the subject data item is to be aligned in the computer such that no other data item occupies any of the character positions between the leftmost and rightmost natural boundaries delimiting this data item.

If the number of character positions required to store this data item is less than the number of character positions between those natural boundaries, the unused character positions (or portions thereof) must not be used for any other data item. Such unused character positions, however, are included in:

a. The size of any group item(s) to which the elementary item belongs; and

b. The number of character positions allocated when any such group item is the object of a REDEFINES clause. The unused character positions are not included in the character positions redefined when the elementary item is the object of a REDEFINES clause.

4. SYNCHRONIZED not followed by either RIGHT or LEFT specifies that the elementary item is to be positioned between natural boundaries in such a way as to effect efficient utilization of the elementary data item.
5. SYNCHRONIZED LEFT specifies that the elementary item is to be positioned such that it will begin at the left character position of the natural boundary in which the elementary item is placed.
6. SYNCHRONIZED RIGHT specifies that the elementary item is to be positioned such that it will terminate on the right character position of the natural boundary in which the elementary item is placed.
7. Whenever a SYNCHRONIZED item is referenced in the source program, the original size of the item, as shown in the [PICTURE clause](./PICTURE-clause), the [USAGE clause](./USAGE-clause), and the [SIGN clause](./SIGN-clause), is used in determining any action that depends on size, such as justification, truncation, or overflow.
8. If the data description of an item contains an operational sign and any form of the SYNCHRONIZED clause, the sign of the item appears in the sign position explicitly or implicitly specified by the SIGN clause.
9. When the SYNCHRONIZED clause is specified in a data description entry of a data item that also contains an OCCURS clause, or in a data description entry of a data item subordinate to a data description entry that contains an OCCURS clause, then:

a. Each occurrence of the data item is SYNCHRONIZED.

b. Any implicit FILLER generated for other data items within that same table are generated for each occurrence of those data items.
