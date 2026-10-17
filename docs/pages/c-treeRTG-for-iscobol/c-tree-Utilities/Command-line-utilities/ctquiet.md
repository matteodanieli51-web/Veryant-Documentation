### ctquiet

The ctquiet utility allows an administrator to quiet the server from a script. An interactive option is available in the [ctadmn](./ctadmn/ctadmn) utility.

Usage:

```shell
ctquiet [-s server][-f][-u] -p password
```

Where

- *server* is the c-tree server name, e.g. ‘FAIRCOMS’
- *-f* Full consistency - files are flushed to disk from cache.
- *-u* Unquiet server
- *password* is the admin password, e.g. ‘ADMIN’

**Note -** When you quiesce the server, as long as the connection that quiesced the server remains connected, all other connections are blocked. Only if that connection goes away c-tree allows the ADMIN user to logon again and undo the quiesce.

##### Examples

quiet the server

```shell
ctquiet -p ADMIN
```

wake the server

```shell
ctquiet -u -p ADMIN
```
