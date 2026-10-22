## Starting the batch

To start a batch processing through the isCOBOL Server you use the trun executable.

**Note** - the trun executable is currently available only on Windows and Linux.

The trun executable has the following usage:

```cobol
trun [-hostname host] [-port port] [-user usr] [-password pwd] [-c config_file] [-time] [-timeout s] PROGRAM_NAME [p1 p2 ... pn]
```

Where:

- *host* is the IP address where isCOBOL Server is listening. Note that you can specify only an IP address here; hostnames are not accepted. By default 127.0.0.1 is used.
- *port* is the port number where isCOBOL Server is listening. By default 10995 is used.
- *usr* is the user name for the connection to the isCOBOL Server in case [iscobol.as.authentication \*](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) is enabled.
- *pwd* is the password for the connection to the isCOBOL Server in case [iscobol.as.authentication \*](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) is enabled.
- *config_file* is an isCOBOL properties file on the server machine. The system environment variables set on the local machine are passed as well to the runtime session that will be generated in the isCOBOL Server.
- *s* is the connection timeout expressed in seconds. If omitted, the default timeout in the system is used.
- *p1, p2 ... pn* are command line parameters that will be received by the program as chaining parameters.

The trun executable waits for the program to complete and moves his exit status to the system errorlevel. If the -time option was specified, the trun executable also prints the time spent on the console output.

The trun executable is affected by these system environment variables that are equivalent to the command line options:

- TRUN_HOSTNAME
- TRUN_PORT
- TRUN_USER
- TRUN_PASSWORD
- TRUN_CONF
- TRUN_TIMEOUT
- TRUN_DEFAULT_PROGRAM

If you set these variables, you can omit the corresponding command line parameters.

If environment variables and command line parameters are used together, command line parameters have priority over environment variables.
