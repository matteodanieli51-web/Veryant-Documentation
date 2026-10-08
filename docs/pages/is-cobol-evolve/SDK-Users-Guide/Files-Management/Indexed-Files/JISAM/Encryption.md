#### Encryption

JISAM supports the encryption of the data file. The encryption is activated by the WITH ENCRYPTION clause in FILE-CONTROL.

An example of encrypted file:

```cobol
select arc assign to "arc"
       organization indexed
       with encryption
       record arc-k.
```

The data is encrypted using a key provided through the configuration. The configuration property [iscobol.file.encryption.key \*](../../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) must be set to a value different from spaces, otherwise a file mismatch error is raised. The encryption key can be up to 16 characters long.

The [Blowfish](http://en.wikipedia.org/wiki/Blowfish_%28cipher%29) algorithm is used to encrypt data.

If an encrypted file is opened for input or i-o with the wrong encryption key, then a file corrupt error is raised.

If the encryption key is not set in the configuration, opening an encrypted file produces a 9X status.
