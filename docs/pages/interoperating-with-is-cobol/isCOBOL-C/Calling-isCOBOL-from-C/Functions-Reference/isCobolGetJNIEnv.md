#### isCobolGetJNIEnvEx

The isCobolGetJNIEnvEx is an extended version of the isCobolGetJNIEnv function that allows to pass a further argument specifying the isCOBOL environment when a call is performed in a multi-threaded environments.

```cobol
void * isCobolGetJNIEnvEx (void *pice);
```

##### Parameters

| | |
| --- | --- |
| pice | Pointer to an isCOBOL environment created by isCobolInitEx. |
| | |
