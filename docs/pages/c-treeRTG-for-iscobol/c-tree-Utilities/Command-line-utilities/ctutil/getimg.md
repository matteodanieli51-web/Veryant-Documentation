#### -getimg

Displays the physical file information.

Usage

```shell
ctutil -getimg file
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- Physical information has the following format:

  ```shell
  MaxRecSize, MinRecSize, NumKeys, [ NumSegs, Dups [ SegSize, SegOffset ] ... ] ...
  ```

  Where:

  - *MaxRecSize* is a five-digit number representing the maximum record length.
  - *MinRecSize* is a five-digit number representing the minimum record length.
  - *NumKeys* is a three-digit number representing the number of keys in the file.
  - *NumSegs* is a two-digit number representing the number of segments in a key.
  - *Dups* is a one-digit number representing the duplicate flag of a key. 0 means that duplicates are not allowed, 1 means that duplicates are allowed.
  - *SegSize* is a three-digit number representing the size of a segment in a key.
  - *SegOffset* is a five-digit number representing the offset of a segment in a key.

    *SegSize* and *SegOffset* are repeated for each segment of the key

    *NumSegs*, *Dups* and segments description are repeated for each key

Note - spaces in are shown to improve readability, they are not part of the format. Fields in the first pair of brackets are repeated for each key, fields in the second pair of brackets are repeated for each segment of the key.

Example - the following string applies to a file with a fixed record length of 108 bytes, a primary key composed of one segment of three bytes and an alternate key with duplicates composed of two segments, the first of two bytes in size and the second of three bytes in size:

```shell
00108,00108,002,01,0,003,00000,02,1,002,00003,003,00005
```
