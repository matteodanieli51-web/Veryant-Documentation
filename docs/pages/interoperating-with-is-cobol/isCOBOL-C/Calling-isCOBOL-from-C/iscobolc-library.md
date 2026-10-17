### The iscobolc Library

The ability to call a COBOL program from a C program is provided by the iscobolc library (identified by iscobolc.dll on Windows and libiscobolc.so on Unix).

There are two iscobolc libraries:

| | |
| --- | --- |
| iscobolc | to call COBOL programs compiled without -cp option |
| iscobolc_n | to call COBOL programs compiled with -cp option |
| | |

The iscobolc library has dependences to the Java jvm library (identified by jvm.dll on Windows and libjvm.so on Unix). Both of these libraries must be available to the C program.
