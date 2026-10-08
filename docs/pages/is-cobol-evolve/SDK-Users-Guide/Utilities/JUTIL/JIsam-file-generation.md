### JIsam file generation

In order to create a new empty JIsam file from scratch, use either the command command:

```cobol
jutil –gen [filelist directory]
```

or the command:

```cobol
iscrun -utility jutil –gen [filelist directory]
```

The –gen option of JUTIL is used to create an empty JISAM indexed file. The file structure is defined from user responses to prompts for information. These responses can be saved in a session file that can later be used in batch mode; i.e. (JUTIL –gen filelist directory). The session file has one line with the JISAM file name to be created, along with other properties of the file, such as key positions, lengths, etc. This file can have multiple lines, one for each file to be created, making this a filelist. The directory parameter specifies the target directory for the created JISAM indexed file. The directory can be left blank, or can be specified with a dot (.) to indicate the current directory. Both have the same meaning. If a directory is used, it must first exist.

To make a session file for later use, run JUTIL –gen without the filelist parameter:

For example to run JUTIL in an interactive mode to create an empty JISAM indexed file, type:

```cobol
jutil –gen
```

The following prompts are displayed:

```cobol
Save this session [Y]?
```

Default answers are in-between the brackets, just press ENTER to accept.

```cobol
Enter session filename:
```

Type the session filelist name to save and press ENTER.

```cobol
Enter JISAM filename:
```

Type the filename of the empty JISAM file to be created from the session filename and press ENTER.

```cobol
Enter the maximum record size:
```

Type the maximum record size and press ENTER.

```cobol
Enter the # of keys [1]:
```

Type the number of keys (Primary and Alternate) and press ENTER. The default number is 1.

```cobol
-- Primary key --
Enter number of segments (1-16):
```

Type the number of segments for Primary key and press ENTER.

```cobol
Enter segment size:
Enter segment offset:[0]
```

For each segment, type in the size and offset and press ENTER. The default offset value is zero. Any other value for offset should be counted as zero-based.

```cobol
-- Alternate key 1 --
Enter number of segments (1-16):
```

Type the number of segments for Alternate key and press ENTER.

```cobol
Duplicates allowed [N]?
```

For each Alternate key, specify whether duplicates will be allowed and press ENTER. The default value is ‘N’.

```cobol
Enter segment size:
Enter segment offset:[0]
```

For each segment, type in the size and offset and press ENTER. The default offset value is zero. Any other value for offset should be counted as zero-based.

```cobol
JISAM file {MyFile} created.
```

This new file, MyFile can be used as input to JUTIL –gen for non-interactive file creation. For example, to create the JISAM indexed file named in MyFile with its defined properties, type:

```cobol
jutil –gen MyFile TargetDirectory
```

or

```cobol
iscrun -utility jutil –gen MyFile TargetDirectory

```
