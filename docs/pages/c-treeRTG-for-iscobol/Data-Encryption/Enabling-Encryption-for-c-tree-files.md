## Enabling Encrytpion for c-tree files

c-tree supports the encryption of the data file. The encryption is activated by the WITH ENCRYPTION clause in FILE-CONTROL.

An example of encrypted file:

```
select arc assign to "arc"
       organization indexed
       with encryption
       record arc-k.
```

Alternatively, you can enable encryption for one or more files in the client side configuration.

If you’re configuring c-tree using isCOBOL properties (default), use [iscobol.file.index.encrypt (boolean)](../Configuring-the-client/Configuring-the-client#file_index_encrypt).

If you’re configuring c-tree using CTREE_CONF, use [<encrypt\>](../Configuring-the-client/Configuring-the-client-through-CTREE_CONF/encrypt).

c-tree supports two types of encryption:

- [Default Encryption with Camouflage](./Default-Encryption-with-Camouflage)
- [Advanced Encryption with AES](./Advanced-Encryption-with-AES)
