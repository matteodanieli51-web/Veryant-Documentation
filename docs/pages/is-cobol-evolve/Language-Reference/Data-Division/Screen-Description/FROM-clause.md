### FROM clause

The FROM clause specifies the source of data for an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement and a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement.

#### General format

```cobol
FROM {Data-Name-5}
     {Literal-1  }
```

#### Syntax rules

1. *Data-Name-5* shall be defined in the file, working-storage, local-storage or linkage section.
2. The category of *Data-Name-5* and *Literal-1* shall be a permissible category as a sending operand in a [MOVE](../../Procedure-Division-Statements/MOVE) Statement where the receiving operand has the same [PICTURE clause](../Data-Description/PICTURE-clause) as the subject of the entry.
3. If the subject of this entry is subject to an OCCURS clause, *Data-Name-5* shall be specified without the subscripting normally required. Additional requirements are specified in the [OCCURS clause](../Data-Description/OCCURS-clause).
4. *Data-Name-5* shall not specify a variable-length group.

#### General rules

1. The subject of the entry is an output screen item.
