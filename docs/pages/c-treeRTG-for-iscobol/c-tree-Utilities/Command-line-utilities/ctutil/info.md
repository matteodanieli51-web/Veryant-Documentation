#### -info

Displays file information.

Usage

```shell
ctutil -info file [-x]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- if the *-x* option is specified, ctutil prints extended information.
