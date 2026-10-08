# Transitioning from other COBOLs

The isCOBOL Compiler and Framework have been proven to compile and run source code successfully from the following COBOLs that were not discussed in the previous transitioning guides:

| COBOL | Advice |
| --- | --- |
| Fujitsu NetCOBOL |  |
| Hitachi's COBOL |  |
| HP COBOL |  |
| LPI-COBOL | This COBOL is very similar to RM/COBOL, so you should consider following the advice provided in the [Transitioning from RM/COBOL](./Transitioning-from-RM-COBOL/transitioning) guide. |
| OpenCOBOL/GnuCOBOL |  |
| VMS COBOL |  |
| VSI/Compaq COBOL |  |

## Data Access

- Fixed length sequential and relative files coming from the above COBOLs are fully supported by isCOBOL.
- Indexed files from the above COBOLs must be converted either to c-tree or JIsam with the following steps:
     1. unload file data to a raw binary file with the tools provided by the other COBOL vendor
     2. create an empty c-tree or JIsam indexed file by running a program that opens the file for output with isCOBOL
     3. load data from the raw binary file into the empty indexed file with [ctutil](\).

## Numeric data representation

Every COBOL implementor uses a different convention for the representation of signed numeric data items (without the SIGN IS SEPARATE clause), COMP-2 and COMP-3 data items.

isCOBOL provides various data compatibility compiler options whose effect is described in the Language Reference Book at [USAGE clause](\).

Look for the option that produces the same representation of the COBOL you’re transitioning from. If you can’t find any suitable option, contact the Veryant support team.
