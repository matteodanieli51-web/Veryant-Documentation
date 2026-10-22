## A$LIST_USERS

The A$LIST_USERS library routine provides a number of functions to retrieve the list of users currently connected to the Application Server.

Note - The list will include only yourself if the current thin client session is running in a separate task due to the [iscobol.as.multitasking](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting.

### Syntax:

```cobol
 CALL "A$LIST_USERS" USING opCode
                           parameters
                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [LISTUSR-OPEN](./LISTUSR-OPEN) | Open the list. |
|  | [LISTUSR-NEXT](./LISTUSR-NEXT) | Retrieve the next item in the list. |
|  | [LISTUSR-CLOSE](./LISTUSR-CLOSE) | Close a previously open list. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

The definition and meaning of the *returnCode* depend on the opcode.

### Examples:

**Example -** Get the list of users connected to an Application Server. Call a$list-users to open the list, loop through all the next users and then close the list

```cobol
working-storage section.
copy "iscobol.def".
77  usrlist                 handle.
77  usr-id                  pic s9(5).
77  usr-name                pic x any length.
77  usr-addr                pic x any length.
77  usr-pcname              pic x any length.
77  usr-tid                 pic x any length.
77  usr-prog                pic x any length.
77  usr-type                pic 9.
77  usr-login               pic x(16).
77  usr-count               pic 9(5).
77  usr-custom-info         pic x any length.
...
procedure division.
...
get-users-list.
    call "a$list-users" using listusr-open
                       giving usrlist
    if usrlist < 1
       display message "Error on User Count!"
       exit paragraph
    end-if
    move 0 to usr-count
    perform until 1 = 2
       call "a$list-users" using listusr-next
                                 usrlist
                                 usr-id
                                 usr-name
                                 usr-addr
                                 usr-pcname
                                 usr-tid
                                 usr-prog
                                 usr-type
                                 usr-login
                                 usr-info
       if return-code = 0
          exit perform
       end-if
       display "User ID: " usr-id "  User Name: " usr-name
       add 1 to usr-count
    end-perform
    call "a$list-users" using listusr-close
                              usrlist
    display message "Number of users connected : " usr-count
    .
```
