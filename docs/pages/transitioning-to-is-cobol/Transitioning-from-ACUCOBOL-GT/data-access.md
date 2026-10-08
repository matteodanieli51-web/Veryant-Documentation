## Data access

- If the ACUCOBOL-GT application worked on databases using the Acu4GL interface, consider that the same feature can be obtained with isCOBOL by taking advantage of isCOBOL DatabaseBridge. The [-ca](\) option should be used when launching the EDBI routine generator (edbiis).
- isCOBOL is able to read and write ACUCOBOL-GT Vision files version 3, 4, 5, and 6 as long as the files are not encrypted. Use the following configuration setting to instruct the runtime to handle indexed files in Vision format:

```cobol
iscobol.file.index=visionj
```

Keeping the archives in Vision format is suggested in the first phase of the transition. Later you might consider to convert Vision files to c-tree with the [ISMIGRATE (Index File Migration)](\) utility, as c-tree provides better performance and more features. See [isCOBOL Evolve: c-tree RTG](\) for more information about c-tree.

- Fixed length sequential and relative files as well as variable length sequential files are compatible between ACUCOBOL-GT and isCOBOL assuming that you set the following variables in the configuration:

```cobol
iscobol.file.linesequential=lseqacu
iscobol.file.sequential=seqacu
```

- Relative files with variable record length are not supported.

They must be converted to fixed length relative files by an ACUCOBOL-GT program that reads from the variable length file and writes to a fixed length file.

- By default, isCOBOL returns ANSI 2002 file status codes, while ACUCOBOL-GT returns ANSI 85 file status codes. You should set the [iscobol.file.status*](\) property according with the following table:

| value of FILE_STATUS_CODES in ACUCOBOL-GT configuration | value of iscobol.file.status in isCOBOL configuration |
| --- | --- |
| not set | com.iscobol.io.FileStatus85 |
| 74 | com.iscobol.io.FileStatus74 |
| 85 | com.iscobol.io.FileStatus85 |
| DG | com.iscobol.io.FileStatusDG |
| VAX | com.iscobol.io.FileStatusVax |
| IBM | com.iscobol.io.FileStatusIBM |

- Errors on DELETE FILE cannot be intercepted and handled by the COBOL program through Declaratives. Unless [iscobol.file.errors_ok](\) is set to true, they cause the Framework to raise a Java exception.
- The file status "30" is returned when you you open a file whose path doesn't exist and when you try to create a file where there are no write permissions. ACUCOBOL-GT returns "35" and "37" respectively.
- The syntax “@server:filepath” in file names and file-prefix is not supported by isCOBOL. See [isCOBOL File Server](\) for information about how to replace Acuserver with the isCOBOL File Server.
