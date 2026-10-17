## DESCRIBE

The DESCRIBE statement allows you to obtain information about parameters and other features of a prepared object before you execute it.

### Format 1

```cobol
EXEC SQL [ AT Database ]
 
  DESCRIBE { BIND VARIABLES  } FOR Prepared-Statement INTO { BNDDSC }
           { SELECT LIST     }                             { SELDSC }
 
END-EXEC
```

### Format 2

```cobol
EXEC SQL [ AT Database ]
 
  DESCRIBE { INPUT  } Prepared-Statement INTO Sql-Descriptor
           { OUTPUT } 
 
END-EXEC
```

### Syntax rules

#### Format 1

1. BNDDSC and SELDSC are group items defined in the [Oracle Pro\*COBOL SQLDA implementation](../Embedded-SQL-ESQL/SQLDA/Oracle-Pro-COBOL-SQLDA-implementation).
2. *Prepared-Statement* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.

#### Format 2

3. The [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#csdb2) Compiler option must be used in order to compile this statement.
4. *Prepared-Statement* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
5. *Sql-Descriptor* is the group item that identifies the [IBM DB2 SQLDA implementation](../Embedded-SQL-ESQL/SQLDA/IBM-DB2-SQLDA-implementation).

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, instead, the connection is switched only for the current statement.

#### Format 1

2. DESCRIBE BIND VARIABLES puts descriptions of bind variables into a bind descriptor. It must follow the [PREPARE](./PREPARE) statement but precede the [OPEN](./OPEN).
3. DESCRIBE SELECT LIST puts descriptions of select-list items into a select descriptor. It must follow the [OPEN](./OPEN) statement but precede the [FETCH](./FETCH) statement.

#### Format 2

4. The input INPUT keyword lets you receive information about input parameters.
5. The input OUTPUT keyword lets you receive information about output parameters.

### Examples

Prepare a command and get information about it in compatibility with IBM DB2

```cobol
exec sql
   prepare cmd from "select c1 from tbl where c1 = ?"
end-exec.
exec sql describe input cmd into :sqlda end-exec.
```
