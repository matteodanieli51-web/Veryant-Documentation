## SERIAL Directive

This directive is used to define a serial data field. To trigger the generation of a serial number by isCOBOL, insert a record and supply 0 value for the serial field. If you insert a new row and supply an integer value instead of a 0 value, isCOBOL will not generate a serial number. If the supplied integer value is greater than the last serial number generated, isCOBOL will reset the sequence of generated serial numbers to start with the supplied integer value.

```cobol
>>EFD SERIAL
```

or

```cobol
$EFD SERIAL
```

or

```cobol
*(( EFD SERIAL ))
```

or

```cobol
*>(( EFD SERIAL ))
```

### Example

```cobol
 01 EMPLOYEE-RECORD.
    05 EMP-KEY.
       10 EMP-TYPE PIC X.
>>EFD SERIAL
       10 EMP-COUNT PIC 9(05).
```

This directive is supported for compatibility with third party interfaces. isCOBOL DatabaseBridge and c-tree SQL don’t currently support it.
