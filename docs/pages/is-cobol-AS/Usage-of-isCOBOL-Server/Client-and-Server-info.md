## Client and Server info

The following sample commands show different ways to obtain information about a client/server environment. To show information about an active thread, use the following command:

```cobol
iscserver -info [-port port] [-hostname host]
```

The following command displays the server version:

```cobol
iscserver -v
```

To show the client version, use the following command:

```cobol
iscclient -v
```

When running on Windows, the following command can also be used to display the client version:

```cobol
isclient -v
```
