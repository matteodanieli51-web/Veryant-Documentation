## VISQL

isCOBOL UDBC is provided with a command-line SQL tool. You can start it with the command:

```cobol
visql -cstring jdbc:veryant:<udbc-server-ip>:<udbc-server-port>:<database> -u <user> -p <password>
```

Where *udbc-server-ip* and *udbc-server-port* are the coordinates to reach a listening UDBC Server on the network. By default UDBC Server listens for connections on port 6789.

*user* and *password* are checked only if the File Server was started having *iscobol.as.authentication=2* in the configuration.

Once connected, you can input queries and see the result. Each query must be closed by the GO command, issued on a separate line, for example:

```cobol
SELECT * FROM file1
GO
```

### Command line options

VISQL provides the following command line options:

| -c | Specifies the command terminator. The default is "go". |
| --- | --- |
| -c | Specifies the command terminator. The default is "go". |
| -cstring | Specifies the connection string to use. |
| -debug | Prints to stdout (System.out) debugging information. |
| -delimiter | Specifies the delimiter. The default is "/". |
| -input | Specifies a file name to read commands from. |
| -left | Left justify the output. |
| -noheader | Do not print any header columns. |
| -nonull | Print the empty string instead of the word "NULL" for null value. |
| -password / -p | Specifies the user name to log into a database server with. |
| -pf | Specifies the name of a file that contains the password to log into a database server with. The first line of file should contain the password and nothing else. |
| -query | Specifies an optional single query to run instead of interacting with the command line or a file. Note that the command must include a command terminator or the command will hang. |
| -spacer | Changes the spacer between columns from a single space to the first character of the argument. |
| -trim | Trim the data output. This is useful when specifying a delimiter. |
| -user / -u | Specifies a user name to log into a database server with. |
| -w | Specifies the maximum field width for a column. The default is to output the full width of the column. |

Options and their values are separated by a space. For example, the following command runs a query directly telling that the command terminator is ";" instead of "GO".

```cobol
visql -cstring "jdbc:veryant:localhost:6789:DBSERVER1" -u admin -p admin -c ";" -query "select * from file1;"
```
