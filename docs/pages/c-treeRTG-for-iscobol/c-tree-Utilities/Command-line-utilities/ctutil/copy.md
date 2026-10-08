#### -copy

Copies a file record-by-record creating a new file based on the configuration settings.

Usage

```shell
ctutil -copy source_file dest_file
```

- *source_file* and *dest_file* are the name of the involved c-tree files. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.

##### -copy vs -filecopy

The [-copy](./copy) option creates a copy of a file by building it record-by-record, which creates a new file based on the configuration settings. The [-filecopy](./filecopy) option makes an exact copy of the source file, which can be faster than the [-copy](./copy) option.

The difference between these options is that the [-copy](./copy) option creates the destination file based on the configuration setting while the [-filecopy](./filecopy) option creates an exact copy of the source file.

Both approaches have limitations and advantages:

- [-filecopy](./filecopy) is faster than [-copy](./copy) and provides an exact copy of the file.
- [-copy](./copy) may be helpful when you need to change file characteristics.
