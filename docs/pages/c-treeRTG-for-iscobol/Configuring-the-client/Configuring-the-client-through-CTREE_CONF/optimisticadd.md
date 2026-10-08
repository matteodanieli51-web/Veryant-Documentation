### <optimisticadd\>

The optimisticadd option specifies the strategy used by c-tree to add new records. This feature is turned on by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | c-tree uses an optimistic strategy which provides optimal performance when adding non-existing records. This is the default value. | y, true, on, 1 |
| no | c-tree uses a pessimistic strategy that is attempts to add unique keys before adding the data record. | n, false, off, 0 |

#### Example

```ini
<optimisticadd>no</optimisticadd>
```
