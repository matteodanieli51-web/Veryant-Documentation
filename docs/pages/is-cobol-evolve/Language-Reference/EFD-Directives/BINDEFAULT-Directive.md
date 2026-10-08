## BINDEFAULT Directive

This directive affects only iss files and not EFD files, therefore it can be used only with c-tree SQL. It allows to specify the hex initial value for a specific field.

```cobol
>>EFD BINDEFAULT=DefaultValue
```

or

```cobol
$EFD BINDEFAULT=DefaultValue
```

or

```cobol
*(( EFD BINDEFAULT=DefaultValue ))
```

or

```cobol
*>(( EFD BINDEFAULT=DefaultValue ))
```

*DefaultValue* is generated in the iss file as is, without any conversion

This directive is useful for setting hex values as initial data for FD fields, otherwise the [CBDEFAULT Directive](./CBDEFAULT-Directive) should be used.

### Example

The following setting initializes field-1 to low-values.

```cobol
>>EFD BINDEFAULT='\x00\x00'
 03 field-1 PIC X(32).
```
