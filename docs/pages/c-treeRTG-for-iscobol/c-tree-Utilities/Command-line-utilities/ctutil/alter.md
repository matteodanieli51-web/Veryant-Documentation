#### -alter

Changes the record schema of an existing file using RTG XDD definitions.

Usage

```shell
ctutil -alter  file iss_file [-hot | -full]
```

- *file* is the name of the file without extension.
- *iss_file* is the path to an ISS dictionary file.
- *-full* forces full alter schema.
- *-hot* forces hot (on-the-fly) alter schema.

The -full and -hot options are optional and mutually exclusive. If not specified, a full alter table is performed only if a hot alter table is not available.

The new ISS file must specify a default value using the defaultValue attribute or the following error is returned:

```shell
4FCC5C00> 20240805T124932 core:08190:cts_alter ERROR 19:4187:0 default value is mandatory on new fields) ctutil:altertest
```

The following is an example new field definition with the default value included:

```shell
<field name="CM_CUSTCTRY" size="47" type="Alphanum" digits="47" scale="0" defaultValue="USA"/>
```

On success, the new record length is displayed in ctutil output. If there are errors, a detailed message will be logged to RTG logging when enabled.

##### Hot Alter Table Considerations

A hot alter table (HAT) requires the table to be capable of hot alter. The <flexrec\> file attribute enables this option. HAT is default for RTG created tables as of RTG version 5. For prior versions, upgrade the files to apply the ctFLEXREC file mode by using ctutil [-upgrade](./upgrade) and enabling the <ctflexrec\> configuration option.

Alter requires the record schema to be already stored in the file. The record schema can be stored in the file with [-sqlinfo](./sqlinfo) or [-sqlize](./sqlize).

For tables previously without HAT support, a first alter table from -full will include the <ctflexrec\> mode such that future alters will be HAT capable. To prevent this, include *<ctflexrec\>no<ctflexrec\>* in your RTG configuration.

**Note -** The command only allows you to append new fields to the end of the record schema. It is like the SQL ‘ALTER TABLE’ statement, except it does not support removing fields from the record schema.
