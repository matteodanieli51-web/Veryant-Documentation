## ISMIGRATE (Index File Migration)

The ISMIGRATE utility converts ISAM files from one format to another.

In order to perform the conversion, ISMIGRATE calls low level file handler functions. The isCOBOL Framework must be able to interact with the involved file handlers, so native libraries, licenses and specific configuration of the file handler must be available to run ISMIGRATE.

Before using ISMIGRATE it’s good practice to verify the integrity of the files you’re going to convert. Corrupted files will not migrate correctly.

### Usage 1:

```cobol
ismigrate
```

or

```cobol
iscrun -utility ismigrate
```

If the utility is launched without parameters, a graphical wizard procedure will start.

After the welcome screen, you are prompted to choose the source file format and the destination file format.

![](../../images/ismigrategui.PNG)

The wizard procedure allows you to set up the migration process through the following steps:

1. Choose input and output file systems: you can choose from the two lists that are loaded with the known file handlers. If you need to use a different file handler, just type its name into the field. The following file handlers are available by default:

| File Handler | Description |
| --- | --- |
| c-tree RTG - Java Interface (ctreej) | Current c-tree file handler interface.<br>The c-tree client library is required in the Java library path.<br>When used as input file handler, it must be configured externally and Ismigrate will browse for c-tree files on the local PC.<br>When used as output file handler, it can be configured in the Ismigrate panels and you’re allowed to write c-tree files also on a remote machine. You’re also allowed to sqlize files to have them registered as tables in the c-treeSQL database as long as you have iss dictionaries for these files. |
| CASEMaker DBMaker (dci) | DBMaker interface.<br>The dci library is required in the Java library path.<br>When used as input file handler, the DBMaker JDBC driver (dmjdbc30.jar) is required in the Classpath as Ismigrate uses it to get the list of available tables. |
| isCOBOL DatabaseBridge (easydb) | DatabaseBridge.<br>The JDBC driver of the desired database is required in the Classpath.<br>EDBI routines for the files that you’re going to convert must be available either in the Classpath or in the [iscobol.code_prefix](../Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration). |
| isCOBOL JISAM (jisam) | Jisam. |
| ACUCOBOL Vision (com.iscobol.io.ScanVision) | Internal class that is able to read Vision files sequentially without the need of external libraries or connectors. This class is not able to read encrypted Vision files. <br>**Note** - This class is deprecated, you should consider using ACUCOBOL Vision - Java Interface (visionj) instead. |
| ACUCOBOL Vision - Java Interface (visionj) | Vision interface.<br>It provides read, write and lock capabilities on ACUCOBOL Vision files.<br>It supports Vision 3, Vision 4, Vision 5 and Vision 6 files.<br>It doesn’t support encrypted files. |
| Micro Focus (com.iscobol.io.ScanMF) | Internal class that is able to read Micro Focus indexed files sequentially without the need of external libraries or connectors. This should be the first choice when you have to convert Micro Focus files. This class is not able to read compressed files.<br>If this class fails to read your Micro Focus files, then you should consider trying with "isCOBOL Micro Focus File Connector (mfc)". |
| RM/COBOL (com.iscobol.io.ScanRMKF) | Internal class that is able to read RM/COBOL indexed files sequentially without the need of external libraries or connectors. |
| isCOBOL c-tree File Connector (fscsc) | File connector that allows you to access c-tree files using a separate process.<br>See [The c-tree File Connector](\) for more details about the fscsc executable.<br>There is no particular advantage in using this file handler for data migration. Consider using "c-tree RTG - Java Interface (ctreej)" instead. |
| isCOBOL Micro Focus File Connector (mfc) | File connector that allows you to access Micro Focus indexed files using a separate process.<br>See [The Micro Focus File Connector](\) for more details about the mfc executable. |
| isCOBOL Vision File Connector (vfc) | File connector that allows you to access Vision files using a separate process.<br>See [The Vision File Connector](\) for more details about the vfc executable. |
| Btrieve (btrieve) | Pervasive Btrieve file handler.<br>The wbtrv32 library is required in the Java library path. |

2. Choose input files: ISMIGRATE loads all files that can be open by the input file system from the specified input directory and allows you to check the one you wish to migrate. When migrating a database table, ISMIGRATE connects to the database through JDBC and lists available tables.
3. Choose output directory: unless you’re migrating to a database, ISMIGRATE allows you to choose the directory in which resulting files will be stored.
4. Enable or disable additional options: this is the last step before the migration starts. Here you can enable the trace of the Ismigrate activity and the check of consistency between the original records and the new records. It’s also possible to specify a hook program to be called for processing records before they’re written to the output file. For a sample of a hook program, go to the *sample/ismigrate/hook-migrate* directory of the isCOBOL SDK.
5. Migration process: in the last panel you can see the data migration status. In the top area you can monitor the progress of the current file migration and have an estimated time of arrival (ETA) based on the writing speed; note that the progress is calculated by comparing the number of transferred records against the total number of records, it doesn’t include the time spent for closing the files, so it might not be accurate if you have enabled bulk addition. In the bottom area you can review the list of completed file migrations; for each file migration Ismigrate provides the count of processed records and the status. If you check ‘save session’ before exiting, ISMIGRATE saves all the information gathered during the wizard procedure into a file with imgs extension that can be used with the -silent option (see Usage 3, below).

With this usage ISMIGRATE generates two log files in the isCOBOL bin directory: *ismigrate_out.log* and *ismigrate_err.log*. These files contains the output that ISMIGRATE prints on sysout and syserr.

### Usage 2:

```cobol
iscmigrate Input Output
```

or

```cobol
iscrun [-c ismigrate.properties ] -utility ismigrate Input Output
```

If the utility is launched with parameters, it works in console mode without showing any window and displaying the output on the system output. Necessary information is read from the configuration (see [ISMIGRATE Properties](./ISMIGRATE#ismigrate-properties) below). See [ISMIGRATE Parameters](./ISMIGRATE#ismigrate-parameters) below for details on Input and Output.

There are two different approaches that you can adopt when running ISMIGRATE on the command line:

- migrate one file at a time
  - The property [iscobol.ismigrate_no_directories (boolean)](../Compiler-and-Runtime/Configuration/Configuration-Properties#ismigrate) must be set to true.
  - *Input* and *Output* specify the exact name of the input file to be read and the exact name of the output file to be written. Relative paths are resolved according to the working directory. Ensure to pass the correct COBOL file name, that sometimes doesn’t match with the disk file name (e.g. don't specify the "dat" extension in the names of JIsam and c-tree files).
- migrate multiple files at a time
  - *Input* specify the name of a directory optionally followed by a pattern, e.g. "data\\\*.dat". *Output* specifies the output directory.
  - ISMIGRATE performs a directory listing of *Input* and, for each file found, it creates a file with the same name in *Output*. ISMIGRATE uses the disk file name, that sometimes doesn’t match with the COBOL file name required by I/O APIs. When the input files are JIsam or c-tree, you should instruct ISMIGRATE to discard the "dat" extension from their name; this is achieved through the [iscobol.ismigrate_remove_extension](../Compiler-and-Runtime/Configuration/Configuration-Properties#ismigrate) configuration property.

During the file migration, Ismigrate prints the progress on the system output; note that the progress is calculated by comparing the number of transferred records against the total number of records, it doesn’t include the time spent for closing the files, so it might not be accurate if you have enabled bulk addition.

### Usage 3:

```cobol
iscmigrate -silent:imgs_file
```

or

```cobol
iscrun -utility ismigrate -silent:imgs_file
```

The -silent option makes ISMIGRATE run in background mode retrieving necessary parameter from a imgs file. See Usage 1 above to see how to generate imgs files.

### Usage 4:

```cobol
call "ISMIGRATE" USING Input 
                       Output
                      [IsmigrateResult]
                GIVING IsmigrateStatus
```

The ISMIGRATE utility can also be called from within a COBOL program. In this case, it works in console mode without showing any window and displaying the output on the system output. Necessary information is read from the configuration (see [ISMIGRATE Properties](./ISMIGRATE#ismigrate-properties) below). See [ISMIGRATE Parameters](./ISMIGRATE#ismigrate-parameters) below for details on *Input* and *Output*.

*IsmigrateStatus* is a signed numeric data item that receives the [ISMIGRATE Exit Status](./ISMIGRATE#ismigrate-exit-status).

**Note** - the ISMIGRATE utility is not thread safe. Calling multiple instances of the utility simultaneously in the same runtime session may lead to unexpected errors.

### ISMIGRATE Parameters

- *Input* is the name of the file(s) to be converted, or the name of directory containing files to be converted. When passed on the command line, if Wild Card characters (\* and ?) are used, the parameter must be within quotation marks (“).
- *Output* is the name of the directory that will receive the converted files. If this directory doesn't exist, it will be created.
- *IsmigrateResult* is an optional parameter that receives detailed information about the last file migrated. It must be defined as follows:

```cobol
       01 more-info.
           03 read-count  long.
           03 write-count long.
           03 skip-count  long.
           03 check-count long.
           03 error-buffer.
              05 err      pic x(128).
              05 err-ext  pic x(256).
```

- *read-count* is the number of records read,
- *write-count* is the number of records written,
- *skip-count* is the number of records skipped,
- *check-count* is the number of records verified,
- *error-buffer* is the error description, or spaces if everything is OK.

### ISMIGRATE Properties

ISMIGRATE has a number of properties that can be set in the configuration. Refer to the [ISMIGRATE](../Compiler-and-Runtime/Configuration/Configuration-Properties#ismigrate) section in [Utilities Configuration](../Compiler-and-Runtime/Configuration/Configuration-Properties#utilities-configuration) for the list of available configuration properties.

### ISMIGRATE Exit Status

The ISMIGRATE utility terminates with one of the following exit status

| Status | Meaning |
| --- | --- |
| 0 | Operation Successful |
| -1 | Bad Parameters |
| -2 | Bad Environment |
| -3 | I/O Error |

### Thin Client and headless systems

ISMIGRATE can be used in thin client environment as well. Use this command to start it:

```cobol
iscclient -hostname <server-ip> -port <server-port> -utility ismigrate <arguments>
```

Usage 1: the utility works on server files. Browse features are disabled, you need to write folder paths by hand.

Usage 2 and 3: server side paths must be provided in the arguments.

The thin client technology allows you to run the utility on a headless server. Start the isCOBOL Server on the headless server and launch the utility with the thin client from your PC; in this way the utility operates on the headless server while the utility GUI is shown on your PC.
