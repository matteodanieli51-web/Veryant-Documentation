### <runitlockdetect\>

The runitlockdetected option specifies whether to check if a record or file has been locked by a separate OPEN statement issued from within the same run unit. By default it is permitted to lock a record multiple times within the same instance. When this option is turned on, a lock error is returned while reading a record that was locked within the same instance or by opening in exclusive mode a file that was locked within the same instance.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Detect record locks. This is the default value. | y, true, on, 1 |
| no | Do not detect record locks. | n, false, off, 0 |

#### Attributes

| Attribute | Description | Default value |
| --- | --- | --- |
| anyunlock | When set to 'yes', any UNLOCK performed in the run unit on a file will remove the lock on the file even if the record was locked by another OPEN instance. Otherwise, the lock is removed only if the UNLOCK is performed on the same OPEN instance where the READ WITH LOCK was performed. | no |

#### Example

```ini
<runitlockdetect anyunlock="no">no</runitlockdetect>
```
