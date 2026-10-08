## PREPARE

The PREPARE statement encodes a dynamic SQL statement string and assigns it a name.

### General format

```cobol
EXEC SQL [ AT Database ]
 
  PREPARE { Prepared-Statement } [ INTO Sql-Descriptor ] FROM Sql-String
          { Host-Var }
 
END-EXEC
```

### Syntax rules

1. *Prepared-Statement* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
2. *Host-Var* must be USAGE HANDLE
3. *Sql-String* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) or a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
4. *Sql-Descriptor* is a [IBM DB2 SQLDA implementation](../Embedded-SQL-ESQL/SQLDA/IBM-DB2-SQLDA-implementation) . This syntax is compiled only under the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.
2. *Sql-String* may contain question marks (?) that will be replaced by constant values or host variables when the statement is executed using the USING clause.
3. *Host-Var* should be released throgh a [FREE](./FREE) statement before reusing it to store another prepared statement.

### Examples

Prepare 2 statements, one to insert a row and one to count how many records meet a criteria

```cobol
*> insert_rec and count_recs do not need to be defined prior to
*> their use in the prepare statements
*> min-key and the-count could be pic 9(4) each
 
exec sql
     prepare insert_rec from 
        "insert into cust_table values (2010,'Evan Raymond','New York')"
end-exec
 
exec sql
     execute insert_rec
end-exec
 
exec sql
     prepare count_recs from 
        "select count(*) from cust_table where cust_code > ?"
end-exec
move 1990 to min-key
exec sql
     execute count_recs using :min-key 
             into :the-count
end-exec
 
display "Count of records with key > " min-key " : " the-count
```
