## Framework improvements

New library routines and configuration settings

isCOBOL supports the following new library routines:

- C$GETRUNENV, to get information about the runtime environment the isCOBOL application is running on.

Usage:

```cobol
CALL "C$GETRUNENV" GIVING w-env
```

Where *w-env* is a numeric variable and it will be set according to the environment where isCOBOL is running, possible values are declared in iscobol.def:

```cobol
78 runenv-standalone  value 1.
78 runenv-charva      value 2.
78 runenv-remote-call value 3.
78 runenv-thin-client value 4.
78 runenv-web-client  value 5.
78 runenv-wd2         value 6.
78 runenv-j2ee        value 7.
78 runenv-mobile      value 8.
```

- C$UNLOAD_NATIVE, to unload a previously loaded native library

Usage:

```cobol
CALL "C$UNLOAD_NATIVE" USING "library_name".
```

New configuration settings allow the remapping of the sqlcode returned by ESQL, and to support the DCI Connector to be used in heavy multi-threaded environments

- *iscobol.esql.sqlcode.{value}=newValue* remaps the sqlcode returned by ESQL access. This enhances the compatibility with other ESQL running with different COBOL pre-compilers. For example, setting

```cobol
iscobol.esql.sqlcode.100=1403
iscobol.esql.sqlcode.1843=-1843
```

allows to remap the sqlcode 100 and 1843 to 1403 and -1843 respectively. This simplifies the migration from Pro\*COBOL with Oracle database that need those specific codes.

- *iscobol.file.index=dcic* allows access to DBMaker tables through the DCI Connector
- *iscobol.file.connector.program.dcic=/path/dcic* specify where the dcic executable file is installed.

The isCOBOL log has been enhanced by adding the ability to include date and time information in both the log file path and the file name. This is useful when logging on isCOBOL Application Server or a J2EE server, where running applications usually generate several log files. For example, by configuring:

```cobol
iscobol.logfile=/tmp/%yyyy%mm/%dd/%hh/iscobol-%hh.%nn.%ss.log
```

the runtime will generate iscobol-15.35.30.log file in the /tmp/201712/21/15 folder. This simplifies searching the log files, since they are grouped inside folders for each single day and hour.

The Logger object is now accessible to isCOBOL programs, allowing them to write additional information with customizable log levels. For example, the following code snippet:

```cobol
repository.
   class IsRuntime as "com.iscobol.logger.LoggerFactory"
   class MyLogger as "com.iscobol.logger.Logger"
   .
working-storage section.
77 mylog object reference MyLogger.
procedure division.
main-logic.
   set mylog to IsRuntime:>getCurrLog()
   if mylog not = null
      mylog:>warning("this is a warning")
      mylog:>info("this is a info")
      mylog:>severe("this is a severe")
   end-if
```

will log the following lines:

```cobol
21-dic-2017 16.48.34.112 INFO: ENTER PROGRAM 'PROGLOG' {
21-dic-2017 16.48.34.245 WARNING: this is a warning
21-dic-2017 16.48.34.245 INFO: this is a info
21-dic-2017 16.48.34.245 SEVERE: this is a severe
21-dic-2017 16.48.34.245 INFO: EXIT PROGRAM 'PROGLOG' }
```

### New compatibility options

isCOBOL now provides even better compatibility with other COBOL dialects, such as MicroFocus ®, RM/COBOL® and ACUCOBOL-GT®.

New routines have been implemented to provide higher compatibility with other COBOL dialects:

- CBL_CREATE_FILE, to create a new file and leave it open for operations
- CBL_OPEN_FILE, to open an existing file for processing
- CBL_CLOSE_FILE, to close an open file
- CBL_READ_FILE, to read bytes from a file
- CBL_WRITE_FILE, to write bytes to a file
- CBL_FLUSH_FILE, to ensure all buffers for a file are written to disk
- CBL_TOLOWER, to convert a data item to lower case
- CBL_TOUPPER, to convert a data item to upper case
- C$CARG, to read parameter information on the received parameters given its name
- C$DARG, to read parameter information on the received parameter given its position
- C$CENTURY, to retrieve the first two digits of the current year
- C$DELAY, to suspend the running program without using CPU resources
- DELETE, to delete a file

A new op-code *winprint-set-job* is now supported in WIN$PRINTER routine to manage concurrent printer jobs in multi threaded programs.

A new compiler option -sv has been implemented to support variable source format.
