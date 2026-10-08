### ctunf1

The ctcpvf utility creates the master password verification file. It accepts optional parameters: filename (the file name to create) and password (the master password). If the parameters are not given, ctcpvf will prompt for the required information.

Usage:

```shell
ctcpvf [-c <cipher>] [-f <filename>] [-k <key>] [-s <store>][-syslevel]
```

Where:

- -c <cipher\> - Use encryption cipher <cipher\>. Supported ciphers: aes256 and aes128. Default is aes256.
- -f <filename\> - Create password verification file <filename\>. Default is ctsrvr.pvf.
- -k <key\> - Use <key\> as the master key.
- -s [<store\>] - Store key in encrypted file <store\>. Default is ctsrvr.fkf.
- -syslevel - Create encrypted store file with system-level encryption: all user accounts on the system can decrypt it.

**Note** - If you don't use the -syslevel switch, you must run the c-tree Server under the same user account that was used to run the ctcpvf utility that created the master key store file. Using the *syslevel* switch creates the master key store file so that it can be opened by any user account on that machine, which allows you to run the c-tree Server under any user account on the system.

**Note** - The c-tree Server looks for the file ctsrvr.pvf in the server binary area, so this file name should be specified. ctcpvf creates the ctsrvr.pvf file in that same directory where it is run (e.g., the *tools* directory). On launch, the server looks for ctsrvr.pvf in the server directory, so ctsrvr.pvf needs to be moved or copied to the server directory.
