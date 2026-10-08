### <keycompress\>

The keycompress option indicates whether to create files with key compression enabled. This feature is turned off by default. It may impact performance but reduces disk space usage.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Turns on key compression combining both leading character and padding compression. This provides the maximum key compression. | y, true, on, 1 |
| no | Turns off key compression. This is the default value. | n, false, off, 0 |

Additionally the keycompress option may accept the following sub-options to specify which compression type to use:

| Option | Description |
| --- | --- |
| <leading\> | Indicates to compress the leading characters of key values. |
| <padding\> | Indicates to compress the padding characters of key values. |
| <rle\> | Indicates to use RLE compression algorithm. |

#### Attributes

| Attribute | Description | Default value |
| --- | --- | --- |
| vlennod | Use the new RLE compression or the legacy LEADING compression.<br>Values:<br>"yes" : Enable RLE, disable LEADING.<br>"no" : Disable RLE, enable LEADING. | yes |

#### Examples

The following example turns on default key compression that implicitly uses leading and padding compression:

```ini
<keycompress>yes</keycompress>
```

The following example turns on padding key compression only:

```ini
<keycompress>
  <padding>yes</padding>
<keycompress>
```
