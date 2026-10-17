## WIN$VERSION

The WIN$VERSION library routine retrieves extended information about the Windows operating system where the isCOBOL framework is running. See the [ACCEPT](../../Language-Reference/Procedure-Division-Statements/ACCEPT) FROM SYSTEM INFO statement for additional information about the host operating system.

**Note -** If your current JVM was released before the current operating system, then values returned by this routine may not be accurate.

### Syntax:

```cobol
 CALL "WIN$VERSION" USING WINVERSION-DATA
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *WINVERSION-DATA* | Group Item | This group data item should have the following structure: |
|  |  | 01  winversion-data.    03 win-major-version         pic x comp-x.    03 win-minor-version         pic x comp-x.    03 win-platform              pic x comp-x.       88 platform-win-31        value 1.       88 platform-win-95        value 2.       88 platform-win-9x        value 2.       88 platform-win-nt        value 3.    03 win-wordsize              pic x comp-x.       88 win-wordsize-16        value 1.       88 win-wordsize-32        value 2.       88 win-wordsize-64        value 3. |
|  |  | *win-major-version*<br>Receives the operating system's major version. |
|  |  | *win-minor-version*<br>Receives the operating system's major version.<br>win-major-version and win-minor-version should be evaluated together, referring to the [Windows version numbers](./WIN$VERSION) table below. |
|  |  | *win-platform*<br>Receives the operating system's major platform. |
|  |  | *win-wordsize*<br>Receives the runtime's word size. |

#### Windows version numbers

The following table summarizes the most recent operating system version numbers:

| Operating System | Major Version | Minor Version |
| --- | --- | --- |
| Windows 11 | 10 | 0 |
| Windows 10 | 10 | 0 |
| Windows Server 2022 | 10 | 0 |
| Windows Server 2019 | 10 | 0 |
| Windows Server 2016 | 10 | 0 |
| Windows 8.1 | 6 | 3 |
| Windows Server 2012 R2 | 6 | 3 |
| Windows 8 | 6 | 2 |
| Windows Server 2012 | 6 | 2 |
| Windows 7 | 6 | 1 |
| Windows Server 2008 R2 | 6 | 1 |
| windows Server 2008 | 6 | 0 |
| Windows Vista | 6 | 0 |
| Windows Server 2003 R2 | 5 | 2 |
| Windows Server 2003 | 5 | 2 |
| Windows XP 64-Bit Edition | 5 | 2 |
| Windows XP | 5 | 1 |
| Windows 2000 | 5 | 0 |

### Examples:

**Example -** Get Windows version information

```cobol
*> on working-storage copy "iswinvers.def"

call "win$version" using winversion-data
display message "Win major version : " win-major-version x"0d0a"
                "Win minor version : " win-minor-version x"0d0a"
                "Win platform      : " win-platform.
```
