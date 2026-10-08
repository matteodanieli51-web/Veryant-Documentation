## Problems connecting from a COBOL program

If the COBOL program cannot connect to the c-tree Server correctly, the following error is returned:

```cobol
Internal error: java.lang.IllegalArgumentException: ct_init ERROR 19:133:0
```

There are three possible causes for this error:

- the c-tree Server is not active
- the c-tree Server cannot be reached due to network problems or firewalls
- the version of the client library doesn’t match with the version of the server

Additional information may be available in the c-tree client side log file.

To activate this log using isCOBOL configuration properties, set:

```cobol
iscobol.file.index.log.file=/path/to/ctree.log
iscobol.file.index.log.debug=true
iscobol.file.index.log.error=true
iscobol.file.index.log.info=true
iscobol.file.index.log.profile=true
iscobol.file.index.log.warning=true
```

To activate this log in the ctree.conf configuration file, add the [<log\>](../Configuring-the-client/Configuring-the-client-through-CTREE_CONF/log) entry as follows:

```cobol
<config>
 <log file="/path/to/ctree.log">
  <debug>yes</debug>
  <error>yes</error>
  <info>yes</info>
  <profile>yes</profile>
  <warning>yes</warning>
 </log>
 ...
```

### Connection drops

You might experience a connection drop due to inactivity. If the COBOL program doesn’t perform any i-o operation on c-tree for a long time, the connection might be dropped by the server. This behavior can be tuned through the [DEAD_CLIENT_INTERVAL <seconds\>](../Configuring-the-c-tree-Server#dead_client_interval) configuration entry.
