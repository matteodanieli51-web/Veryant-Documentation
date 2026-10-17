#### PROPAGATE Directive

The PROPAGATE directive activates or deactivates propagation of exceptions for CALL statements.

```cobol
>> PROPAGATE { ON  }
             { OFF }
```

##### General rules

1. ON activates propagation, OFF deactivates it. The default value is OFF.

When propagation is OFF, and a CALL statement without the ON EXCEPTION clause fails, an error is shown and execution terminates.

When propagation is ON and a CALL statement without the ON EXCEPTION clause fails, the COBOL program terminates and reports the exception to the caller. The Runtime Framework keeps reporting the same exception to the caller until a program without propagation, or a CALL statement with an ON EXCEPTION clause is found.

##### Example

Propagation will be activated in the following program:

```cobol
           >>PROPAGATE ON
       program-id. eg001.
        ...
```
