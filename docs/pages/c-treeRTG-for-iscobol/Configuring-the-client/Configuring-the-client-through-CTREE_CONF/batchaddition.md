### <batchaddition\>

The batchaddition option enables batch record writes to improve performance of consecutive record additions. This is achieved by caching the records being added in the client side before they are sent in one batch operation to the server to be written to disk. The records are sent to the server after a given number of records (specified by the records attribute) have been added or when the file is closed. Since the records are actually written when they are sent to the server, a duplicate key error is returned by the operation that triggered the batch write operation. For this reason, batchaddition is recommended only for specific operations such as data import where duplicate errors are not expected.

Writing records in batches improves performance of large record additions in environments where client and server reside on different systems connected with a network. In such environments any request from the client to the server is sent over the network which is generally a time expensive operation.

The batchaddition option is available only for files opened with OUTPUT or EXTEND mode. The number of records to cache is defined by the records attribute. The batchaddition option is disabled by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Enable the record batch addition. | y, true, on, 1 |
| no | Disable record batch addition. This is the default value. | n, false, off, 0 |

Attributes

| Attribute | Description | Synonyms |
| --- | --- | --- |
| records | Indicates the number of records to cache. This value is set to 100 by default. | recs |

#### Example

```ini
<batchaddition records="50">yes</batchaddition>
```
