### WOWLOADRESOURCE

The WOWLOADRESOURCE routine loads a bitmap into memory.

#### Syntax:

```cobol
 CALL WOWLOADRESOURCE USING WIN-RETURN, RESOURCE-FILE
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WOWLOADRESOURCE* | Constant | This constant is defined in the *windows.cpy* copybook and hosts the routine name: |
| WIN-RETURN | PIC S9(10) BINARY(8) | This item is defined in the *windows.cpy* copybook.<br>It is set to 0 on exit. |
| RESOURCE-FILE | PIC X(n) | Specifies the pathname of the bitmap file to be loaded.<br>The following file extensions are supported: .bmp, .gif, .jpg, .png. |
