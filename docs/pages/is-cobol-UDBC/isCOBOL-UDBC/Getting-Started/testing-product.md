### Testing the product using sample data

#### File Server startup

isCOBOL UDBC requires isCOBOL File Server to be up and running.

The isCOBOL File Server is provided along with isCOBOL.

Assuming that you have correctly installed isCOBOL and its thin client, you can start the File Server with the following command:

```cobol
iscserver -fs
```

This guide assumes that you’re running isCOBOL UDBC on the same machine as the isCOBOL File Server.

Sample data files and EFD dictionaries are installed with isCOBOL under *sample\as\fs\odbc*. Data files have to be created using the batch file *create.bat* available in that folder.

#### Database configuration

##### Windows

Run the UDBC Configuration Tool using the link available in Start -> Programs -> isCOBOL UDBC 2025R2

Create a new database in the following way:

1. Click on *File / New Database*
2. Type the desired name (e.g. “VERYSAMPLE”)
3. Press Enter to confirm

Complete the mandatory fields as follows:
![](images/udbc-verysample.png)
Click on the *Save* button.

##### Linux/Unix

A sample configuration file is provided with the product. You will find a file named *udbc.ini* in the folder vUDBC2025R2/etc.

Copy that file either under /etc or in the user home directory.

Edit it and ensure that the entries EfdDirectory and FilePrefix point to the proper directory. The directory is *$ISCOBOL/sample/as/fs/odbc* and contains both data files and EFD dictionaries. Data files have to be created using the script create.sh available in that folder.

If a graphical desktop is available, you can manage the ini file with the following graphical utility:

```cobol
/opt/vUDBC2025R2/bin/vudbccfg
```

##### Thin Client and Code Prefix

VUDBCCFG can be used in thin client environment as well. Use this command to start it:

```cobol
iscclient -hostname <server-ip> -port <server-port> -utility COBVUDBCCFG
```

The utility will configure databases on the server machine.

#### First query on isCOBOL UDBC

##### Windows

1. Run the UDBC Server using the link available in Start -> Programs -> isCOBOL UDBC 2025R2

A correct startup will produce a similar output:

```cobol
Veryant VDBC 2025R2  Server console
Starting service:
 C:\Veryant\isCOBOL_UDBC2025R2\bin\vsqld.exe  6789
 on port 6789 ... Succesful, Mainpid is: 0
```

2. Run the Utility Shell using the link available in Start -> Programs -> isCOBOL UDBC 2025R2 -> Utility

In the Utility Shell, start the command-line SQL tool by issuing the command:

```cobol
visql -cstring jdbc:veryant:127.0.0.1:6789:VERYSAMPLE -u admin
```

Where VERYSAMPLE is the name of the database.

You will be prompted for a password, type ‘admin’.

Type a query to select data from one of the archives available in the database:

```cobol
select * from file1
GO
```

Check the result.

##### Linux/Unix

1. Run the UDBC Server with the command:

```cobol
/opt/isCOBOL_UDBC2025R2/bin/vudbcserver
```

A correct startup will produce a similar output:

```cobol
isCOBOL UDBC 2025 R2 Server console
Starting service:
 /opt/isCOBOL_UDBC2025R2/bin/vsqld  6789
 on port 6789 ... Succesful, Mainpid is: 0
```

2. Run the command-line SQL tool by issuing the command:

```cobol
/opt/isCOBOL_UDBC2025R2/bin/visql -cstring jdbc:veryant:127.0.0.1:6789:VERYSAMPLE -u admin
```

Where VERYSAMPLE is the name of the database.

You will be prompted for a password, type ‘admin’.

Type a query to select data from one of the archives available in the database:

```cobol
select * from file1
GO
```

Check the result.
