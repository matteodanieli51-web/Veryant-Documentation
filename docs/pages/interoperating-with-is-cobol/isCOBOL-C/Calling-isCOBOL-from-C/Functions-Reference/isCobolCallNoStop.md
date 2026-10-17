#### isCobolCallNoStop

The isCobolCallNoStop function enables C programs to call COBOL programs.

If a COBOL program issues a STOP RUN, the C program continues.

Parameters are passed BY REFERENCE.

```cobol
int isCobolCallNoStop (char *name, int argc, char *argv[], int argl[], long *crc);
```

##### Parameters

| | |
| --- | --- |
| name | Name of the COBOL program to call. |
| argc | Arguments count. It should be set to the size of argv. |
| argv | Arguments values. |
| argl | Arguments length. |
| clc | Return code |
| | |
