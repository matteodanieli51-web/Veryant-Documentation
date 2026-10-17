### <skiplock\>

The skiplock option advances the current record pointer when a locked record is encountered. This feature is off by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Advance the current record pointer when a locked record is encountered. | y, true, on, 1 |
| no | Do not advance the current record pointer. This is the default value. | n, false, off, 0 |

#### Example

```ini
<skiplock>yes</skiplock>
```
