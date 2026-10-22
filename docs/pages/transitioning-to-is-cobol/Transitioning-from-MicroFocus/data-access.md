## Data access

- Fixed-length sequential and relative files created by Micro Focus programs are directly usable by isCOBOL programs.
- To manage variable-length sequential files, add the following entry to the configuration:

```cobol
iscobol.file.sequential=mfsequential
```

- Unless you used the N runtime switch in Micro Focus, add the following entry to the configuration:

```cobol
iscobol.file.linesequential=lseqmf_n
```

This file handler manages line sequential files that might contain 0x0A in the record due to COMP fields by not considering these 0x0A characters as the end of the record.

- Variable-length relative files must be converted to fixed-length relative files as isCOBOL doesn’t support variable-length relative files. This kind of conversion can be done through a Micro Focus program that reads from the variable-length file and writes to the fixed-length file using the maximum record size from the input file as the record size of the output file.
- Indexed MF files are not handled by isCOBOL. They can be easily converted to JIsam or c-tree by [ISMIGRATE (Index File Migration)](../../is-cobol-evolve/SDK-Users-Guide/Utilities/ISMIGRATE) utility. Choose "com.iscobol.io.ScanMF" as input file handler to let ISMIGRATE read Micro Focus files without the need of external components.
- By default, isCOBOL returns ANSI 2002 file status codes. In order to have the same Micro Focus file status code, add the following setting to the configuration:

```cobol
iscobol.file.status=com.iscobol.io.FileStatusMF
```

- The file status "30" is returned when you you try to create a file where there are no write permissions. Micro Focus returns "37" instead.
- If the Micro Focus application worked on databases using the Database Connector feature, consider that the same feature can be obtained with isCOBOL by taking advantage of isCOBOL Database Bridge. If you choose the [EDBI Generation with EDBIIS (two steps)](../../is-cobol-db-bridge/Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-with-EDBIIS), then the [-ca](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#ca) option should be used when launching the EDBI routine generator (edbiis). If you choose [EDBI Generation at compile time (one step)](../../is-cobol-db-bridge/Working-with-DatabaseBridge/Generating-EDBI-users-routines/EDBI-Generation-at-compile-time), then you should gather all your FDs in a dummy program and compile only that program with [-ca](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#ca) Compiler option, as compiling all programs of a Micro Focus application with [-ca](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#ca) is not suggested.
