## C$DECRYPT

The C$DECRYPT library routine decrypts data using a specific symmetric-key algorithm.

The algorithm is specified by the [iscobol.crypt.algorithm](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

### Syntax:

```cobol
 CALL "C$DECRYPT" USING encryptedText
                        password
                        decryptedText
                       [errorDescription]
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *encryptedText* | PIC X(n) | Specifies the encrypted text to be decrypted. |
| *password* | PIC X(n) | Specifies the encryption key to be used. |
| *decryptedText* | PIC X(n) | Returns the decrypted text. |
| *errorDescription* | PIC X(n) | Optional parameter. It returns the Java exception behind a failed decryption. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Error occurred. |

### Examples:

**Example -** Encrypt then decrypt a text using the AES algorithm:

```cobol
       WORKING-STORAGE SECTION.
       77  secret     pic x(16) value "0123456789ABCDEF".
       77  clear-text pic x(15) value "some text".
       77  crypt-text pic x(16).
       77  dcrpt-text pic x(15).

       PROCEDURE DIVISION.

       MAIN.
           set environment "crypt.algorithm" to "AES".
           call "C$ENCRYPT" using clear-text secret crypt-text.
           display crypt-text.
           call "C$DECRYPT" using crypt-text secret dcrpt-text.
           display dcrpt-text.
```
