### USING clause

The USING clause identifies data to be used both as the destination in an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement and the source for a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement.

#### General format

```cobol
USING {Data-Name-6}
      {Literal-2  }
```

#### Syntax rules

1. The category of the data item referenced by *Data-Name-6* shall be a permissible category as a receiving operand in a [MOVE](../../Procedure-Division-Statements/MOVE) Statement where the sending operand has the same PICTURE clause as the subject of the entry.
2. The category of the data item referenced by *Data-Name-6* shall be a permissible category as a sending operand in a [MOVE](../../Procedure-Division-Statements/MOVE) Statement where the receiving operand has the same PICTURE clause as the subject of the entry.
3. *Data-Name-6* shall be defined in the file, working-storage, local-storage, or linkage section. *Data-Name-6* shall not specify a variable-length group.
4. If the subject of this entry is subject to an OCCURS clause, *Data-Name-6* shall be specified without the subscripting normally required. Additional requirements are specified in the [OCCURS clause](./OCCURS-clause).

#### General rules

1. If *Data-Name-6* is specified, specifying the USING clause is equivalent to specifying both the [TO](./TO-clause) and [FROM](./FROM-clause) clauses, each specifying the same identifier.
2. If *Data-Name-6* is specified, the subject of the entry is both an input screen item and an output screen item.
3. If *Literal-2* is specified, specifying the USING clause is equivalent to specifying the [VALUE clause](./VALUE-clause).
4. If *Literal-2* is specified, the subject of the entry is an output screen item.
