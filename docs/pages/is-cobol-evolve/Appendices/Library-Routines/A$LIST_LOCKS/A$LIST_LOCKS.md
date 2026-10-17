## A$LIST_LOCKS

The A$LIST_LOCKS routine returns the list of active locks in an Application Server environment.

The list of locks is available only if [iscobol.file.lock_manager \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set in the server configuration.

isCOBOL supports two types of lock:

- LOCK READ: acquired by locking records in a file open in INPUT mode. There can be more than one lock of this type on the same record.
- LOCK WRITE: acquired by locking records in a file open in I-O or OUTPUT mode. There can be only one lock of this type on the same record.

The routine lists both of them.

It’s possible to filter the information and retrieve all the locks associated to a specific client (see *threadID* in [LISTLOCK-OPEN](./LISTLOCK-OPEN)) or all the locks associated to a specific file (see *fileName* in [LISTLOCK-OPEN](./LISTLOCK-OPEN)).

Note - The list will include only your locks if the current thin client session is running in a separate task due to the [iscobol.as.multitasking](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) setting.

### Syntax:

```cobol
 CALL "A$LIST_LOCKS" USING opCode
                           parameters
                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | The function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [LISTLOCK-OPEN](./LISTLOCK-OPEN) | Open the list. |
|  | [LISTLOCK-NEXT](./LISTLOCK-NEXT) | Retrieve the next item in the list. |
|  | [LISTLOCK-CLOSE](./LISTLOCK-CLOSE) | Close a previously open list. |
| *parameters* | Parameters depend on the opcode. |  |

### Return-Code:

The definition and meaning of the *returnCode* depend on the opcode.

### Examples:

**Example -** Open the list of locks for an Application Server, loop through all the locks to show them and close the list after that.

```cobol
working-storage section.
copy "iscobol.def".
77  locklist                handle.
77  th-id                   pic 9(5).
77  usr-id                  pic x(3).
77  usr-name                pic x(32).
77  usr-addr                pic x(32).
77  usr-pcname              pic x(32).
77  usr-tid                 pic x(32).
77  usr-prog                pic x(32).
77  usr-count               pic 9(5).
77  lock-count              pic 9(5).
77  lock-filename           pic x(50).
77  lock-tid                pic 9(5).
77  lock-open-mode          pic 9(5).
77  lock-mode               pic 9(5).
77  lock-key-val            pic x(256).
77  lock-key-len            pic 9(3).

get-locks-list.
   initialize lock-filename lock-tid
   call "a$list-locks" using listlock-open
                             null
                             lock-filename
                             lock-tid
                      giving locklist

   if locklist < 1
      display message
              "No Locks Found (verify iscobol.file.lock_manager)"
      exit paragraph
   end-if
   move 0 to lock-count
   perform until 1 = 2
      call "a$list-locks" using listlock-next
                                locklist
                                lock-filename
                                lock-tid
                                lock-open-mode
                                lock-mode
                                lock-key-val
                                lock-key-len

      if return-code = 0
         exit perform
      end-if
      add 1 to lock-count
      | to get user information from lock-tid
      call "a$get-user" using lock-tid
                              usr-id
                              usr-name
                              usr-addr
                              usr-pcname
                              usr-prog
   end-perform
   call "a$list-locks" using listlock-close
                             locklist
   display message "Number of locks : " lock-count.
```
