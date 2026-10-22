### WFLUSH-INHIBIT

The WFLUSH-INHIBIT op-code starts the bufferization of INQUIRE statements to reduce client/server traffic. Normally every INQUIRE causes client/server traffic. By bufferizing them, and send more of them at once, you can reduce the traffic.

Bufferized INQUIRE statements are sent when [WFLUSH-ALLOW](./WFLUSH-ALLOW) is called or when one of the other conditions listed in [UI changes bufferization](../../Performance-Tuning/Guidelines-for-better-runtime-performance/User-Interface) occurs. The destination variables of your inquires should be checked only after that moment.

It's important to use a separate variable for each INQUIRE (e.g. use occurs data items). If you use the same variable for multiple inquires, such variable will be set to the result of the last INQUIRE overwriting values set by previous inquires.

#### Syntax:

```cobol
 CALL "W$FLUSH" USING WFLUSH-INHIBIT
                      windowHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *WFLUSH-INHIBIT* | Constant |  |
| *windowHandle* | HANDLE OF WINDOW | Specifies the window where you wish to gather INQUIRE statements. If omitted, all INQUIRE statements are bufferized regardless of the window where they are performed. |
