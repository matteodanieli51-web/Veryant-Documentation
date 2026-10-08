#### Exception objects

When an exception object is raised, the following occurs:

1. The predefined object reference EXCEPTION-OBJECT is set to the content of the object reference specified in the [RAISE](../../../../Procedure-Division-Statements/RAISE) Statement that caused the exception object to be raised.
2. The last exception status is set to indicate that an exception object has been raised.

If an exception object is raised by a [RAISE](../../../../Procedure-Division-Statements/RAISE) Statement, the method execution terminates and the exception condition is cached by the [TRY](../../../../Procedure-Division-Statements/TRY) Statement of the caller.
