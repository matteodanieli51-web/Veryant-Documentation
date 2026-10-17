#### isCobolErrorEx

The isCobolErrorEx function is an extended version of the isCobolError function that allows to pass a further argument specifying the isCOBOL environment when a call is performed in a multi-threaded environments.

```cobol
int isCobolErrorEx (char *msg, int len, void *pice);
```

##### Parameters

| | |
| --- | --- |
| msg | Buffer to store the error message. |
| len | Length of the buffer. |
| pice | Pointer to an isCOBOL environment created by isCobolInitEx. |
| | |
