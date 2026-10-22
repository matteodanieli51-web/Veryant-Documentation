#### -setpath

Resets file path information.

The c-tree files contain information about the file including the path location of the file itself. After copying a file to a location other than the creation directory, it is necessary to reset the file path information according to the new file location.

Usage

```shell
ctutil -setpath file
```

*file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
