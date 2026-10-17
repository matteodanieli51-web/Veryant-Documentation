### WOWDISPOSERESOURCE

The WOWDISPOSERESOURCE routine removes a bitmap from memory.

#### Syntax:

```cobol
 CALL WOWDISPOSERESOURCE USING WIN-RETURN, RESOURCE-FILE
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WOWDISPOSERESOURCE* | Constant | This constant is defined in the *windows.cpy* copybook and hosts the routine name: |
| WIN-RETURN | PIC S9(10) BINARY(8) | This item is defined in the *windows.cpy* copybook.<br>It is set to 0 on exit. |
| RESOURCE-FILE | PIC X(n) | Specifies the pathname of the bitmap file to be removed from memory.<br>The following file extensions are supported: .bmp, .gif, .jpg, .png. |
