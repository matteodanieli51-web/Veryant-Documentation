### Compiler Directives

The compiler directives can alter the behavior of the compiler.

When the source format is fixed or terminal, a compiler directive shall be written in the program-text area and may be followed only by space characters and an optional inline comment. When the reference format is free-form, a compiler directive may be followed only by space characters and an optional inline comment. When the alternative syntax is used, a compiler directive can be followed by a dot.

The universal marker for every directive is a pair of greater than signs (>>). The directive name and value must be spcified after this marker. The marker can appear in every column of the source line except the sequence number area (columns 1 to 6) of the Fixed source format.

Some directives can also be specified with an alternative marker, supported for compatibility with other COBOLs. Refer to the documentation of each specific directive to know which markers are supported for that directive.

Specific directives are described next.
