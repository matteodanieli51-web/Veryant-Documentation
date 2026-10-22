### WOWSTOPBUFFERING

The WOWSTOPBUFFERING routine flushes the buffered video updates.

#### Syntax:

```cobol
 CALL WOWSTOPBUFFERING USING WIN-RETURN
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WOWSTOPBUFFERING* | Constant | This constant is defined in the *windows.cpy* copybook and hosts the routine name: |
| WIN-RETURN | PIC S9(10) BINARY(8) | This item is defined in the *windows.cpy* copybook.<br>It is set to 0 on exit. |
