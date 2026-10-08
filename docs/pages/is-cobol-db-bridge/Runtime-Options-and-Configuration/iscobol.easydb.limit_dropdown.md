## iscobol.easydb.limit_dropdown

When a sequence of START and READ NEXT/PREVIOUS operations are performed by an application, EDBI routines generate a sequence of queries to return the set of records matching the application's request. To improve performance, the interface generates a sequence of DROP DOWN queries based upon the key of reference's key segments going from the most specific subset using the most number of segments to the most general using the least number of segments.

For example if a key is described by:

```cobol
       03 FILE1-KEY. 
          05 FILE1-KEY-SEG1     PIC X(2). 
          05 FILE1-KEY-SEG2     PIC 9(9). 
          05 FILE1-KEY-SEG3     PIC X. 
```

then a START followed by a sequence of READ NEXT operations might generate the selection criteria of:

1. WHERE FILE1-KEY-SEG1 = :w1 AND FILE1-KEY-SEG2 = :w2 AND FILE1-KEY-SEG3 >= :w3
2. WHERE FILE1-KEY-SEG1 = :w1 AND FILE1-KEY-SEG2 > :w2
3. WHERE FILE1-KEY-SEG1 > :w1

This can improve performance in that the target for each query is kept to a minimal size. If a set of records is not required, the database does not need to spend the time building the working set. When a DROP DOWN does occur however, the subsequent working set can require a large amount of time to process, because it may be an order of magnitude greater number of records. Normally there is not a way for a COBOL application to instruct the interface to stop processing when it has finished with the records based on a given key segment.

The [iscobol.easydb.limit_dropdown](\) configuration property provides this instruction. It allows an application to direct the interface not to perform DROP DOWN query generation and instead return end of file when the records matching the current query have been exhausted. When this property is set to 1, if the record positioning was performed by a START with a SIZE clause, such that the initial positioning was performed using fewer than the total number of columns in the key, the process will cease after all records matching the START columns have been exhausted.
