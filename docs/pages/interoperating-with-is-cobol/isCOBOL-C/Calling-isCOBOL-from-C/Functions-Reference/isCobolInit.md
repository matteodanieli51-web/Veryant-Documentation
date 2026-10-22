#### isCobolInit

The isCobolInit function initializes the JVM.

```cobol
int isCobolInit (int optc, char *optv[], void *ejvm);
```

##### Parameters

| | |
| --- | --- |
| optc | Number of options. If set to a value less than zero, it means that the jvm of the third parameter has already been created. |
| optv | Starting options. If there is an option in the form "-Djava.class.path=", the classpath is set accordingly, otherwise the classpath is got from the environment variable. |
| ejvm | Pointer to an existing JVM. |
| | |
