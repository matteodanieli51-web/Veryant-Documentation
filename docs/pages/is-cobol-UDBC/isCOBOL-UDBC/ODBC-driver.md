## ODBC Driver for UDBC SQL Server

isCOBOL UDBC is provided with an ODBC driver that is installed along with the product on the Windows platform

After the installation, you can create a DSN by following these steps:

1. Open Control Panel, Administrative Tools, ODBC Data Sources
2. Switch between User and System pages depending on the type of DSN you wish to create.
3. Click on the "Add" button
4. Choose "Veryant UDBC Driver" from the list of drivers

**Note** - if you’re running the 32 bit UDBC on a 64 bit Windows, you have to open the 32 bit ODBC manager.

The following panel will appear

![](images/UDBCodbc.png)

1. Compile the fields as follows:

| | |
| --- | --- |
| Data Source Name | a name of your choice, it will be used by ODBC clients to connect |
| Data Source Name | a name of your choice, it will be used by ODBC clients to connect |
| Server Address | IP or name of the computer where UDBC Server is started and listening |
| Port Number | port where UDBC Server is listening (default is 6789) |
| Database Name | name of the UDBC database you want to connect |
| Password request | reserved for future use, can be left empty |
| Font | charset. Possible values are "ANSI" and "OEM". If empty, "ANSI" is assumed |
| | |
