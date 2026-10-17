#### The c-tree File Connector

The c-tree File Connector allows you to work on c-tree files managed by c-tree by separating ISAM native access from the java process.

**Note** - The ctreej file handler is preferable: it’s thread safe and provides better performance than fscsc. You should consider using fscsc only if you don’t want the JVM behind your application (or your application server) to load native libraries directly for some reason.

The File Connector executable is provided along with isCOBOL:

| Platform | Executable |
| --- | --- |
| Linux/ Unix | $ISCOBOL/bin/**fscsc** |
| Windows | %ISCOBOL%\bin\\**fscsc.exe** |

In order to make isCOBOL use the c-tree File Connector as file handler, the following setting must appear in the configuration:

```cobol
iscobol.file.index=fscsc
```

The fscsc file handler runs the executable file fscsc. If this file is not in the system Path, you can specify its full name by setting the [iscobol.file.connector.program](../../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property.

The executable file fscsc must be of the same architecture as the c-tree client library, but it can be of a different architecture than the isCOBOL Framework. For example, the following combinations are both valid:

- 64-bit isCOBOL + 64-bit fscsc.exe + 64-bit ctree.dll
- 64-bit isCOBOL + 32-bit fscsc.exe + 32-bit ctree.dll

The following combination is not valid, instead:

- 64-bit isCOBOL + 64-bit fscsc.exe + 32-bit ctree.dll

The c-tree File Connector reads only the configuration provided by CTREE_CONF. See [Configuring the client through CTREE_CONF](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-Framework-properties) for details.
