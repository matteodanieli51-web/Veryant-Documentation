#### -upgrade

This option upgrades the file to the current configured format. With this switch it is possible to take an existing data file and upgrade it to the latest format.

Usage

```shell
ctutil -upgrade  source_file [dest_file]
```

- *source_file* - Source file name without extension.
- *dest_file* - Destination file name without extension.

This capability gives the customer a tool to upgrade an existing file to match the current settings in ctree.conf and/or the current c-treeRTG file format. This switch makes it possible to upgrade an existing data file to the latest format. For example, it would be used if a revision changed the file's physical layout (e.g., altering the header).
