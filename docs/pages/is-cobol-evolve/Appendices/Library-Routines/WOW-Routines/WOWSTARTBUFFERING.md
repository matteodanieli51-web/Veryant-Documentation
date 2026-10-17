### WOWSTARTBUFFERING

The WOWSTARTBUFFERING starts buffering video updates.

#### Syntax:

```cobol
 CALL WOWSTARTBUFFERING USING WIN-RETURN
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WOWSTARTBUFFERING* | Constant | This constant is defined in the *windows.cpy* copybook and hosts the routine name: |
| WIN-RETURN | PIC S9(10) BINARY(8) | This item is defined in the *windows.cpy* copybook.<br>It is set to 0 on exit. |
