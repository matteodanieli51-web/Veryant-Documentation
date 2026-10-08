### <ctfixed\>

The ctfixed option indicates whether to create fixed record length files with c-tree file mode ctFIXED. If this option is set to yes, files with fixed record length are created with c-tree file mode ctFIXED. If this option is set to no, all files are created with c-tree file mode ctVLENGTH. This option is disabled by default.

Setting ctfixed to yes imposes a minimum record length of 9 bytes for huge files or 5 bytes for non-huge files (based on the setting of the [<hugefile\>](./hugefile) configuration option).

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Fixed record length files are created with ctFIXED file mode. | y, true, on, 1 |
| no | All files are created with ctVLENGTH file mode. This is the default value. | n, false, off, 0 |

#### Example

```ini
<ctfixed>yes</ctfixed>
```
