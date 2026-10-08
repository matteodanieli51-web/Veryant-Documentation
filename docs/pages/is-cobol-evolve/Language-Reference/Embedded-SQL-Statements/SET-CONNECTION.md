## SET CONNECTION

The SET CONNECTION statement activates a specified connection.

### General format

```cobol
EXEC SQL
 
  SET CONNECTION { Connection-name }
 
END-EXEC
```

### Syntax rules

1. *Connection-Name* is a [host variable](../Embedded-SQL-ESQL/Host-variables/Host-variables) or [Nonnumeric Literal](../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../Preface/Definitions) section of the Preface of this document.

### General rules

1. When two or more connections are opened you can choose the active connection using the *Connection-Name* parameter.

### Examples

Switch from one connection to another when having one connection to an Oracle DB and other to a MySQL DB

```cobol
if db-to-use = ora-db
   exec sql
     set connection ora-conn-1
   end-exec
else
   exec sql
     set connection mysql-conn-2
   end-exec
end-if
```
