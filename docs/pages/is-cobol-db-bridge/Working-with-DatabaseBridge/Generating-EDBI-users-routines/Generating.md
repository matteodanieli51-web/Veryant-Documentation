## Generating EDBI user's routines

The creation of EDBI routines is made easy by the isCOBOL DatabaseBridge facility. With this feature enabled, every time the Compiler compiles a COBOL program with some indexed files defined in the File Section, it generates a bridge class that allows file operations to be reflected on a relational database.

The feature is activated and controlled through the [DatabaseBridge (EasyDB) Configuration](\) entries that can be set either in the configuration file or directly in the source through the [SET Directive](\).

Let’s consider the COBOL program "PROG-FILE1.cbl" installed among isCOBOL samples. This program allows you to manage an archive of songs. It defines the following file:

```cobol
       INPUT-OUTPUT         SECTION.
       file-control.
           select file1 assign to "file1" 
           organization is indexed
           access mode is dynamic
           record key is f-cod
           file status is f-status.
 
       data division.
       file section.
       fd  file1.
       01  f-rec.
           03 f-cod       pic 9(3).
           03 f-firstname pic x(20).
           03 f-secname   pic x(20).
           03 f-address   pic x(20).
      $EFD DATE=YYYYMMDD
           03 f-birthday  pic 9(8).
```

There are two ways to generate EDBI routines:

- [EDBI Generation at compile time (one step)](./EDBI-Generation-at-compile-time)
- [EDBI Generation with EDBIIS (two steps)](./EDBI-Generation-with-EDBIIS)
