## isCOBOL Compiler Enhancements

isCOBOL Evolve 2016 R2 includes several changes to the isCOBOL Compiler that improve productivity and simplify migration from other COBOLs.

### $SET to set compiler properties on each program

$SET directive can now be used to set compiler properties for each program, to allow customization of compiler properties inside the source code, without the need for additional configuration files, such as:

```cobol
$set "easylinkage" "1"
$set "easylinkage.package" "com.veryant"
PROGRAM-ID. GETCUSTID.
```

### Enhanced compatibility with other COBOLs

New library routines have been implemented: CBL_EQ and CBL_IMP for logical operator, CBL_SPLIT_FILENAME to split a filename. New intrinsic functions have been added: E, EXP, EXP10, FRACTION-PART, PI, SIGN to simplify migration from Micro Focus COBOL.

Vision version 6 indexed files are now supported in the com.iscobol.io.ScanVision file handler – used in ISMIGRATE - to allow data migration from ACUCOBOL-GT Extend 10.

A new configuration property, iscobol.gui.screen_col_zero=1, has been added to emulate the RM/COBOL behavior of the DISPLAY statement with the COLUMN 0 phrase.

ESQL TRUNCATE statement is now supported to simplify migration from Pro\*COBOL to isCOBOL with JDBC database access.
