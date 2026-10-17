#### -sqlcheck

Verifies that the data is correct in sqlized tables.

Usage

```shell
ctutil -sqlcheck file iss_file [-conv=sign_convention] [-show=show_type]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- *iss_file* is the dictionary file. Relative paths are resolved according to the ctutil working directory.
- *sign_convention* identifies the numeric data convention.
  - use A for programs compiled with -dca option or without data compatibility options.
  - use B for programs compiled with -dcb option.
  - use D for programs compiled with -dcd option.
  - use I for programs compiled with -dci option.
  - use M for programs compiled with -dcm option.
  - use N for programs compiled with -dcn option.
  - use R for programs compiled with -dcr option.
  - use V for programs compiled with -dcv option.

    If omitted, A is assumed

- *show_type* is the level of error to show:

| Type | Meaning |
| --- | --- |
| all | show all errors in the table |
| first | show the first error in the table |
| firstrec | show all errors in the first problematic record in the table |
