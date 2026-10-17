## DCI Routines

isCOBOL supports the following DCI routines:

- DCI_BLOB_ERROR
- DCI_BLOB_GET
- DCI_BLOB_PUT
- DCI_DISCONNECT
- DCI_FREE_XFD
- DCI_GETENV
- DCI_GET_TABLE_NAME
- DCI_GET_TABLE_SERIAL_VALUE
- DCI_SETENV
- DCI_SET_TABLE_CACHE
- DCI_SET_WHERE_CONSTRAINT

Refer to the [DCI Manual](http://www.dbmaker.com/pdf/ISDCIUserGuide.pdf) from Casemaker for more information about the usage of DCI routines.

DCI routines work on the active file handler between [DCI](../../SDK-Users-Guide/Files-Management/Indexed-Files/DCI) and [The DCI File Connector](../../SDK-Users-Guide/Files-Management/Indexed-Files/File-Connectors/DCI-File-Connector). The file handler is activated at the first OPEN. If DCI routines are called before the first OPEN, they work on the file handler pointed by [iscobol.file.index](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting. If such setting is neither 'dci' nor 'dcic', then DCI routines work on the DCI file handler.

Due to the above rule, if you have a configuration like this:

```cobol
# all files managed by jisam except few files managed by dcic

iscobol.file.index=jisam
iscobol.file.index.file1=dcic
iscobol.file.index.file2=dcic
```

and you wish to call a DCI routine (e.g. DCI_SETENV to set the database) before opening file1 or file2, then you need set [iscobol.dci_routines.use_connector (boolean)\*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) to True in the configuration.
