### <retrylock\>

The retrylock option indicates whether a READ operation that fails because a record is locked should wait until the lock is released rather than returning an immediate lock error. When this option is enabled, records are locked with the c-tree lock mode of ctENABLE_BLK instead of ctENABLE.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Wait until the lock is released. | y, true, on, 1 |
| no | Do not wait and return immediately with an error. This is the default value. | n, false, off, 0 |

**Note** - When this option is explicitly set in the configuration file, it overrules the WAIT LOCK clause in READ operations. READ WAIT LOCK statements will return a "record locked" error if retrylock is set to n, false, off or 0 in the configuration file.

#### Example

```ini
<retrylock>yes</retrylock>
```
