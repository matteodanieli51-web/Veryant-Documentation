## C$JUSTIFY

The C$JUSTIFY library routine changes the alignment of a data item's content.

### Syntax:

```cobol
 CALL "C$JUSTIFY" USING text
                        alignment
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *text* | PIC X(n) | Specifies the text to be justified.<br>**Note -** altough the routine was designed to justify text strings in alphanumeric data items, it can be used also to justify the value of a numeric-edited data item. |
| *alignment* | PIC X(1) | Specifies a value representing the justification alignment. Valid values are:<br>"L" 	Left justified.<br>"C" 	Centered.<br>"R" 	Right justified.<br>If this parameter is omitted, then "R"  is assumed.<br>If this parameter contains an invalid value, then "L"  is assumed. |

### Examples:

**Example -** Justify a string Center, Right and then Left

```cobol
working-storage section.
77 str1   pic x(10) value "hello".
77 ruler  pic x(10) value "1234567890".
...
 procedure division.
...
   display ruler
   display str1
   call "c$justify" using str1 "C"
   display str1
   call "c$justify" using str1 "R"
   display str1
   call "c$justify" using str1 "L"
   display str1.
```
