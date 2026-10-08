### <filepool\>

In COBOL applications it is common practice to close and re-open files when entering procedures. This can cause unnecessary overhead and performance issues in c-treeRTG.

The Filepool feature introduces support for file pooling to keep files open when the COBOL application requests to close it. This allows the file handle to be returned immediately when the COBOL application request to re-open it.

The <filepool\> global configuration keyword enables and disables support for file pooling and optionally sets the size of the file pool with attribute *size*.

The configuration keyword <inpool\> defines if a file can be included in the file pool.

**Note** - <filepool\> is client specific and not shared among clients. Consider user A adds a file to a filepool and user B attempts to operate on that file with ctutil -copy. This fails with error 12 (-8). Automatically removal from a pool during the copy can only be done for the user that requested the pool.

#### Attributes

| Attribute | Description | Synonyms |
| --- | --- | --- |
| size | Specifies the maximum number of files to keep in the pool. | n/a |

#### Accepted Values

| Value | Effect | Synonyms |
| --- | --- | --- |
| yes | Enables the Filepool feature. | y, true, on, 1 |
| no | Disables the Filepool feature. This is the default value. | n, false, off, 0 |

#### Example

```ini
<config>
 
 <filepool size="40">yes</filepool>
 
 <instance server="FAIRCOMS">
 
  <file>
 
   <inpool/>
 
  </file>
 
 </instance>
 
</config>
```
