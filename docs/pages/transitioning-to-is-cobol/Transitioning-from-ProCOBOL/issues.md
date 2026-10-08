## Issues you should be aware of

The isCOBOL SQL support based on JDBC has some differences with Pro\*COBOL. Below you find a list of the changes required to the configuration in order to obtain the same behavior between Pro\*COBOL and isCOBOL on JDBC.

### Enabling the Pro*COBOL compatibility mode

For the best compatibility with the Oracle Pro\*COBOL rules and behaviors, you should enable the Pro\*COBOL compatibility mode in the Compiler before compiling your programs with ESQL. In order to enable the Pro\*COBOL compatibility mode, add the following option to your compile command:

```cobol
-csora
```

When this option is used, the Compiler enables the SQLADR, SQLNUL and SQLPRC functions for the JDBC environment. Since pointers are stored in PIC S9(9) COMP data item, if you’re using the [\-cp](\) compiler option, you must use also the [\-dz](\) compiler option.

### Required items and configuration

Pro\*COBOL uses the Oracle Client that must be installed on the same computer where the runtime is executed. The information for the database connection (such as database IP address and port) is retrieved from the configuration files of the Oracle Client.

isCOBOL instead creates a JDBC connection. There is no need of the Oracle Client, you just need the Oracle JDBC driver library (e.g. *ojdbc7.jar*). You can find JDBC driver libraries at [https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html).

These steps are required:

1. Add the Oracle JDBC driver to the Classpath.

Example for Windows:

```cobol
set CLASSPATH=%CLASSPATH%;\path\to\ojdbc7.jar
```

Example for Linux/Unix:

```cobol
export CLASSPATH=$CLASSPATH:/path/to/ojdbc7.jar
```

2. Define the JDBC driver class in the runtime configuration:

```cobol
iscobol.jdbc.driver=oracle.jdbc.OracleDriver
```

3. Define the connection URL in the runtime configuration. Example:

```cobol
iscobol.jdbc.url=jdbc:oracle:thin:scott/tiger@192.168.0.251:1521:
```

### Negative SQLCODE

Pro\*COBOL returns the negative version of the Oracle error number in the SQLCODE data item. By default isCOBOL returns the absolute value of the Oracle error number instead. In order to have negative error codes, add the following entry to the configuration:

```cobol
iscobol.esql.error.negative=true
```

### SQLSTATE

Pro\*COBOL doesn’t define SQLSTATE in the SQLCA structure, like isCOBOL does, but it lets you declare SQLSTATE among host variables. Therefore, in order to run without issues with isCOBOL, it is necessary to comment or remove the SQLSTATE declaration from the source code and refer to the SQLSTATE data item defined in the SQLCA structure.

### Different SQLCODE for NOTFOUND

Unless you used MODE=ANSI in your Pro\*COBOL options, the SQLCODE returned by Pro\*COBOL for the NOTFOUND condition is 1403. By defeault isCOBOL sets SQLCODE=100 for the NOTFOUND condition. If you wish to have 1403, add the following entry to the configuration:

```cobol
iscobol.esql.sqlcode.100=1403
```

### Error for too many rows

When a SELECT query is performed directly, without using cursors, the program expects to read only one record. Pro\*COBOL returns an error if more than one record is returned (SQLCODE=-2112, SQLERRMC="SQL-02112: SELECT..INTO returns too many rows"). isCOBOL by default doesn’t return any error and sets the host variables of the INTO clause with the content of the first record in the resultset. In order to have an error also with isCOBOL, add the following entry to the configuration:

```cobol
iscobol.esql.value_too_many_rows=-2212
```

### Error for NULL value fetched

Unless you used UNSAFE_NULL=YES in your Pro\*COBOL options, when a NULL value is fetched and no indicator variable was used, Pro\*COBOL returns an error (SQLCODE=-1405, SQLERRMC="ORA-01405: fetched column value is NULL"). By default isCOBOL doesn’t return errors in this case, it just sets the host variable to zero or spaces depending on the picture. In order to have the error number 1405 also with isCOBOL, compile the program with the [\-csqn](\) option.

### Error for no data during DELETE, INSERT and UPDATE

Pro\*COBOL returns a NOT_FOUND condition (e.g. it sets SQLCODE either to 100 or 1043, depending on the mode) when an UPDATE statement or a DELETE statement doesn’t affect any record. The same NOT_FOUND condition is returned for INSERT INTO SELECT statements, when the inner SELECT doesn’t find any record.

isCOBOL doesn’t do the same, by default.

In order to have the same behavior of Pro\*COBOL with isCOBOL, set [iscobol.esql.value_sqlcode_on_no_data](\) in the configuration.

### Mapping the PICX option

Pro\*COBOL has an option named PICX that specifies the default datatype of PIC X variables.

The possible values for this option are CHARF and VARCHAR2. The default value is CHARF (was VARCHAR2 before release 8.0).

To have the same behavior of PICX=CHARF with isCOBOL, add these entries to the configuration:

```cobol
iscobol.jdbc.kept_spaces=-1
iscobol.jdbc.options=fixedString=true
```

To have the same behavior of PICX=VARCHAR2 with isCOBOL, add these entries to the configuration:

```cobol
iscobol.jdbc.kept_spaces=0
iscobol.jdbc.options=fixedString=true
```

### Issues with Stored Procedures

When a data truncation occurs while setting an host variable to the output parameter of a stored procedure, Pro\*COBOL doesn’t report it in the indicator variable. In order to have the same behavior with isCOBOL, add the following entry to the configuration:

```cobol
iscobol.esql.indicator_trunc_on_call=false
```

Due to limitations in the JDBC API, isCOBOL is not able to understand the stored procedure signature, so it sets parameters in a generic way. It works fine in most of the cases, but in some cases Oracle may reject the parameters because they’re not of the expected type. If you experience errors related to a wrong parameter type, consider to describe the stored procedure signature. It can be done in the Compiler configuration by setting [iscobol.compiler.esql.procedure.ProcedureName](\) or in the COBOL program by using the [HOSTVAR Directive](\).
