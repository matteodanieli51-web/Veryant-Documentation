## ON

### General Format

```cobol
ON { literal-1    } [ AND EVERY { literal-2    } ] [ UNTIL { literal-3    } ]
   { identifier-1 }             { identifier-2 }           { identifier-3 }
 
{ imperative-statement-1 } 
{ NEXT SENTENCE          } 
 
[ { ELSE      }   { imperative-statement-2 } ]
  { OTHERWISE }   { NEXT SENTENCE          } 
```

### Syntax rules

1. Identifier-1, identifier-2 and identifier-3 must describe unsigned integer numeric elementary items.
2. Literal-1, literal-2 and literal-3 must be unsigned numeric literals.

### General rules

1. Prior to the first execution of each ON statement, a counter is implicitly defined for that ON statement and is initialized to be zero.
2. Identifier-1, identifier-2 and identifier-3 should, if specified, contain positive integer values at the time of execution of the ON statement. Varying these values between executions of the ON statement will affect subsequent executions of the ON statements.
3. The implicit ON counter cannot be affected in any way other than by transfer of execution flow to that ON statement. Execution of the EXIT PROGRAM statement and subsequent CALL of the program without intervening CANCEL has no effect upon the implicit ON counter value; the ON counter of a called program can only be reset by the canceling of that program.

4. The following value-list is then evaluated:

A. The current value of identifier-1 or literal-1,

B. A sequence of values being the results of repeatedly adding the current value of identifier-2 or literal-2 to the current value of identifier-1 or literal-1 until the value of identifier-3 or literal-3 is reached.

5. The implicit-ON-counter is then compared with each of this list of values. If an equality is found, then imperative-statement-1 is executed. If no equality is found, then imperative-statement-2, if specified, is executed.
6. A severe error is returned if NEXT SENTENCE is in the THEN block and is not followed either by ELSE or dot or if it is in the ELSE block and is not followed by dot. The error is not returned under the [-ca](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compile option, the [-cm](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compile option and the [-cr](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compile option, because with these options NEXT SENTENCE is treated as a normal statement.

### Examples

Display a message the first time the 'elab' paragraph is executed

```cobol
main.
     perform elab 10 times.
elab.
     on 1 display "Loop started".
     ...
```
