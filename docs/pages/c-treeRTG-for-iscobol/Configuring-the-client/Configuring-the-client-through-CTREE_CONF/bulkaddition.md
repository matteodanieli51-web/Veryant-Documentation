### <bulkaddition\>

The bulkaddition option enables deferred key writes to improve performance of consecutive record additions. This is achieved by writing only the data record and postponing the key addition until the file is closed. When the file is closed, all pending keys are written in one single operation by an index rebuild routine. This technique of adding records has two benefits:

1. The index rebuild operation is faster than the sum of each key addition operation.
2. The index rebuild operation creates an index that is efficiently organized resulting in faster key searches.

The bulkaddition option is available only for files opened with OUTPUT or EXTEND mode. The bulkaddition option is disabled by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Enable the bulkaddition technique. | y, true, on, 1 |
| no | Disable the bulkaddition technique. This is the default value. | n, false, off, 0 |

#### Example

```ini
<bulkaddition>yes</bulkaddition>
```
