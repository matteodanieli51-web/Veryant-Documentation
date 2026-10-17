## How to configure the DSN (Advanced Setup)

![](images/veryantOdbcAdvanced.png)

- **File Prefix** is the list of the directories where physical files are stored on the server. Use space to separate multiple paths. Use quotes to delimit paths with spaces.

- **File Suffix** refers to the custom extension added by the COBOL program that created the files. Do not include the default extension added by the file handler (e.g., ".dat" from c-tree or JIsam), or a custom extension added by setting [iscobol.file.index.data_suffix \*](\).

- **Julian Base Date** allows the julian base date to be used in defining julian date formats to be specified. The information in this field must have the following format:

```cobol
yyyy/mm/dd
```

where yyyy is the year, mm is the month, and dd is the day.
By default, 1900/01/01 is the base date (January 1, 1900). 0001/01/01 is the minimum base date allowed.

- **Signed Index.** If your application has any numeric fields that belong to a key or index, you may have a problem with record ordering when a negative value occurs in the field. (A negative value results in an index that is not ordered.) Set this option to "No" to disqualify numeric signed fields from being indexes. There is some performance degradation when this option is set to "No." Since it is the case that most signed fields included in a key do not contain negative numbers, you might want to set this option to "Yes" to avoid the performance penalty.

- **Read Only** establishes the default read/write permission for all the files belonging to this DSN. Select "Yes" if the files are read-only. Select "No" if they are read and write approved.

- **Font** specifies the character set to be used for accepting and displaying data on the screen.

- **Comp. Option.** If you specified the "-Dci" or "-Dcm" compiler option when compiling your program, click the radio button for that option here. This tells the driver which data storage convention was used to create your data files.

- **File Case** specifies the case of the file names in your destination directory (applies to UNIX file names only). By default, the file names are assumed to be in upper case. If your filenames are lower case, you must click the "Lower" radio button here, or the driver will not be able to find your files.

- **Allowing Strings Not Null** has been provided to avoid problems with old versions of Ms Access.

- **File Alias** allows you to create aliases between physical names (the name of the disk file) and logical names (the name used by the ODBC client to reach the file).
