### <datacompress\>

The datacompress option indicates whether to create files with data compression enabled. When data compression is enabled, data records are compressed using the compression algorithm specified by the type attribute. Data compression reduces disk space utilization but it may also impact performance. This feature is turned off by default.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Files are created with data compression enabled. | y, true, on, 1 |
| no | Files are created without data compression. This is the default value. | n, false, off, 0 |

#### Attributes

| Attribute | Description | Synonyms |
| --- | --- | --- |
| type | Selects the type of compression.<br>Values:<br>"rle" : Use a simple RLE compression algorithm.<br>"zlib" : Use the zlib compression algorithm.<br>The default value is "rle". | n/a |
| strategy | Selects the compression strategy.<br>Depending on the compression type the possible values for strategy are:<br>Valid values for type "rle":<br>"0" : Use the default simple RLE compression strategy. This is the default value for type="*rle*".<br>Valid values for type "zlib":<br>"0" : Use the default zlib compression strategy.<br>"1" : Use the zlib filtered compression strategy.<br>"2" : Use zlib Huffman only compression strategy.<br>"3" : Use zlib RLE compression strategy. This is the default value for type="*zlib*".<br>"4" : Use zlib fixed compression strategy. | n/a |
| level | Selects the compression level.<br>Valid values are 0 and the range between 1 and 9:<br>"0" : Use the compression algorithm default level.<br>"1" : Provides best speed but uses more disk space.<br>"9" : Provides best compression at the expense of performance.<br>The default value is "0". | n/a |

#### Example

```ini
<datacompress type="zlib" strategy="3" level="9">yes</datacompress>
```
