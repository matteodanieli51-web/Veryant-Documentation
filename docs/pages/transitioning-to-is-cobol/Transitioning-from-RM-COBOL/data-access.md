## Data access

- RM/COBOL indexed files can be easily converted to JIsam, c-tree or other supported file systems using the [ISMIGRATE (Index File Migration)](\) utility. Choose "com.iscobol.io.ScanRMKF" as input file handler to let ISMIGRATE read RM/COBOL files without the need of external components.
- Fixed-length sequential and relative files created by 1974 RM/COBOL programs are directly usable by isCOBOL programs. To convert RM/COBOL-85 relative files with fixed-length records, write an RM/COBOL program that reads the file and writes the records to a fixed-length binary sequential file. The resulting relative file is usable by isCOBOL.
- Set the following configuration property for a RM/COBOL compatible line separator handling:
  
```cobol
iscobol.file.linesequential=lseqacu
```

- Variable-length sequential files must be converted through a RM/COBOL program that reads from the variable-length file and writes the records to a new fixed-length record binary sequential output file but begin the output file's FD with a two byte COMP-4 item that is filled in with the record size from the input file's depend-variable. Use this new file as the variable-length record binary sequential file with isCOBOL.
- Variable-length relative files must be converted to fixed-length relative files as isCOBOL doesn’t support variable-length relative files. This kind of conversion can be done through a RM/COBOL program that reads from the variable-length file and writes to the fixed-length file using the maximum record size from the input file as the record size of the output file.
