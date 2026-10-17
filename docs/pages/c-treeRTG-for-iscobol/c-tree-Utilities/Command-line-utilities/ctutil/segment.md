#### -segment

Allows file segmentation.

Usage

```shell
ctutil -segment file max_file_size max_segments
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- *max_file_size* is the maximum file size for a single file segment
- *max_segments* is the maximum number of file segment. Keep this parameter as low as possible to optimize performance.
