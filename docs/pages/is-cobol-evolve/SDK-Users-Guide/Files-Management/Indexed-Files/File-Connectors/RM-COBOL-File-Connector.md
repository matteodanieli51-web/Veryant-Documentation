#### The RM/COBOL File Connector

The RM/COBOL File Connector allows you to work on RM/COBOL indexed files by separating ISAM native access from the java process.

The File Connector executable is provided along with isCOBOL:

| Platform | Executable |
| --- | --- |
| Windows | %ISCOBOL%\bin\\**rmc.exe** |

In order to make isCOBOL use the RM/COBOL File Connector as file handler, the following setting must appear in the configuration:

```cobol

```

The rmc file handler runs the executable file rmc. If this file is not in the system Path, you can specify its full name by setting the [iscobol.file.connector.program.rmc](../../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property.

The rmc executable has dependences to RMFM32.DLL and OFM32.DLL, and it needs an RM/COBOL license named license.vlt to work correctly.

The executable file rmc must be of the same architecture as the RM/COBOL libraries, but it can be of a different architecture than the isCOBOL Framework. For example, the following combinations are both valid:

- 64-bit isCOBOL + 64-bit rmc.exe + 64-bit RMFM32.DLL + 64-bit OFM32.DLL
- 64-bit isCOBOL + 32-bit rmc.exe + 32-bit RMFM32.DLL + 32-bit OFM32.DLL

The following combination is not valid, instead:

- 64-bit isCOBOL + 64-bit rmc.exe + 32-bit RMFM32.DLL + 32-bit OFM32.DLL
