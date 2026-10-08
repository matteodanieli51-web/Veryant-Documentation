## Conformance for parameters and returning items

The conformance rules for parameters and returning items apply at compile time when an explicit reference is made to them from a syntax rule.

**NOTE** - Conformance rules for parameters and returning items are checked at compile time for:

- an [INVOKE](../../Procedure-Division-Statements/INVOKE) Statement on an object reference that is not a universal object reference,
- a program-prototype format of the [CALL](../../Procedure-Division-Statements/CALL) Statement.

The conformance rules for parameters and returning items apply at runtime when an explicit reference is made to them from a general rule.

**NOTE** - Conformance rules for parameters and returning items are checked at runtime for:

- a universal object reference
- the on-overflow and on-exception formats of the [CALL](../../Procedure-Division-Statements/CALL) Statement

**NOTE** - Conformance rules for parameters and returning items are checked for an object-view at compile time. Additional conformance rules for the object referenced by the object view are given in the rules of object-view; these are checked at runtime.
