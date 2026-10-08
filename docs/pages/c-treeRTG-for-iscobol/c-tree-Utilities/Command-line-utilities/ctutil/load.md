#### -load

Imports data from raw sequential file to c-tree file.

Usage

```shell
ctutil -load file_name seq_file [-b|t|p|r2] [-v[2|4|8][n|x]] [-n] [-r|-s] [-rs=recsiz]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- *seqfile* is the name of the input file. Relative paths are resolved according to the current working directory.
- -b - Indicates a binary sequential format is used.
- -t - Indicates a line sequential format (records separated by new-line character).
- -p - Indicates an ASCII file created by the BTRV BUTIL -save command.
- -r2 - Indicates an ASCII file created by the RM RECOVER2.
- -v - Indicates variable-length format (record data is preceded by record length) and is optionally followed by a 2 or 4 or 8 that indicates the size of the record length field that precedes the record data and by a n or x to indicate if the record length is represented in native (n) or big-endian (x) format.
- -n - Empty the c-tree file before loading records.
- -r - Replace any existing record that returns 'duplicate key' error.
- -s - Skip any existing record that returns 'duplicate key' error.
- -rs=recsiz - Record size of the sequential file (required only if the record size of the destination file differs from that of the sequential file).

The command assumes that the record size of the sequential file is the same as the c-tree file. If they differ, the -rs option is used to specify the record size of the sequential file.
