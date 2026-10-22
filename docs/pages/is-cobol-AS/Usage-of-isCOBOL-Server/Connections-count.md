## Connections count

The Application Server allows a maximum of 512 concurrent connections by default. This limit can be increased or decreased by setting the [iscobol.as.max_connections](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) property in the configuration.

The Application Server supports up to 2147483647 concurrent connections. Each connection is identified by a thread ID, that is a progressive number. The first connection will have a thread ID equal to 1, the second will have a thread ID equal to 2 and so on until the thread ID 2147483647 is reached, thereafter the next connection will use the first free thread ID starting from 1.
