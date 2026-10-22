## isCOBOL Debugger

Starting from isCOBOL 2020R1 the isCOBOL Debugger, used to debug ThinClient applications, makes it easier for multiple developers to debug applications running on the same Application Server. To allow this, the Application Server now spawns a separate process for each ThinClient application launched with the -d option, allowing isolation of processes so that debugging an application will not have influence on other applications that may be running in the same Application Server.

This allows debugging of applications on production servers without using a separate Application Server running on a different port number.

By default, port numbers from 9999 to 10099 are used, allowing a maximum of 100 concurrent debugging sessions. The range of ports can be configured using the new configuration variable iscobol.as.debugport_range. For example, setting the property using:

```cobol
iscobol.as.debugport_range=20010-20013,20050
```

the Application Server will allocate ports 20010, 20011, 20012, 20013, 20050 for debugging sessions.

Using the new configuration property is transparent to the client, and there is no need to specify a port to connect to for debugging, as the server will handle it automatically. The same command line can be used to start multiple debugging sessions from multiple users, such as:

```cobol
isclient –hostname ip-server –port 10999 –d PROGNAME
```

For compatibility, the previous command syntax forcing a specific debug port is still supported:

```cobol
isclient –hostname ip-server –port 10999 –debugport 20012 –d PROGNAME
```

Using the isCOBOL 2020R1 release, we suggest removing the debugport option from the command line, and letting the server choose the first available debug port.

If bypassing the new Application Server behavior is needed, the following configuration variable can be set to fall back to the previous multithreaded mode:

```cobol
iscobol.as.multitasking=0
```
