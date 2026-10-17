## A$DECRYPT

This routine decrypts data using a given key.

It uses the [Blowfish](http://en.wikipedia.org/wiki/Blowfish_%28cipher%29) algorithm. If you wish to decrypt data using a different algorithm, consider using [C$DECRYPT](./C$DECRYPT) instead.

### Syntax:

```cobol
 CALL "A$DECRYPT" USING dataToDecrypt
                        encryptionKey
                        decryptedData
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *dataToDecrypt* | PIC X(n) or string literal. | Specifies the data to decrypt. Trailing spaces are processed too.<br>The size of this field should be multiple of 8. |
| *encryptionKey* | PIC X(n) or string literal. | Specifies the key to use during decryption.<br>Since Blowfish is used, the length of the key should be a multiple of 8 and shouldn’t be greater than 56. |
| *decryptedData* | PIC X(n) | Returns the decrypted data.<br>The size of this field can be one byte smaller than the size of *dataToDecrypt*. For example, if *dataToDecrypt* is 16 bytes in size, *decryptedData will  be 8 to 15 bytes in size, while* if *dataToDecrypt* is 8 bytes in size, *decryptedData will  be 1 to 7 bytes in size.*<br>In order to be more flexible and avoid specific size calculations, a PIC X ANY LENGTH item can be used. |

### Examples:

**Example -** Decrypt a previously encrypted text

```cobol
*> All parameters used by a$decrypt may be defined as pic x(n)
*> encrypted-data should come from a saved encrypted source
*> previously encrypted with a$encrypt

move "Veryant0"     to source-pwd
call "a$decrypt" using encrypted-data, source-pwd, decrypted-data
```
