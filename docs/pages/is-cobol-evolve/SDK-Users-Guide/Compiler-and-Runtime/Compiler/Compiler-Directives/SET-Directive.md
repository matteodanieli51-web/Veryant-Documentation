#### SET Directive

The SET directive allows you to set a [Compiler Configuration](\) property for a program.

```cobol
>> SET [NO] PropertyName PropertyValue
```

##### Syntax

1. *PropertyName* is a text string that specifies the property name. It can be delimited by quotes.
2. *PropertyValue* is a text string that specifies the property value. It can be delimited by quotes. It can be written between parenthesis.

##### General rules

1. *PropertyName* can be any of the properties described in [Compiler Configuration](\) stripped of the "iscobol.compiler" prefix.Only underscore is allowed as separator between words. Replacing underscore with hyphen invalidates the directive name.*PropertyName* is case insensitive.
2. The following properties cannot be set:
- custompreproc
- max_paragraphs
- max_constants
- max_hostvars
- options
- regexp
3. When the NO keyword is used, then PropertyValue shouldn’t be specified. In this way, the property is unset.

##### Alternative syntax

The following equivalent syntax is supported for compatibility:

```cobol
$SET [NO] PropertyName PropertyValue
```

The dollar sign must appear in the source indicator area.

##### Example

A Java bridge program will be generated for the following program:

```cobol
           >>SET "easylinkage" "1"
       program-id. eg001.
        ...
```
