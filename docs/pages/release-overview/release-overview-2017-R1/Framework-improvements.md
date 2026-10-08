## Framework improvements

isCOBOL Evolve 2017 R1 includes a new interface to access C-Tree files and a new utility named IsSort that allow to sort, merge and filter indexed, relative and sequential files.

### C-Tree new interface

A new c-treeRTG interface, CtreeJ, is now qualified to be used in heavy multi-thread environments, improving performance of Client/Server architectures of up to 50% on read statements and up to 20% in update statements when compared to other interfaces for c-treeRTG.

CtreeJ fully supports c-treeRTG bound server architecture.

The new interface can be enabled modifying a setting the isCOBOL configuration file:

```cobol
iscobol.file.index=ctreej
```

When using Bound server, also include:

```cobol
iscobol.ctree.bound_server=true
```

Previous values, “fscsc” for connector and “ctree2” for native library, are still supported for backward compatibility.

### IsSort utility

The new command line utility IsSort and the new C$SORT routine can be used to sort, merge and filter indexed, relative and sequential files.

The utility is available from the command line or through a COBOL CALL statement

Parameters can be used to drive the new feature:

- SORT/MERGE to specify either a sort or a merge option
- FIELDS to specify the field names of the file to be used
- USE/GIVE to allow to specify the input and output files, of the desired process
- INCLUDE/OMIT inclusion or omission of selected records

When using the command below in a terminal window

```cobol
issort take sort.cmd
```

and the file sort.cmd contains:

```cobol
sort fields (1, 6, ch, d)
use idxfile org ix
record f 40
key (1, 6, p, 7, 15, c, 22, 15, ad)
give output.txt org ls
record f 40
include cond = 37,4,ge,902
```

IsSort reads the indexed file called idxfile, with record size of 40 bytes, primary key made by two segments and containing an alternate key which allows duplicates.

Records are sorted in descending order on the field with offset=1 and size=6 (the first primary key segment)

Records in which the field at offset 34 with size 4 bytes don’t contain a number equal of greater than 902 are ignored, and will not be saved in the output file.

Sorted records are saved to a line sequential file named output.txt.

All parameters needed for the sort operations can be specified directly on the command line, as shown below

```cobol
issort sort fields (1, 6, ch, d) use idxfile org ix record f 40key (1, 6, p, 7, 15, , 22, 15, ad) give output.txt org ls record f 40 include cond = 37,4,ge,902
```

Sorting can be invoked programmatically using a call statement:

```cobol
call "c$sort" using "sort fields (1, 6, ch, d) use idxfile org ix record f 40 key (1, 6, p, 7, 15, , 22, 15, ad) give output.txt org ls record f 40 include cond = 37,4,ge,902"
```
