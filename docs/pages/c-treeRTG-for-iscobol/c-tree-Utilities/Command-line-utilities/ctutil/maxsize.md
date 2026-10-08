#### -maxsize

Sets the maximum file size limit of an existing file.

Usage

```shell
ctutil -maxsize  file max_file_size
```

- *file* - Name of a file without extension.
- *max_file_size* - Desired maximum file size limit in MB.

**Note -** If you attempt to set a maximum file size limit that is less than the size of your file, it will fail with the following error message in the RTG log:

```shell
ERROR 51:667:0 file size exceeds specified limit.
```
