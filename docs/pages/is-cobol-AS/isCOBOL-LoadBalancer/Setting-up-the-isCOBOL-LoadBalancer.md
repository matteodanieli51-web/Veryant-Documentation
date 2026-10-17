## Setting up the isCOBOL LoadBalancer

In order to provide a list of available servers to isCOBOL LoadBalancer, you need to create different entries in the configuration file. The entries have the following format:

```cobol
iscobol.balancer.server.<id>=<host-name>:<port>,<number-of-users>
```

Where:

| | |
| --- | --- |
| *id* | A numeric unique value that identifies the server. Usually servers are numbered from 1 by 1. |
| *host-name* | The name or IP address of the machine where the isCOBOL Server is listening (default: localhost). |
| *port* | The port where the isCOBOL Server is listening (default: 10999). |
| *number-of-users* | The maximum number of users allowed by the server (default: 10). It should be set to a value equal to or less than the maximum number of users allowed by the isCOBOL Server license. |
| | |

The following configuration, for example, describes three different isCOBOL Servers listening on three different server machines on the default port and allowing at best 100 users each:

```cobol
iscobol.balancer.server.1=192.168.0.101,100
iscobol.balancer.server.2=192.168.0.102,100
iscobol.balancer.server.3=192.168.0.103,100
```

When isCOBOL LoadBalancer is required to provide a server address to a new client, it chooses between the listed servers using the one with the lowest rate (currently-connected-users / maximum-number-of-users).

### Automatic Server Checking

The isCOBOL LoadBalancer checks the connections to the configured servers at regular intervals. The interval is 60 seconds by default but the number of seconds can be configured through the [iscobol.balancer.update.interval](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#loadbalancer-configuration) property. Consider that the interval is applied to each single server, so, for example, if we have three servers listed in the configuration and we leave the interval at its default value (60 seconds), then 3 minutes will be necessary to check the connectivity to all the servers.

When a server is checked, there is a default connection timeout of 60 seconds. If there is no response before the timeout, the server is considered unavailable. The amount of seconds for a timeout can be configured through the [iscobol.balancer.update.timeout](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#loadbalancer-configuration) property.
