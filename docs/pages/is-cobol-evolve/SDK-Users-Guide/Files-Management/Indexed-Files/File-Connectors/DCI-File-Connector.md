#### The DCI File Connector

The DCI File Connector allows you to work on DBMaker by separating ISAM native access from the java process.

The File Connector executable is provided along with isCOBOL:

| Platform | Executable |
| --- | --- |
| Linux/ Unix | $ISCOBOL/bin/**dcic** |
| Windows | %ISCOBOL%\bin\\**dcic.exe** |

In order to make isCOBOL use the DCI File Connector as file handler, the following setting must appear in the configuration:

```cobol
iscobol.file.index=dcic
```

The dcic file handler runs the executable file dcic. If this file is not in the system Path, you can specify its full name by setting the [iscobol.file.connector.program.dcic](../../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property.

The DCI connector library (dcic.dll on Windows and libdcic.so on Linux) is required in the library path (%PATH% on Windows and $LD_LIBRARY_PATH on Linux).

Note that this library is available only since version 5.4.2.

To retrieve the necessary libraries

1. browse to [http://www.dbmaker.com/downloads.html](http://www.dbmaker.com/downloads.html),
2. select the desired DBMaker version from the bulleted list,
3. scroll down to find the section "DCI Downloads",
4. click on the download button to download the zip,
5. when the download is completed, open the zip and find the folder that matches your platform and open it,
6. find the "iscbl" subfolder and extract the dcic library (dcic.dll for Windows, libdcic.so for Linux).

To have the DCI connector library automatically loaded, copy dcic.dll to the isCOBOL’s bin directory on Windows and copy libdcic.so to the isCOBOL’s native/lib directory on Linux.

The executable file dcic must be of the same architecture as the dcic and dmapi libraries, but it can be of a different architecture than the isCOBOL Framework. For example, the following combinations are both valid:

- 64-bit isCOBOL + 64-bit dcic.exe + 64-bit dcic.dll + 64-bit dmapi54.dll
- 64-bit isCOBOL + 32-bit dcic.exe + 32-bit dcic.dll + 32-bit dmapi54.dll

The following combination is not valid, instead:

- 64-bit isCOBOL + 64-bit dcic.exe + 32-bit dcic.dll + 32-bit dmapi54.dll

The DCI connector is the same as DCI in terms of configuration, library routines and troubleshooting. Refer to [Basic Configuration](../DCI#basic-configuration), [Library Routines](../DCI#library-routines) and [Troubleshooting](../DCI#troubleshooting) in the DCI documentation for more information.
