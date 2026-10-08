### ctfileid

When a file open is attempted, c-tree checks to see if either a file with the same name has already been opened, or if a file with the same unique ID has already been opened. In either case, the match means that a physical file open is not required. Instead the open count for the file is incremented. Checking the unique file ID permits different applications and/or client nodes to refer to the same file with different names. For example, consider the situation where independent clients operate from different drive or path mappings.

If two different files have the same file ID, (a 12-byte value comprised of a Server ID, a time stamp, and a transaction log sequence number), problems will arise as the second file would not actually be opened. The ID is constructed such that no two files can have the same ID unless someone copies one file on top of another.

Copying a file to a new name is typically the only way the file ID’s can match. The ctfileid utility is available to update the file ID number should this become absolutely necessary. This utility should only to be run on a file when the server is stopped.

The ctfileid utility provides a convenient and safe way to update the fileid parameter of the file header.

Usage:

```shell
ctfileid  file [-i] [-o] [-q] [-n size] [-s server] [-u uid] [-p pwd]
```

Where

- *file* is the c-tree dat file to be updated
- *-i* also updates indices related to the data file
- *-o* force open of corrupted file
- *-q* avoid printing output (quiet mode)
- *size* is the node size
- *server* is the c-tree server name, e.g. ‘FAIRCOMS’
- *uid* is the user id, e.g. ‘ADMIN’
- *pwd* is the user password, e.g. ‘ADMIN’
