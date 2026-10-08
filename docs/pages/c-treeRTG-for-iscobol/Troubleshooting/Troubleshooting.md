# Troubleshooting

## Problems starting the c-tree Server

### The faircom command terminates during startup

When the faircom command doesn’t complete and terminates suddenly, check the log file CSTATUS.FCS generated in the c-tree Server’s local directory for more information. By default CTSTATUS.FCS is generated in the *data* subfolder.

The most common causes for this issue are an invalid or missing license or an invalid entry in the ctsrvr.cfg configuration file. The content of CSTATUS.FCS will explain the cause of the problem.

### Failed startup due to the number of CPU cores

The following error message could be shown at startup, causing the startup to fail:

```ini
LICENSE NOTICE:
 
c-treeRTG is licensed for # CPUs, but # CPUs have
been detected in the host machine. Either upgrade
the Server license to support a greater number
of CPUs or bind the Server to specific CPUs using
the CPU_AFFINITY configuration keyword.
```

The c-tree server is limited to use up to a specific number of CPU cores. This limit is controlled by the license. The default license allows c-tree to use up to 8 CPU cores.

If the server machine has more cores, the above error message is shown and c-tree doesn’t start. There are two actions that can be taken to resolve this issue:

- purchase a different license, that allows more CPU cores, or
- limit the number of cores used by the faircom command.

To limit the number of cores used by c-tree:

1. edit the *ctsrvr.cfg* configuration file
2. add the following entry

```ini
CPU_AFFINITY 0,1,2,3,4,5,6,7
```

**Note** - The above information is for limiting c-tree to 8 CPU cores. Use more or less numbers if you need to limit it to a different number of cores.

3. restart c-tree

On Linux it’s also possible to skip the editing of the *ctsrvr.cfg* configuration file and use the *taskset* system command as follows:

```ini
taskset --cpu-list 1-8 ./faircom
```

If you want to start c-tree with nohup in the background, add the syntax after the *taskset* command. For example:

```ini
taskset --cpu-list 1-8 nohup ./faircom &
```

**Note** - The above information is for limiting c-tree to 8 CPU cores. Use different numbers if you need to limit it to a different number of cores.

On Solaris systems, CPU_AFFINITY accepts a single numeric value, which is interpreted as a processor set number. For example, CPU_AFFINITY 2 configures the c-tree server to run on processor set 2.

To create a processor set on Solaris, use the Solaris command psrset. For example, to create a set comprising processors 1 through 8, use:

```ini
psrset -c 1-8
```

The ID of the newly created processor set is returned.

To bind a process to this processor set, use:

```ini
psrset -b <ID> <pid>
```

**Note** - you must have root permissions to run the above commands.
