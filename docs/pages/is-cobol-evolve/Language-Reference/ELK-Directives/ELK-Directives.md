# ELK Directives

ELK directives are special comments that allow the customization of the generation of the Web Service bridge programs when the [iscobol.compiler.servicebridge (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#service-bridge-configuration) is set to true. There are three syntaxes to specify an ELK directive.

Syntax 1:

```cobol
>>ELK directive-name [=directive-value]
```

Syntax 2:

```cobol
$ELK directive-name [=directive-value]
```

Syntax 3:

```cobol
*(( ELK directive-name [=directive-value] ))
```

The >> marker can appeear everywhere except the sequence number area (columns 1 to 6) of the ANSI source format.

The $ and the \* markers must be in the comment area, that is column 7 in ANSI source format and column 1 in Terminal source format.

If the source code is written in Free format, ELK directives can appear at any column with the following syntax.

Syntax 4:

```cobol
*>(( ELK directive-name [=directive-value] ))
```

The directive must appear above the field or the file that you want to customize in the LINKAGE SECTION of the source code.

Note that no spaces are allowed between the comment symbol and the couple of parenthesis. If spaces are present, the directive is treated as a standard comment and doesn’t have effects.

ELK directives are ignored in Object and Factory methods. They can be used only in standard programs.

## Defining multiple ELK directives in the same point

Multiple ELK directives can be distributed on multiple lines as follows

*Syntax 1*:

```cobol
>>ELK INPUT
>>ELK TYPE=long
 03 fd1-field1 pic 9(5).
```

*Syntax 2*:

```cobol
$ELK INPUT
$ELK TYPE=long
 03 fd1-field1 pic 9(5).
```

*Syntax 3*:

```cobol
*((ELK INPUT))
*((ELK TYPE=long))
 03 fd1-field1 pic 9(5).
```

*Syntax 4*:

```cobol
*>((ELK INPUT))
*>((ELK TYPE=long))
 03 fd1-field1 pic 9(5).
```

or merged in a single line as follows:

*Syntax 1*:

```cobol
>>ELK INPUT, TYPE=long
 03 fd1-field1 pic 9(5).
```

*Syntax 2*:

```cobol
$ELK INPUT, TYPE=long
 03 fd1-field1 pic 9(5).
```

*Syntax 3*:

```cobol
*((ELK INPUT, TYPE=long))
 03 fd1-field1 pic 9(5).
```

*Syntax 4*:

```cobol
*>((ELK INPUT, TYPE=long))
 03 fd1-field1 pic 9(5).
```

## Splitting a ELK directive on multiple lines

A single ELK directive can be splitted on multiple lines by repeating the ELK delimiters on each line.

For example, the following snippets

*Syntax 1*:

```cobol
>>ELK TYPE=
>>ELK long 
 03 fd1-field1 pic 9(5).
```

*Syntax 2*:

```cobol
$ELK TYPE=
$ELK long 
 03 fd1-field1 pic 9(5).
```

*Syntax 3*:

```cobol
*((ELK TYPE=))
*((ELK long ))
 03 fd1-field1 pic 9(5).
```

*Syntax 4*:

```cobol
*>(($ELK TYPE=))
*>((ELK long ))
 03 fd1-field1 pic 9(5).
```

are equivalent to

*Syntax 1*:

```cobol
>>ELK TYPE= long 
 03 fd1-field1 pic 9(5).
```

*Syntax 2*:

```cobol
$ELK TYPE= long 
 03 fd1-field1 pic 9(5).
```

*Syntax 3*:

```cobol
*((ELK TYPE= long ))
 03 fd1-field1 pic 9(5).
```

*Syntax 4*:

```cobol
*>((ELK TYPE= long ))
 03 fd1-field1 pic 9(5).
```
