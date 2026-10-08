### Micro Focus file conversion

In order to convert an existing Micro Focus file to JIsam, use either the command:

```cobol
jutil –convert <filename> <directory> [-d] [-s]
```

or the command:

```cobol
iscrun -utility jutil –convert <filename> <directory> [-d] [-s]
```

The –convert option of JUTIL is used to create a new JISAM indexed file with records loaded from an existing Micro Focus IDX3, IDX8 or CISAM indexed file.

-convert uses the Micro Focus “rebuild” utility on Windows and UNIX/Linux and requires *rebuild* to be in the user’s PATH environment.

By running *rebuild*, JUTIL gets the input file information, then the input file is converted into a binary sequential file. An empty JISAM file is generated and records are transferred from the sequential file to the JISAM file. JUTIL runs *rebuild* using the **-n** and **-o:ind,seq** options; ensure that your copy of *rebuild* supports such options, otherwise the file conversion will not be possible.

The directory parameter specifies the target directory for the created JISAM indexed file. The directory must be specified, or can be specified with a dot (.) to indicate the current directory. The target directory must first exist.

If the -s switch is used, the Micro Focus file extension is stripped before converting the file to JIsam. This option is useful to avoid double extensions. For example, if the Micro Focus file is named "arc.dat", the corresponding JIsam file would be named "arc.dat.dat": the first ".dat" is part of the file name while the second ".dat" is the default extension used by the JIsam file handler. Use the -s switch to obtain a JIsam file named "arc.dat".

Temporary files are created in the user’s temporary directory unless the TMPDIR environment variable is set. If the TMPDIR environment variable is set, then temporary files are created in the directory specified by the TMPDIR environment variable. Temporary files are not removed by default when the file conversion is completed. Use the -d switch to have these files removed.

A session file with the description of the indexed file is left on disc at the end of the process. You can use this file to create a JISAM file with the same structure with JUTIL –gen, if you need. See [JIsam file generation](./JIsam-file-generation) for details.
