### cttrnmod

The cttrnmod changes the transaction mode.

Usage

```shell
cttrnmod (set <tranmode>|get) (-d <database>|-f <filelist>)
                [-u <userid>] [-p <password>] [-s <servername>] [-n <sect>]

options:
  set <tranmode>   Set the transaction mode to one of the following:
                      T  Full Transaction Control
                      P  Partial Transaction Control (No Recoverability)
                      N  No Transaction Control (No Recoverability)
                repl=on  Enable replication (requires full transaction control)
               repl=off  Disable replication

                   The following extended header attributes may also be set:
                     {+,-}R  {Enable,Disable} Restorable deletes
                     {+,-}C  {Enable,Disable} Transaction controlled deletes

  get              Display the current transaction mode.
  -d <database>    Operate on all files in the c-tree database <database>.
  -f <filename>    Operate on all files listed in the file <filelist>.
  -u <userid>      Specify c-tree user ID.
  -p <password>    Specify c-tree user password.
  -s <servername>  Specify c-tree Server name to connect to. Default: FAIRCOMS
  -n <sect>        Specify node sector size. Default: 64 (PAGE_SIZE=8192)
```
