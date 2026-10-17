## Default Encryption with Camouflage

The default encryption method adopted by c-tree is Camouflage (the ctCAMO algorithm).

This legacy method, available since the early versions of c-tree, is very convenient for users because they simply need to enable encryption without having to deal with encryption keys or password files.

This is also the only encryption method supported by the bundled OEM license.

To use this encryption method

- if you’re configuring c-tree using isCOBOL properties (default), set [iscobol.file.index.encrypt (boolean)](../Configuring-the-client/Configuring-the-client#file_index_encrypt) to true, but don’t set [iscobol.file.index.encrypt.type](../Configuring-the-client/Configuring-the-client#file_index_encrypt_type);
- if you’re configuring c-tree using CTREE_CONF, use just

```
<encrypt>yes</encrypt>
```
