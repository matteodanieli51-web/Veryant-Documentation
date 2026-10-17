## EDBI_DISCONNECT

The EDBI_DISCONNECT library routine disconnects from a database while working with isCOBOL DatabaseBridge. When called without parameters, it disconnects the current connection.

### Syntax:

```cobol
 CALL "EDBI_DISCONNECT" [USING opCode
                               parameters]
                       GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | omitted | Disconnects from the current connection. |
|  | [EDBI-DISCONNECT-CONNECTION](./EDBI-DISCONNECT-CONNECTION) | Disconnects from a named connection. |
|  | [EDBI-DISCONNECT-ALL](./EDBI-DISCONNECT-ALL) | Disconnects from all connections. |
| *parameters* | Parameters are used only by [EDBI-DISCONNECT-CONNECTION](./EDBI-DISCONNECT-CONNECTION) opCode. |  |

### Return code:

*returnCode* is zero if the disconnection was successful, 1 if the disconnection failed.

### Examples:

**Example -** Disconnects from current connection

```cobol
call "edbi_disconnect"
if return-code not = 0
   display "Failed to disconnect from current connection"
end-if
```

**Example -** Disconnects from specific connection to Oracle with custom name "OraConn1" when using multiple connections

```cobol
call "edbi_disconnect" using edbi-disconnect-connection
                             "OraConn1"
if return-code not = 0
   display "Failed to disconnect from OraConn1"
end-if
```

**Example -** Disconnects from all connections when using multiple connections

```cobol
call "edbi_disconnect" using edbi-disconnect-all
if return-code not = 0
   display "Failed to disconnect from all connections"
end-if
```
