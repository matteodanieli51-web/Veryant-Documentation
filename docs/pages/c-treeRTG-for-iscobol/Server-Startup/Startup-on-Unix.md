## Startup on Unix

The Unix version of c-tree does not show any graphical window. All messages are printed on the console.

To start the server in foreground mode, change to the “server” directory and launch the following command:

```cobol
./faircom
```

To start the server in background mode, change to the “server” directory and launch the following command:

```cobol
./faircom &
```

The Unix "no hang up" option may also be used to keep the c-tree Server from being terminated if the user starting the c-tree Server logs off the system. For example,

```cobol
nohup faircom &
```

To stop the server, you can use either ctadmn or ctstop utilities, that will be discussed later.

See [The faircom executable command-line](./The-faircom-executable-command-line) for information about the available command-line options.

### Starting multiple Servers on the same machine

In this example we show how to start two c-tree Server processes listening on different ports on the same machine.

1. Make a copy of the existing ctsrvr.cfg configuration file, e.g.

```cobol
cd /opt/c-treeRTG v5.1.1/config
cp ctsrvr.cfg ctsrvr2.cfg
```

2. Edit the ctsrvr2.cfg configuration file and change the following entries to different unique values:

- SERVER_NAME
- SERVER_PORT
- SQL_PORT
- LOCAL_DIRECTORY
- LOG_EVEN
- LOG_ODD
- START_EVEN
- START_ODD

3. Start the two processes as follows:

```cobol
cd /opt/c-treeRTG v5.1.1/server
./faircom CTSRVR_CFG /opt/c-treeRTG v5.1.1/config/ctsrvr.cfg &
./faircom CTSRVR_CFG /opt/c-treeRTG v5.1.1/config/ctsrvr2.cfg &
```

**Note** - On Unix platforms, the c-treeRTG server shares a directory with the c-treeRTG clients when they communicate via the shared memory protocol. It is possible to configure the c-treeRTG server to change the default shared memory directory with configuration keyword [SHMEM_DIRECTORY](../Configuring-the-c-tree-Server#shmem_directory). Using different shared memory directories allows running multiple c-treeRTG servers with the same name on the same machine. To configure the c-treeRTG clients to set the shared memory directory, it is necessary to set [iscobol.file.index.ctshmemdir](../Configuring-the-client/Configuring-the-client#file_index_ctshmemdir) in the runtime configuration file or [ctshmemdir](../Configuring-the-client/Configuring-the-client-through-CTREE_CONF/instance#ctshmemdir) in the CTREE_CONF file.
