## VALUE Directive

The VALUE directive allows you to specify a constant value fo the field. If the directive is used along with the INPUT or OUTPUT directives, it controls the value of the input or output parameter respectively

The value is generated as is in the bridge program, so alphanumeric values should be enclosed between quotes, otherwise they will be treated as data items that you should define outside of the bridge program tagged areas.

```cobol
>>ELK VALUE=fieldValue
```

or

```cobol
$ELK VALUE=fieldValue
```

or

```cobol
*(( ELK VALUE=fieldValue ))
```

or

```cobol
*>(( ELK VALUE=fieldValue ))
```

### Example

The field p1 will always have value 1. The field p2 will have value 1 in input. The field p3 will have value "ok" in output

```cobol
       Linkage Section.
       01 params.
      >>ELK VALUE=1
          03 p1 pic 9(5).
      >>ELK INPUT, VALUE=1
      >>ELK OUTPUT
          03 p2 pic 9(5).
      >>ELK INPUT 
      >>ELK OUTPUT, VALUE="ok"
          03 p3 pic x(2).
```
