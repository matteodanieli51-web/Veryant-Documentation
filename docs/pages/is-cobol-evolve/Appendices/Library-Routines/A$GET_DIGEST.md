## A$GET_DIGEST

The A$GET_DIGEST routine returns the digest of one or more items.

Message digests are secure one-way hash functions that take arbitrary-sized data and output a fixed-length hash value.

The resulting digest depends on the setting of [iscobol.as.digest](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

### Syntax:

```cobol
 CALL "A$GET-DIGEST" USING digest
                           param1 [,... , param(n)]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *digest* | PIC X(n). | Returns the digest of the other parameters. |
| *params* | PIC X(n) or string literal. | Specifies the items for which the digest will be retrieved. |

### Examples:

**Example -** Calculate the digest of the “Veryant” word

```cobol
       working-storage section.
       77  input-string pic x(256).
       77  digest       pic x any length.
       ...
       procedure division.
       ...
           move "Veryant" to input-string.
           call "A$GET_DIGEST" using digest, input-string.
       ...
```
