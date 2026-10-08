## isCOBOL Server Improvements

isCOBOL Server has been enhanced to provide basic mirroring capabilities to allow transparent client redirection when a server is not available. Also the client was updated to allow multiple server definitions and to execute isCOBOL GUI utilities.

isCOBOL Thin Client connecting to more than one Application Server The isCOBOL Thin Client has been enhanced to allow more IP addresses and ports to be specified in the command line, and the client will try to connect to the first available IP / port combination.

This can be useful, for example, when the Application Server host has several network connections available for redundancy, to ensure clients can connect to the server from the first available connection.

While this can be useful, especially when dealing with unreliable connections, it’s not a replacement for isCOBOL Balancer, which enables true load balancing across multiple servers.

True load balancing will allocate the most efficient server to a client connection, regardless of the order in which servers are specified in configuration, achieving better performance overall.

As an example, if an Application Server has two physical network connection with IP addresses ip1and ip2, a Thin Client could be configured as follows:

```cobol
iscclient –hostname ip1,ip2 –port 10999 MAINPROG
```

When ip1 is not available for connection, the client will automatically try to connect to ip2. If both ip1 and ip2 are not available, the client will return the message “Connection refused”.

Several Application Servers can also be listening to different TCP ports, in which case the client can be configured to scan each one in turn, as shown below:

```cobol
iscclient –hostname ip1 –port 10111,10112,10113 MAINPROG
```

The same feature can be enabled using the configuration settings on the client side by setting the properties:

```cobol
iscobol.hostname=ip1
iscobol.port=10111,10112,10113
```

### isCOBOL Thin Client utilities execution

isCOBOL Thin Client can now more easily execute all the framework utilities, after inserting the administrator password, without any extra configuration.

The supported utilities are:

- GIFE, Graphical Index, relative File Editor
- ISMIGRATE, Index file migration
- COBFILEIO, to generate object to access index file
- ISL, COBOL launcher
- CPK, Color Picker

For example, to run the gife or ismigrate utilities:

```cobol
iscclient –hostname ip –port 10999 –utility gife
iscclient –hostname ip –port 10999 –utility ismigrate
```
