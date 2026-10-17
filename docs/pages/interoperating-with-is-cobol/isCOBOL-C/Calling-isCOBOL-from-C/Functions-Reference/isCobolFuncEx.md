#### isCobolFuncEx

The isCobolFuncEx function is an extended version of the isCobolFunc function that allows to pass a further argument specifying the isCOBOL environment when a call is performed in a multi-threaded environments.

```cobol
int isCobolFuncEx (char *name, int argc, char *argv[], int argl[], long *crc, void *pice);
```

##### Parameters

| | |
| --- | --- |
| name | Name of the COBOL program to call. |
| argc | Arguments count. It should be set to the size of argv. |
| argv | Arguments values. |
| argl | Arguments length. |
| crc | Return code |
| pice | Pointer to an isCOBOL environment created by isCobolInitEx. |
| | |
