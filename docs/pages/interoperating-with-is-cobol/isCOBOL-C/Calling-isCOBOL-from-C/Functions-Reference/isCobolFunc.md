#### isCobolFunc

The isCobolFunc function allows to call a COBOL program the same way as [isCobolCall](./isCobolCall) except that the program is automatically cancelled as soon as it terminates.

```cobol
int ISCOBOLEXPORT isCobolFunc (char *name, int argc, char *argv[], int argl[], long *crc);
```

##### Parameters

| | |
| --- | --- |
| name | Name of the COBOL program to call. |
| argc | Arguments count. It should be set to the size of argv. |
| argv | Arguments values. |
| argl | Arguments length. |
| crc | Return code |
| | |
