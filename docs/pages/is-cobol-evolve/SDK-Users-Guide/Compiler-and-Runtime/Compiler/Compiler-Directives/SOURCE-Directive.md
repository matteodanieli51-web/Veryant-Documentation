#### SOURCE Directive

The SOURCE directive sets the format of the source code.

```cobol
>> SOURCE FORMAT IS { FIXED    }
                    { FREE     }
                    { PREVIOUS }
                    { TERMINAL }
                    { VARIABLE }
```

##### Syntax

1. The IS word is optional.
2. FIXED is ANSI format.
3. FREE is Free format.
4. PREVIOUS restores the format that was set before the last SOURCE directive.
5. TERMINAL is Terminal format.
6. VARIABLE is Variable format.

##### General rules

1. The SOURCE FORMAT directive indicates that the source text or library text following the directive and continuing through a subsequent SOURCE FORMAT directive shall be treated as fixed form if FIXED is specified, as terminal form if TERMINAL is specified, as variable form if VARIABLE is specified or as free form if FREE is specified. See [Source Formats](\) for more information about the different source formats.
2. The default reference format of a compilation group is fixed form.
3. The default reference format of library text is the reference format that was in effect for the COPY statement that resulted in processing of this library text.
4. If a SOURCE FORMAT directive is specified in library text, the specified format shall be in effect until another SOURCE FORMAT directive is encountered or the end of the library text is reached. When the processing of that library text is completed, the reference format shall revert to the reference format that was in effect for the COPY statement that resulted in processing of that library text.
5. This directive overrides [-sa](../Compiler-Options#sa), [-sf](../Compiler-Options#sf), [-smat](../Compiler-Options#smat), [-st](../Compiler-Options#st) and [-sv](../Compiler-Options#sv) compiler options.

##### Alternative syntax

The following equivalent syntax is supported for compatibility:

```cobol
$SET SOURCEFORMAT { FIXED    }
                  { FREE     }
                  { PREVIOUS }
                  { TERMINAL }
                  { VARIABLE }
```

The dollar sign must appear in the source indicator area.

**Note** - with the FREE format the $ sign is not recognized as directive marker, so no other directive marked with the $ sign should be specified after $set sourceformat"free" or \>>SOURCE FORMAT FREE.

##### Example

The source code of the following program will be treated according to the FREE format rules:

```cobol
           >>SOURCE FORMAT FREE
       program-id. eg001.
        ...
```
