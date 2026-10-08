## Runtime enhancements

The isCOBOL runtime has been enhanced with a new option to measure the time spent, new configuration options and others.

### -time option

A new option, named –time, is supported by the iscrun process to measure the time spent by the running session. This is useful in batch programs whose runtime needs to be measured. The same option is supported by the trun process.

For example, running the command:

```cobol
iscrun -time IO_INDEXED
```

The output is:

```cobol
         INDEXED FILES
         NUM-TIMES:  10000
         ...
         Total time elapsed: 3.60 seconds
```

The last line shows the total time elapsed, including the time spent for Java startup and shutdown.

### New configurations

A new property, *iscobol.runtime-preload*, has been implemented to preload a list of programs separated by space or comma. This feature is similar to the C$PRELOAD routine that loads all the COBOL programs contained in a jar library or in a folder, but you can use this configuration to list arbitrary program names without the need to create a separate jar file or a folder to group the programs.

The property also helps in cases where a PROGRAM-ID contains ENTRY points, and the caller program calls the entry directly without ever calling the main program. This approach is the equivalent of C functions called in a native library and preloaded with the configuration iscobol.shared\_library\_list.

For example, having these entry points declared in this PROGRAM-ID:

```cobol
         program-id. progentry.
         procedure division.
         main.
         ...
         entry "entry1".
         ...
         entry "entry2".
         ...
```

a program can now execute:

```cobol
           call "entry1"
           call "entry2"
```

without adding the CALL “progentry” before calling the entry points by setting the configuration property:

```cobol
iscobol.runtime.preload=progentry ...
```

A new property *iscobol.file.env_toupper=false* has been implemented to resolve file aliases in case sensitive way. When searching for an environment variable, its name is considered in upper case by default. By setting this new configuration to false the runtime will look for the environment variable in case sensitive way, keeping the case used in the program source code. It affects only environment variables in file names, for example with this select:

```cobol
         select customers assign to "$datapath/customers"
```

the runtime will search for the file “customer” in the $datapath environment variable instead of $DATAPATH. The same behavior is applied to file names remapped in the environment when having *iscobol.file.env_naming=true*.

### Other improvements

The WIN$PLAYSOUND routine now supports files included in the source with COPY RESOURCE statement. This avoids the need to provide the physical file in the production environment since the resource file is included in the .class when compiling the COBOL source.

The USE AT PROGRAM START declaratives have been enhanced by supporting the linkage parameters and library routines. The statement is useful to provide startup code that will be executed only once when the program is instantiated.

New methods are implemented in the com.iscobol.rts.IscobolSystem class. The method signatures are:

```cobol
         public static void duplicateIscobolEnv(Thread src, Thread dst) 
         public static void destroyIscobolEnv(Thread th) 
```

The duplicateIscobolEnv method is useful to duplicate the isCOBOL environment between Java threads. The destroyIscobolEnv method is used to clear the isCOBOL environment of a Java thread. These methods help in the COBOL integration with Java for multithread environments that require an isolated environment, similar in the COBOL solution under the CALL RUN statement.
