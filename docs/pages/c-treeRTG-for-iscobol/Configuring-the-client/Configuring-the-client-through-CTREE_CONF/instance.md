### <instance\>

The instance element specifies instance-wide configurations for the client/server driver. Each instance represents a connection to the c-tree server.

#### Attributes

| Attribute | Description | Default value |
| --- | --- | --- |
| server | Specifies the server name and the host name of the c-tree to connect to. The format can be one of the following syntaxes:<br>• servername<br>• servername@hostname<br>• servername@IPaddress<br>• #port@hostname<br>• #port@IPaddress <br><br>When the value doesn’t include the @ character, the runtime connects to the c-tree Server on the localhost via shared memory. When the value includes the @ character, instead, the connection is always performed via TCP/IP. For better performance, if c-tree Server and runtime are running on the same machine, don’t use "@localhost" or "@127.0.0.1", so the runtime will use shared memory (faster) instead of TCP/IP (slower) for the connection. | FAIRCOMS |
| user | Specifies the c-tree user name. | n/a |
| password | Specifies the c-tree user password. | n/a |
| connect | Indicates whether to connect to c-tree at runtime initialization or wait for the first OPEN operation.<br>It accepts the following values:<br>"yes" : Indicates to connect at runtime initialization.<br>"no" : Indicates to connect during the first OPEN operation. This is the default value. | no |
| versioncheck | Indicates whether to check that c-tree version matches the c-tree version. This option is turned off by default.<br>It accepts the following values:<br>"yes" : Turn on version matching check. Versions must match otherwise an error is returned at runtime initialization.<br>"no" : Turn off version matching check. This is the default value. | no |
| ssl | Indicates whether or not an SSL connection should be enstablished.<br>It accepts the following values:<br>"yes" : Perform an SSL connection.<br>"no" : Perform a standard connection. | n/a |
| sslcert | Specifies the path to a pem file for the SSL certificate. | n/a |
| endiancheck | By default, the byte endianess is checked at connection time. When set to "no", that check can be skipped. <br><br>This logic checks at connection time to ensure that the byte endianness of both client and server is the same (if it is not, the connection is terminated and the operation fails). In rare cases where this logic is not necessary (e.g., if files have no numeric data types), the byte endianess check can be skipped so the connection can succeed. | yes |
| ctshmemdir <span id="ctshmemdir"></span> | Configure the c-treeRTG server to change the default shared memory directory. <br><br>This setting is ignored under Windows as it is meaningful only for Unix platforms.<br>On Unix platforms, the c-treeRTG server shares a directory with the c-treeRTG clients when they communicate via the shared memory protocol. It is possible to configure the c-treeRTG server to change the default shared memory directory with configuration keyword [SHMEM_DIRECTORY](../../Configuring-the-c-tree-Server#shmem_directory). Using different shared memory directories allows running multiple c-treeRTG servers with the same name on the same machine. To configure the c-treeRTG clients to set the shared memory directory, it is necessary to set this attribute. | n/a |

#### Example

```ini
<!-- instance 1 on a c-tree server named COBOL running on a server machine whose IP address is 192.168.0.2 -->
<instance server="COBOL@192.168.0.2" user="admin" password="ADMIN" connect="yes" versioncheck="no">
 
...
 
</instance>
<!-- instance 2 on a c-tree server running on a server machine whose IP address is 192.168.0.3 listening on port 1234 -->
<instance server="#1234@192.168.0.3" user="admin" password="ADMIN" connect="yes" versioncheck="no">
 
...
 
</instance>
```
