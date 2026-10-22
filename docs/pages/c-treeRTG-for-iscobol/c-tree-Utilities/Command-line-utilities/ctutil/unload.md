#### -unload

Exports data from c-tree file to raw sequential file.

Usage

```shell
ctutil -unload file_name seq_file [-b|t|p] [-v[2|4|8][n|x]][-k=index] [-f]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- *seqfile* is the name of the output file. Relative paths are resolved according to the current working directory.
- -b - Indicates a binary sequential format is used.
- -t - Indicates a line sequential format (records separated by new-line character).
- -p - Indicates an ASCII file to be used by the BTRV BUTIL -load command.
- -v - Indicates variable-length format (record data is preceded by record length) and is optionally followed by a 2 or 4 or 8 that indicates the size of the record length field that precedes the record data and by a n or x to indicate if the record length is stored in native (n) or big-endian (x) format.
- -k - Reads and writes records in specified index order (-k=1 for the primary key) .
- -f - Open the file even if it’s corrupted.
