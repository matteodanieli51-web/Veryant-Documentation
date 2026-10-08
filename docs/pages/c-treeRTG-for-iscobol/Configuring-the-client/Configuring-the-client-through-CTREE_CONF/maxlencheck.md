### <maxlencheck\>

The maxlencheck option specifies whether to check that the record being read from disk fits entirely into the record buffer for which length is equal to the maxlen file definition. If this option is set to yes, an error is returned if the record read from disk is larger than maxlen bytes. If this option is set to no, the record is truncated at maxlen bytes before it is returned to COBOL. This option is enabled by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Return an error if record is larger than maxlen bytes. This is the default value. | y, true, on, 1 |
| no | Return record truncated at maxlen bytes. | n, false, off, 0 |

#### Example

```ini
<maxlencheck>no</maxlencheck>
```
