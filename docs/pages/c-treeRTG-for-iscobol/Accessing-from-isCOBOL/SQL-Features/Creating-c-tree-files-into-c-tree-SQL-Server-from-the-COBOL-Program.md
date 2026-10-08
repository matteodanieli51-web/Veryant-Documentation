### Creating c-tree files into c-tree SQL Server from the COBOL Program

In order to create new files directly in c-tree SQL Server, the following property must be set in the configuration:

```cobol
iscobol.sqlserver.iss=1
```

Only c-tree files will be affected, all other indexed files will not.

Setting the [iscobol.sqlserver.iss (boolean)](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#sqlserver_iss) to true is not enough. isCOBOL needs to locate the iss dictionary for the file.

In order to creating the iss dictionary files, COBOL programs containing file descriptions must be compiled with [-efc](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#efc) option.

For example:

```cobol
iscc –efc myProg.cbl
```

The isCOBOL Compiler will generate a file named *<filename\>*.iss for each file described in the COBOL program.

Note - c-tree SQL doesn’t allow identifiers whose name begins with underscore. If one of the field names in your FD begins with underscore, you should change that name for the iss dictionary by using the EFD [NAME Directive](../../../is-cobol-evolve/Language-Reference/EFD-Directives/NAME-Directive).

The path where iss files are located is specified through the following property in the configuration:

```cobol
iscobol.sqlserver.isspath=path_where_iss_files_are_located
```

After isCOBOL has read the file information from the iss file, it needs to connect to the c-tree SQL database. The database name and the user credentials are passed through the following properties in the configuration:

```cobol
iscobol.sqlserver.database=database_name
iscobol.file.index.user=user_name
iscobol.file.index.password=user_password
```

Note - If COMPATIBILITY SQLIMPORT_ADMIN_PASSWORD is present in the c-tree Server configuration (ctsrvr.cfg) then *iscobol.sqlserver.password=user_password* should be set instead of *iscobol.file.index.user* and *iscobol.file.index.password*. Note that the use of COMPATIBILITY SQLIMPORT_ADMIN_PASSWORD is discouraged for security reasons.

Among your indexed files there could be some files with the same record definition but different file name. In this case, to avoid creating an iss dictionary for each one of them, you can associate more files to the same iss by creating a mapping.

```cobol
iscobol.sqlserver.iss.mapping.physical_name_pattern=iss_basename
```

Wildcards are supported.

For example, suppose you have a file named “customer” for each year, so on disc there are “customer2009”, “customer2008”, “customer2007”, etc. If their FD is the same, you just have to create customer.iss and then set:

```cobol
iscobol.sqlserver.iss.mapping.customer*=customer
```

Another important issue that should be considered is the sign convention. Ensure that the property [iscobol.sqlserver.convention](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#sqlserver_convention) is set to the proper value depending on the data compatibility options in your compiler command line.

| Compiler option | sqlserver.convetion |
| --- | --- |
| -dca | A |
| -dcd | D |
| -dci | I |
| -dcm | M |
| -dcn | N |
| -dcr | R |

It’s possible to include part of the file path in the table name by setting [iscobol.sqlserver.dirlevel](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#sqlserver_dirlevel) to a value different than zero. The following table shows some examples:

physical file name: /home/user1/data/file1 :

| dirlevel | table name on c-tree SQL database |
| --- | --- |
| 0 | file1 |
| 1 | datafile1 |
| 2 | user1datafile1 |

It’s possible to customize the name of the table by configuring the replacement performed on the physical file name through the property [iscobol.sqlserver.iss.replacement_rules](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#sqlserver_iss_replacement_rules). The following table shows some examples:

physical file name: /home/user1/data/f-cust.cdt:

| rules | table name on c-tree SQL database |
| --- | --- |
| 0 | f_cust_cdt |
| 1 | f_custcdt |
| 2 | fcust_cdt |
| 3 | fcustcdt |

This is a sample configuration that summarizes all the above settings.

```cobol
iscobol.file.index=ctreej
iscobol.sqlserver.iss=1
iscobol.sqlserver.convention=A
iscobol.sqlserver.isspath=/develop/iss
iscobol.sqlserver.database=ctreeSQL
iscobol.file.index.user=admin
iscobol.file.index.password=ADMIN
iscobol.sqlserver.iss.mapping.customer*=customer
iscobol.sqlserver.dirlevel=0
```

Note - *iscobol.sqlserver.iss*, *iscobol.sqlserver.isspath* and *iscobol.sqlserver.database* must always be set, otherwise the automatic link procedure is not performed.

Once all the properties have been correctly set in the configuration, you can create the file in c-tree SQL Server by just opening it for output in the program.

```cobol
OPEN OUTPUT logical_file_name.
```
