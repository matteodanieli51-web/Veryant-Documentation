#### -compact

Compacts data file by removing deleted records.

Usage

```shell
ctutil -compact file [-purgedups] [-delidx] [-repairdata]
```

- *file* is the name of the c-tree file. The default file extension (that is ".dat" if not configured differently) must be omitted. Relative paths are resolved according to the c-tree server working directory.
- if the -*purgedups* options is specified, all records with a duplicated primary key are removed from the file.
- The -delidx option forces the deletion of the index file before rebuilding.
- if the *-repairdata* option is specified,  ctutil attempts to recover a file, as done prior to V11.5. To avoid potential data loss, FairCom strongly recommends only using our latest c-treeACE V11.5 compact and rebuild logic that default to stopping if a corrupt data record header is encountered, and returns error DCPT_ERR(1107) rather than attempting to repair the data link in the record header. This allows an administrator to know with greater certainty that serious damage has occurred and they may prefer to recover the file from a backup.

Note - if *file* is a table created with SQL statements, use the [ctcmpcif](../ctcmpcif) utility instead.
