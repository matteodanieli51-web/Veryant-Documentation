### <automkdir\>

The automkdir option indicates whether to automatically create missing directories when creating new files. If this option is set to yes, any missing directory of the file path is automatically created. If this option is set to no, an error is returned if the file path does not exist. This option is disabled by default.

Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Missing directories are automatically created. | y, true, on, 1 |
| no | An error is returned if path does not exist. This is the default value. | n, false, off, 0 |

Example

```ini
<automkdir>yes</automkdir>
```
