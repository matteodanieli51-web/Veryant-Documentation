## Troubleshooting

These are the most common errors you can run into using the isCOBOL Driver for File Server.

| | |
| --- | --- |
| 100 | A duplicate key was detected where duplicates are not allowed. |
| 102 | This indicates that a routine was called with an illegal parameter. For example, specifying a key number that is larger than the number of keys in the file would result in this error. |
| 104 | An attempt was made to open more files than the system allows open at once. |
| 105 | The file content can’t be read. This error is returned when one of these three conditions is true:• the index file is corrupt,• the index file is encrypted,• the physical disk file does not match the type of file being opened.If the index file is corrupt, it should be reconstructed using the appropriate host system utility. The exact nature of this corruption is identified by "f_int_errno." |
| 107 | The requested record is locked by another process or (for some systems) by another file handle used by this process. |
| 111 | The requested record was not found. |
| 112 | The current key of reference was in the "undefined" state when the "i_next" or "i_previous" routines were called. There is no current record from which to read forwards or backwards. |
| 113 | The file is locked against the current open mode. |
| 116 | The system ran out of dynamic memory. |
| 117 | An operation was requested that the current open mode doesn't allow. For example, attempting to add a record to a file that is open for input-only would result in this error. |
| 126 | The requested operation is not supported by this host system. |
| 127 | The disk became full while adding the new record. |
| 128 | The size of the new record doesn't match the type of file being opened. |
| 129 | The system ran out of lock-table entries. |
| 130 | The file is missing. |
| 131 | Invalid permission for the operation. |
| 147 | Mismatch between physical file logical-info and the info included in the EFD dictionary |
| | |
