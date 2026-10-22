## How to receive parameters in WebDirect

Programs can receive parameters from the URL.

Parameters must be added at the end of the URL using the syntax “&PARAMN\=Value” (where N is a progressive number) and they're intercepted by the COBOL program as chaining parameters.

The following COBOL program, for example, expects 2 parameters, p1 and p2:

```cobol
       PROGRAM-ID. prog.
       WORKING-STORAGE SECTION.
       77 p1 pic x(10).
       77 p2 pic x(10).
       PROCEDURE DIVISION chaining p1 p2.
       main.
           display message "p1=" p1.
           display message "p2=" p2.
           goback.
```

The parameters will be passed through HTTP using GET or POST methods.

### Example of GET

The following URL passes two parameters named PARAM1 and PARAM2:

```cobol
http://127.0.0.1:8080/webdirect/zk/IsMainZK?PROGRAM=PROG&PARAM1=AAA&PARAM2=BBB
```

### Example of POST

The following HTML form passes two parameters named PARAM1 and PARAM2:

```cobol
<html>
   <form method="POST" action="zk/IsMainZK?PROGRAM=PROG">
    <input type="text" placeholder="Param1" name="PARAM1"/>
    <input type="text" placeholder="Param1" name="PARAM2"/>
    <input type="submit" value="Chiama COBOL"/>
   </form>
</html>
```

**Note** - the name of the parameter in the URL can be different than the name used by the COBOL program. Parameters are passed according to their ordinal position.
