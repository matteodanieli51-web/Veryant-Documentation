### Accessing isCOBOL files from other languages through ExtFH

The ExtFH interface can also be used to access isCOBOL standard files from other programming languages.

The iscobolc library provided with isCOBOL exports the EXTFH function.

Other programming languages can access isCOBOL files by calling this function. There are two methods supporting this access:

- call EXTFH function that is exported by iscobolc dynamic library (iscoboc.dll on Windows platforms and libiscobolc.so on Unix platforms). (dynamic approach)
- link the iscobolc import library (iscobolc.lib on Windows and libiscobolc.a on Unix) into your program and then call the EXTFH function. (static approach)

#### Syntax

```cobol
EXTFH(op_code,&fcd);
```

#### Parameters

| | |
| --- | --- |
| op_code | hexadecimal byte specifying the operation code. <br>The op_code 0006 (GetFileInfo) has the following limitations:<br>• it works only for indexed files;<br>• the 'file dimension' returned is actually the number of active records multiplied the maximum record length;<br>• no information about 'sparse' nor 'compression' is returned. |
| fcd | (File Control Description) 100-byte area that contains information about the file in use. The calling program must complete the appropriate fields in the FCD before calling ExtFH. After performing the specified operation, ExtFH completes the appropriate fields in the FCD before passing control back to the calling program. |
| | |

Please refer to the ExtFH specifications for details about the two parameters.
