#### isCobolGobackEx

The isCobolGobackEx function is an extended version of the isCobolGoback function that allows to pass a further argument specifying the isCOBOL environment when a call is performed in a multi-threaded environments.

```cobol
int isCobolGobackEx (void *pice);
```

##### Parameters

| | |
| --- | --- |
| pice | Pointer to an isCOBOL environment created by isCobolInitEx. |
| | |
