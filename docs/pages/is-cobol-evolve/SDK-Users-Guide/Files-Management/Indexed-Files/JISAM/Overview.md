### JISAM

#### Overview

JISAM is a 100% Java-based indexed sequential access (ISAM) file system that runs on a wide range of platforms, from mainframes to handheld mobile devices. Now your business can deliver fast and efficient access to COBOL applications with ISAM data files anywhere Java technology runs, without the overhead of a relational database or investing in complex program change.

##### Key details

- Supplied with isCOBOL
- Written entirely in Java, so it runs anywhere, even on a mobile phone
- [JUTIL](../../../Utilities/JUTIL/JUTIL) utility provided for basic file management
- [ISMIGRATE (Index File Migration)](../../../Utilities/ISMIGRATE) utility provided for one-step migration of data files from other data sources

##### Technical characteristics

The JISAM file system has the following characteristics:

- Maximum file size: 9 EB
- Maximum number of keys: no limit
- Maximum number of records: no limit
- Maximum key length: 255 bytes
- Maximum number of segments per key: 16
- Maximum record length: 2 GB

Currently JISAM has the following limitations:

- transactions are not supported
- native compression is not supported
- variable length records are not supported, the maximum record size is always used
