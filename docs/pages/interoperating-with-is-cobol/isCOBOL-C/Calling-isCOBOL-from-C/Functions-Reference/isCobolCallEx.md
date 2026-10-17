#### isCobolCallEx

The isCobolCallEx function is an extended version of the [isCobolCall](./isCobolCall) function that allows you to pass a further argument specifying the isCOBOL environment when a call is performed in a multi-threaded environment..

```cobol
int isCobolCallEx (char *name, int argc, char *argv[], int argl[], long *crc, void *pice);
```

##### Parameters

| | |
| --- | --- |
| name | Name of the COBOL program to call. |
| argc | Arguments count. It should be set to the size of argv. |
| argv | Arguments values. |
| argl | Arguments length. |
| clc | Return code |
| pice | Pointer to an isCOBOL environment created by isCobolInitEx. |
| | |
