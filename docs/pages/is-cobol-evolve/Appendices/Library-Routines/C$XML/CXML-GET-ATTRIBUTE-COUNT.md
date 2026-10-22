### CXML-GET-ATTRIBUTE-COUNT

The CXML-GET-ATTRIBUTE-COUNT function retrieves the number of attributes of an element.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-ATTRIBUTE-COUNT
                    handle
             GIVING attrCount
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-ATTRIBUTE-COUNT* | Constant |  |
| *handle* | USAGE HANDLE | A XML element handle. |

#### Return code:

If the return-code is zero, it can mean both that there are no elements, or that the passed handle is not a valid handle. If it's greater than zero, it is the attribute count.
