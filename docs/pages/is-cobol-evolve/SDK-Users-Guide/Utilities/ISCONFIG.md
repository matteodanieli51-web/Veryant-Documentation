## ISCONFIG

The ISCONFIG utility converts an ACUCOBOL-GT® configuration file to an isCOBOL configuration file.

### Usage:

```cobol
isconfig fileIn [fileOut]
```

#### Where:

- *fileIn* is the name of the ACUCOBOL-GT configuration file to be translated.
- *fileOut* is the name of the resulting isCOBOL configuration file. If omitted, "iscobol.properties" is assumed.

### Thin Client

ISCONFIG can be used in thin client environment as well. Use this command to start it:

```cobol
iscclient -hostname <server-ip> -port <server-port> -utility isconfig <arguments>
```

Server side paths must be provided in the arguments.
