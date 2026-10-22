## Relative Files

Relative files are generally used to store data where low overhead is required. Records are available by record number that represents the record location relative to where the file begins. For example, the first record in the file has a relative record number of 1, the tenth record has a relative record number of 10, and so forth. The records can only have fixed length.

Note - If a relative file is opened by a process even without using any kind of lock, no other process can lock it in exclusive mode, unless the Java property *sun.nio.ch.disableSystemWideOverlappingFileLockCheck* is set to true.
