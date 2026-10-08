## Sequential Files

isCOBOL treats sequential files in one of two ways:

**Binary sequential:** designed to contain non-ASCII information and are easy to move to foreign systems. A binary sequential file consists of either fixed-length or variable-length records grouped together into blocks.

**Line sequential:** designed to be printed and to be used with other programs, such as editors. These files consist of lines delimited by carriage-control characters.

Note - If a sequential file is opened by a process even without using any kind of lock, no other process can lock it in exclusive mode, unless the Java property *sun.nio.ch.disableSystemWideOverlappingFileLockCheck* is set to true.
