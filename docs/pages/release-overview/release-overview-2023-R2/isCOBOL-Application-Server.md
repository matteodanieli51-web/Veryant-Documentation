## isCOBOL Application Server

The isCOBOL Application Server 2023 R2 includes a new feature named TurboRun for faster execution of COBOL batch programs, and A$ routines have been enhanced.

### TurboRun feature

The new TurboRun feature improves performance of COBOL batch programs that are executed sequentially by running them in the Application Server Java Virtual Machine, saving the cost of initializing a JVM for each application. Using the Application Server JVM boots performance even further, since it uses the cache and the JIT (Just-In-Time) optimizations that are already running.

TurboRun is a native lightweight task that starts the program by asking the Application Server to run the program.

To use this feature, start the Application Server with the new -tr option, for example:

```cobol
iscserver -tr
```

that produces the following output:

*Application Server (TurboRun) started and listening on port 10995*

Then you can run a command like:

```cobol
trun -c /path/to/configuration_file PROGRAM_NAME
```

that will start much faster than a command like:

```cobol
iscrun -c /path/to/configuration_file PROGRAM_NAME
```

As shown in the output, the port number 10995 is the default value used for this new service. It can be changed using the –trport option, for example to use port number 11300, you can use the following command:

```cobol
iscserver –tr –trport 11300
```

and then trun processes can be started with the –port option, similar to the iscclient:

```cobol
trun –port 11300 -c /path/to/configuration_file PROGRAM_NAME
```

The new –tr option can be used in conjunction with the previous -as, -fs or –hs options since all they use different port numbers for the communication.

### A$ routines

Library routines for the management of connected thin clients have been improved as follows:

- A$USERINFO now supports the optional TID (Thread ID) parameter in the AUSERINFO-CLEAR op-code. This is consistent with other op-codes (AUSERINFO-GET and AUSERINFO-SET) that allow you to retrieve or set the customized info for another TID. The following code snippet shows the usage:

```cobol
           call "A$USERINFO" using auserinfo-clear, 
                                   th-id
```

- A$LIST_USERS, A$CURRENT_USER and A$GET_USER can now optionally return the custom information bound to each client, if present. Now the additional call to the A$USERINFO to retrieve the custom information bound to the thread ID is no longer needed. This is the code snippet of the new usages:

```cobol
       call "A$LIST-USERS" using listusr-next, usrlist, usr-id,
                                 usr-name, usr-addr, usr-pcname,
                                 usr-tid, usr-prog, usr-type,
                                 usr-logon-time, usr-cust-info
       ...
       call "A$CURRENT-USER" using usr-id, usr-name, usr-addr,
                                   usr-pcname, th-id, usr-prog,
                                   usr-type, usr-logon-time
                                   usr-cust-info
       ...
       call "A$GET-USER" using usr-tid, usr-id, usr-name,
                               usr-addr, usr-pcname, usr-prog,
                               usr-type, usr-logon-time, 
                               usr-cust-info
```

- A$USER_INFO and A$GET_USER now return a specific error number -2 if the passed thread ID is invalid, and can be used in a COBOL application to check if a TID is still valid. This is the code snippet of the new usages:

```cobol
       call "A$USERINFO" using auserinfo-get, info-retrieved, th-id
                        giving return-code
       ...
       call "A$GET-USER" using usr-tid, usr-id, usr-name,
                               usr-addr, usr-pcname, usr-prog
                        giving return-code
       if return-code = -2
       ...
```
