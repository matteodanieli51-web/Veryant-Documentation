## JDBC2FD

The JDBC2FD utility generates file description copybooks from database tables.

GUI Usage:

```cobol
jdbc2fd
```

or

```cobol
iscrun [-c jdbc2fd.properties] -utility jdbc2fd
```

![](../../images/JDBC2FD.PNG)

Select the JDBC Driver (or type it if it doesn’t appear in the list) and type the JDBC Url, then click “Connect and list tables” to obtain the list of the tables.

The Url field contains the base url while User and Password allow you to specify the username and password respectively. You can compile all the fields or provide a full url in the first and leave the other two blank.

Results can be filtered using the filters on column headings or pressing Ctrl+F.

The File-Status generation is customizable. You can choose to not generate any File-Status in the sl copybook or you can choose to generate a File-Status with the file name as prefix or a File-Status with a given name.

Choose the output directory for the copyfiles that will be generated, select the desired table and click the “Generate” button or press F5 to generate copybooks.

### Command-line Usage:

```cobol
jdbc2fd tableName [outputDirectory]
```

or

```cobol
iscrun [-c jdbc2fd.properties] -utility jdbc2fd tableName [outputDirectory]
```

JDBC settings are retrieved by the iscobol.jdbc.driver and iscobol.jdbc.url configuration properties. If outputDirectory is omitted, the current directory is used.

Three copybooks are generated for each table.

| | |
| --- | --- |
| tableName.sl | SELECT statement for FILE-CONTROL paragraph. |
| tableName.fd | File description entry and include of the below copybook |
| tableName.wrk | Record description |
| | |

### Thin Client and headless systems

JDBC2FD can be used in thin client environment as well. Use this command to start it:

```cobol
iscclient -hostname <server-ip> -port <server-port> -utility jdbc2fd <arguments>
```

The JDBC driver must be available in the server Classpath and copy files are generated on the server machine.

The thin client technology allows you to run the utility on a headless server. Start the isCOBOL Server on the headless server and launch the utility with the thin client from your PC; in this way the utility operates on the headless server while the utility GUI is shown on your PC.
