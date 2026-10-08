## How to configure the DSN (File Options)

![](images/veryantOdbcFile.png)

Use the File Options dialog to turn on driver activity logging. "1" in the entry field turns logging on, "0" disables it. The log file VeryantODBC.log is created in the temp directory. You can retrieve the temp directory by callng the GetTempPath function, which looks for environment variables in the following order and uses the first path found:

- The path specified by the TMP environment variable.
- The path specified by the TEMP environment variable.
- The path specified by the USERPROFILE environment variable.
- The Windows directory.
