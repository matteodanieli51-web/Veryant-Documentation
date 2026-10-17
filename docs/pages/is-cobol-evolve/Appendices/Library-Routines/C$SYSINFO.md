## C$SYSINFO

The C$SYSINFO library routine returns information about the current operating system. It produces the same result of ACCEPT SYSTEM-INFORMATION FROM SYSTEM-INFO Statement.

The advantage of using this routine instead of the ACCEPT Statement is that the routine can return client system information if called by CALL CLIENT in Thin Client environment.

### Syntax:

```cobol
 CALL "C$SYSINFO" USING SYSTEM-INFORMATION
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| SYSTEM-INFORMATION | Group-item |  |
|  | Structure described in the [iscobol.def](../Copybooks/iscobol.def) copybook as follows: |  |

### Examples:

**Example -** Get the client system information in a thin-client environment

```cobol
*> copy "iscobol.def" working-storage

call "c$sysinfo" using system-information
display operating-system
```
