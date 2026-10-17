## Offline Backup

c-tree files can be copied using external tools and commands without side effects only when the c-tree server is either down or quiesced. Copying the files while the c-tree server is operational might lead to a corrupted backup copy.

To perform an offline backup with the c-tree server down, follow these steps:

1. launch the [ctadmn](../c-tree-Utilities/Command-line-utilities/ctadmn/ctadmn) command line utility and log in with administrator credentials
2. choose option 7 (Stop Server) and confirm when prompted. This message will appear

```shell
Server Termination Initiated.
 
Session Completed.
```

The shutdown can be activated also with a less interactive command line utility, [ctstop](../c-tree-Utilities/Command-line-utilities/ctstop).

3. copy the files using system commands or third party utilities
4. restart the c-tree server

To perform an offline backup with the c-tree server quiesced, follow these steps:

1. launch the [ctadmn](../c-tree-Utilities/Command-line-utilities/ctadmn/ctadmn) command line utility and log in with administrator credentials
2. choose option 8 (Quiesce Server) and wait for the following message to appear:

```shell
Successful Quiesce.
 
It is now safe to perform a system backup of c-tree Server's controlled files.
Press RETURN once the backup is completed to resume the c-tree Server.
 
Press RETURN to continue...
```

**Note** - while the server is quiesced, all client processes (including COBOL programs) block at the next i-o operation and wait for the ctsrvr to finish the backup.

The quiesce mode can be activated also with a less interactive command line utility, [ctquiet](../c-tree-Utilities/Command-line-utilities/ctquiet).

3. copy the files using system commands or third party utilities
4. return to the ctadmn screen and press ENTER
