### <rowid\>

The <rowid\> option enables support for creating a ROWID field/index. ROWID is required for creating Full-Text Indexes, so this option is necessary if Full-Text Search is desired.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Enable support for ROWID field/index. | y, true, on, 1 |
| no | Disable support for ROWID. Default for c-treeRTG COBOL Edition. | n, false, off, 0 |

#### Attributes

| Attribute | Description | Default value |
| --- | --- | --- |
| size | Sets the size of the rowid hidden field in the record header. The default value is 8, accepted values are 8 and 4. | 8 |

#### Example

```ini
<rowid>yes</rowid>
```
