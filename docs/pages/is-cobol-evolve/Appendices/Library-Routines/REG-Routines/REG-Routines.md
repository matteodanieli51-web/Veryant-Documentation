## REG Routines

The REG library routines allow access to Windows registry.

| Routine | Feature |
| --- | --- |
| [REG_CLOSE_KEY, DISPLAY_REG_CLOSE_KEY](./REG_CLOSE_KEY) | closes a key |
| [REG_CREATE_KEY, DISPLAY_REG_CREATE_KEY](./REG_CREATE_KEY) | creates a key |
| [REG_CREATE_KEY_EX, DISPLAY_REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX) | creates a key |
| [REG_DELETE_KEY, DISPLAY_REG_DELETE_KEY](./REG_DELETE_KEY) | deletes a key |
| [REG_DELETE_VALUE, DISPLAY_REG_DELETE_VALUE](./REG_DELETE_VALUE) | deletes a value |
| [REG_ENUM_KEY, DISPLAY_REG_ENUM_KEY](./REG_ENUM_KEY) | lists subkeys of a key |
| [REG_ENUM_VALUE, DISPLAY_REG_ENUM_VALUE](./REG_ENUM_VALUE) | lists values of a key |
| [REG_OPEN_KEY, DISPLAY_REG_OPEN_KEY](./REG_OPEN_KEY) | opens a key |
| [REG_OPEN_KEY_EX, DISPLAY_REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) | opens a key |
| [REG_QUERY_VALUE, DISPLAY_REG_QUERY_VALUE](./REG_QUERY_VALUE) | retrieve the default value of a key |
| [REG_QUERY_VALUE_EX, DISPLAY_REG_QUERY_VALUE_EX](./REG_QUERY_VALUE_EX) | retrieves a specific value of a key |
| [REG_SET_VALUE, DISPLAY_REG_SET_VALUE](./REG_SET_VALUE) | sets the default value of a key |
| [REG_SET_VALUE_EX, DISPLAY_REG_SET_VALUE_EX](./REG_SET_VALUE_EX) | sets a specific value of a key |

### Examples:

**Example -** Perform various operations in the HKEY_CURRENT_USER key

```cobol
       WORKING-STORAGE SECTION.
       copy "iscoblib.def".
       01  open-key-handle         usage unsigned-long.
       01  subkey-handle           usage unsigned-long.
       77  status-code             pic 9(3).
       01  subkey-to-be-created    pic x(40).
       01  subkey-to-be-opened     pic x(40).
       01  subkey-to-be-deleted    pic x(40).
       01  subkey-name             pic x(40).
       01  value-name              pic x(40).
       01  name-size               usage unsigned-long.
       01  data-type               usage unsigned-long.
       01  value-data              pic x(40).
       01  data-size               usage unsigned-long.
       01  ndx                     usage unsigned-long.
       77  idx                     pic 9(3).


       PROCEDURE DIVISION.
       MAIN.
           perform OPEN-KEY
           perform ENUM-KEY
           perform CREATE-KEY
           perform SET-VALUE
           perform QUERY-VALUE
           perform DELETE-VALUE
           perform DELETE-KEY
           perform CLOSE-KEY
           goback
           .

       OPEN-KEY.
           display "_OPEN-KEY"
           move HKEY_CURRENT_USER to open-key-handle
           call "REG_OPEN_KEY" using open-key-handle
                                     "SOFTWARE"
                                     subkey-handle
                              giving status-code
           if status-code not = 0
              display "Error opening HKEY_CURRENT_USER/SOFTWARE"
              display "Error code: " status-code
              goback
           end-if
           .

       ENUM-KEY.
           display "_ENUN-KEY"
           set name-size to size of subkey-name
           perform varying ndx from 1 by 1 until 1 = 2
              call "REG_ENUM_KEY" using  subkey-handle
                                         ndx
                                         subkey-name
                                         name-size
                                  giving status-code

              if status-code not = 0
                 exit perform
              end-if

              display subkey-name
           end-perform
           .


       CREATE-KEY.
           display "_CREATE-KEY"
           move HKEY_CURRENT_USER to open-key-handle
           move "iscobol-test-key"  to subkey-to-be-created
           call "REG_CREATE_KEY" using open-key-handle
                                       subkey-to-be-created
                                       subkey-handle
                                giving status-code
           if status-code not = 0
              display "Error creating a new test key"
              display "Error code: " status-code
           end-if
           .

       SET-VALUE.
           display "_SET-VALUE"
           move spaces to value-name, value-data
           move REG_SZ to data-type
           move "my custom value" to value-name
           move "Y"               to value-data
           move 1 to data-size

           call "REG_SET_VALUE_EX" using subkey-handle
                                         data-type
                                         value-data
                                         data-size
                                         value-name
                                  giving status-code
           if status-code not = 0
              display "Error creating value"
              display "Error code: " status-code
           else
              perform ENUM-VALUES
           end-if
           .

       QUERY-VALUE.
           display "_QUERY-VALUE"
           move "my custom value" to value-name
           set data-size to size of value-data
           call "REG_QUERY_VALUE_EX" using subkey-handle
                                           value-name
                                           data-type
                                           value-data
                                           data-size
                                    giving status-code

           if status-code not = 0
              display "Error getting value information"
              display "Error code: " status-code
           else
              display "Value name: " value-name
              display "Value data: " value-data
           end-if
           .

       ENUM-VALUES.
           display "_ENUM-VALUES"
           perform varying ndx from 1 by 1 until 1 = 2
              set name-size to size of value-name
              set data-size to size of value-data
              call "REG_ENUM_VALUE" using subkey-handle
                                          ndx
                                          value-name
                                          name-size
                                          data-type
                                          value-data
                                          data-size
                                   giving status-code
              if status-code not = 0
                 exit perform
              end-if
              display value-name
           end-perform
           .

       DELETE-VALUE.
           display "_DELETE-VALUE"
           move "my custom value" to value-name
           call "REG_DELETE_VALUE" using subkey-handle
                                         value-name
                                  giving status-code
           if status-code not = 0
              display "Error deleting value"
              display "Error code: " status-code
           else
              perform ENUM-VALUES
           end-if
           .

       DELETE-KEY.
           display "_DELETE-KEY"
           move "iscobol-test-key" to subkey-to-be-deleted

           call "REG_DELETE_KEY" using open-key-handle
                                       subkey-to-be-deleted
                                giving status-code

           if status-code not = 0
              display "Error deleting the test key"
              display "Error code: " status-code
           end-if
           .

       CLOSE-KEY.
           display "CLOSE-KEY"
           call "REG_CLOSE_KEY" using open-key-handle
                               giving status-code
           .
```
