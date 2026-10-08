### Configuring multiple instances with Framework properties

It is possible to define multiple instances of the c-tree client in the same runtime session. Each instance can work on a different server and can have a specific configuration. For example you might want all files whose name starts with “TMP” to be treated as memory files, or you might want to distribute your archives on different c-tree servers depending on the directory where they reside.

In order to create multiple instances, you can repeat the above iscobol.file.index settings by putting the instance number between before the setting name. For example:

```cobol
iscobol.file.index.server=FAIRCOMS
iscobol.file.index.1.server=FAIRCOMS
iscobol.file.index.2.server=FAIRCOMS@192.168.0.102

```

The above snippet defines three instances: the first two will connect to the default server on localhost and the third will connect a remote server whose IP address is 192.168.0.102.

Note that the [iscobol.file.index.maxinstance](../Configuring-the-client#file_index_maxinstance) property must be set accordingly or an error will occur. According to the above snippet, since we have three instances defined, we will set

```cobol
iscobol.file.index.maxinstance=3
```

The runtime chooses which instance to use by checking the file name and path against the properties [iscobol.file.index.file_mapping](../Configuring-the-client#file_index_file_mapping) and [iscobol.file.index.path_mapping](../Configuring-the-client#file_index_path_mapping).

Example:

```cobol
iscobol.file.index.server=FAIRCOMS
iscobol.file.index.1.server=FAIRCOMS
iscobol.file.index.1.path_mapping=/tmp
iscobol.file.index.2.server=FAIRCOMS@192.168.0.102
iscobol.file.index.2.path_mapping=/remote
```

According to the above configuration, all files under the /tmp folder will be bound to instance number 1 and all files under the /remote folder will be bound to instance number 2. All the other files will be bound to the default instance.

Once multiple instances are defined, specific properties can be specified for each instance.

Example

```cobol
iscobol.file.index.server=FAIRCOMS
iscobol.file.index.1.server=FAIRCOMS
iscobol.file.index.1.path_mapping=/tmp
iscobol.file.index.1.memoryfile=true
iscobol.file.index.1.transaction=no
iscobol.file.index.2.server=FAIRCOMS@192.168.0.102
iscobol.file.index.2.path_mapping=/remote
```

According to the above snippet, all the files on instance number 1 will be memory files without transaction support.

**Note** - The default instance includes a default file matching rule: file_mapping=\*. This rule ensures that c-treeRTG can handle any possible file, including files that do not match any other rules. A default file matching rule is required when using multiple instances.

When setting configurations made by multiple properties (e.g. the log or the key compression), all the properties should be related to the instance. For example, the following configuration is not correct:

```cobol
iscobol.file.index.1.log.file=/tmp/ctree.log
iscobol.file.index.log.error=1
iscobol.file.index.log.profile=1
iscobol.file.index.log.info=1
```

because only the file has been specified for the instance number 1, but all the other settings will go on the default instance and will be ignored by the instance number 1. The correct configuration would be:

```cobol
iscobol.file.index.1.log.file=/tmp/ctree.log
iscobol.file.index.1.log.error=1
iscobol.file.index.1.log.profile=1
iscobol.file.index.1.log.info=1
```
