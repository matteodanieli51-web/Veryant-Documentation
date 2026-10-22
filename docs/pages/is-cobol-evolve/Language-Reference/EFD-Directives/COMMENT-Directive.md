## COMMENT Directive

This directive is used to include comments in an EFD file. In this way, information can be embedded in an EFD file so that other applications can access the data dictionary.

```cobol
>>EFD COMMENT FreeText
```

or

```cobol
$EFD COMMENT FreeText
```

or

```cobol
*(( EFD COMMENT FreeText ))
```

or

```cobol
*>(( EFD COMMENT FreeText ))
```

### Example

Put a comment over a field

```cobol
>>EFD COMMENT This field will be removed in the future
    03 field-1 PIC X.
```
