## NOCONVERTERROR Directive

The NOCONVERTERROR directive is deprecated and supported only for backward compatibility because NOCONVERTERROR is now applied by default to all the record definitions.

The NOCONVERTERROR directive instructs the c-treeSQL to return NULL instead of raising an error where a conversion error (such as spaces or zeros in a date field, for example) occurs on the record.

It affects the next record definition so, if the FD contains more than one record definition and you want to avoid conversion errors on the whole file, you should place the directive above each record definition.

```cobol
>>EFD NOCONVERTERROR
```

or

```cobol
$EFD NOCONVERTERROR
```

or

```cobol
*(( EFD NOCONVERTERROR ))
```

or

```cobol
*>(( EFD NOCONVERTERROR ))
```

### Example

No conversion errors will be shown for file1-record.

```cobol
  FD FILE1.
>>EFD NOCONVERTERROR
 01 FILE1-RECORD.
    03 FILE1-KEY  PIC 9(5).
```
