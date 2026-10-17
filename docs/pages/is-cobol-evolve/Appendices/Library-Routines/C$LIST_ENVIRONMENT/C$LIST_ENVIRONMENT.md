## C$LIST_ENVIRONMENT

The C$LIST_ENVIRONMENT library routine provides a number of functions to retrieve a list of Framework properties that are currently set in the environment.

### Syntax:

```cobol
 CALL "C$LIST_ENVIRONMENT" USING opCode
                                 parameters
                          GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [LISTENV-OPEN](./LISTENV-OPEN) | Open a list of configuration properties. |
|  | [LISTENV-NEXT](./LISTENV-NEXT) | Retrieve the next property in the list. |
|  | [LISTENV-CLOSE](./LISTENV-CLOSE) | Close a previously open list of properties. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** The following program displays on the system output the list of all environment variables currently set.

```cobol
       PROGRAM-ID. listenv.
       WORKING-STORAGE SECTION.
       copy "iscobol.def".
       77 variableName  pic x any length.
       77 variableValue pic x any length.
       77 listenvHandle usage handle.
       PROCEDURE DIVISION.
       mainLogic.
           CALL "C$LIST-ENVIRONMENT" using LISTENV-OPEN
                                   giving listenvHandle
           if listenvHandle not = 0
              perform until exit
                 CALL "C$LIST-ENVIRONMENT" using LISTENV-NEXT
                                               listenvHandle
                                               variableName
                 if variableName = spaces
                    exit perform
                 else
                    CALL "C$GETENV" using variableName, variableValue
                    display variableName "=" variableValue upon sysout
                 end-if
              end-perform
              CALL "C$LIST-ENVIRONMENT" using LISTENV-CLOSE,
                                              listenvHandle
           end-if
           goback
           .
```
