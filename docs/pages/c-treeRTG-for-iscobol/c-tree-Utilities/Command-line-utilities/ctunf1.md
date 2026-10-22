### ctunf1

ctunf1 converts c-tree data files changing their numeric alignment. This utility is useful if you need to move your data files  to an operating system that has a different numeric alignment.

Example:

c-tree files have been created on Microsoft Windows that has little endian alignment and must be moved to an AIX machine, that has big endian alignment. Before moving the files, ctunf1 must be run on the Windows machine in order to change their numeric alignment.

Usage:

```shell
ctunf1 <file name> <new alignment> <new flavor> [<confirm>] [<binflag>] [<files>]

where new alignment = 1 (byte), 2 (word), 4 (double word), or 8 (quad word).
         new flavor = L (least significant byte first; e.g., 8086 family), or
                    = M (most significant byte first; e.g., 68000 family).
          <confirm> = Y (convert file without prompting to continue)
          <binflag> = optional c-treeDB binary field attribute
                    = B1 (binary field data does not contain length count)
                    = B2 (binary field data contains length count)
              files = optional number of logical files to accommodate
                      (default = 32)

        IT IS ASSUMED THAT NO DATA RECORDS WILL CHANGE IN LENGTH. IF A
        CHANGE IN ALIGNMENT CAUSES A RECORD LENGTH CHANGE, CTUNF1 WILL
        AUTOMATICALLY TERMINATE.

EXAMPLE:

        ctunf1 mydatafile.dat 8 M Y B2 200
```
