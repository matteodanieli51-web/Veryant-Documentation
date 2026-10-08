#### -augment

Used to increase the max record size of existing files

Usage

```shell
ctutil -augment  path size
```

- *path* - File/directory path without extension.
- *size* - New maximum record length in bytes.

**Note -** The command fails if the new maximum record length is not equal to or greater than the current minimum record length. If the new specified size is equal to the current minimum record length, the file is changed from variable length to fixed length. Likewise, if the file is fixed length (minlen = maxlen) and the new specified maximum record length is greater than the current maximum record length, the file is transitioned from fixed length to variable length.
