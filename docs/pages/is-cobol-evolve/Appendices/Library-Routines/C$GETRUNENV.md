## C$GETRUNENV

The C$GETRUNENV library routine returns the architecture where the COBOL program is running.

### Syntax:

```cobol
 CALL "C$GETRUNENV" GIVING  env
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *env* | PIC 9(n) | Receives the environment.<br>Possible values, defined in [iscobol.def](../Copybooks/iscobol.def), are:<br>RUNENV-STANDALONE<br>RUNENV-CHARVA<br>RUNENV-REMOTE-CALL<br>RUNENV-THIN-CLIENT<br>RUNENV-WEB-CLIENT<br>RUNENV-WD2<br>RUNENV-JEE<br>RUNENV-MOBILE<br>RUNENV-THIN-CALL-CLIENT<br>RUNENV-WEB-CALL-CLIENT<br>RUNENV-TURBORUN |

### Examples:

**Example -** Check if running in WebClient environment

```cobol
working-storage section.
copy "iscobol.def".
77 env pic 9.
...
procedure division.
...
call "c$getrunenv" giving env.
if env = runenv-web-client
   display "Running in WebClient"
end-if.
```
