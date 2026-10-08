### <prefetch\>

The prefetch option enables batch record retrieval to improve performance of consecutive sequential reads. This is achieved by retrieving a given number of records (specified by the records attribute) from the server to the client side at the second consecutive sequential read operation. The next sequential read operations do not need to contact the server to retrieve the records as the records are now cached on the client side. Once all the records in the client cache are processed, the next block of records is requested to the server. By default, the records cached on the client side cannot be updated by other users (the allowwriters attribute overrides this default). This avoids situations in which the cached records do not match the records on the server.

Prefetching records improves performance of sequential reads in environments where the client and server reside on different systems connected with a network. In such environments any request from the client to the server is sent over the network which is generally a time-expensive operation.

The number of records to prefetch is defined by the records attribute.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Enable record prefetch. | y, true, on, 1 |
| no | Disable record prefetch. This is the default value. | n, false, off, 0 |

#### Attributes

| Attribute | Description | Synonyms |
| --- | --- | --- |
| records | Indicates the number of records to prefetch. This value is set to 10 by default. | recs |
| allowwriters | When a set of records is prefetched, the prefetched records are locked to prevent other users from updating them. When this attribute is enabled, the read lock is not used so that other users can alter the prefetched records. <br><br>This attribute is disabled by default (prefetch allowwriters="no"). <br><br>**Note** - It is the programmer's responsibility to ensure that the application does not have issues with prefetched records that have been modified. Enable allowwrites only when data is not critical and/or seldom changes. | writers |
| ttl | Indicates the number of seconds prefetched records are kept in memory. | n/a |

#### Examples

To enable prefetch and set the number of prefetched records to 50:

```cobol
<prefetch records="50">yes</prefetch>
```

To enable prefetch and allow prefetched records to be modified by other users:

```cobol
<prefetch allowwriters="yes">yes</prefetch>
```
