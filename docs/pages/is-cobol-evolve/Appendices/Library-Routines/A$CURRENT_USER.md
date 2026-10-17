## A$CURRENT_USER

In an Application Server environment, the A$CURRENT_USER returns information about the logged user.

### Syntax:

```cobol
 CALL "A$CURRENT_USER" USING ID
                             userName
                             userAddr
                             userComp
                             threadID
                             prog
                            [type]
                            [loginTime]
                            [userInfo]
                     GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *ID* | PIC S9(n) | Returns the user ID. A value  of zero means that the user is administrator. A value of -1 means that no login has been made. |
| *userName* | PIC X(n) | Returns the login user name. If no login has been made, it’s set to operating system user name |
| *userAddr* | PIC X(n) | Returns the login IP address[\*] |
| *userComp* | PIC X(n) | Returns the login computer name[\*].<br>If the computer name can’t be retrieved, the IP address is returned in this field. |
| *threadID* | PIC 9(n) | Returns the thread ID |
| *prog* | PIC X(n) | Returns the name of the program  launched by the client.<br>The special value "Server Call Session" identifies a remote call. The text between square brackets tells the name of the program that was remotely called. See [Remote objects](../../../is-cobol-AS/Remote-objects) for details. |
| *type* | PIC 9(1) | Optional parameter.<br>Returns the client type. The value is the sum between one or more of these values:<br>0 -  Thin client, FileServer client or remote call<br>1 -  WebClient<br>2 - Thin client running in a separate process due to the [iscobol.as.multitasking](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting<br>3 - WebClient running in a separate process due to the [iscobol.as.multitasking](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting<br>4 - TurboRun session |
| *loginTime* | PIC X(16) | Optional parameter.<br>Returns the date and time the client session was started.<br>The information is returned in the format YYYYMMDDHHNNSSCC, where YYYY is the year, MM is the month (1-12), DD is the day in the month (1-31), HH is the number of hours (0-24), NN is the number of minutes (0-59), SS is the number of seconds (0-59) and CC is the number of hundreds of seconds (0-99).<br>The time is returned in the UTC time zone. |
| *userInfo* | PIC X(n) | Optional parameter.<br>Returns the custom information bound to this client session.<br>To store custom information, call the [AUSERINFO-SET](./A$USERINFO/AUSERINFO-SET) function. |

[\*] A computer may have multiple IPs and multiple alias name for the same IP too, so you might not receive the expected IP and name. Usually a safe method to get the desired information is to change the hosts configuration file (/etc/hosts on Linux/Unix, %SystemRoot%\System32\drivers\etc\hosts on Windows) appropriately.

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Operation failed. The only known cause is running outside of the Application Server environment. |
| 0 | Operation successful. |

### Examples:

**Example -** Get current user information when running in thin-client mode

```cobol
*> All parameters are to return information from the routine
*> In working-storage define usr-id and thread-id as pic 9(n), all others as pic x(n)

call "a$current-user" using usr-id
                            usr-name
                            usr-ip-addr
                            usr-pc-name
                            thread-id
                            usr-program
```
