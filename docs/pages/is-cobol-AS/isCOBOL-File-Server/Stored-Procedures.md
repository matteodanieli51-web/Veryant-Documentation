## Stored Procedures

In a File Server environment, COBOL subroutines can be called by remote programs to serve as stored procedures.

Calling stored procedures is permitted only after the connection to the File Server has been enstablished, that means after opening the first remote file.

The feature is provided through the [StoreProcedure Class (com.iscobol.lib.StoreProcedure)](\) internal class.

The local program calls the remote stored procedure using a code like the following:

```cobol
       configuration section.
       repository.
           class sp as "com.iscobol.lib.StoreProcedure"
           .
       working-storage section.
       77  p1 pic x(128).
       77  p2 pic s9(9).
       77  p3 pic 9(5).
       77 rc pic s9(9).
   
       procedure division.
   
           set rc to sp:>call("remote-sub"):>input(p1)
                                           :>output(p2)
                                           :>inout(p3)
                                           :>end().
```

In this case three parameters are passed, one of each type.

If a subroutine needs to be called very often then better performance can be obtained by creating the object only once, for example:

```cobol
       configuration section.
       repository.
           class sp as "com.iscobol.lib.StoreProcedure"
           .
       working-storage section.
       77  spo object reference sp.
       77  p1 pic x(128).
       77  p2 pic s9(9).
       77  p3 pic 9(5).
       77  rc pic s9(9).
   
       procedure division.
   
          set spo to sp:>call("remote-sub"):>input(p1)
                                          :>output(p2)
                                          :>inout(p3)
          perform until rc = 0
             set rc to spo:>end()
          end-perform.
```

The called subroutine on the server is a standard COBOL program that receives the parameters through the Linkage Section and optionally returns an exit status upon GOBACK.

```cobol
       program-id. remote-sub.
       
       working-storage section.
      *> routine variables here
       
       linkage section.
       77  p1 pic x(128).
       77  p2 pic s9(9).
       77  p3 pic 9(5).
       
       procedure division using p1, p2, p3.
       main-logic.
      *> routine logic here
           goback. 
```
