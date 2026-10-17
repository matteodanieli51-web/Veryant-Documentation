## Framework Improvements

The isCOBOL framework has yet again been improved to aid developers gain productivity while debugging and increase performance of running applications.

### C$WRITELOG

Multiple parameters are now supported in C$WRITELOG, to output several items at once, as shown below.

```cobol
CALL "C$WRITELOG" using "value of var1:" var1 ", var2=" var2
```

### W$FLUSH

The W$FLUSH library routine has two new op-codes:

- WFLUSH-DISABLE-UI to disable the user interface updates
- WFLUSH-ENABLE-UI to restore the user interface updates

The new opcodes can improve performance in scenarios where a long computation contains several unnecessary DISPLAY or MODIFY statements. Disabling the UI drawing will speed up performance and, at the end of the computation, UI drawing can be re-enabled to update the user interface. It can be used as show below.

```cobol
CALL "W$FLUSH" using WFLUSH-DISABLE-UI
PERFORM DO-LONG-OPERATION-WITH-UNNECESSARY-UI-UPDATES
CALL "W$FLUSH" using WFLUSH-ENABLE-UI
```

### External logging

External logging can now be configured using the new configuration property:

```cobol
iscobol.logclass=com.iscobol.logger.Slf4jLogger
```

This allows the use of external logging libraries, such as Log4J, and take advantage of their advanced features, like rolling and zipping.

### isUPDATER

isUPDATER can now automatically check for software updates by adding the -update option in the command line used to run an isCOBOL application, such as

```cobol
iscrun –update MYPROG
```

isUPDATER loads from CLASSPATH the isupdater.properties configuration file, containing information on the update server, such as

```cobol
swupdater.site=http://192.168.0.123:10996
```

using this configuration, isUPDATER is leveraging the -hs option of iscserver, which starts an HTTP server on the default 10996 port, where updates might have been stored.
