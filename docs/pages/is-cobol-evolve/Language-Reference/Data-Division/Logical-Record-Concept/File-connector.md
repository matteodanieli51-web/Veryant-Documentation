### File connector

A file connector is referenced by a file-name and it is a storage area that is not visible to the user that contains information used by the run unit to determine the status of input-output operations and of the connection to the physical file.

A file connector has several attributes that are specified by phrases and clauses in the file description entry, and the file control entry for the associated file-name and by the execution of I-O statements. These attributes are: organization (sequential, indexed, or relative); access mode (sequential, dynamic, or random); lock mode (automatic, manual, or none); locking mode (single record locking, multiple record locking, or none); in an open mode (input, output, i-o, extend); sharing mode (sharing with no other, sharing with read only, sharing with all other, or no sharing); and whether or not it is a report file connector. It also contains information about the file position indicator, the key of reference, the I-O status value, the current volume pointer, and file and record locks.

A file connector is either internal or external. For internal file connectors, one file connector is associated with each file description entry. For external file connectors, there is only one file connector that is associated with the run unit no matter how many file description entries describe the same file-name.
