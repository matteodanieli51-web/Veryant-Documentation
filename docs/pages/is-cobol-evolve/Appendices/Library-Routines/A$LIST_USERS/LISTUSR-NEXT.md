### LISTUSR-NEXT

The LISTUSR-NEXT function retrieves the next item in the list.

#### Syntax:

```cobol
 CALL "A$LIST_USERS" USING LISTUSR-NEXT
                           listHandle
                           ID
                           userName
                           userAddr
                           userComp
                           threadID
                           prog
                          [type]
                          [loginTime]
                          [userInfo]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTUSR-NEXT | Constant |  |
| *listHandle* | USAGE HANDLE | Specifies the handle of a list returned by the LISTUSR-OPEN function |
| *ID* | PIC S9(n) | Receives the user ID. If it is zero, it means that the user is an administrator, if it is –1, it means that no login has been made |
| *userName* | PIC X(n) | Receives the user name. If no login has been made, it’s set to the operating system user name |
| *userAddr* | PIC X(n) | Receives the IP address of the client machine[\*] |
| *userComp* | PIC X(n) | Receives the name of the client machine[\*].<br>If the computer name can’t be retrieved, the IP address is returned in this field. |
| *threadID* | PIC 9(n) | Receives the unique thread ID of the client.<br>The returned value is between 1 and 2147483647. |
| *prog* | PIC X(n) | Receives the name of the program launched by the client or the name of the last program called through the CHAIN statement.<br>The special value "File server" identifies a connection to the [isCOBOL File Server](../../../../is-cobol-AS/isCOBOL-File-Server/isCOBOL-File-Server).<br>The special value "Server Call Session" identifies a remote call. The text between square brackets tells the name of the program that was remotely called. See [Remote objects](../../../../is-cobol-AS/Remote-objects) for details. |
| *type* | PIC 9(1) | Optional parameter.<br>Returns the client type. The value is the sum between one or more of these values:<br>0 -  Thin client, FileServer client or remote call<br>1 -  WebClient<br>2 - Thin client running in a separate process due to the [iscobol.as.multitasking](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting<br>3 - WebClient running in a separate process due to the [iscobol.as.multitasking](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting<br>4 - TurboRun session |
| *loginTime* | PIC X(16) | Optional parameter.<br>Returns the date and time the client session was started.<br>The information is returned in the format YYYYMMDDHHNNSSCC, where YYYY is the year, MM is the month (1-12), DD is the day in the month (1-31), HH is the number of hours (0-24), NN is the number of minutes (0-59), SS is the number of seconds (0-59) and CC is the number of hundreds of seconds (0-99).<br>The time is returned in the UTC time zone. |
| *userInfo* | PIC X(n) | Optional parameter.<br>Returns the custom information bound to this client session.<br>To store custom information, call the [AUSERINFO-SET](../A$USERINFO/AUSERINFO-SET) function. |

[\*] A computer may have multiple IPs and multiple alias name for the same IP too, so you might not receive the expected IP and name. Usually a safe method to get the desired information is to change the hosts configuration file (/etc/hosts on Linux/Unix, %SystemRoot%\System32\drivers\etc\hosts on Windows) appropriately.

#### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | No more items available. |
| >0 | Information returned correctly. |
