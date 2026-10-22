### end

Run the call.

#### General format

```cobol
int end ()
```

#### General rules

1. If the call is successful it returns the return code of the called subroutine; if the call fails then it returns one of the following conventional codes:

|  |  |
| --- | --- |
| -1000 | No connection with a File Server is available |
| -1001 | The invoked subroutine is not available |
| -1002 | The call raised an exception on the server |
