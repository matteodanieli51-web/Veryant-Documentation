### <memoryfile\>

The memoryfile option indicates whether to create files in memory rather than on disk. This feature is indicated for temporary files. This feature is turned off by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Create file as memory file. | y, true, on, 1 |
| no | Create file as disk file. This is the default value. | n, false, off, 0 |

#### Attributes

| Attribute | Description | Synonyms |
| --- | --- | --- |
| persist | By default memory files are kept in memory until the c-tree Server is shut down. By disabling this attribute (persist="no") memory files created by this client session will be removed when the session terminates. | n/a |

#### Example

```ini
<memoryfile>yes</memoryfile>
```
