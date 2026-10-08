### <forcedelete\>

The isCOBOL default behavior of DELETE FILE is to return a "corrupted file" error and not delete the orphan file if the index file is missing. This configuration keyword allows to enable Micro Focus DELETE FILE behavior, which is to delete the orphan file.

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Allow the program to delete a file even if it’s an orphan file. | y, true, on, 1 |
| no | Return a "corrupted file" error if the program tries to delete an orphan file. This is the default value. | n, false, off, 0 |

#### Example

```ini
<forcedelete>yes</forcedelete>
```
