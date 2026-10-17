## FETCH

The FETCH statement retrieves a row from a cursor.

### Format 1

```cobol
EXEC SQL [ AT Database ]
 
  [ FOR Iterations ]
 
  FETCH { NEXT                                           }
        { PREVIOUS                                       }
        { PRIOR                                          }
        { FIRST                                          }
        { LAST                                           }
        { NEXT ROWSET                                    }
        { PRIOR ROWSET                                   }
        { FIRST ROWSET                                   }
        { LAST ROWSET                                    }
        { ROWSET STARTING AT { ABSOLUTE } { Host-Var-1 } }
                             { RELATIVE } { Literal-1  }
 
 FROM { Cursor-Name } [ INTO Host-Variable, ... ]
      { Host-Var-2    }
 
  END-EXEC
```

### Format 2

```cobol
EXEC SQL [ AT Database ]
 
  FETCH  FROM { Cursor-Name } [ USING DESCRIPTOR { SELDSC         } ]
              { Host-Var    }                    { Sql-Descriptor }
  END-EXEC
```

### Syntax rules

1. *Iterations* can be either a host variable or a numeric literal. It specifies the number of rows to be processed.
2. *Cursor-Name* is a [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.
3. *Host-Var-2* must be USAGE HANDLE
4. *Host-Var-1* and *Host-Variable* are [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables).
5. PREVIOUS and PRIOR are synonymous.
6. SELDSC is a group item defined in the [Oracle Pro\*COBOL SQLDA implementation](../Embedded-SQL-ESQL/SQLDA/Oracle-Pro-COBOL-SQLDA-implementation).
7. *Sql-Descriptor* is a [IBM DB2 SQLDA implementation](../Embedded-SQL-ESQL/SQLDA/IBM-DB2-SQLDA-implementation). This syntax is compiled only under the [-csdb2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option.

### General rules

1. *Database* identifies the active connection that will execute the query and must be previously defined using a Format 4 [DECLARE](./DECLARE) statement. By default, when the AT clause is used, the active connection is switched to the connection identified by *Database* and all the next statements will work on that connection; under the [-csora](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) option, instead, the connection is switched only for the current statement.
2. *Cursor-Name* must be previously defined by a [DECLARE](./DECLARE) statement.
3. When Host-Variable is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) declared as a group-item, the runtime uses all subordinate items as separate values instead of using the group-item as a single value.
4. If Host-Variable is array, it fetches enough rows to fill the array.

Array host variables can have different sizes. In this case, the number of rows it fetches is determined by the smaller of the following values:

- The size of the smallest array
- The value of the host_integer in the optional FOR clause

If the array is not completely filled then the warning is issued and you should check SQLERRD(3) to see how many rows were actually fetched.

If one of the host variables in the INTO clause is an array, they must all be arrays.

5. When the runtime framework property [iscobol.jdbc.cursor.type \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) is set to its default value 1 (FORWARD_ONLY), moving backward is not allowed.
6. Host-Variables are not initialized and they’re updated only if the statement is successful. If an error occurs or there are no more records, then the Host-Variables are left unchanged.
7. Positioning of the cursor with rowset-positioned fetch orientations NEXT ROWSET, PRIOR ROWSET, CURRENT ROWSET, and ROWSET STARTING AT RELATIVE is done in relation to the current cursor position. Following a successful rowset-positioned FETCH statement, the cursor is positioned on a rowset of data. The number of rows in the rowset is determined either explicitly or implicitly. The FOR n ROWS clause in the multiple-row-fetch clause is used to explicitly specify the size of the rowset. Positioning is performed relative to the current row or first row of the current rowset, and the cursor is positioned on all rows of the rowset.

A rowset-positioned fetch orientation must not be specified if the current cursor position is not defined to access rowsets. NEXT ROWSET is the only rowset-positioned fetch orientation that can be specified for cursors that are defined as NO SCROLL.

8. ROWSET STARTING AT positions the cursor on the rowset beginning at the row of the result table that is indicated by the ABSOLUTE or RELATIVE specification, and returns data if a target is specified.

### Examples

Format 1 - Declare, open and fetch a cursor

```cobol
exec sql 
   declare cust_cur  cursor for select * from customers
end-exec
 
exec sql 
   open cust_cur
end-exec     
 
perform until 1 = 2
   exec 
      sql fetch next cust_cur into :ws-cust-code, :ws-cust-name
   end-exec
 
   display "code: " ws-cust-code " name: " ws-cust-name
   if sqlcode = 100
      exit perform
   end-if
 
end-perform
 
exec sql 
   close cust_cur
end-exec
```
