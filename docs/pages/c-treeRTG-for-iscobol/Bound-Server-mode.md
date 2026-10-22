# Bound Server mode

The Bound Server feature causes isCOBOL to load the c-tree engine and communicate with it in memory instead of connecting to a c-tree server through TCP/IP.

The main advantages are:

- simpler usage
- better performances while working on the local machine

The only disadvantage is that only one process can work in Bound Server mode, and it cannot create more than one instance of the c-tree server.

Because of the above limitation the Bound Server feature can be used only:

- server side in Thin Client environment where only one instance of isCOBOL Server is running
- for single user installations

To activate the feature, the following setting must appear in the isCOBOL configuration:

```cobol
iscobol.ctree.bound_server=true
```

With the above setting, the isCOBOL engine will load ctdbsapp library instead of c-tree library.

The ctdbsapp library and its dependent libraries must be available in the library path.

**Note** - In version 3.0.2 and previous versions the c-tree server library was named ctreedbs, not ctdbsapp. If you need to start one of these c-tree versions in bound server mode, the following configuration setting must be used as well: *iscobol.ctree.bound_library=ctreedbs*.

Set these environment variables to point to the location and name of the c-tree server configuration file and the license file:

```cobol
FCSRVR_CFG=/path/to/ctsrvr.cfg
FCSRVR_LIC=/path/to/ctsrvr########.lic
```

Alternatively, they can be copied to the working directory.

**Note** - the ctsrvr.cfg configuration file includes some relative paths that should be reviewed, as the working directory is usually different in bound server mode (it’s the working directory of the process that binds the c-tree server).

The OPEN of the first file in the runtime session may take longer since the c-tree engine must be initialized. The same slowdown could be experienced during the STOP RUN, when the c-tree engine is unloaded.
