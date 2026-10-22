### dbdump

The dbdump utility writes data from a c-tree SQL Server file to an output file.

Usage:

```shell
dbdump -f commands_file [-u user_name] [-a password] [-n] database_name
```

Where:

- *command_file* is the script file containing the dump commands. Consult [http://www.faircom.com/doc/isql/](http://www.faircom.com/doc/isql/) (Data Unload Utility: dbdump -> The Commands File) for details on this kind of files. The following snippet shows a sample command_file:

  ```shell
       DEFINE RECORD ord_rec AS
          ( ord_no, item_name, date, item_qty ) FIELD DELIMITER ' ' ;
       FOR  RECORD ord_rec dump into ord_dat
       USING SELECT order_no, product, order_date, qty
       FROM items;
  ```

- *database_name* is the name of the destination database
- *options* can be one or more of the following:
  - *-u user_name*: user name to connect to the database.
  - *-a password*: password to connect to the database.

*-n*: parse the commands file and display errors, if any, without doing the database load.
