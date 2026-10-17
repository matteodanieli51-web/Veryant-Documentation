## isCOBOL LoadBalancer usage

The isCOBOL LoadBalancer has the following usage:

```cobol
iscbalancer [-port port] [-hostname host] [-force] configuration_file
```

While most of the command line options are optional, *configuration_file* is mandatory. This file is a Java property file whose entries are in the format *property=value*. The isCOBOL LoadBalancer configuration is explained in [Setting up the isCOBOL LoadBalancer](./Setting-up-the-isCOBOL-LoadBalancer).

When a TCP connection is closed the connection may remain in a timeout state for a period of time after the connection is closed (typically known as the TIME_WAIT state or 2MSL wait state). For applications using a well known socket address or port it may not be possible to bind a socket to the required SocketAddress if there is a connection in the timeout state involving the socket address or port. Use the –force option to achieve it.

A correct startup will produce an output similar to this:

```cobol
Load balancer started and listening on port 10999
```

Host name and port can also be set in the configuration file, as shown below.

```cobol
iscobol.balancer.hostname host
iscobol.balancer.port port
```
