### <ignorelock\>

The ignorelock option specifies whether READ operations should ignore locks. This option is turned off by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Turns off record lock detection. | y, true, on, 1 |
| no | Turns on record lock detection. This is the default value. | n, false, off, 0 |

#### Example

```ini
<ignorelock>yes</ignorelock>
```
