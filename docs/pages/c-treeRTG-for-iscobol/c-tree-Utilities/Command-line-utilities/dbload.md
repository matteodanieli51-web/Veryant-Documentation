### dbload

The dbload utilityloads records from an input data file into tables of a c-tree SQL database.

Usage:

```shell
dbload -f commands_file [options] database_name
```

Where:

- *command_file* is the script file containing the load commands. Consult [http://www.faircom.com/doc/isql/](http://www.faircom.com/doc/isql/) (Data Load Utility: dbload -> The Commands File) for details on this kind of files. The following snippet shows a sample command_file:

  ```shell
       DEFINE RECORD ord_rec AS
           ( ord_no, item_name, date, item_qty ) FIELD DELIMITER ' ' ;
       FOR EACH RECORD ord_rec FROM ord_in
           INSERT INTO ADMIN.orders (order_no, product, order_date, qty)
           VALUES (ord_no, item_name, date, item_qty) ;
       NEXT RECORD
  ```

- *database_name* is the name of the destination database
- *options* can be one or more of the following:
  - *-u user_name*: user name to connect to the database.
  - *-a password*: password to connect to the database.
  - *-z maximum multiple inserts*: maximum number of records to be inserted at one time in each bulk insert (used to improve performance)
  - *-l logfile*: the file into which the error logging is done. stderr is the default.
  - *-b badfile*: the file into which the bad rows that were not loaded, are written. By default badfile is put in the current directory.
  - *-c commit_frequency*: the specified number of records before committing the transaction. The default frequency is 100 records.
  - *-e maxerrs*: the maximum number of tolerable errors. The default number is 50 errors.
  - *-s skipcount*: skip the specified number of rows in the first data file. If multiple files are specified, the rows are skipped only in the first file. The default is 0.
  - *-m maxrows*: stop storing rows at the specified number.

*-n*: parse the commands file and display errors, if any, without doing the database load.
