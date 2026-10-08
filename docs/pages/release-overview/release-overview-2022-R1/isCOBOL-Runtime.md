## isCOBOL Runtime

isCOBOL Evolve 2022R1 is certified for Java 17, the current Java LTS (Long Term Support) release. It is important to have isCOBOL Evolve 2022R1 qualified to be used by the latest LTS version of Java because LTS applies the tenets of reliability engineering to the software development process and software release life cycle. Long-term support extends the period of software maintenance; it also alters the type and frequency of software updates (patches) to reduce the risk, expense, and disruption of software deployment, while promoting the dependability of the software. It does not necessarily imply technical support. In addition, starting from Java 17, Oracle JDK 17 and future JDK releases are provided under a free-to-use license until a full year after the next LTS release.

isCOBOL Evolve 2022R1 now supports all Java LTS releases: Java 1.8, Java 11 and Java 17. WebClient currently does not support Java 17, but we plan to have it ported in the 2022R2 release.

In addition to Java 17, isCOBOL Evolve 2022R1 is also fully qualified to be used under Microsoft Windows 11 in combination with Java 11.0.13 (see [https://www.oracle.com/java/technologies/javase/products-doc-jdk11certconfig.html](https://www.oracle.com/java/technologies/javase/products-doc-jdk11certconfig.html))

New library routines and configuration settings have been added to allow multiple configuration files to be used when running isCOBOL applications.

### New configurations

New configuration settings have been added in this release:

- *iscobol.conf.copy=FilePath* to include a separate configuration file in the current configuration file.

This setting can be used to easily maintain and use multiple configuration files. For example, when running the following command:

```cobol
iscrun –c myapp.properties MAINPROG
```

and the myapp.properties file contains:

```cobol
iscobol.conf.copy=default.properties
...
iscobol.conf.copy=customer-specific.properties

```

the program is run using the settings specified in the myapp.properties configuration file, along with settings from the default.properties and customer-specific.properties files. If the same configuration property name is set in multiple configuration files, the last defined one takes precedence over the others, thus overwriting previous values.

- *iscobol.file.index.fileversion=n* to create c-tree files that are backward compatible. For example, you can set the value to 2 to make the current C-Tree RTG v3 create files compatible with the previous C-Tree RTG v2.
- *iscobol.file.output_lock=false* to prevent an exclusive lock during open output. The default value is True, so that an OPEN OUTPUT is treated as OPEN OUTPUT WITH LOCK.
- *iscobol.file.extend_lock=false* to prevent an exclusive lock during open extend. The default value is True, so that an OPEN EXTEND is treated as OPEN EXTEND WITH LOCK.
The previous two configurations can be set in rare cases of lock needs. By default, they are set to true for higher performance of WRITE operations after the file is opened.
- *iscobol.display_message_timeout=n* to specify a timeout in thousands of a second for error message boxes. When the timeout expires, the error message box is automatically closed as if the user pressed the OK button. When set in the runtime configuration it affects every Java exception that is usually reported via graphical message box. When set in the isCOBOL Client local configuration it affects connection error and session termination messages.

Additionally, the existing configuration *iscobol.file.page_eject_on_close=true* is now supported on files assigned to -P SPOOLER-DIRECT as well as other print files.

### New library routines

Two new library routines have been implemented:

- C$CONFIG to reset, load or append a new configuration properties file.

This library routine can be used to reset the runtime configuration by setting a new configuration file, or to append a configuration file to the current configuration after the main program is started. It can be useful, for example, to load a different configuration file after logging in. The following snippet:

```cobol
 call "c$config" using cconfig-reset, 
                      "conf2.properties"

```

resets the currently loaded configuration and loads a new configuration contained in the conf2.properties file.

This code snippet:

```cobol
 call "c$config" using cconfig-append, 
                       "conf3.properties"
```

appends settings contained in the “conf3.properties” file to the current configuration.

- W$GETC is used to retrieve the keystroke pressed. This routine is useful when the program needs to perform a low-level intercept of the key pressed in a character-based user interface.

The following code snippet shows how to intercept the F1 key:

```cobol
 77  wcharacter              pic xx.
 ...
    call "w$getc" using wcharacter
    if wcharacter = "k1"
       display "pressed F1"
```

These routines can be used in new programs, and also increase compatibility with other COBOL dialects, such as ACUCOBOL-GT.

A new op-code named WINPRINT-GET-NO-ASYNC-JOBS has been added to the WIN$PRINTER routine to inquire how many async print jobs are currently running. This is useful when using asynchronous print jobs to check if some are still running. For example, this code snippet checks if the async jobs previously executed are terminated:

```cobol
    call "win$printer" using WINPRINT-GET-NO-ASYNC-JOBS, n-jobs
                       giving winprint-status
    if n-jobs = 0
       ...
```
