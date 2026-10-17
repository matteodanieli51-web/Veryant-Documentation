### <rpc\>

The rpc option indicates whether to use standard c-tree client/server calls or c-tree RPC calls. Using RPC calls results in better performance due to an optimized communication protocol that reduces network traffic. This feature is turned on by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Use RPC calls to communicate with c-tree. | y, true, on, 1 |
| no | Use standard c-tree client/server calls to communicate with c-tree. This option is recommended only for diagnostics purposes. | n, false, off, 0 |

#### Attributes

| Attribute | Description | Default value |
| --- | --- | --- |
| crc | Indicates whether to enable CRC checks on the RPC data buffers that are sent/received over the network. It is recommended only for diagnostic purposes to detect faulty networks.<br>Values:<br>"yes" : Turns on CRC checks.<br>"no" : Turns off CRC checks. | no |

#### Example

```ini
<rpc crc="no">yes</rpc>
```
