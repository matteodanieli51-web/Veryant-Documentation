# Differences between DatabaseBridge and ISAM

DatabaseBridge allows you to keep the same approach used for ISAM files despite it works on a relational database. However there are few differences between the standard ISAM and the ISAM simulated by DatabaseBridge. These differences are discussed below.

## Locks Management

To emulate the COBOL locks behavior, DatabaseBridge takes advantages of specific database features that are different from database to database.

The lock of a single record is fully supported when using Oracle, Informix, MS SQL Server, MySQL, MariaDB, DB2 and PostgreSQL.

The lock on multiple records is not officially supported. DatabaseBridge always takes one lock at a time because it re-uses the same ESQL cursor for reading a record with lock. If the program locks multiple records working, it depends on the database configuration that keeps locks alive.

Locking a whole file/table is supported when using Oracle, Informix, MS SQL Server, DB2 and PostgreSQL. MySQL and MariaDB don’t support the ability to lock a whole file/table.

The following operations are not currently supported by the DatabaseBridge. Contact Veryant if you need any of these capabilities:

- Lock between two programs in the same runtime session
- Unlock all records of all open files with UNLOCK ALL
- Unlock a record of a file with CLOSE (with lock on single record)
- Unlock all records of a file with CLOSE (with lock on multiple records)
- Unlock single record with UNLOCK (with lock on single record)
- Unlock single record with UNLOCK (with lock on multiple records)
- Unlock single record by reading another one (only with lock on single record)
- Unlock single record after REWRITE (with lock on single record)
- Unlock single record after REWRITE (with lock on multiple records)

The lock management on MySQL and MS SQL Server requires a couple of specific configuration settings that are discussed in this documentation. See [EDBI Routines for MySQL (InnoDB engine) and MariaDB](./EDBI-Routines/EDBI-Routines-for-MySQL-and-MariaDB) and [EDBI Routines for Microsoft SQL Server](./EDBI-Routines/EDBI-Routines-for-Microsoft-SQL-Server) for details.

Note: If you're working in a Application Server (Thin Client) or File Server environment and you wish to have a full support for locking features, then you may consider handling locks through the [Internal lock management](\).

## Content of locked records

When working with Isam files the content of locked records is not read unless [iscobol.file.index.lock_read_anyhow (boolean) \*](\) is set to true in your configuration. When working with DatabaseBridge data the content of locked records is always read.

To have the same behavior with Isam files when working in an Application Server (Thin Client) or a File Server environment, handle locks using [Internal lock management](\).

## Primary keys with duplicates

Unlike some ISAM file handlers, DatabaseBridge doesn’t support primary keys with the DUPLICATES clause. The EDBI routines for files that have a primary key with duplicates are not generated and an "unsupported feature" error is returned.

## Moving back and forth among duplicate alternate key values

When you change the order of read (e.g. you perform a READ NEXT after a READ PREVIOUS or a READ PREVIOUS after a READ NEXT) among duplicated values of an alternate key, the EDBI routine retrieves the first record whose key value doesn't match with the current one.

A practical example follows.

Suppose you have a file with the following content:

| Record | Record |
| --- | --- |
| Primary Key | Alt. Key |
| 1 | AAA |
| 2 | BBB |
| 3 | BBB |
| 4 | BBB |

The table below lists a series of operations and tells which record is read by ISAM file handlers like JIsam or c-tree versus the record read by DatabaseBridge:

| Operation | Record read by ISAM | Record read by DatabaseBridge |
| --- | --- | --- |
| MOVE "BBB" TO *Alt*. Key | ... | ... |
| START KEY NOT LESS *Alt*. Key | ... | ... |
| READ NEXT | 2 BBB | 2 BBB |
| READ NEXT | 3 BBB | 3 BBB |
| READ PREVIOUS | 2 BBB | 1 AAA |
