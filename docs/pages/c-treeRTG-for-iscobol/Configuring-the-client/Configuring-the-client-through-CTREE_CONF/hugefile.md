### <hugefile\>

This configuration keyword allows the huge file mode to be turned off so that non-huge files are created. The default is to use c-tree support for huge files, which accommodate up to 16 exabytes of data when segmented files are used. Non-huge files accommodate up to 2 or 4 gigabytes of data depending on the operating system.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Create huge file (c-tree files larger than four gigabytes). This is the default value. | y, true, on, 1 |
| no | Create non-huge file. | n, false, off, 0 |

#### Example

```ini
<hugefile>yes</hugefile>
```
