#### -fileid

Reset the unique file ID of a file that has been copied at the system level.

Usage

```shell
ctutil -fileid file
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.

Note - Copying files is against FairCom’s recommended best practices. However, because copying files is fairly common in many industries, FairCom has the following provisions:

- Use the [-filecopy](./filecopy) option or the [-copy](./copy) option to copy files.
- Restamp file ID after copying using the operating system - The ctutil *-fileid* option is for restamping the file ID after a file is copied using the operating system facilities.
