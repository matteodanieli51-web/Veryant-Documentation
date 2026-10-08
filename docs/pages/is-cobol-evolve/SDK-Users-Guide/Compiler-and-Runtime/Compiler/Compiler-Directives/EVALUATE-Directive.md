#### EVALUATE Directive

The EVALUATE directive checks the value of a constant to determine the inclusion of lines of source code.

```cobol
>> EVALUATE ConstantName
  { >> WHEN ConstantValue Statement-1 } ...
  [ >> WHEN OTHER Statement-2 ]
>> END-EVALUATE
```

##### Syntax

1. *ConstantName* can be:

- a constant defined in the configuration file as [iscobol.compiler.const.ConstantName](\),
- a constant defined using the [DEFINE Directive](\) ,
- a constant defined using a Format 4 [Level-Number](\) in the program Data Division.

This name is case insensitive.

2. *ConstantValue* is the value to be tested. If testing constants with numeric values, *ConstantValue* can be specified either between quotes or without quotes. If testing constants with alphanumeric values, *ConstantValue* must be delimited by quotes.
3. *Statement-1* and *Statement-2* are lines of COBOL code.

##### General rules

1. When *ConstantValue* matches the value of *ConstantName*, the lines in *Statement-1* are included.
2. When no match is found, the lines in *Statement-2* are included.

##### Example

Show a message only if the DEBUG constant is set either to 1 or 2:

```cobol
           >>EVALUATE DEBUG
           >>WHEN 1
           display message "debug level: 1"
           >>WHEN 2
           display message "debug level: 2"
           >>END-EVALUATE
        ...
```
