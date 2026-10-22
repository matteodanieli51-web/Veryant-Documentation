# Debugging

Debugging a program in WebClient is less straightforward than debugging a program in thin client mode. Whenever possible, it is recommended to debug the program in thin client first, for troubleshooting purposes, before running it in WebClient.

If you need to debug a program in WebClient—because you are investigating an issue that cannot be reproduced in thin client mode—follow the instructions below.

To debug a program in WebClient, remote debugging must be used.

[iscobol.rundebug \*](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) must be set to either 1 or 2 in the isCOBOL Server configuration.

After starting the web application in your browser, run the following command from an isCOBOL Shell:

```cobol
iscrun -r <server-ip> <server-port>
```

where *server-ip* and *server-port* are the IP address and port on which the isCOBOL Server is listening. These parameters can be omitted if the isCOBOL Server is running on localhost and listening on the default port 10999.
