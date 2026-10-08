#### -filecopy

Perform a physical file copy.

Usage

```shell
ctutil -filecopy source_file dest_file [-overwrite]
```

- *source_file* is the name of the c-tree file to copy.
- *dest_file* is the name of the new  file.
- *-overwrite* deletes existing *dest_file* before copying.

The command is not dependent on the configuration file.

##### -filecopy vs -copy

The [-copy](./copy) option creates a copy of a file by building it record-by-record, which creates a new file based on the configuration settings. The [-filecopy](./filecopy) option makes an exact copy of the source file, which can be faster than the [-copy](./copy) option.

The difference between these options is that the [-copy](./copy) option creates the destination file based on the configuration setting while the [-filecopy](./filecopy) option creates an exact copy of the source file.

Both approaches have limitations and advantages:

- [-filecopy](./filecopy) is faster than [-copy](./copy) and provides an exact copy of the file.
- [-copy](./copy) may be helpful when you need to change file characteristics.
