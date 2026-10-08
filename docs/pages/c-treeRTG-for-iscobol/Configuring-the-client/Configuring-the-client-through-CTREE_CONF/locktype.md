### <locktype\>

The locktype option allows to configure if the record data is returned to the program even if the record is locked.

Note - this setting is ignored by the c-tree File Connector (fscsc).

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| 0 | Locked records are returned. | n/a |
| 1 | Locked records are not returned. This is the default. | n/a |

#### Example

```ini
<locktype>0</locktype>
```
