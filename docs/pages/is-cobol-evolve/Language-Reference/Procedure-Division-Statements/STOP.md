## STOP

#### Format 1

```cobol
STOP RUN [ {RETURNING} {identifier-1} ] 
           {GIVING   } {literal-1   }
```

#### Format 2

```cobol
STOP Literal-1
```

#### Format 3

```cobol
STOP THREAD [thread-handle]
```

### Syntax rules

#### Formats 1 and 2

1. If a STOP statement appears in a consecutive sequence of imperative statements within a sentence, it shall appear as the last statement in that sequence.
2. Identifier-1 shall reference an integer data item or a data item with usage display or usage national.
3. If literal-1 is numeric, it shall be an integer.

#### Format 3

4. thread-handle is the handle of the thread.

### General rules

#### Format 1

1. During execution of the STOP statement with literal-1 or identifier-1 specified, literal-1 or the contents of the data item referenced by identifier-1 are passed to the operating system. Any constraints on the value of literal-1 or the contents of the data item referenced by identifier-1 are defined by the implementor.
2. Execution of the run unit terminates and control is transferred to the operating system.

#### Format 2

3. STOP statement is useful to STOP the execution of the program and pass the control to the isCOBOL Debugger.

The behavior changes depending on the value of the [iscobol.rundebug \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) configuration property:

- when the property is set to 0 (default), Literal-1 is displayed on the system output; press Enter to continue program execution,
- when the property is set to 1, Literal-1 is displayed on the system output, the Debugger is attached but it still doesn't have control; press Enter to give the control to the Debugger
- when the property is set to 2, the Debugger stops on the STOP statement and has the control.

4. If a format 2 STOP statement is encountered when running without the Debugger, the runtime displays a warning message box that the user must confirm to restore the program execution. The text of the message box is "Encountered a STOP statement" followed by literal-1.

#### Format 3

5. STOP THREAD statement is useful to STOP an executed thread.
6. If thread-handle is omitted, the currently executing thread is stopped. If the current thread is the only thread, the STOP THREAD statement behaves like STOP RUN.
7. The STOP THREAD statement needs a YIELD statement to work correctly, else the thread will not be released.

### Examples

Format 1 - Exit the program and terminate the run unit

```cobol
stop run
```

Format 2 - Pass the execution to the graphical debugger

```cobol
stop 123
```

Format 3 - Stop a display counter thread

```cobol
 working-storage section.
 77 thandle  usage handle of thread.
 77 counter   pic 9(9).
 
 procedure division.
 main.
  perform thread display-counter handle thandle
  perform increase-counter
  stop thread thandle
  display message "done!"
  goback
  .
 
 display-counter.
  perform until 1 = 0
    yield
    display counter
  end-perform.
 
 increase-counter.
  perform 99900000 times
    add 1 to counter
  end-perform.
```
