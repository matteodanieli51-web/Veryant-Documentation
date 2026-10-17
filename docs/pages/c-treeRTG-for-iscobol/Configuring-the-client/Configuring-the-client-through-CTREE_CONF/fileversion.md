### <fileversion\>

The fileversion option can be set to a major version number of c-treeRTG (i.e. 2). The default value of fileversion is the major version number of the current c-treeRTG version (e.g. 3). If fileversion is specified in the configuration file, the default values of all the other configuration options are reset to the default value of the c-treeRTG version specified.

For example, if *<fileversion\>2</fileversion\>* is specified in a configuration file while running c-treeRTG version 3, the default value for the <rowid size\> attribute is changed from 8 to 4. Also the default value of the <keycompress vlennod\> attribute is changed from 1 to 0 and the implicit value of <keycompress/\> is changed from <rle/\> to <leading/\><padding/\>.

**Note** - the compatibility with previous versions might be affected also by the [PAGE_SIZE](../../Configuring-the-c-tree-Server#page_size) setting in the server configuration. Be sure to use the same page size between the current c-tree version and the previous c-tree version you want to be compatible with.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| 1 | Create files compatible with c-tree v1 (all versions before v11) | n/a |
| 2 | Create files compatible with c-tree v2 (also known as v11) | n/a |
| 3 | Create files compatible with c-tree v3 (default) | n/a |

#### Example

```ini
<fileversion>2</fileversion>
```
