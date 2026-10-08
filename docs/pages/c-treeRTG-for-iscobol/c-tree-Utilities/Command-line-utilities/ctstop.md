### ctstop

ctstop stops the c-tree Server with a single command, without user interaction like ctadmn. It’s useful if you plan to stop the c-tree Server from a script file or in the Linux crontab.

Usage:

```shell
ctstop [[-auto] adminuser adminpass servername]
```

Where:

- *-auto*, if specified, doesn’t ask the user what to do with connected clients, if any.
- *adminuser* is the name of the administrator user, usually “admin” (case insensitive).
- *adminpass* is the password for the administrator user, usually “ADMIN” (case sensitive).
- *servername* is the name of the c-tree Server to stop. By default the c-tree Server is named “FAIRCOMS”.

**Note -** If *-auto* is omitted and there are connected clients or if you don’t pass *adminuser*, *adminpass* and *servername* on the command line, the utility will prompt for information and therefore user interaction is required.
