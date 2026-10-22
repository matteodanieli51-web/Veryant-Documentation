## C$NARG

The C$NARG library routine gets the number of parameters passed to the currently running program.

**Note:** This routine cannot be used in the Procedure Division of a method. It returns information only on parameters passed by [CALL](../../Language-Reference/Procedure-Division-Statements/CALL), not by [INVOKE](../../Language-Reference/Procedure-Division-Statements/INVOKE). It’s also not supported in FUNCTION-ID programs.

### Syntax:

```cobol
 CALL "C$NARG" USING paramCount
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| paramCount | PIC 9(n) COMP-1 | Receives the number of parameters passed to the currently running program. |

### Examples:

**Example -** Get the number of parameters passed to compute a sum with just the given parameters

```cobol
*> These statements on the calling program
call "computesum" using num-1 num-2 num-3 giving ret-sum
call "computesum" using num-1 num-2 giving ret-sum
call "computesum" using num-1 num-2 num-3 num-4 giving ret-sum

...
*> computesum.cbl (called program)
program-id. computesum.

working-storage section.
77 the-sum    pic 9(5).
77 num-params pic 9(2) comp-1.

linkage section.
01 num-1  pic 9(3).
01 num-2  pic 9(3).
01 num-3  pic 9(3).
01 num-4  pic 9(3).

procedure division using num-1 num-2 num-3 num-4.
main.
  call "c$narg" using num-params
  evaluate num-params
  when 0
     move 0 to the-sum
  when 1
     move num-1 to the-sum
  when 2
     compute the-sum = num-1 + num-2
  when 3
     compute the-sum = num-1 + num-2 + num-3
  when 4
     compute the-sum = num-1 + num-2 + num-3 +  num-4
  when other
     display "Too many parameters!"
  end-evaluate
  goback the-sum.
```
