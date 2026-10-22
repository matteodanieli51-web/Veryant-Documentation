### <detectlock\>

The detectlock option indicates whether to return an error trying to retrieve a record locked by another user if the READ operation does not have an explicit WITH LOCK option. This feature is turned off by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | the record locked error is returned | y, true, on, 1 |
| no | the record locked error is not returned | n, false, off, 0 |

#### Example

```ini
<detectlock>yes</detectlock>
```
