## IsCOBOL Server enhancements

The isCOBOL Server has been improved, allowing ThinClient sessions to have a custom timeout value for connection errors. TurboRun connections have been improved with the same capability.

### ThinClient -timeout option

Usually, connection errors such as network connectivity issues or not having the ISCSERVER program running, are reported after a timeout period that is OS dependent. Now, the command line option *-timeout* can be used to force the number of seconds before errors are reported. If the default timeout is too high, the setting can be used to report such errors sooner.

In the following example, the isclient command uses 2 seconds as the timeout value for connections:

```cobol
isclient –hostname myserver –port 10999 –timeout 2 PROGNAME
```

When the ThinClient is executed using an .istc file, the following new configuration needs to be set:

```cobol
iscobol.timeout=2
```

### Trun -timeout option

The same option is supported by the Turbo Run (trun) tool. For example:

```cobol
trun –hostname myserver –port 10995 –timeout 2 PROGNAME
```

or using the configuration TRUN_TIMEOUT when executing locally:

```cobol
export TRUN_TIMEOUT=2
trun PROGNAME
```
