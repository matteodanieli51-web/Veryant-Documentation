#### IF Directive

The IF directive checks the value of a constant to determine the inclusion of lines of source code.

```cobol
>> IF ConstantName IS [ NOT ] DEFINED Statement-1
                     {[ NOT ] = ConstantValue}
                     {[ NOT ] < ConstantValue}
                     {[ NOT ] > ConstantValue}
  [ >> ELSE Statement-2 ]
>> END-IF
```

##### Syntax

1. The IS word is optional.
2. *ConstantName* can be:

- a constant defined in the configuration file as [iscoboliscobol.compiler.const.ConstantName](\),
- a constant defined using the [DEFINE Directive](\),
- a constant defined using a Format 4 [Level-Number](\) in the program Data Division.

This name is case insensitive.This name is case insensitive. If testing constants with numeric values, *ConstantValue* can be specified either between quotes or without quotes. If testing constants with alphanumeric values, *ConstantValue* must be delimited by quotes.

3. *Statement-1* and *Statement-2* are lines of COBOL code.

##### General rules

1. Testing IF DEFINED, when *ConstantName* is defined, no matter the value, the lines in *Statement-1* are included. Otherwise, the lines in *Statement-2* are included.
2. Testing IF EQUAL, GREATER or LESS, when *ConstantName* is defined, and its value matches the IF condition, the lines in *Statement-1* are included. Otherwise, the lines in *Statement-2* are included.

##### Alternative syntax

The following equivalent syntax is supported for compatibility:

```cobol
$IF ConstantName [ NOT ] DEFINED Statement-1
                {[ NOT ] = ConstantValue}
                {[ NOT ] < ConstantValue}
                {[ NOT ] > ConstantValue}
  [ $ELSE Statement-2 ]
  $END
```

The dollar sign must appear in the source indicator area.

##### Example

Show a message only if the DEBUG constant is defined and set to 1:

```cobol
           >>IF DEBUG IS DEFINED
           >>IF DEBUG = 1
           display message "debug mode"
           >>END-IF
           >>END-IF
        ...
```
