#### ERROR Directive

When the ERROR directive is encountered, a message is written to STDERR and the compiler exits.

```cobol
>> ERROR String
```

##### Syntax

1. *String* is a text string delimited by quotes.

##### Example

Avoid a useless test program to be compiled:

```cobol
           >>ERROR "test program, not to be used"
       program-id. eg001.
        ...
```
