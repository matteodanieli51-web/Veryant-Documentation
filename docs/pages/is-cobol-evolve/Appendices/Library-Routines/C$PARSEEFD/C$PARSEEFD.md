## C$PARSEEFD

The C$PARSEEFD routine is used to parse EFD files and retrieve information about them, giving you a way to map field description information to file record areas.

### Syntax:

```cobol
 CALL "C$PARSEEFD" USING opCode
                         parameters
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [isparseefd.def](../../Copybooks/isparseefd.def), are: |  |
|  | [PARSEEFD-PARSE](./PARSEEFD-PARSE) | parse EFD file |
|  | [PARSEEFD-GET-KEY-INFO](./PARSEEFD-GET-KEY-INFO) | Retrieve key information. |
|  | [PARSEEFD-GET-COND-INFO](./PARSEEFD-GET-COND-INFO) | Retrieve condition information. |
|  | [PARSEEFD-GET-FIELD-INFO](./PARSEEFD-GET-FIELD-INFO) | Retrieve field information. |
|  | [PARSEEFD-TEST-CONDITIONS](./PARSEEFD-TEST-CONDITIONS) | Test record conditions. |
|  | [PARSEEFD-RELEASE](./PARSEEFD-RELEASE) | Release EFD file from memory . |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** Display all fields defined in the *file1.xml* data dictionary:

```cobol
 working-storage section.
 copy "isparseefd.def".
 77 efd-handle handle.
 77 i          pic 9(5).
 77 xml-file   pic x(128).
 77 data-file  pic x(128).
 77 flags      pic 9 value 0.

 procedure division.
 main.
    move "file1.xml" to xml-file.
    call "c$parseefd" using parseefd-parse
                            xml-file
                            data-file
                            flags
                            parseefd-description
                     giving efd-handle.
    if efd-handle < 1
       display "Error: invalid EFD file"
       goback
    end-if.
    perform varying i from 0 by 1
                      until i =  parseefd-number-fields
       call "c$parseefd" using parseefd-get-field-info
                               efd-handle
                               i
                               parseefd-field-description
       display parseefd-field-name
    end-perform.
    call "c$parseefd" using parseefd-release
                            efd-handle.
    goback.
```
