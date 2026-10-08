### Btrieve

Btrieve is a transactional database software product based on Indexed Sequential Access Method (ISAM).

isCOBOL is able to interface Btrieve on Windows.

In order to associate the Btrieve file handler to your indexed files, the following setting must appear in the configuration:

```cobol
iscobol.file.index=btrieve
```

It’s possible to associate only specific files to Btrieve. For example, the following configuration uses JIsam for all indexed files, except for "file1" that is associated to Btrieve:

```cobol
iscobol.file.index=jisam
iscobol.file.index.file1=btrieve
```

Indexed files can be associated to Btrieve also through the CLASS clause in the SELECT statement. E.g.

```cobol
           SELECT BTR1 ASSIGN TO BTR1-PATH
              ORGANIZATION INDEXED
              CLASS "com.iscobol.io.DynamicBtrieve"
              ACCESS MODE DYNAMIC
              RECORD KEY BTR1-KEY
              STATUS BTR1-STATUS.
```

The wbtrv32 library (wbtrv32.dll) is required in the PATH.

The following features are not supported:

- Alternate collating sequence
- START WITH SIZE
- Transactions

Refer to the [Pervasive Documentation](http://www.pervasive.com/database/Home/Resources/Documentation.aspx) for more information about the usage of Btrieve.
