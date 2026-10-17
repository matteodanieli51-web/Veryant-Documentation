## Compiler options

- When compiling source files of a IBM COBOL application, the following options should always be used:

```cobol
-cax -cv -cva -dv=0 
```

- In addition, depending on the way you need COMP fields to be represented, one of these two options should be used:

| | |
| --- | --- |
| -dci | Use IBM sign encoding and IBM COMP sizes. COMP sizes are 1, 2, 4, 8, 12 or 16 depending on the item picture.See [USAGE clause](\) for details about how numeric data items are affected by this option. |
| -dcii | Use IBM sign encoding and IBM COMP sizes. COMP sizes are 2, 4, 8 or 16 depending on the item picture.See [USAGE clause](\) for details about how numeric data items are affected by this option. |
| | |
