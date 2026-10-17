### File Names

File Names represents the name of the file to be opened. The rules for resolving the name of the file are described below.

1. If *File* starts with "-F", all file operations are executed on the physical file indicated in File. -F causes the file name to be used as is, without applying [iscobol.file.prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.suffix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_prefix) to it.
2. If *File* starts with "-E " or if [iscobol.file.env_naming (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_env_naming_) is set to true, then *File* contains the name of a configuration property that defines the physical name of the file. Use the $ prefix if the configuration property maps a part of the file path instead of mapping the file name. If the no configuration property is found, the framework looks for a mapping in the system environment variables. By default, only upper case system variables are considered; set [iscobol.file.env_toupper (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_env_toupper) to false to force a case sensitive search when working on case sensitive systems like Linux. Here are a couple of examples:

#### Windows

| Physical file name | Framework property for mapping | System environment for mapping |
| --- | --- | --- |
| Physical file name | Framework property for mapping | System environment for mapping |
| "MyFile" | iscobol.myfile | MYFILE |
| "$MyDir\MyFile" | iscobol.mydir | MYDIR |

#### Linux/Unix

| Physical file name | Framework property for mapping | System environment for mapping | |
| --- | --- | --- | --- |
| | | env_toupper=1 | env_toupper=0 |
| "MyFile" | iscobol.myfile | MYFILE | MyFile |
| "$MyDir\MyFile" | iscobol.mydir | MYDIR | MyDir |

3. If *File* starts with "isf://*server-name:serverport*: " or just "isf://*server-name*: ", the next characters identify the name of a file that is managed by the File Server. See [The ISF protocol](../../../../is-cobol-AS/isCOBOL-File-Server/Client-side-Configuration) for more details.
4. If *File* is "-P SPOOLER", all file operations are redirected to the print spooler.\[A\]
5. If *File* is "-P PREVIEW", all file operations are redirected to the preview manager that shows the print preview. The preview window allows job to be saved into a pdf file on disk.\[A\]
6. If *File* is "-P PDF filename", all file operations are redirected to the PDF manager that generates the PDF file named filename; the default name (when filename is not indicated) is "iscoboljob.pdf". \[A\]
7. If *File* is "-P SPOOLER-DIRECT", all file operations are directly redirected to the printer.\[A\]
8. If *File* is "-P ###", where ### doesn’t match with any of the above, ### is passed to the current system command interpreter and the file allows the command output stream and input stream to manage, depending on the open mode.\[A\]
9. If *File* is "-S IN", all file operations are redirected to the standard-input device.
10. If *File* is "-S OUT", all file operations are redirected to the standard-output device.
11. If *File* is "-S ERR", all file operations are redirected to the standard-error device.
12. If *File* is "-Q <printerName\>", all file operations are redirected to the named printer. Details are explained in [-Q <printername\> syntax](./Q-printerName-syntax).

13. If *File* is "PRINTER?", all file operations are redirected to the print spooler in RM/COBOL compatibility mode. It differs from "-P SPOOLER" in terms of text positioning rules.

Data is converted using the current encoding while working with print files. You can avoid this conversion by using + instead of - in file assignments (i.e. +F, +P SPOOLER, +S OUT, etc.)

\[A\] Piping is allowed only for

- print files; files that are implicitly or explicitly ASSIGN TO PRINTER
- line sequential files; only if the program is compiled with [-flsu](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#flsu) option
