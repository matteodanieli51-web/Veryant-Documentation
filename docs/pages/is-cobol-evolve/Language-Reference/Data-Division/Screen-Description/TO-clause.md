### TO clause

The TO clause identifies the destination of the data in an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement.

#### General format

```cobol
TO Data-Name-5
```

#### Syntax rules

1. The category of *Data-Name-5* shall be a permissible category as a receiving operand in a [MOVE](../../Procedure-Division-Statements/MOVE) Statement where the sending operand has the same [PICTURE clause](../Data-Description/PICTURE-clause) as the subject of the entry.
2. *Data-Name-5* shall be defined in the file, working-storage, local-storage, or linkage section. Data-Name-5 shall not specify a variable-length group.
3. If the subject of this entry is subject to an [OCCURS clause](../Data-Description/OCCURS-clause), *Data-Name-5* shall be specified without the subscripting normally required. Additional requirements are specified in the OCCURS clause.

#### General rules

1. The subject of the entry is an input screen item.
2. The TO clause has an effect only during execution of an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement referencing the screen item.
