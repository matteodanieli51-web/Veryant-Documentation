### <encrypt\>

The encrypt option indicates whether to create files with data encryption support enabled. When encryption is enabled, files are encrypted using c-tree ctCAMO encryption algorithm.

#### Attributes

| Attribute | Description | Synonyms |
| --- | --- | --- |
| type | Specifies the encryption algorithm. <br>Possible values are "aes16", "aes24" and "aes32". <br>If this attribute is omitted, ctCAMO is used. | n/a |

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Create file with data encryption support enabled. | y, true, on, 1 |
| no | Create file with data encryption support disabled. This is the default value. | n, false, off, 0 |

#### Example

```ini
<encrypt>yes</encrypt>
```
