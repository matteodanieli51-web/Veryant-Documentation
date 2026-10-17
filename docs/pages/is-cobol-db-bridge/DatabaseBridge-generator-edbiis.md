# DatabaseBridge generator (edbiis)

The EDBIIS command allows the user to generate EDBI routines for supported RDBMS.

This command is mainly supported for backward compatibility. If you activated the DatabaseBridge as described in [EDBI Generation at compile time (one step)](./Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-at-compile-time), then you don’t need to use this command.

Instead, if you wish to generate EDBI routines in a separate step by processing EFD dictionaries, then you need this command.

## Syntax

```cobol
edbiis -help|[options] <efdfilename>
```

## Command Line Options

The table below lists the available command line options. The name of the corresponding Compiler configuration property for each option is provided.

The command line options are considered only during [EDBI Generation with EDBIIS (two steps)](./Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-with-EDBIIS).

The compiler configuration is considered during both [EDBI Generation with EDBIIS (two steps)](./Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-with-EDBIIS) and [EDBI Generation at compile time (one step)](./Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-at-compile-time).

| Command line option | Corresponding Compiler configuration | Description |
| :--- | :--- | :--- |
| (default) | (default) | Generates EDBI routines for generic RDBMS. |
| -d2 | iscobol.compiler.easydb.db2=1 | Generates EDBI routines for DB2 RDBMS. |
| -d4 | iscobol.compiler.easydb.db2_as400=1 | Generates EDBI routines for DB2/AS400 RDBMS. |
| -dd | iscobol.compiler.easydb.dbmaker=1 | Generates EDBI routines for DBMaker. |
| -di | iscobol.compiler.easydb.informix=1 | Generates EDBI routines for Informix (certified for ANSI-mode databases). |
| -do | iscobol.compiler.easydb.oracle=1 | Generates EDBI routines for ORACLE RDBMS. |
| -dm | iscobol.compiler.easydb.mysql=1 | Generates EDBI routines for MySQL (InnoDB engine) and MariaDB. |
| -dmld <span id="dmld"></span> | iscobol.compiler.easydb.mysql=1<br>iscobol.compiler.easydb.light_cursors=2 | Generates EDBI routines with light cursors for MySQL (InnoDB engine) and MariaDB. See [iscobol.easydb.mysql_row_limit](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_mysql_row_limit) for details. <br><br>**Note** - When this option is used, an additional column named OID is generated for FDs that have at least one key with duplicates. For this reason, routines generated with this option may not work on tables that were created by routines generated with -dm or -dmlu options and vice versa. |
| -dmlu <span id="dmlu"> </span> | iscobol.compiler.easydb.mysql=1<br>iscobol.compiler.easydb.light_cursors=1 | Generates EDBI routines with light cursors for unique indexes for MySQL (InnoDB engine) and MariaDB. See [iscobol.easydb.mysql_row_limit](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_mysql_row_limit) for details. |
| -dmoid=<name\> | iscobol.compiler.easydb.mysql.oid_name=<name\> | Specifies the name of the OID field generated when [-dmld](#dmld) is used. The default name is "OID". |
| -dp | iscobol.compiler.easydb.postgres=1 | Generates EDBI routines for PostgreSQL. |
| -dpld <span id="dpld"></span> | iscobol.compiler.easydb.postgres=1<br>iscobol.compiler.easydb.light_cursors=2 | Generates EDBI routines with light cursors for PostgreSQL. See [iscobol.easydb.postgres_row_limit](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_postgres_row_limit) for details. <br><br>**Note** - When this option is used, an additional column named OID is generated for FDs that have at least one key with duplicates. For this reason, routines generated with this option may not work on tables that were created by routines generated with -dp or -dplu options and vice versa. |
| -dplu <span id="dplu"></span> | iscobol.compiler.easydb.postgres=1<br>iscobol.compiler.easydb.light_cursors=1 | Generates EDBI routines with light cursors for unique indexes for PostgreSQL. See [iscobol.easydb.postgres_row_limit](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_postgres_row_limit) for details. |
| -dpoid=<name\> | iscobol.compiler.easydb.postgres.oid_name=<name\> | Specifies the name of the OID field generated when [-dpld](#dpld) is used. The default name is "OID". |
| -ds | iscobol.compiler.easydb.sqlserver=1 | Generates EDBI routines for Microsoft SQL Server. |
| -dsld <span id="dsld"></span> | iscobol.compiler.easydb.sqlserver=1<br>iscobol.compiler.easydb.light_cursors=2 | Generates EDBI routines with light cursors for Microsoft SQL Server. See [iscobol.easydb.sqlserver_row_limit](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_sqlserver_row_limit) for details. <br><br>**Note** - When this option is used, an additional column named OID is generated for FDs that have at least one key with duplicates. For this reason, routines generated with this option may not work on tables that were created by routines generated with -ds or -dslu options and vice versa. |
| -dslu <span id="dslu"></span> | iscobol.compiler.easydb.sqlserver=1<br>iscobol.compiler.easydb.light_cursors=1 | Generates EDBI routines with light cursors for unique indexes for Microsoft SQL Server. See [iscobol.easydb.sqlserver_row_limit](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_sqlserver_row_limit) for details. |
| -dsoid=<name\> | iscobol.compiler.easydb.sqlserver.oid_name=<name\> | Specifies the name of the OID field generated when [-dsld](#dsld) is used. The default name is "OID". |
| **For every database:** | | |
| -ca | (inherited from the Compiler command line) | Uses A4GL-WHERE-CONSTAINT instead of [The EDBI-WHERE-CONSTRAINT external variable](./Runtime-Options-and-Configuration/The-EDBI-WHERE-CONSTRAINT-external-variable) and implies [-defCHAR](#defchar). |
| -cc <span id="cc"></span> | (default) | Includes the COMMIT COUNT feature in the EDBI routine. A COMMIT statement is automatically performed after a given number of successful WRITE, REWRITE and DELETE operations. The number is configured by the properties [iscobol.easydb.commit_count.ConnectionName](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_commit_coubt_connectionname) and [iscobol.easydb.commit_count](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_commit_count). <br><br>Note that the COMMIT COUNT feature requires [iscobol.jdbc.autocommit (boolean)](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#jdbc_autocommit) to be set to false in the configuration, otherwise all the operations are automatically committed. |
| -ce | (default) | Generate direct SELECT query instead of using a CURSOR to perform READ KEY. |
| -csqq | (inherited from the Compiler command line) | Generates identifiers between quotes.<br>This option is useful in two situations:<br>1. if you need to keep identifiers case sensitive<br>2. if you have fields whose name starts with a number <br><br>In the second scenario, you should also set [iscobol.compiler.efd_field_name_num (boolean)](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#compiler_efd_field_name_num) to true in the Compiler configuration when you compile the program that includes the FD of the table. |
| -defCHAR <span id="defchar"></span> | iscobol.compiler.easydb.defchar=1 | Manages alphanumeric fields using CHAR instead of VARCHAR. <br><br>Use the [VAR-LENGTH Directive](../is-cobol-evolve/Language-Reference/EFD-Directives/VAR-LENGTH-Directive) to mark specific alphanumeric fields as VARCHAR. |
| -entrypoints | iscobol.compiler.easydb.entry_points=1 | Generates entry points where the user can inject customized code. <br><br>See [Extending EDBI routines through entry points](./Extending-EDBI-routines-through-entry-points) for more information. |
| -esst <span id="esst"></span> | (default) | Generates additional code to provide the ability to use only the table related to a specific record type in multi-record files. To enable the feature at runtime, set [iscobol.easydb.start_on_specific_table (boolean)](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_start_on_specific_table) to true in the configuration. |
| -h | iscobol.compiler.easydb.high_values_as_max_val=1 | Replaces HIGH-VALUE with the maximum numeric value in numeric fields. <br><br>This option affects numeric items that cannot be set to HIGH-VALUE. It doesn’t affect COMP, BINARY, COMP-X, COMP-5 and COMP-2 as well as numeric items for which either the [ALPHA Directive](../is-cobol-evolve/Language-Reference/EFD-Directives/ALPHA-Directive) or the [DATE Directive](../is-cobol-evolve/Language-Reference/EFD-Directives/DATE-Directive) were used. |
| -i | iscobol.compiler.easydb.isam_eof=1 | ISAM positioning on at end <br><br>Using the -i option produces a different behavior when reversing direction after reading past the beginning or end of a file. <br><br>The record returned by the READ PREVIOUS is the second-to-last record in the file, and the record returned by the READ NEXT is the second record in the file. |
| -jcd=<routine_name\> | iscobol.compiler.easydb.julian_routines=<routine_name\>;<routine_name\> | Specifies an alternate routine for the conversion of julian dates before writing on the database. <br><br>By default EDBI_DTJUCBDB (installed with the product) is used. This routine takes advantage of the DATE-OF-INTEGER intrinsic function for the conversion. If you wish to write your own routine that uses a different conversion logic, use the same Linkage parameters as EDBI_DTJUCBDB.CBL found in *easydb/edbisource* in the isCOBOL installation. <br><br>The custom routine you provide is searched in the [iscobol.code_prefix](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#code_prefix), if set, or in the Class Path otherwise. <br><br>The -jcd option must be used in conjunction with -jdc. |
| -jdc=<routine_name\> | iscobol.compiler.easydb.julian_routines=<routine_name\>;<routine_name\> | Specifies an alternate routine for the conversion of julian dates after reading from the database. <br><br>By default EDBI_DTJUDBCB (installed with the product) is used. This routine takes advantage of the INTEGER-OF-DATE intrinsic function for the conversion. If you wish to write your own routine that uses a different conversion logic, use the same Linkage parameters as EDBI_DTJUDBCB.CBL found in *easydb/edbisource* in the isCOBOL installation. <br><br>The custom routine you provide is searched in the [iscobol.code_prefix](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#code_prefix), if set, or in the Class Path otherwise. <br><br>The -jdc option must be used in conjunction with -jcd. |
| -maxCHARlen=<n\> | iscobol.compiler.easydb.max_char_len==<n\> | Alphanumeric fields whose size is not greater than *n* are managed as CHAR, the others are managed as VARCHAR. <br><br>This option is not compatible with -defCHAR and overrides both [FIX-LENGTH Directive](../is-cobol-evolve/Language-Reference/EFD-Directives/FIX-LENGTH-Directive) and [VAR-LENGTH Directive](../is-cobol-evolve/Language-Reference/EFD-Directives/VAR-LENGTH-Directive). |
| -mo | (not available) | Generates multitable subroutines using standard COBOL statements instead of object oriented syntax. |
| -n | iscobol.compiler.easydb.test_not_numeric=1 | Test not numeric <br><br>Using the -n option will include an additional test on numeric key fields to verify whether a numeric value is used. This additional check will determine if non-numeric values are used and replace those non-numeric values with 0. |
| -nn | iscobol.compiler.easydb.not_null_columns=1 | Mark all the fields with the NOT NULL clause when the table is created. |
| -no | iscobol.compiler.easydb.names_with_leading_zeros=1 | Use leading zeroes in OCCURS item names.<br>The number of leading zeroes depends by the occurs size. EasyDB puts before as many zeroes as it takes to reach the number of digits of the occurs size. <br><br>Example:<br>Consider the following COBOL items:<br>03 my_item_a pic x(10) occurs 3.<br>03 my_item_b pic x(10) occurs 30.<br>03 my_item_c pic x(10) occurs 300.<br>Without -no option the columns generated by edbiis are named:<br>my_item_a_1, my_item_a_2, my_item_a_3<br>my_item_b_1, my_item_b_2, my_item_b_3, ... my_item_b_30<br>my_item_c_1, my_item_c_2, my_item_c_3, ... my_item_c_300<br>With -no option the columns are named:<br>my_item_a_1, my_item_a_2, my_item_a_3<br>my_item_b_01, my_item_b_02, my_item_b_03, ... my_item_b_30<br>my_item_c_001, my_item_c_002, my_item_c_003, ... my_item_c_300 |
| -nocheck <span id="nocheck"></span> | iscobol.compiler.easydb.no_check=1 | Avoid checking for table existence during the OPEN statement. We assume that the table exists. The file not found error is never returned by the OPEN statement and the optional files are not automatically created if they don’t exist. |
| -od=<dirname\> | iscobol.compiler.easydb.output=<dirname\> | Output directory for EDBI routines. |
| -od=<dirname\> | iscobol.compiler.easydb.sql.output=<dirname\> | Output directory for sql files. |
| -pdo | iscobol.compiler.easydb.duplicates_in_order=1 | List records with duplicate keys values ordered by the primary key during READ NEXT and READ PREVIOUS on alternate keys with duplicates. Without this option there is no guarantee to read the correct record by reading on the opposite way when the file pointer is on a duplicated key value. This option might slow down performance. |
| -sl <span id="sl"></span> | (default) | Support for START WITH SIZE.<br>Using this option, edbiis stores additional code in the routine to handle the SIZE clause of the START statement. If the -sl option is omitted, the routine will handle the START statement as if the SIZE clause is not specified. |
| -sql | iscobol.compiler.easydb.sql=1 | Generates a script file with .sql extension that includes the CREATE TABLE statement. |
| -t <span id="t"></span> | iscobol.compiler.easydb.test_not_numeric=2 | Allow trace for not numeric <br><br>The -t option must be used along with -n. Routines generated with -t and -n options keep trace of cases of *not numeric data in numeric field* in a separate log file whose name is controlled by the [iscobol.edbi.notnum.tracefile](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#edbi_notnum_tracefile) configuration property. |
| -ua | iscobol.compiler.easydb.unlock_all=1 | Generate additional code to provide support for the statement UNLOCK file-name ALL RECORDS. The statement UNLOCK ALL is always ignored, instead.<br>Warning: In order to unlock the file, the EDBI routine will issue a COMMIT statement, so every active lock will be lost. |
| -v | (inherited from the Compiler command line) | Show product version. |
| **Only for Informix:** | | |
| -Id | (not available) | Use strings to represent date values in SQL statements. Avoid conversion functions. This is useful when working with old Informix versions where date conversion functions were not available. |
| **Only for Oracle:** | | |
| -oh | iscobol.compiler.easydb.oracle.hints=1 | Generate Oracle optimizer hints that force the query optimizer to use the proper index. This option is deprecated and supported only for backward compatibility. Unless the [HINT Directive](../is-cobol-evolve/Language-Reference/EFD-Directives/HINT-Directive) has been used to specify custom hints, you may consider using the new option -oho. |
| -oho <span id="oho"></span> | iscobol.compiler.easydb.oracle.hints=2 | Generate Oracle optimizer hints that force the query optimizer to use the proper index. Hints are also used to specify the data ordering, avoiding the Order By clause and providing better performance. The [HINT Directive](../is-cobol-evolve/Language-Reference/EFD-Directives/HINT-Directive) shouldn't be used along with this option since it might cause wrong data ordering. This option is incompatible with the -Oh option and with the configuration setting iscobol.jdbc.cursor.type=3. |
| -oii=<integer\> | iscobol.compiler.easydb.oracle.index_storage_initial_value=<integer\> | Initial storage value for index. |
| -oit=<integer\> | iscobol.compiler.easydb.oracle.table_storage_initial_value=<integer\> | Initial storage value for table. |
| -oni=<integer\> | iscobol.compiler.easydb.oracle.index_storage_next_value=<integer\> | Next storage value for index. |
| -ont=<integer\> | iscobol.compiler.easydb.oracle.table_storage_next_value=<integer\> | Next storage value for table. |
| -opi=<integer\> | iscobol.compiler.easydb.oracle.index_storage_pctincrease_value=<integer\> | pctincrease storage value for index. |
| -opt=<integer\> | iscobol.compiler.easydb.oracle.table_storage_pctincrease_value=<integer\> | pctincrease storage value for table. |
| -oti=<name\> | iscobol.compiler.easydb.oracle.tablespace_index_name=<name\> | Tablespace index name. |
| -ott=<name\> | iscobol.compiler.easydb.oracle.tablespace_name=<name\> | Tablespace name. |
| -ow | iscobol.compiler.easydb.oracle.lock_wait=0 | NOWAIT for update. This option allows the EDBI user's routine to return record lock condition. |
| -owfl <span id="owfl"></span> | iscobol.compiler.easydb.oracle.wait_for_locks=1 | Includes the WAIT FOR LOCKS feature in the EDBI routine. Before each READ operation the EDBI routine tests the [iscobol.easydb.wait_for_lock (boolean)](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_wait_for_lock) configuration property. If the property is set to true, then the lock condition is not returned and the program waits for the lock to be released. If the property is set to false, then the lock condition is returned. This option can’t be used along with -Ow. |
| n/a | iscobol.compiler.easydb.dirlevel_to_column=1 | Instructs the EDBI routine to store the file path (or portions of it) into a dedicated varchar column named DTC, that is created in addition to the columns that map FD fields.<br>The number of portions of the path that are considered is controlled at runtime by the [iscobol.easydb.dirlevel_to_column](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#easydb_dirlevel_to_column) setting. |
| **Only for Ms SQL Server:** | | |
| -sdt | iscobol.compiler.easydb.sqlserver.datetime_always=1 | Always use DATETIME to represent COBOL fields with the EFD DATE directive, regardless of the date format string. |
| **Only for MySQL and MariaDB:** | | |
| -mh <span id="mh"></span> | iscobol.compiler.easydb.mysql.hints=true | Generate MySQL optimizer hints that force the query optimizer to use the proper index. |
| **Only for PostgreSQL:** | | |
| -pi | (default) | Use indicator variables to manage COBOL Low-Values as NULL on the database. |

Unlike other drivers, the PostgreSQL JDBC driver tries to load all the records of a Cursor (object used by EDBI subroutines to store table records) into memory. For this reason, when the program performs a START on a huge table, an out of memory error may occur. The -dpld and -dplu options help to avoid this situation. When used, the EDBI subroutine will include a pagination logic that keeps the Cursor light. Use one of these options instead of -dp if you plan to work on huge tables with PortgreSQL.

## Processing multiple EFD files at once

The EDBIIS command supports the \* wildcard in the *efdfilename* parameter.

For example, the following operations:

```cobol
edbiis file1.xml
edbiis file2.xml
edbiis file3.xml
edbiis file4.xml
```

can be done all at once with the command:

```cobol
edbiis file*.xml
```
