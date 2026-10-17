## OPERATION Directive

The OPERATION directive specifies the name of the Web Service function. By default the name matches with the program name for programs without entry points and with the entry point name for programs with entry points.

```cobol
>>ELK OPERATION=functionNname
```

or

```cobol
$ELK OPERATION=functionNname
```

or

```cobol
*(( ELK OPERATION=functionNname ))
```

or

```cobol
*>(( ELK OPERATION=functionNname ))
```

### Examples

The Web Service function will be named "vatcalculation" instead of "x0ag1".

```cobol
       Identification Division.
       Program-Id. X0AG1.
       ...
      >>ELK OPERATION=vatcalculation
       Procedure Division.
```

The Web Service function will be named "vatcalculation" instead of "op01".

```cobol
      >>ELK OPERATION=vatcalculation
       Entry "op01" using lnk-area01.
```
