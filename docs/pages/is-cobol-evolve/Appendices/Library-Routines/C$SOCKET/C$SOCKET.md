## C$SOCKET

The C$SOCKET library routine provides a number of functions to manage sockets.

### Syntax:

```cobol
 CALL "C$SOCKET" USING opCode
                       parameters
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Function to be executed. Valid values, defined in [issocket.def](../../Copybooks/issocket.def), are: |  |
|  | [CSOCKET-CREATE-SERVER](./CSOCKET-CREATE-SERVER) | Creates a new server socket on specific port |
|  | [CSOCKET-ACCEPT](./CSOCKET-ACCEPT) | Accepts connections |
|  | [CSOCKET-CREATE-CLIENT](./CSOCKET-CREATE-CLIENT) | Creates a new client connecting to a server socket |
|  | [CSOCKET-CLOSE](./CSOCKET-CLOSE) | Closes a socket |
|  | [CSOCKET-WRITE](./CSOCKET-WRITE) | Writes data into socket |
|  | [CSOCKET-READ](./CSOCKET-READ) | Read data from socket |
|  | [CSOCKET-READ](./CSOCKET-READ) | Flush socket data |
|  | [CSOCKET-EMPTY](./CSOCKET-EMPTY) | Empty socket |
|  | [CSOCKET-GETHOSTNAME](./CSOCKET-GETHOSTNAME) | Returns the name of the pc hosting the socket |
|  | [CSOCKET-REMOTE-NAME](./CSOCKET-REMOTE-NAME) | Returns the machine name associated to the socket |
|  | [CSOCKET-REMOTE-ADDR](./CSOCKET-REMOTE-ADDR) | Returns the IP address associated to the socket |
|  | [CSOCKET-GETREMOTEADDRESS](./CSOCKET-GETREMOTEADDRESS) | Returns machine name, IP and port associated to the socket |
|  | [CSOCKET-LAST-ERROR](./CSOCKET-LAST-ERROR) | Returns the error-code of last operation |
|  | [CSOCKET-NEXT-READ](./CSOCKET-NEXT-READ) | Returns the next readable socket |
| *parameters* | Parameters depend on the opcode. |  |

**Note:** Acucobol-GT op-codes names having the prefix "AGS-" instead of "CSOCKET-" are supported for compatibility.

### Return code:

*returnCode* can be any signed numeric data item. The meaning depends on the opcode.

### Examples:

**Example -** Socket server program to listen messages from different clients and respond to them

```cobol
       program-id. sockserver.

       working-storage section.
       copy "issocket.def".

       78  data-len        value 1024.
       77  sock-hnd-1      usage handle.
       77  sock-hnd-2      usage handle.
       77  client-data     pic x(data-len).
       77  bytes-read      pic s9999.
       77  sock-timeout    signed-int value -1.
       77  sock-thread     pic 9(4).

       procedure division chaining sock-thread.
       main.
           call "c$socket" using csocket-create-server, sock-thread
                           giving sock-hnd-1.
           if sock-hnd-1 = null
              perform exit-program
           end-if.

           perform until client-data(1:9) = "sockclose"
               call "c$socket" using csocket-next-read, sock-hnd-1,
                                     sock-timeout giving sock-hnd-2
               move sock-hnd-2 to return-code
               if return-code = -1
                   call "c$socket" using csocket-close, sock-hnd-1
                   call "c$sleep" using 4
                   go to main
               end-if
               if return-code = 0
                   exit perform
               end-if
               if sock-hnd-2 = sock-hnd-1
                   call "c$socket" using csocket-accept, sock-hnd-1
                   exit perform
               end-if
               call "c$socket" using csocket-read, sock-hnd-2,
                                     client-data, data-len
                               giving bytes-read
               if bytes-read = data-len
                   if client-data(1:9) not = "sockclose"
                       perform process-request
                   end-if
               else
                   if bytes-read = -1
                       call "c$socket" using csocket-close, sock-hnd-2
                   else
                       move "01 Resend data" to client-data
                       call "c$socket" using csocket-write, sock-hnd-2,
                                       client-data, data-len
                   end-if
               end-if
           end-perform.
           perform exit-program.

       exit-program.
           goback.

       process-request.
            move "00 data ok" to client-data
            call "c$socket" using csocket-write, sock-hnd-2,
                                  client-data, data-len.
```
