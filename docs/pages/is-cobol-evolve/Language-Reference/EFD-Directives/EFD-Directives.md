# EFD Directives

EFD directives are special comments that allow the customization of the generation of the EFD file when the -efd or -efc compiler options are used. There are three supported syntaxes for specifying an EFD directive.

Syntax 1:

```cobol
>>EFD directive-name [=directive-value]
```

Syntax 2:

```cobol
$EFD directive-name [=directive-value]
```

Syntax 3:

```cobol
*(( EFD directive-name [=directive-value] ))
```

The >> marker can appear anywhere except the sequence number area (columns 1 to 6) of the ANSI source format.

The $ and \* markers must appear within the comment area—column 7 in ANSI source format and column 1 in Terminal source format.

If the source code is written in Free format, EFD directives can appear in any column with the following syntax.

Syntax 4:

```cobol
*>(( EFD directive-name [=directive-value] ))
```

The directive must appear above the field or file you want to customize within the FILE SECTION of the source code.

Note that no spaces are allowed between the comment symbol and the parentheses pair. If any spaces are present, the directive is treated as a standard comment and has no effect.

For compatibility with ACUCOBOL-GT, the XFD keyword is also supported: $XFD is equivalent to $EFD, and \*((XFD is equivalent to \*((EFD.

EFD directives are ignored in Object and Factory methods. They can be used only in standard programs.

## Defining multiple EFD directives in the same point

Multiple EFD directives can be distributed on multiple lines as follows

*Syntax 1*:

```cobol
>>EFD ALPHA
>>EFD NAME=field1
 03 fd1-field1 pic 9(5).
```

*Syntax 2*:

```cobol
$EFD ALPHA
$EFD NAME=field1
 03 fd1-field1 pic 9(5).
```

*Syntax 3*:

```cobol
*((EFD ALPHA))
*((EFD NAME=field1))
 03 fd1-field1 pic 9(5).
```

*Syntax 4*:

```cobol
*>((EFD ALPHA))
*>((EFD NAME=field1))
 03 fd1-field1 pic 9(5).
```

or merged in a single line as follows:

*Syntax 1*:

```cobol
>>EFD ALPHA, NAME=field1
 03 fd1-field1 pic 9(5).
```

*Syntax 2*:

```cobol
$EFD ALPHA, NAME=field1
 03 fd1-field1 pic 9(5).
```

*Syntax 3*:

```cobol
*((EFD ALPHA, NAME=field1))
 03 fd1-field1 pic 9(5).
```

*Syntax 4*:

```cobol
*>((EFD ALPHA, NAME=field1))
 03 fd1-field1 pic 9(5).
```

## Splitting a EFD directive on multiple lines

A single EFD directive can be split across multiple lines by repeating the EFD delimiters on each line.

For example, the following snippets

*Syntax 1*:

```cobol
>>EFD NAME=
>>EFD field1 
 03 fd1-field1 pic 9(5).
```

*Syntax 2*:

```cobol
$EFD NAME=
$EFD field1 
 03 fd1-field1 pic 9(5).
```

*Syntax 3*:

```cobol
*((EFD NAME=))
*((EFD field1 ))
 03 fd1-field1 pic 9(5).
```

*Syntax 4*:

```cobol
*>((EFD NAME=))
*>((EFD field1 ))
 03 fd1-field1 pic 9(5).
```

are equivalent to

*Syntax 1*:

```cobol
>>EFD NAME= field1 
 03 fd1-field1 pic 9(5).
```

*Syntax 2*:

```cobol
$EFD NAME= field1 
 03 fd1-field1 pic 9(5).
```

*Syntax 3*:

```cobol
*((EFD NAME= EFD field1 ))
 03 fd1-field1 pic 9(5).
```

*Syntax 4*:

```cobol
*>(($EFD NAME= field1 ))
 03 fd1-field1 pic 9(5).
```
