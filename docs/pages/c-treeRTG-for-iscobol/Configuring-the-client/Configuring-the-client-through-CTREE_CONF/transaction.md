### <transaction\>

The transaction option indicates whether to create files with transaction support enabled. This feature is turned on by default.

Please note that it is possible to enable/disable transaction support and transaction logging on existing files using the [-tron](../../c-tree-Utilities/Command-line-utilities/ctutil/tron) option of the ctutil utility.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Turns on transaction support. This is the default value. | y, true, on, 1 |
| no | Turns off transaction support. | n, false, off, 0 |

#### Attributes

| Attribute | Description | Defalt value |
| --- | --- | --- |
| logging <span id="logging"></span> | Enable/disable transaction logging. Values:<br>"yes" : Turns on transaction logging. It is indicated when data safety is more important than performance. Files are created with c-tree file mode ctTRNLOG and are automatically recovered after a crash.<br>"no" : Turns off transaction logging. It is indicated when performance is more important than data safety. Files are created with c-tree file mode ctPREIMG. This is the default value. | no |
| fileoperations (or fileops) | Determines whether file operations (such as file create, delete, and rename) performed within an active transaction are affected by the transaction ending operation (commit or abort): <br><br>"yes" : File operations are transaction dependent. <br><br>"no" : File operations performed within an active transaction are not affected by the transaction ending operation (commit or abort). | no |
| deferautocommit <span id="deferautocommit"></span> | Turn on optimization that improves performance for functions that use autocommit. Similar to the c-tree [DELAYED_DURABILITY](../../Configuring-the-c-tree-Server#delayed_durability) keyword, guarantees atomicity and consistency of transaction but not durability because the last transaction could be lost. | no |

#### Example

```ini
<transaction logging="no">yes</transaction>
```
