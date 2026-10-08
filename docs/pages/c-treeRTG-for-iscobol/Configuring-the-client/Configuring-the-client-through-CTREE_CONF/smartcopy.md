### <smartcopy\>

The smartcopy option enables the use of batched read/write techniques to improve performance of file copy operations. If this option is set to yes, the file copy reads and writes records in blocks in order to reduce the number of read and write operations. If this option is set to no, the records are copied one by one. This option is enabled by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Records are copied in blocks. This is the default value. | y, true, on, 1 |
| no | Records are copied one by one. | n, false, off, 0 |

#### Example

```ini
<smartcopy>yes</smartcopy>
```
