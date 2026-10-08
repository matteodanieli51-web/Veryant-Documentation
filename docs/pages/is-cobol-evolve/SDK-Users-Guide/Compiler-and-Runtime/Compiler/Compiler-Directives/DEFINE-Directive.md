#### DEFINE Directive

The DEFINE directive defines a compiler constant.

```cobol
>> DEFINE ConstantName AS ConstantValue [OVERRIDE]
```

##### Syntax

1. *ConstantName* is the name of the constant to be set. This name is case insensitive.
2. *ConstantValue* is the value of the constant. If the value is numeric, it can be specified either between quotes or without quotes. If the value is alphanumeric, it must be specified between quotes.

##### General rules

1. The Constant is defined and set to the *ConstantValue*.
2. This directive has the same effect as having the following entry in the Working-Storage Section:

```cobol
78 ConstantName VALUE ConstantValue.
```

3. Use the OVERRIDE clause to re-define a previously set constant.

##### lternative syntax

The following equivalent syntax is supported for compatibility:

```cobol
$SET CONSTANT ConstantName ConstantValue
```

The dollar sign must appear in the source indicator area.

##### Example

Define the DEBUG compiler constant set to 1:

```cobol
           >>DEFINE DEBUG AS 1
       program-id. eg001.
        ...
```
