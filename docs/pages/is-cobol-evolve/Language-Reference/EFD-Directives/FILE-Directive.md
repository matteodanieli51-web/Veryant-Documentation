## FILE Directive

The FILE directive names the data dictionary with the file extension .xml. This directive is required when creating a different EFD name from that specified in the SELECT COBOL statement. It is also required when the COBOL file name is not specific.

```cobol
>>EFD FILE=FileName
```

or

```cobol
$EFD FILE=FileName
```

or

```cobol
*(( EFD FILE=FileName ))
```

or

```cobol
*>(( EFD FILE=FileName ))
```

### Example

In this case, the isCOBOL compiler makes an EFD file name called CUSTOMER.XML.

```cobol
 ENVIRONMENT DIVISION.
 FILE-CONTROL.
 SELECT FILENAME ASSIGN TO VARIABLE-OF-WORKING.
 ...
 DATA DIVISION.
 FILE SECTION.
>>EFD FILE=CUSTOMER
 FD FILENAME
```
