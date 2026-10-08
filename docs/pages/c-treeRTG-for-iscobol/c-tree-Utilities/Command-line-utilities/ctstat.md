### ctstat

The ctstat utility is used to display statistics collected by the c-tree Server. ctstat, provides valuable real time monitoring of critical server operations in the areas of cache usage, disk I/O, open files, established client connections, file locks, and transactions.

Usage:

```shell
usage: ctstat  report_type [-s svn] [-u uid] [-p upw] [-i int [cnt]] [-h frq]
               [-d] [-m] [-t]

 reports:
  -vas             Admin-System Report
  -vts             Tivoli-System Report
  -vaf file...     Admin-File Report
  -vtf file...     Tivoli-File Report
  -vau user...     Admin-User Report by User Name
  -vah handle...   Admin-User Report by User Handle
  -func            Function Timing Report
  -funcfile        Function Timing By File Report
  -userinfo        User Report with stats from USERINFO() function
  -ISAM            ISAM Activity Report
  -sql             SQL Activity Report
  -text            System Activity Report
  -file [csv]      File Activity Report
  -iotime on|off   Turn disk I/O call timing on or off
  -wrktime on|off  Turn function call timing on or off

 options:
  -s svn           c-tree Server name
  -u uid           User name
  -p upw           User password
  -i int [cnt]     Pause int seconds for optional cnt times
  -h frq           Print a description header every frq outputs
  -d               Show cache stats as delta
  -m               Show memory file stats when using -vaf report
  -t               Output timestamp with header
```

For additional information on the output of ctstat, consult the c-tree Server Administrator's Guide.
