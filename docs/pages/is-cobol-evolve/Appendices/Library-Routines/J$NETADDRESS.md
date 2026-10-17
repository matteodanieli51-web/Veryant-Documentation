## J$NETADDRESS

The J$NETADDRESS library routine retrieves the name and the IP address of the computer where this routine is executed.

### Syntax:

```cobol
 CALL "J$NETADDRESS" USING computerName
                           computerIpAddress
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *computerName* | PIC X(n) | Receives the name of the computer where this routine has been executed.[\*] |
| *computerIpAddress* | PIC X(n) | Receives the IP address of the computer where this routine has been executed.[\*] |

[\*] A computer may have multiple IPs and multiple alias name for the same IP too, so you might not receive the expected IP and name. Usually a safe method to get the desired information is to change the hosts configuration file (/etc/hosts on Linux/Unix, %SystemRoot%\System32\drivers\etc\hosts on Windows) appropriately.

### Examples:

**Example -** Get the current computer name and ip address

```cobol
*> define arguments as pic x(n)
CALL "J$NETADDRESS" USING comp-Name comp-IpAddress
```
