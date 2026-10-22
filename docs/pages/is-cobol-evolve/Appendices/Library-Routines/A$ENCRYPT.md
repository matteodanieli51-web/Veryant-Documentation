## A$ENCRYPT

This routine encrypts data using a given key.

It uses the [Blowfish](http://en.wikipedia.org/wiki/Blowfish_%28cipher%29) algorithm. If you wish to encrypt data using a different algorithm, consider using [C$ENCRYPT](./C$ENCRYPT) instead.

### Syntax:

```cobol
 CALL "A$ENCRYPT" USING dataToEncrypt
                        encryptionKey
                        encryptedData
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *dataToEncrypt* | PIC X(n) or string literal. | Specifies the data to encrypt. Trailing spaces are processed too. |
| *encryptionKey* | PIC X(n) or string literal. | Specifies the key to use during ecryption.<br>Since Blowfish is used, the length of the key should be a multiple of 8 and shouldn’t be greater than 56. |
| *encryptedData* | PIC X(n) | Returns the encrypted data.<br>The size of this field must be the first multiple of 8 bytes greater than the size of *dataToEncrypt*. For example, if *dataToEncrypt* is 1 to 7 bytes in size, *encryptedData* should be at least 8 bytes in size; if *dataToEncrypt* is 8 to 15 bytes in size, *encryptedData* should be at least 16 bytes in size;  if *dataToEncrypt* is 16 to 23 bytes in size, *encryptedData* should be at least 24 bytes in size;  and so on...<br>In order to be more flexible and avoid specific size calculations, a PIC X ANY LENGTH item can be used. |

### Examples:

**Example -** Encrypt a text with specific password

```cobol
*> All parameters used by a$encrypt may be defined as pic x(n)

move "this is test data" to source-str
move "Veryant0"          to source-pwd
call "a$encrypt" using source-str, source-pwd, encrypted-data

*> Some characters in the encrypted-data could be not displayable
*> You may use function dec2hex to convert it to displayable hex codes
```
