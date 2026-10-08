# Overview

isCOBOL UDBC (Universal DataBase Connectivity) allows you to integrate COBOL files into a relational database-like environment.

It enables you to apply SQL to your COBOL files resulting in data that is accessed and managed as in RDBMS systems.

Windows-based applications like Microsoft Office and Crystal Reports, applications developed in ODBC supported environments such as Visual Basic, and Java applications that use JDBC standards will be able to access your COBOL files.

The isCOBOL UDBC solution provides two products:

- The [ODBC Driver for isCOBOL File Server](./ODBC-Driver-for-isCOBOL-File-Server/ODBC-Driver-for-isCOBOL-File-Server), a ODBC driver that can be installed on every Windows machine and allows applications like Microsoft Office and Crystal Reports to access your COBOL files. This solution is preferable in most of the cases as it’s the simplest to set up.

- The [isCOBOL UDBC](./isCOBOL-UDBC/iscobol-udbc) software kit, that is composed of a SQL Server engine, a command line SQL client, a ODBC driver and a JDBC driver. This solution is usually suggested when the clients are not Windows or, more generally speaking, when a JDBC access is required.
