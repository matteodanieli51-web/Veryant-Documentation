### MAKE-FUNCTION

This function is used to create a new indexed file. If the file already exists, it will be overwritten.

#### Syntax

```cobol
 SET MAKE-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   name
                   comment
                   pParms
                   lParms
                   keys
                   trans
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *name* | PIC X(n) | Points to the name of the file. |
| *comment* | PIC X(n) | May be NULL or may point to comment string that describes the file. |
| *pParms* | Group Item | This group item, defined in [isfilesys.def](../../Copybooks/isfilesys.def), has the following structure:<br>These fields should be set to zero |
| *lParms* | Group Item | This group item, defined in [isfilesys.def](../../Copybooks/isfilesys.def), has the following structure:<br>03  l-end         pic x value low-values. |
| *keys* | Group Item | This group item, defined in [isfilesys.def](../../Copybooks/isfilesys.def), has the following structure:<br>This parameter is a string of numbers separated by commas.<br>The first key described is the primary key. It may not allow duplicate values. The primary key is called key "0".<br>The next key described is key "1" and so on. There should be as many keys described as the *num-keys* field of *lParms* indicates.<br>The *key-info* data item contains these fields for each key:<br>For example, a file with two keys, the first one having two segments (offset zero, length 10 and offset 50, length 5) and the second one with one segment (offset 20, length 15) and allowing duplicates would be written:<br>2,0,10,0,5,50,1,1,15,20 |
| *trans* | PIC X(256) | This parameter specifies an alternate collating sequence for the keys.<br>If this parameter is NULL or omitted, then keys are ordered in ascending sequence based on their native unsigned value.<br>Be aware that compiling with -ca option causes NULL to be translated to 0, that is an invalid collating sequence, therefore omitting the parameter is safer than setting it to NULL.<br>If it is not NULL, it must point to a 256 byte region of memory.<br>Unlike other strings, this need not be null-terminated and is likely to contain nulls within it. This 256 byte region is used as a translation table on the bytes of each key to arrive at a new key-ordering. Each byte is used as an index into this table, and the resulting value is used to order the keys. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
