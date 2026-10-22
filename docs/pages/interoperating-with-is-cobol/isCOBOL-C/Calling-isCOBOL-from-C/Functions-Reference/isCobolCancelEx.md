#### isCobolCancelEx

The isCobolCancelEx function is an extended version of the isCobolCancel function that allows to pass a further argument specifying the isCOBOL environment when a call is performed in a multi-threaded environment.

```cobol
int isCobolCancelEx (char *name, void *pice);
```

##### Parameters

| | |
| --- | --- |
| name | Name of the COBOL program to cancel. |
| pice | Pointer to an isCOBOL environment created by isCobolInitEx |
| | |
