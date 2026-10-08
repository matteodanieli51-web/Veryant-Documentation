#### IMP MARGIN-R IS AFTER END OF RECORD Directive

The IMP MARGIN-R IS AFTER END OF RECORD directive allows AREA B to extend to the end of the line, regardless of line length, in [Fixed](\) (aka ANSI) format. The same effect can be obtained via the [-sl](\) compiler option.

```cobol
>> IMP MARGIN-R IS AFTER END OF RECORD
```

##### Example

In the following program it is possible to write code after column 72:

```cobol
           >>IMP MARGIN-R IS AFTER END OF RECORD 
       program-id. eg001.
        ...
```
