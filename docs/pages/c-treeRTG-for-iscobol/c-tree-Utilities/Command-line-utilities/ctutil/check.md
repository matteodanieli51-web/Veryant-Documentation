#### -check

Checks for the file integrity. If the file is corrupted, you can try to repair it using -rebuild.

Usage

```shell
ctutil -check file [-x] [-k=index]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- If the *-x* option is specified, ctutil performs extended tests matching records with keys.
- If the *-k=index* option is specified, the check is performed only on the index specified. For very large files with many indexes, you may want to consider using this option to validate only a single index.
