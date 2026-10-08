# Batch processing through isCOBOL Server (TurboRun)

Performance of batch processes where several runtime sessions are started in sequence might be decreased because of the startup time of the separate isCOBOL Runtimes. The runtime framework is a Java software and the startup of the runtime involves the initialization of a Java Virtual Machine.

The TurboRun technology helps by removing the overhead of the JVM startup time. With this technology you have two components:

- a JVM that is always up and running (the isCOBOL Server)
- a lightweight executable file (trun) that starts immediately to be used as a replacement of the isCOBOL Runtime (iscrun)

The executable file instructs the JVM to start a specific program with a specific configuration. It generates a runtime session that runs inside the isCOBOL Server, isolated from the other connected clients.
