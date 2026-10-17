## A$USERINFO

In an Application Server environment, A$USERINFO sets and retrieves custom information shared between all connected clients.

Note - It’s not possible to share information with other connected clients if the current thin client session is running in a separate task due to the [iscobol.as.multitasking](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting.

### Syntax:

```cobol
 CALL "A$USERINFO" USING opCode
                         parameters
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [AUSERINFO-SET](./AUSERINFO-SET) | Stores custom information for the current client. |
|  | [AUSERINFO-GET](./AUSERINFO-GET) | Retrieves custom information for the current client or for a specific client. |
|  | [AUSERINFO-CLEAR](./AUSERINFO-CLEAR) | Clears the custom information for the current client. |
| *parameters* | Parameters depend on the opcode. |  |

### Examples:

**Example -** Save, restore and clear custom user data

```cobol
*> copy iscobol.def in the working-storage section
*> info-to-set is pic x(n) and contains any custom data

move "UserType=Operator1,UserLevel=A" to info-to-set
call "A$USERINFO" using auserinfo-set, info-to-set
...
*> Retrieve the custom info, user-info is pic x(n)
call "A$USERINFO" using auserinfo-get, user-info
...
*> Clear the current use custom info
call "A$USERINFO" using auserinfo-clear, user-info
```
