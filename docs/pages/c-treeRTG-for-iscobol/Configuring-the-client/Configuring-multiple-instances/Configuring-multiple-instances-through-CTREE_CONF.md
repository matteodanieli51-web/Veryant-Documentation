### Configuring multiple instances through CTREE_CONF

It is possible to define multiple instances of the c-tree client in the same runtime session. Each instance can work on a different server and can have a specific configuration. For example you might want all files whose name starts with “TMP” to be treated as memory files, or you might want to distribute your archives on different c-tree servers depending on the directory where they reside.

In order to create multiple instances, use the instance entry and place instance specific settings into it. For example:

```cobol
<config>
     <instance server="FAIRCOMS">
<!-- instance specific settings here -->
     </instance>
     <instance server="FAIRCOMS">
<!-- instance specific settings here -->
     </instance>
     <instance server="FAIRCOMS@192.168.0.102">
<!-- instance specific settings here -->
     </instance>
</config>
```

The above snippet defines three instances: the first two will connect to the default server on localhost and the third will connect a remote server whose IP address is 192.168.0.102.

The runtime chooses which instance to use by checking the file name and path against the [<file\>](../Configuring-the-client-through-CTREE_CONF/file) entry.

Example:

```cobol
<config>
     <instance server="FAIRCOMS">
          <file> </file> <!-- default file matching rule -->
     </instance>
     <instance server="FAIRCOMS">
          <file dir="/tmp"/>
     </instance>
     <instance server="FAIRCOMS@192.168.0.102">
          <file dir="/remote"/>
     </instance>
</config>
```

According to the above configuration, all files under the /tmp folder will be bound to instance number 2 and all files under the /remote folder will be bound to instance number 3. All the other files will be bound to the first instance.

Once multiple instances are defined and associated with a [<file\>](../Configuring-the-client-through-CTREE_CONF/file) entry, specific properties can be specified for that [<file\>](../Configuring-the-client-through-CTREE_CONF/file) entry.

**Note** - you might have multiple [<file\>](../Configuring-the-client-through-CTREE_CONF/file) entries in the same instance, each with separate settings.

Example

```cobol
<config>
     <instance server="FAIRCOMS">
          <file> </file> <!-- default file matching rule -->
     </instance>
     <instance server="FAIRCOMS">
          <file dir="/tmp">
             <memoryfile>yes</memoryfile>
             <transaction>no</transaction>
          </file>
     </instance>
     <instance server="FAIRCOMS@192.168.0.102">
          <file dir="/remote"/>
     </instance>
</config>
```

According to the above snippet, all the files on instance number 2 will be memory files without transaction support.
