## Usage and configuration

In this chapter we’re going to setup an asynchronous data replication between two c-tree servers.

### Transaction logging required

The c-tree replication feature uses a transaction log based facility. Your files must be under transaction control to take advantage of c-tree replication.

You can enable transaction logging in the configuration by setting [<transaction\>](../Configuring-the-client/Configuring-the-client-through-CTREE_CONF/transaction) in ctree.conf or [iscobol.file.index.transaction.logging (boolean)](../Configuring-the-client/Configuring-the-client#file_index_transaction_logging) among isCOBOL properties. This will affect new files.

Transaction logging can be applied to existing files using the [-tron](../c-tree-Utilities/Command-line-utilities/ctutil/tron) option of the [ctutil](../c-tree-Utilities/Command-line-utilities/ctutil/ctutil) utility.

### Shutdown the c-tree servers

It’s good practice to stop the involved c-tree servers before proceeding with the steps discussed below.

### Prepare the Source

No particular operation is required on the Source c-tree server. Just be sure that the installed license allows replication features.

### Prepare the Target

Be sure this second c-tree server resides in its own directory and has a [SERVER_NAME](../Configuring-the-c-tree-Server#server_name) different than the name of the Source c-tree server. For example, you can leave the default name "FAIRCOMS" in the Source c-tree server and use the name "FAIRCOMT" for the Target c-tree server.

1. Edit *config/ctsrvr.cfg*

a. provide a different SERVER_NAME, e.g. replace

```ini
SERVER_NAME FAIRCOMS
```

with

```ini
SERVER_NAME FAIRCOMT
```

b. activate the ctagent plugin by removing the leading semicolon that comments the line out:

#### Windows

```ini
PLUGIN ctagent;./agent/ctagent.dll
```

#### Linux/Unix

```ini
PLUGIN ctagent;./agent/libctagent.so
```

2. replace the content of *config/ctagent.json* with this code:

```
{
  "detached": true,
  "configurationFileList": [
     "../config/replication/ctreplagent1.cfg"
]}
```

3. edit *config/replication/ctreplagent1.cfg*

a. replace "SourceIP" with the source machine host name in the following line:

```ini
source_server FAIRCOMS@SourceIP
```

b. replace "FAIRCOMS" with "FAIRCOMT" in the following line:

```cobol
target_server FAIRCOMS@localhost
```

4. edit *config\\replication\\filter1.xml* and

a. replace ".\\ctreeSQL.dbs\\admin\_test.dat" with "\*.dat" as follows:

```
<file status="include">*.dat</file>
```

b. add a purpose for replicating modifications on existing files as follows:

```
<purpose>create_file</purpose>
<purpose>open_file</purpose>
<purpose>read_log</purpose>
```

5. edit *config\\replication\\source\_auth.cfg* changing the PASSWD value to "ADMIN":

```ini
USERID ADMIN
PASSWD ADMIN
```

6. edit *config\\replication\\target\_auth.cfg* changing the PASSWD value to "ADMIN":

```ini
USERID ADMIN
PASSWD ADMIN
```

7. open a command prompt

a. change to the *config\\replication* directory

b. run these commands to generate the new *source_auth.set* and the new *target_auth.set*:

```ini
../../tools/ctcmdset source_auth.cfg
../../tools/ctcmdset target_auth.cfg
```

8. copy existing c-tree files from the Source server to the Target server

### (Optional) Switching from Asynchronous Replication to Synchronous Replication

Synchronous replication is mainly used for high-end transactional applications that need instant failover if the primary node fails and cannot tolerate data loss. As drawback, synchronous replication introduces latency that slows the primary application.

To make the replication synchronous

1. edit *config/replication/ctreplagent1.cfg* and activate the syncagent option by removing the leading semicolon that comments the line out:

```ini
syncagent yes
```

2. edit *config\\replication\\filter1.xml* and add

```
<purpose>sync_commit</purpose>
```

### Testing the Replication Agent

After the above steps, start (or restart) the c-tree servers.

When both Source and Target c-tree servers are up and running, you can start editing the c-tree files on the Source server. Every modification will be replicated to the corresponding files on the Target server.
