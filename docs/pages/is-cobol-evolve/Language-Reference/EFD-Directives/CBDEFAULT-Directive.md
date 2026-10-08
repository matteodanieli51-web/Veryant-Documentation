## CBDEFAULT Directive

This directive affects only iss files and not EFD files, therefore it can only be used with c-tree SQL. It allows the specification of the initial value for a specific field. FD fields are automatically initialized to space if they’re alphanumeric and to zero if they’re numeric or dates. The default initialization can be changed by using the -dv compiler option. If you need a specific field of the FD to be initialized to a particular value, you can take advantage of the $EFD CBDEFAULT directive. If CBDEFAULT and BINDEFAULT are set on the same field, CBDEFAULT will have priority.

```cobol
>>EFD CBDEFAULT=DefaultValue
```

or

```cobol
$EFD CBDEFAULT=DefaultValue
```

or

```cobol
*(( EFD CBDEFAULT=DefaultValue ))
```

or

```cobol
*>(( EFD CBDEFAULT=DefaultValue ))
```

*DefaultValue* is generated in the iss file as is, without any conversion.

### Example

The following setting initializes field-1 to “A” .

```cobol
>>EFD CBDEFAULT='A'
 03 field-1 PIC X.
```
