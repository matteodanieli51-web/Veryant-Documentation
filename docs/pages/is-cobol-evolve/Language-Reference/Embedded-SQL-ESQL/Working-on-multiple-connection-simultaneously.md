## Working on multiple connection simultaneously

The Embedded SQL syntax allows you to open more than one connection to the same database or to different databases and perform every SQL query on a specific connection. In this kind of scenario every connection must be given a unique name.

There are two ways to create a connection with a name:

- Using a Format 1 [CONNECT](../Embedded-SQL-Statements/CONNECT) statement with the AS clause, e.g.

```cobol
       connect-ora.
           set environment "jdbc.driver" 
               to "oracle.jdbc.OracleDriver"
           set environment "jdbc.url"
               to "jdbc:oracle:thin:@192.168.1.6:1521:"
           exec sql
               connect to :orcl-db as orcl
                       user :orcl-user using :orcl-pwd 
                       
           end-exec
           .
       connect-mssql.
           set environment "jdbc.driver" 
               to "com.microsoft.sqlserver.jdbc.SQLServerDriver"
           set environment "jdbc.url"
               to "jdbc:sqlserver://192.168.1.7:1433;encrypt=false;DatabaseName="
           exec sql
               connect to :msql-db as msql
                       user :msql-user using :msql-pwd                        
           end-exec
        .
```

• Using a Format 2 [CONNECT](../Embedded-SQL-Statements/CONNECT) statement, preceded by a Format 4 [DECLARE](../Embedded-SQL-Statements/DECLARE) statement, e.g.

```cobol
       connect-ora.
           set environment "jdbc.driver" 
               to "oracle.jdbc.OracleDriver"
           set environment "jdbc.url"
               to "jdbc:oracle:thin:@192.168.1.6:1521:"
           exec sql
              declare orcl database
           end-exec    
           exec sql
               connect :orcl-user identified by :orcl-pwd
                       at orcl using :orcl-db                       
           end-exec
           .
       connect-mssql.
           set environment "jdbc.driver" 
               to "com.microsoft.sqlserver.jdbc.SQLServerDriver"
           set environment "jdbc.url"
               to "jdbc:sqlserver://192.168.1.7:1433;encrypt=false;DatabaseName="
           exec sql
              declare msql database
           end-exec    
           exec sql
               connect :msql-user identified by :msql-pwd
                      at msql using :msql-db                        
        end-exec
```

When more than one connection is available and every connection has an unique name, the program can perform queries on one of these named connections.

There are two ways to perform a query on a given connection:

- Switching the active connection with a [SET CONNECTION](../Embedded-SQL-Statements/SET-CONNECTION) statement before the query, e.g.

```cobol
              exec sql
                 set connection msql
              end-exec
              exec sql
                 insert into cities (zip_code, city_name)
                        values (:city-zip, :city-name)
            end-exec    
```

- Specifying the connection name on the query through the AT clause, e.g.

```cobol
              exec sql at msql
                 insert into cities (zip_code, city_name)
                        values (:city-zip, :city-name)
              end-exec        
```

The below programs show how to transfer data from a table in an Oracle database to a table with the same fields in a Microsoft SQL Server database. The two programs use different syntaxes but produce the same result.

### Example 1 (using SET CONNECTION)

```cobol
       program-id. oratomssql.
       
       working-storage section.
           exec sql include sqlca end-exec.
           exec sql begin declare section end-exec.
       77 orcl-user  pic x(6) value "system".
       77 orcl-pwd   pic x(5) value "admin".
       77 orcl-db    pic x(2) value "xe".
       77 msql-user pic x(2) value "sa".
       77 msql-pwd  pic x(7) value "manager".
       77 msql-db   pic x(6) value "master".
       77 city-zip  pic 9(5).
       77 city-name pic x(32).    
           exec sql end declare section end-exec.
       
       procedure division.
       main.
           exec sql
              whenever sqlerror go to abend 
           end-exec
           .
       connect-ora.
           set environment "jdbc.driver" 
               to "oracle.jdbc.OracleDriver"
           set environment "jdbc.url"
               to "jdbc:oracle:thin:@192.168.1.6:1521:"
           exec sql
               connect to :orcl-db as orcl
                       user :orcl-user using :orcl-pwd 
                       
           end-exec
           .
       connect-mssql.
           set environment "jdbc.driver" 
               to "com.microsoft.sqlserver.jdbc.SQLServerDriver"
           set environment "jdbc.url"
               to "jdbc:sqlserver://192.168.1.7:1433;encrypt=false;DatabaseName="
           exec sql
               connect to :msql-db as msql
                       user :msql-user using :msql-pwd                        
           end-exec
           .
       transfer-data.
           exec sql
              set connection orcl
           end-exec
           exec sql 
              declare ora-data cursor for
                    select zip_code, city_name from cities
           end-exec
           exec sql
              open ora-data into :city-zip, :city-name
           end-exec
           perform until exit
              exec sql
                 fetch next ora-data
              end-exec
              if sqlcode = 100
                 exit perform
              end-if              
              exec sql
                 set connection msql
              end-exec
              exec sql
                 insert into cities (zip_code, city_name)
                        values (:city-zip, :city-name)
              end-exec              
              exec sql
                 set connection orcl
              end-exec
           end-perform.
           exec sql
              close ora-data
           end-exec
           .  
       disconnect-exit.
           exec sql
              disconnect all
           end-exec
           exit program
           stop run
           .        
       abend.
           display sqlcode
           display sqlerrmc
           exit program
           stop run
           .    
```

### Example 2 (using AT DATABASE)

```cobol
       program-id. oratomssql.
       
       working-storage section.
           exec sql include sqlca end-exec.
           exec sql begin declare section end-exec.
       77 orcl-user  pic x(6) value "system".
       77 orcl-pwd   pic x(5) value "admin".
       77 orcl-db    pic x(2) value "xe".
       77 msql-user pic x(2) value "sa".
       77 msql-pwd  pic x(7) value "manager".
       77 msql-db   pic x(6) value "master".
       77 city-zip  pic 9(5).
       77 city-name pic x(32).    
           exec sql end declare section end-exec.
       
       procedure division.
       main.
           exec sql
              whenever sqlerror go to abend 
           end-exec
           .
       connect-ora.
           set environment "jdbc.driver" 
               to "oracle.jdbc.OracleDriver"
           set environment "jdbc.url"
               to "jdbc:oracle:thin:@192.168.1.6:1521:"
           exec sql
              declare orcl database
           end-exec    
           exec sql
               connect :orcl-user identified by :orcl-pwd
                       at orcl using :orcl-db                       
           end-exec
           .
       connect-mssql.
           set environment "jdbc.driver" 
               to "com.microsoft.sqlserver.jdbc.SQLServerDriver"
           set environment "jdbc.url"
               to "jdbc:sqlserver://192.168.1.7:1433;encrypt=false;DatabaseName="
           exec sql
              declare msql database
           end-exec    
           exec sql
               connect :msql-user identified by :msql-pwd
                      at msql using :msql-db                        
           end-exec
           .
       transfer-data.
           exec sql at orcl
              declare ora-data cursor for
                    select zip_code, city_name from cities
           end-exec
           exec sql at orcl
              open ora-data into :city-zip, :city-name
           end-exec
           perform until exit
              exec sql at orcl
                 fetch next ora-data
              end-exec
              if sqlcode = 100
                 exit perform
              end-if  
              exec sql at msql
                 insert into cities (zip_code, city_name)
                        values (:city-zip, :city-name)
              end-exec        
           end-perform.
           exec sql at orcl
              close ora-data
           end-exec
           .  
       disconnect-exit.
           exec sql
              disconnect all
           end-exec
           exit program
           stop run
           .        
       abend.
           display sqlcode
           display sqlerrmc
           exit program
           stop run
           .   
```
