## The faircom executable command-line

The faircom executable accepts configuration information from the command-line in addition to the settings and configuration files. Configuration keywords and values listed as command-line arguments take affect before the standard configuration file, *ctsrvr.cfg*.

All valid configuration file keywords are supported and may be listed on the command-line followed by an appropriate value. No special switch symbols or syntax is required. Simply enter each keyword followed by a value as follows:

```cobol
faircom FUNCTION_MONITOR YES LOCAL_DIRECTORY C:\MYDATA\
```

To specify the name and location of your server configuration file, ctsrvr.cfg, when launching the c-tree Server from the command-line, use the command-line keyword CTSRVR_CFG followed by a fully qualified configuration file name as follows:

```cobol
faircom CTSRVR_CFG C:\myServer\ctsrvr.cfg
```

4. The CTSRVR_CFG command line keyword is typically used when running two Servers on the same machine.
