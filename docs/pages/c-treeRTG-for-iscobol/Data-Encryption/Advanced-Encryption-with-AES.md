## Advanced Encryption with AES

c-tree supports advanced encryption through AES algorithms.

This encryption method requires an enterprise license.

To use this encryption method, proceed as follows:

1. Create password verification and master key files with the [ctcpvf](../c-tree-Utilities/Command-line-utilities/ctcpvf) command-line utility:

```cobol
ctcpvf -k mymasterkey -s -syslevel
```

2. Copy the two files (ctsrvr.pvf and ctsrvr.fkf) to the c-tree *server* directory.
3. Enable advanced encryption in the *ctsrvr.cfg* configuration file by setting [ADVANCED_ENCRYPTION](../Configuring-the-c-tree-Server#advanced_encryption) and [MASTER_KEY_FILE](../Configuring-the-c-tree-Server#master_key_file).

```ini
ADVANCED_ENCRYPTION YES
MASTER_KEY_FILE ctsrvr.fkf
```

**Note** - ADVANCED_ENCRYPTION is already present, but commented out, while MASTER_KEY_FILE must be added.

4. Specify the encryption type (valid values are "aes16", "aes24" and "aes32") in the client configuration.

For example, to enable encryption with the AES32 algorithm in isCOBOL properties, use:

```cobol
iscobol.file.index.encrypt=1
iscobol.file.index.encrypt.type=aes32
```

To enable encryption with the AES32 algorithm in CTREE_CONF, use:

```
<encrypt type="aes32">yes</encrypt>
```
