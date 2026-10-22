### <sqlize\>

The sqlize option indicates whether to attempt linking the table to c-treeSQL. If this option is set to yes, the necessary operations to make the file accessible from c-treeSQL are performed when the file is open with OUTPUT or EXTEND mode. This option is disabled by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Files opened with OUTPUT or EXTEND mode are linked to c-treeSQL. | y, true, on, 1 |
| no | No attempt to link table is made. This is the default value. | n, false, off, 0 |

#### Attributes

| Attribute | Description | Synonim |
| --- | --- | --- |
| xfd | Path to ISS data definition file. <br><br>If a directory is specified, a file with same name but ".iss" extension is searched. | n/a |
| database | Database name to add the file to.<br>The default value is "ctreeSQL". | db |
| password | c-tree ADMIN password.<br>The default value is "ADMIN". | pw |
| symbolic | Optional table name to use when adding file to a database. | n/a |
| prefix | Optional prefix for table or symbolic name. | n/a |
| owner | Optional user name to assign table ownership. | n/a |
| public | Optionally grant public access permissions. Values:<br>"yes" : Grant public permissions.<br>"no" : Turns off CRC checks. | n/a |
| numformat | Numeric format digit ID. Values:<br>"A" : Set numeric format to ACUCOBOL type.<br>"D" : Set numeric format to Data General type.<br>"I" : Set numeric format to IBM type.<br>"M" : Set numeric format to Micro Focus type.<br>The default value is "A". | n/a |

#### Example

```ini
<sqlize xfd="custmast.iss" symbolic="customers">yes</sqlize>
```
