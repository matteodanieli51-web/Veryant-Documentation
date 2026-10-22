## TYPE Directive

The TYPE directive allows you to specify the data type of the service field. By default all parameters are strings. If the directive is used along with the INPUT or OUTPUT directives, it controls the type of the input or output parameter respectively.

```cobol
>>ELK TYPE=type
```

or

```cobol
$ELK TYPE=type
```

or

```cobol
*(( ELK TYPE=type ))
```

or

```cobol
*>(( ELK TYPE=type ))
```

Valid type values (case insensitive) are:

- base64Binary
- boolean
- byte
- decimal
- double
- float
- hexBinary
- int
- integer
- long
- short
- string
- unsignedByte
- unsignedInt
- unsignedLong
- unsignedShort

### Example

Assuming that decoration is not disabled, the Web Service input will include the following parameters: p1_in(long), p2_in(long), p3_in(string). The Web Service output will include the following parameters: p1_out(long), p2_out(string), p3_out(long):

```cobol
       Linkage Section.
       01 params.
      >>ELK TYPE=long
          03 p1 pic 9(5).
      >>ELK INPUT, TYPE=long
      >>ELK OUTPUT
          03 p2 pic 9(5).
      >>ELK INPUT 
      >>ELK OUTPUT, TYPE=long
          03 p3 pic 9(5).
```

The following snippet includes an equivalent syntax:

```cobol
       Linkage Section.
       01 params.
      >>ELK TYPE=long
          03 p1 pic 9(5).
      >>ELK INPUT
      >>ELK TYPE=long
      >>ELK OUTPUT
          03 p2 pic 9(5).
      >>ELK INPUT 
      >>ELK OUTPUT
      >>ELK TYPE=long
          03 p3 pic 9(5).
```
