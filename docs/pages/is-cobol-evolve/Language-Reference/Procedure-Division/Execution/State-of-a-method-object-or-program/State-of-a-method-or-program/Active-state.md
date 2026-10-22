#### Active state

A method or program may be activated recursively. Therefore, several instances of a method or program may be active at once. When a rule indicates that the active state of a runtime element is tested, it is in the active state if any instance of the element is active.

An instance of a method is placed in an active state when it is successfully activated and remains active until the execution of a [GOBACK](../../../../Procedure-Division-Statements/GOBACK), [STOP](../../../../Procedure-Division-Statements/STOP) or [EXIT](../../../../Procedure-Division-Statements/EXIT) program Statement within this instance of this method.

An instance of a program is placed in an active state when it is successfully activated by the operating system or successfully called from a runtime element. An instance of a program remains active until the execution of one of the following:

- a [STOP](../../../../Procedure-Division-Statements/STOP) Statement
- in a called program, an implicit or explicit program format of an [EXIT](../../../../Procedure-Division-Statements/EXIT) Statement within that program
- a [GOBACK](../../../../Procedure-Division-Statements/GOBACK) Statement within either that same called program or a program that is not under the control of a calling runtime element.

Whenever an instance of a method or program is activated, the control mechanisms for all [PERFORM](../../../../Procedure-Division-Statements/PERFORM) Statements contained in that instance of the function, method, or program are set to their initial states.
