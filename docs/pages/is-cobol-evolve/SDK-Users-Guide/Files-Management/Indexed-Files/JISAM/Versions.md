#### Versions

The JISAM file system included in isCOBOL is version 2.

isCOBOL 2009 and previous versions support an old version of JISAM, version 1. If you need to share data with old versions isCOBOL, you can instruct the program to create JISAM 1 files by setting the following property in the configuration:

```cobol
iscobol.jisam.version=1
```

Be aware that JISAM 1 has more limitations and does not perform as well as JISAM 2, so the above setting should be used only if necessary.

The table below lists the differences between the two versions of JISAM..

|  | JISAM 1 | JISAM 2 |
| --- | --- | --- |
|  | JISAM 1 | JISAM 2 |
| **maximum file size** | 2 GB | 9 EB |
| **maximum record size** | 32 KB | 2 GB |
| **maximum number of keys** | no limit | no limit |
| **maximum key size** | 255 bytes | 255 bytes |
| **max number of segments per key** | 8 | 16 |
| **maximum number of records** | no limit | no limit |
