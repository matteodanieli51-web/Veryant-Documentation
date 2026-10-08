### <keycheck\>

The keycheck option specifies whether to check that all the keys belonging to an indexed file are defined in the COBOL program. If this option is set to yes, the keys must match the key definitions otherwise an error is returned. If this option is set to no, files that contain more keys than described in the COBOL program are allowed. Files that contain fewer keys than the key definitions are never allowed regardless of the keycheck setting. This feature is enabled by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | All key definitions must match otherwise an error is returned during OPEN operations. This is the default value. | y, true, on, 1 |
| no | Open the file even if it contains more indexes than the key definitions. | n, false, off, 0 |

#### Example

```ini
<keycheck>no</keycheck>
```
