#### isCobolInitEx

The isCobolInitEx function is an extended version of the isCobolInit function that allows to pass a further argument in order to receive a pointer to the isCobol interface environment. This pointer shall be used in subsequent function call in multi-thread environments.

```cobol
int isCobolInitEx (int optc, char *optv[], void *ejvm, void **pice);
```

##### Parameters

| | |
| --- | --- |
| optc | Number of options. If set to a value less than zero, it means that the jvm of the third parameter has already been created. When a thread needs to be attached to an isCOBOL environment and the JVM is already initialized, this parameter must be set to -1 while the second and the third are ignored. In this case you may consider calling [isCobolThreadInit](./isCobolThreadInit) instead. |
| optv | Starting options. If there is an option in the form "-Djava.class.path=", the classpath is set accordingly, otherwise the classpath is got from the environment variable. |
| ejvm | Pointer to an existing JVM. |
| pice | Pointer to the isCOBOL environment for the thread |
| | |
