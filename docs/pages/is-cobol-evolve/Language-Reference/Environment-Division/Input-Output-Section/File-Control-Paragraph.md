### FILE-CONTROL Paragraph

The FILE-CONTROL paragraph allows specification of file-related information.

#### General format

```cobol
[ FILE-CONTROL. ]
 
  [ { Indexed File    } ] ...
    { Relative File   }
    { Sequential File }
    { Sort File       }
    { XML File       }
```

##### Indexed File

A file with indexed organization is a mass storage file from which any record may be accessed by giving the value of a specified key in that record. For each key data item defined for the records of a file, an index is maintained. Each such index represents the set of values from the corresponding key data item in each record. Each index, therefore, is a mechanism which can provide access to any record in the file.

Each indexed file has a primary index which represents the prime record key of each record in the file. Each record is inserted in the file, changed, or deleted from the file based solely upon the value of its prime record key. The prime record key of each record in the file must be unique, and it must not be changed when updating a record. The prime record key is declared in the RECORD KEY clause of the file control entry for the file.

Alternate record keys provide alternate means of retrieval for the records of a file. Such keys are named in the ALTERNATE RECORD KEY clause of the FILE-CONTROL Paragraph. The value of a particular alternate record key in each record need not be unique. When these values may not be unique, the DUPLICATES phrase is specified in the ALTERNATE RECORD KEY clause.

```cobol
SELECT [ {OPTIONAL    } ] File-Name
       [ {NOT OPTIONAL} ]
 
  ASSIGN TO [Device-1] [File] ORGANIZATION IS INDEXED
 
  [ WITH {COMPRESSION} ... ]
         {ENCRYPTION }  
 [ COMPRESSION CONTROL VALUE IS Compression-Factor ]
 
  [ ACCESS MODE IS {SEQUENTIAL} ]
                   {RANDOM    }
                   {DYNAMIC   }
 
  [ COLLATING SEQUENCE IS Alphabet-Name ]
 
  [ FILE STATUS IS File-Status ]
 
  [ LOCK MODE IS { EXCLUSIVE WITH [MASS-UPDATE]                                         } ]
                 { {AUTOMATIC} [ WITH LOCK ON [MULTIPLE] {RECORD } ] [ [WITH] ROLLBACK ] }
                   {MANUAL   }                           {RECORDS}
 
  RECORD KEY IS { Data-Item-1                        } [ WITH [NO] DUPLICATES ]
                { Key-Name-1 [ = {Data-Item-2} ... ] }
 
  [ ALTERNATE RECORD KEY IS { Data-Item-3                        } [ WITH [NO] DUPLICATES ] ] ...
                            { Key-Name-2 [ = {Data-Item-4} ... ] }
 
  [ RESERVE {Integer} [{AREA }] ]
                       {AREAS}
 
  [ CLASS IS Class-Name ] .
```

##### Relative File

A file with relative organization is a mass storage file from which any record may be stored or retrieved by providing the value of its relative record number.

Conceptually, a file with relative organization is comprised of a serial string of areas, each capable of holding a logical record. Each of these areas is denoted by a relative record number. Each logical record in a relative file is identified by the relative record number of its storage area. For example, the tenth record is the one addressed by relative record number 10 and is in the tenth record area, whether or not records have been written in any of the first through the ninth record areas.

```cobol
SELECT [ {OPTIONAL    } ] File-Name
       [ {NOT OPTIONAL} ]
 
  ASSIGN TO [Device-1] [File] ORGANIZATION IS RELATIVE
 
  [ ACCESS MODE IS { SEQUENTIAL [ RELATIVE KEY IS Relative-Key ] } ]
                   { RANDOM RELATIVE KEY IS Relative-Key         }
                   { DYNAMIC RELATIVE KEY IS Relative-Key        }
 
  [ FILE STATUS IS File-Status ]
  [ LOCK MODE IS { EXCLUSIVE                                         } ]
                 { {AUTOMATIC} [ WITH LOCK ON [MULTIPLE] {RECORD } ] }
                   {MANUAL   }                           {RECORDS}
 
  [ RESERVE {Integer} [AREA ] ] 
                      [AREAS]
  [ WITH { COMPRESSION } ... ]
         { ENCRYPTION  }
 [ COMPRESSION CONTROL VALUE IS Compression-Factor ]
 
  [ CLASS IS Class-Name ] .
```

##### Sequential File

Sequential files are organized so that each record, except the last, has a unique successor record; each record, except the first, has a unique predecessor record. The successor relationships are established by the order of execution of [WRITE](\) Statements when the file is created. Once established, successor relationships do not change except in the case where records are added to the end of a file.

A sequentially organized mass storage file has the same logical structure as a file on any sequential medium; however, a sequential mass storage file may be updated in place. When this technique is used, new records cannot be added to the file and each replaced record must be the same size as the original record.

Variable-length binary sequential records occupy only as much disk space as necessary. If the maximum record size is equal to or less than 65,535 bytes, two bytes indicating record size are placed in front of each record when it is written to disk. If the record size is larger than 65,535 bytes, four bytes are placed in front of each record. This two- or four-byte field is not specified in your COBOL program, and non-COBOL programs that access the records need to be aware of the extra bytes.

In sequential files whose organization is LINE SEQUENTIAL, each record is terminated by one or more characters. They are not part of the data record, they are automatically appended to the record after writing and removed after reading.

Sequential files can be created either on disk or in memory.

```cobol
SELECT [ {OPTIONAL    } ] File-Name
       [ {NOT OPTIONAL} ]
 
  ASSIGN TO [Device-2] [File] [ ORGANIZATION IS [ {BINARY} ] SEQUENTIAL ]
                                                  {LINE  }
                                                  {RECORD}
 
  [ ACCESS MODE IS SEQUENTIAL ]
 
  [ FILE STATUS IS File-Status ]
 
  [ LOCK MODE IS {EXCLUSIVE} WITH LOCK ON [MULTIPLE] {RECORD}
                                                     {RECORDS} ]
                 {AUTOMATIC}
                 {MANUAL   }
 
  [ PADDING CHARACTER IS Padding-Character ] 
  [ WITH { COMPRESSION } ... ]
         { ENCRYPTION  }
 [ COMPRESSION CONTROL VALUE IS Compression-Factor ]
 
  [ { RECORD  } DELIMITER IS STANDARD-1 ]
    { RECORDS }
 
  [ CLASS IS Class-Name ].
```

##### Sort File

A sort file is a collection of records to be sorted by a [SORT](../../Procedure-Division-Statements/SORT) Statement. The sort file has no label procedures which the programmer can control and the rules for blocking and for allocation of internal storage are peculiar to the [SORT](../../Procedure-Division-Statements/SORT) Statement. The [RELEASE](../../Procedure-Division-Statements/RELEASE) and [RETURN](../../Procedure-Division-Statements/RETURN) Statements imply nothing with respect to buffer areas, blocks, or reels. A sort file, then, may be considered as an internal file which is created ([RELEASE](../../Procedure-Division-Statements/RELEASE) Statement) from the input file or procedure, processed ([SORT](../../Procedure-Division-Statements/SORT) Statement), and then made available ([RETURN](../../Procedure-Division-Statements/RETURN) Statement) to the output file or procedure.

```cobol
SELECT [ {OPTIONAL    } ] File-Name
       [ {NOT OPTIONAL} ]
 
  ASSIGN TO [Device-3] [File]
 
  [ ACCESS MODE IS SEQUENTIAL ]
 
  [ { FILE } STATUS IS File-Status ]
    { SORT }
 
  [ PADDING CHARACTER IS Padding-Character ] 
  [ CLASS IS Class-Name ]
  [ COLLATING SEQUENCE IS Alphabet-Name ]
```

##### XML File

XML file is an XML (Extensible Markup Language) file data file that is created by World Wide Web Consortium (W3C). XML is a language that can be read and utilized by computer software. It includes a formatted dataset that is planned to be processed by a website, web application, or software program.

XML files are plain text files, which means that they don’t do anything in and of themselves except the transportation, structure, and storage of data. Unlike HTML, XML allows developers to structure data by using custom tags.

The flexibility of XML files make it an ideal option for cataloging information about almost all related items.

```cobol
SELECT [ {OPTIONAL    } ] File-Name
       [ {NOT OPTIONAL} ]
 
  ASSIGN TO [ [ NOT ] LINE ADVANCING ] [File]  ORGANIZATION IS XML
 
  [ DOCUMENT-TYPE IS { EXTERNAL Doc-Type }
                     { OMITTED           }
 
  [ CHECK VALIDITY ON { INPUT  }
                      { OUTPUT }
 
  [ FILE STATUS IS File-Status ].
```

#### Syntax rules

1. *Alphabet-Name, Device-1, Device-2, Device-3, File-Name, Key-Name-1 and Key-Name-2* are [User-defined word](../../Preface/Definitions#user-defined-word)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
2. *File, Class-Name and Doc-Type* can be either [Data Item](../../Preface/Definitions#data-item)s or [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
3. *File* may contain quotes.
4. *Compression-Factor and Integer* are [Integer](../../Preface/Definitions#integer)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document. The value must range from 1 and 100.
5. *Data-Item-1, Data-Item-2, Data-Item-3 and Data-Item-4* are [Data Item](../../Preface/Definitions#data-item)s that must appear in the file description entry of the file that they belong to.
6. *Data-Item-5, File-Status and Relative-Key* are [Data Item](../../Preface/Definitions#data-item)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
7. *Padding-Character* is a one-character [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal).
8. In [Sort File](\), FILE STATUS and SORT STATUS are synonymous.

#### General Rules

1. The OPTIONAL phrase, if specified, indicates that the file need not be present when the program is run. If an optional file is opened in I-O or in EXTEND mode, it is created.
2. *Device-1* can be one of the following reserved words: INPUT, OUTPUT, INPUT-OUTPUT, RANDOM, DISC, DISK, DYNAMIC, EXTERNAL.
3. *Device-2* can be one of the following reserved words: INPUT, OUTPUT, INPUT-OUTPUT, RANDOM, DISC, DISK, DYNAMIC, EXTERNAL, LINE ADVANCING, PRINT, PRINTER, PRINTER-1, ADDRESS. LINE ADVANCING, PRINT, PRINTER and PRINTER-1 are synonymous and must be specified for print files.
4. *Device-3* can be one of the following reserved words: SORT, MERGE, SORT-MERGE, SORT-WORK. These words are treated as commentary.
5. When INPUT, OUTPUT or INPUT-OUTPUT is specified as device phrase for a line sequential file, trailing spaces are removed from records before they are added to the file.
6. If *Device-2* is not specified, then DISC is assumed, unless [-flsu](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#file-options) compiler flag is used.
7. *File* is the name of the file to be opened, changing its value when the file has already been opened has no effect. The runtime Framework follows the rules described in [Conceptual Characteristics of a File](\) to resolve the name of the file.
8. When DYNAMIC is specified, if File refers to a variable that is not otherwise defined, the Compiler creates a Working-Storage variable by that name that is PIC X(256). It is the program's responsibility to move a valid file name to this data item prior to opening the file.
9. When EXTERNAL is specified, the runtime searches for *File* in the locations specified in environment variables and configuration properties. If a variable whose name is *File* is found, then its value is used for the physical file name otherwise *File* is used as is. There is a small difference between the EXTERNAL clause and the [iscobol.file.env_naming (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property. When using EXTERNAL, the search of *File* in the configuration is performed by the file handler, while when using [iscobol.file.env_naming (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration), the search of *File* in the configuration is performed by the Framework before passing the file name to the file handler.

If [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option is used, this name is processed first by ignoring any characters that appear before the last hyphen in the word (including the hyphen itself). For example:

```cobol
ASSIGN TO EXTERNAL EX-1-MYFILE
```

results in "MYFILE" being used for the file name.

10. When ADDRESS is specified, the runtime searches for *File* in the Data Division items. The content of the sequential file is stored in the data item and resides in memory. The data item pointed to by *File* should be alphanumeric. If you wish to share the memory file between two programs in the same run unit, then *File* should be defined as EXTERNAL or passed as parameter through the Linkage Section.
11. Each *File-Name* in the Data Division must be specified only once in the FILE-CONTROL paragraph. Each *File-Name* specified in the SELECT clause must have a file description or a sort description entry in the Data Division of the same program.
12. When the ORGANIZATION Phrase is not specified, the compiler assumes that the file is sequential.
13. COMPRESSION activates file compression. Note that this feature is not supported by every indexed file handler. For example: c-tree and VisionJ supports it, while JIsam does not support it. Refer to the documentation of the chosen file handler to know if file compression is supported or not.
14. ENCRYPTION activates file encryption. Note that this feature is not supported by every indexed file handler. For example: c-tree and JIsam supports it, while VisionJ does not support it. Refer to the documentation of the chosen file handler to know if file encryption is supported or not.
15. COMPRESSION and ENCRYPTION can’t be used together on the same file.

**Note** - c-tree allows you to activate file compression and encryption also via configuration. See [Configuring the client](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client) for details. Activating file compression and encryption via configuration has a couple of advantages: you can activate both compression and encryption on the same file and you can customize algorithms, strategies and levels.

16. When the ACCESS Phrase is not specified, the compiler assumes that access mode is sequential.
17. When the SEQUENTIAL Phrase is specified, the file is accessed in a sequential order. The [START](../../Procedure-Division-Statements/START) Statement may be used to establish a starting point for a series of subsequent sequential retrievals.
18. When the RANDOM Phrase is specified, the file is accessed in a programmer-specified order. The I-O Statements may be used to retrieve or store a specific record in the file. Sequential access is not permitted.
19. When the DYNAMIC Phrase is specified, the file is accessed either in a sequential or in a programmer-specified order, depending on the I-O statement being executed.
20. When the COLLATING Phrase is specified, the file will use the collating sequence specified by *Alphabet-Name*. The behavior depends on the file system being used.
21. *File-Status* is a two-character conceptual entity whose value is set to indicate the status of an input-output operation during the execution of an I-O statement and prior to the execution of any imperative statement associated with that I-O statement or prior to the execution of any applicable USE AFTER STANDARD EXCEPTION procedure.
22. When the LOCK Phrase is not specified, the lock mode is automatic.
23. When the EXCLUSIVE Phrase is specified, the lock mode is exclusive. The entire file is locked and no other processes can have access to it
24. When the MASS-UPDATE Phrase is specified, the file access is optimized for heavy updates. The actual behavior depends on the file system being used.
25. When the AUTOMATIC Phrase is specified, the lock mode is automatic. Records are locked when any [READ](../../Procedure-Division-Statements/READ) Statement is executed.
26. When the MANUAL Phrase is specified, the lock mode is manual. Records locks are obtained only when the LOCK phrase is explicitly specified on an I-O statement.
27. When the MULTIPLE Phrase is specified in the LOCK ON Phrase, simultaneous locks on multiple records of the same logical file are allowed.
28. The setting of a record lock is part of the atomic operation of an I-O statement.
29. When the ROLLBACK clause is specified, WITH LOCK ON MULTIPLE RECORDS will automatically be in effect. However, if you compile with the [-fl](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#file-options) option, you must specify multiple locking rules for the files that need them.
30. When the ROLLBACK clause is specified, the runtime will automatically effect a START TRANSACTION before opening the file, and a COMMIT after opening it. Thus, every OPEN of the file will automatically be done within a transaction.
31. *Data-Item-1* and *Key-Name-1* identify the prime record key of the file.
32. *Data-Item-3* and *Key-Name-2* identify one of the alternate keys of the file.
33. When the WITH DUPLICATES Phrase is specified, duplicate values are allowed for the key.
34. When the WITH NO DUPLICATES Phrase is specified, only unique values are allowed for the key.
35. When the WITH DUPLICATES Phrase is specified in the RECORD KEY Phrase, the actual behavior depends on the file system being used.
36. The RESERVE clause is treated as a commentary
37. *Class-Name* identifies the class that handles the files. It is the file system handler.
38. The PADDING clause is treated as a commentary.
39. Class-Name specifies the internal Framework class that will handle the file. There is a class for each known file.index. Setting the CLASS clause to a specific value forces the file to be handled by a specific internal class, overriding existing settings like Framework properties and Compiler options. The CLASS clause must point to a valid class, the class must exists and be suitable for the file type, otherwise an error will be returned. Possible values are listed in the Class-Name column of the [File Handlers](../../../SDK-Users-Guide/Files-Management/File-Handlers) tables.

If the CLASS clause is omitted, indexed files are handled based on the [iscobol.file.index](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property, binary files are handled based on the [iscobol.file.sequential](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property, relative files are handled based on the [iscobol.file.relative](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property and line sequential files are handled based on the [iscobol.file.linesequential](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property.

40. isCOBOL sorting logic for SORT files is totally written in Java and is configurable. The maximum size of data to sort is equal to the maximum size of a Java file (up to 2^64 bytes depending on O.S.). It uses a predefined block of RAM memory that is 1 MB in size by default, but can be configured by setting the [iscobol.sort.memsize](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property.

If this size is enough, the data is entirely sorted using the [Collections](http://java.sun.com/j2se/1.4.2/docs/api/java/util/Collections.html) Java object.

If the size of the memory block is not enough, the block is saved on disk in a temporary directory (the system temporary directory by default, but it can be configured by setting the [iscobol.sort.dir](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property), then the memory block is cleared and used for remaining data.

There is a maximum number of temporary files (16 by default, but it can be configured by setting the [iscobol.sort.maxfiles](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property). If this number is not enough, then all the sorted files are merged into a single sorted temporary so the Framework can create more temporary files.

The process continues until no more data to sort is available. At the end, if the data size is less than the allocated RAM memory, the results are returned directly from memory, otherwise data is read from temporary files.

With the default configuration, optimal performances are obtained when the data to sort is less than 1 MB.

41. When DOCUMENT-TYPE is not specified or is OMITTED, no schema is associated with the XML file.
42. The CHECK clause can be repeated multiple times. For example:

```cobol
           SELECT XML-FILE ASSIGN TO "file.xml"
                  ORGANIZATION XML
                  CHECK INPUT
                  CHECK OUTPUT
                  FILE STATUS XML-FS.
```
