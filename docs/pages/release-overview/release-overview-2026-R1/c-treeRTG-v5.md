## c-treeRTG v5

The c-treeRTG product has been updated to version 5. This new version contains improvements and optimizations in several areas, such as SQL access, GUI tools, and web-based tools. It also features updated python and Direct SQL API for C/C++ drivers and libraries.

Useful new features for isCOBOL users include the ability to increase the record length of an indexed file and add new keys without needing to migrate existing records.

These operations can be executed using the ctutil command line utility or with a new isCOBOL configuration setting that is used when opening files using ctreej.

### New ctutil options

- *-alter* to change the record schema of an existing file using .iss file definitions
- *-makeidx* to add new indices to an existing file using .iss file definitions
- *-augment* to increase the record length

The first 2 options require the .iss file created by the isCOBOL compiler with the –efc compiler option and can be used on indexed files that are already sql-ized, making the data accessible using SQL.

The augment option can be used on all C-Tree indexed files, even if they are accessed using COBOL’s legacy ISAM access (OPEN, READ, WRITE, …).

For example, if an existing C-Tree tree file has a fixed record length of 1600 bytes, running the following command:

```cobol
ctutil –augment customers 2048
```

The output will be:

```cobol
ctutil
Version 5.0.3.173-250510 - isCOBOL Edition
Record length           :         1600 bytes
 Variable               :          yes
 Max length             :         2048 bytes
 
Operation completed successfully.
```

The indexed file named customers now has a variable record length with minimum size 1600 bytes and maximum size 2048.

### New configuration for ctreej

The new configuration iscobol.ctree.auto_adjust=true is supported by the ctreej interface and forces the record size defined by the program before the file is opened, ensuring that a record size mismatch can never occur. All programs that use the file need to be recompiled using the updated FD definition. Also new keys are automatically added to match the file description used to open the file.

Details on the changes are traced in the runtime log, if enabled. The property affects only the OPEN I-O statements.

With this new configuration, there is no longer a need to write dedicated programs to migrate data from the old file definition to the new one. The time required to run such migration programs is also eliminated, as the file is automatically adjusted at runtime when the OPEN I‑O statement is executed.

For example, if an existing indexed file has this COBOL definition:

```cobol
         select cust assign to "customers"
                 organization is indexed access is dynamic
                 record key is cust-key
                 alternate record key is cust-name.
          ...
          fd  cust.
          01  rec-cust.
              03 cust-key      pic 9(8).
              03 cust-name     pic x(100).
              03 cust-date     pic 9(8).
              03 cust-address  pic x(200).
              03 cust-mail     pic x(100).
              03 cust-contact  pic x(160).
              03 cust-notes    pic x(1024).
```

the ctree file has a fixed record length of 1600 bytes and two keys.

If additional fields and keys are required, the COBOL definitions can be modified, for example:

```cobol
          select cust assign to "customers"
                 organization is indexed access is dynamic
                 record key is cust-key
                 alternate record key is cust-name
                 alternate record key is cust-address with duplicates.
          ...
 
          fd  cust RECORD VARYING IN SIZE FROM 1600 TO 2048.
          01  rec-cust.
              ...
              03 cust-notes    pic x(1024). |this was the previous last field
              03 cust-new-f1   pic x(200).
              03 cust-new-f2   pic x(248).
```

As a result two new fields are appended to the record, increasing the record length by 448 bytes, and a new key on the cust-address field is added to the existing keys.

If the program with the new definition is compiled and executed without the new configuration, the OPEN statement fails, returning the expected File status code 39,02 since the record length mismatch. If the program is executed using the following configuration settings:

```cobol
iscobol.file.index=ctreej
iscobol.ctree.auto_adjust=true
```

the OPEN I-O statement automatically adjusts the file definitions, and the program can read existing records and write new records with the new additional fields.

Running the “ctutil –info customers” command from the command line will show the new record structure, as shown below.

```cobol
ctutil
Version 5.0.3.173-250510 - isCOBOL Edition
 
File name               :    customers
...
Record length           :         1600 bytes
 Variable               :          yes
 Max length             :         2048 bytes
...
Number of indices       :            3
 Key# Size Dups Null Mod Compress Segments
   1    8   no   no  yes    no       1
   2  100   no   no  yes    no       1
   3  200  yes   no  yes    no       1
Alt. Collating Sequence :           no
 
Operation completed successfully.
```
