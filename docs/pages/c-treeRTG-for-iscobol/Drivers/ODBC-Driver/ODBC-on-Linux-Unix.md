### ODBC on Linux/Unix

Unix platforms support various driver managers. One of the most common managers is the open source unixODBC library.

#### Setting up unixODBC

In this chapter we provide a step-by-step guide on how to install unixODBC on a Debian-based Linux server (i.e. Linux Ubuntu) and configure a DSN that points to the c-tree server running on the localhost.

1. install unixODBC if not already present in the system:

```shell
sudo apt install unixodbc
```

2. create or edit the file */etc/odbcinst.ini* adding a section that describes the driver; i.e.

```ini
[Faircom ODBC Driver]
Driver=/home/veryant/c-treeRTG_v5.1.1/drivers/ctree.drivers/lib/libctodbc.so
```

3. create or edit the file */etc/odbc.ini* to describe the DSN; i.e.

```ini
[ctreeSQL]
Driver=Faircom ODBC Driver
Host=127.0.0.1
Database=ctreeSQL
Service=6597
```

4. optionally add settings for fetch size and query timeout; i.e.

```ini
[ctreeSQL]
Driver=Faircom ODBC Driver
Host=127.0.0.1
Database=ctreeSQL
Service=6597
Default Fetch Size=100
Default Query Timeout=10
```

5. run the odbcinst command to make the two ini files current; e.g.

```ini
sudo odbcinst -i -d -f /etc/odbcinst.ini
sudo odbcinst -i -s -l -f /etc/odbc.ini
```

6. set the ODBCINI environment variable to point /etc/odbc.ini; e.g.

```ini
export ODBCINI=/etc/odbc.ini
```

#### Testing the DSN

You can use the isql utility installed along with c-tree to test the DSN.

```ini
cd /home/veryant/c-treeRTG_v5.1.1/drivers/ctree.drivers/bin
./isql ctreeSQL ADMIN ADMIN
```

If the connection is successful, run some SQL query to interact with c-tree data.

#### Enabling tracing

With unixODBC, tracing can be enabled by adding the following to */etc/odbcinst.ini*:

```ini
[ODBC]
Trace     = Yes
TraceFile = /tmp/mytrace.log
```
