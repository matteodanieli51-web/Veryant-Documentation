### CSOCKET-LAST-ERROR

This operation allows the COBOL program to determine the last error on a socket.

#### Syntax:

```cobol
 CALL "C$SOCKET" USING CSOCKET-LAST-ERROR
                       socketHandle
                      [textDescription]
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CSOCKET-LAST-ERROR | Constant |  |
| *socketHandle* | USAGE HANDLE | Identifies the socket to inquire for errors. It can be NULL. |
| *textDescription* | PIC X(n) | Optional parameter. It receives the textual description of the error, if available. |

#### Return code:

returnCode can be any signed numeric data item and contains the socket error number. To interpret this number, see third-party documentation about sockets:

|  |  |
| --- | --- |
| 0 | No errors |
| 10004 | socket error EINTR |
| 10009 | socket error EBADF |
| 10013 | socket error EACCES |
| 10014 | socket error EFAULT |
| 10022 | socket error EINVAL |
| 10024 | socket error EMFILE |
| 10035 | socket error EWOULDBLOCK |
| 10036 | socket error EINPROGRESS |
| 10037 | socket error EALREADY |
| 10038 | socket error ENOTSOCK |
| 10039 | socket error EDESTADDRREQ |
| 10040 | socket error EMSGSIZE |
| 10041 | socket error EPROTOTYPE |
| 10042 | socket error ENOPROTOOPT |
| 10043 | socket error EPROTONOSUPPORT |
| 10044 | socket error ESOCKTNOSUPPORT |
| 10045 | socket error EOPNOTSUPP |
| 10046 | socket error EPFNOSUPPORT |
| 10047 | socket error EAFNOSUPPORT |
| 10048 | socket error EADDRINUSE |
| 10049 | socket error EADDRNOTAVAIL |
| 10050 | socket error ENETDOWN |
| 10051 | socket error ENETUNREACH |
| 10052 | socket error ENETRESET |
| 10053 | socket error ECONNABORTED |
| 10054 | socket error ECONNRESET |
| 10055 | socket error ENOBUFS |
| 10056 | socket error EISCONN |
| 10057 | socket error ENOTCONN |
| 10058 | socket error ESHUTDOWN |
| 10059 | socket error ETOOMANYREFS |
| 10060 | socket error ETIMEDOUT |
| 10061 | socket error ECONNREFUSED |
| 10062 | socket error ELOOP |
| 10063 | socket error ENAMETOOLONG |
| 10064 | socket error EHOSTDOWN |
| 10065 | socket error EHOSTUNREACH |
| 10066 | socket error ENOTEMPTY |
| 10067 | socket error EPROCLIM |
| 10068 | socket error EUSERS |
| 10069 | socket error EDQUOT |
| 10070 | socket error ESTALE |
| 10071 | socket error EREMOTE |
| 10091 | socket error SYSNOTREADY |
| 10092 | socket error VERNOTSUPPORTED |
| 10093 | socket error NOTINITIALIZED |
| 10101 | socket error EDISCON |
| 10102 | socket error EUNKNOWN |
