### <map\>

The map option replaces the file name or directory passed by the COBOL application with the specified values.

The map option may contain the following sub-options:

| Option | Description |
| --- | --- |
| <name\> | Specifies the string that replaces the file name portion of the file path passed by the COBOL application. |
| <dir\> | Specifies the string that replaces the directory portion of the file path passed by the COBOL application. |

#### Examples

The following example replaces only the file name portion of the passed file path:

```ini
<map>
   <name>CUSTMAST2010</name>
</map>
```

The following example replaces both the name and directory portion of the passed file path:

```ini
<map>
   <name>CUSTMAST2010</name>
   <dir>/Data2010</dir>
</map>
```
