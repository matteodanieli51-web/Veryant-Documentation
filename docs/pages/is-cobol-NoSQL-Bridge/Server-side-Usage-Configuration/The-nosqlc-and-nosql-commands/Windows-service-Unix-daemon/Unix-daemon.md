#### Unix daemon

On Unix systems, the NoSQL Bridge can be installed as a daemon process and maintained using the nosql command.

##### nosql usage

The nosql command has the following options:

| | |
| --- | --- |
| run | Run the NoSQL Bridge service in foreground mode |
| start | Run the NoSQL Bridge service in background mode |
| stop | Stop the NoSQL Bridge service |
| restart | Restart the NoSQL Bridge service |
| status | Show the status of the NoSQL Bridge service |
| env | Print the current environment settings |
| | |

You need to be root in order to use this command.

##### Daemon configuration

The nosql command on Linux look for the nosql.options file located in the bin directory.

The *nosql.options* includes environment variables that can alter the command behavior:

| Variable | Description |
| --- | --- |
| NOSQL_HOME | Home directory of the command |
| NOSQL_OPTS | Command line options for the command.Use a space to separate multiple options.When the options string includes spaces, delimit it with quotes, for example:NOSQL_OPTS="--port=1234 --context-path=/tmp" |
| NOSQL_JAVA_EXE | Alternative JVM for the command |
| NOSQL_JAVA_OPTS | Java options for the command.Use a space to separate multiple options.When the options string includes spaces, delimit it with quotes, for example:NOSQL_JAVA_OPTS="-XX:+HeapDumpOnOutOfMemoryError -Xmx8G" |
| NOSQL_LOG_FILE | File where the command output is redirected |
| NOSQL_PID_FILE | Semaphore file to inform if the command is running or not.This file contains the process ID. |

In the *nosql.options* file, comments are prefixed by a hash and each entry is on a separate line.

Environment variables in *nosql.options* can alternatively be set also in the external environment through the export command. The external environment has priority over the content of *nosql.options*.
