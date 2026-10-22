#### -conv

Insert information about the sign convention into the c-tree file. This information is useful for the c-tree SQL Server.

Usage

```shell
ctutil -conv file sign_convention
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- *sign_convention* can be one of the following:
  - A (ANSI convention, default)
  - B (MBP convention)
  - D (Data General convention)
  - I (IBM convention)
  - M (Micro Focus convention)
  - N (NCR convention)
  - R (Realia convention)
  - V (VAX convention)
