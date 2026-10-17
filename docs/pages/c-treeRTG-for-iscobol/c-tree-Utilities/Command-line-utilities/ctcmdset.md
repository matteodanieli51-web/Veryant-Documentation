### ctcmdset

The ctcmdset utility creates an encrypted password file from a text file by encoding a \*.cfg file into a \*.set file. The file to be processed should have an extension of .cfg.

Usage:

```shell
ctcmdset [filename].cfg
```

The plain text form of the file should be:

```shell
; User Id
USERID ADMIN
; User Password
PASSWD <pass>

```

**Note -** Each line must end with a line-feed for the password to be encrypted correctly.

Refer to c-tree Server Administrator's Guide for additional information on this utility.
