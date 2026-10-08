## Configuring the client through CTREE_CONF

Faircoms utilities always look for the c-tree configuration in the c-tree configuration file.

The isCOBOL Framework looks for the c-tree configuration in the c-tree configuration file if the configuration property [iscobol.ctree.new_config (boolean)\*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#ctree_new_config) is set to false.

The configuration file is defined by the environment variable CTREE_CONF. If CTREE_CONF is not defined then a XML file named ctree.conf is searched in the current directory. The XML configuration file ctree.conf is an XML file that maintains the same syntax for both Windows and Unix.

If the file cannot be found, the c-tree client library will use default settings, that means it will connect to a c-tree Server named FAIRCOMS on the localhost.

The XML configuration file is subject to a precise hierarchy as follows:

[<config\>](./config) root element : within it there can be zero or more global settings and zero or more [<instance\>](./instance) elements. Within an [<instance\>](./instance) element there can be zero or more global settings and zero or more [<file\>](./file) elements.

Setting elements specified as direct children of the [<config\>](./config) root element apply to all the [<instance\>](./instance) elements specified as direct children of the [<config\>](./config) root element.

Setting elements specified as direct children of the [<instance\>](./instance) element and inherited from the [<config\>](./config) root element apply to all the [<file\>](./file) elements specified as children of the current [<instance\>](./instance) element.

Setting elements specified as direct children of [<file\>](./file) elements and inherited from the parent elements apply to any c-tree file matching the criteria defined by the current [<file\>](./file) elements.

Specified setting elements overwrite the inherited values.

Setting elements can be specified as children of CONF INST and FILE but actually apply only to file elements if a setting element is not specified as children of the file.

Option elements can be used inside the [<config\>](./config) root element, the [<instance\>](./instance) and the [<file\>](./file) element to configure c-tree behaviors. The following option elements are available:

- [<automkdir\>](./automkdir)
- [<batchaddition\>](./batchaddition)
- [<bulkaddition\>](./bulkaddition)
- [<ctfixed\>](./ctfixed)
- [<datacompress\>](./datacompress)
- [<datafilesuffix\>](./datafilesuffix)
- [<detectlock\>](./detectlock)
- [<encrypt\>](./encrypt)
- [<filepool\>](./filepool)
- [<fileversion\>](./fileversion)
- [<forcedelete\>](./forcedelete)
- [<hugefile\>](./hugefile)
- [<ignorelock\>](./ignorelock)
- [<indexfilesuffix\>](./indexfilesuffix)
- [<keycheck\>](./keycheck)
- [<keycompress\>](./keycompress)
- [<log\>](./log)
- [<locktype\>](./locktype)
- [<maxlencheck\>](./maxlencheck)
- [<map\>](./map)
- [<memoryfile\>](./memoryfile)
- [<optimisticadd\>](./optimisticadd)
- [<prefetch\>](./prefetch)
- [<retrylock\>](./retrylock)
- [<rowid\>](./rowid)
- [<rpc\>](./rpc)
- [<runitlockdetect\>](./runitlockdetect)
- [<skiplock\>](./skiplock)
- [<smartcopy\>](./smartcopy)
- [<sqlize\>](./sqlize)
- [<transaction\>](./transaction)
- [<trxholdslocks\>](./trxholdslocks)
- [<writethru\>](./writethru)

### Examples

In the following example the RPC setting will be active for all specified instances but not for instance number 3 which is specifying its own RPC setting.

```ini
<config>
     <rpc>yes</rpc>
     <instance server="FAIRCOMS">
          <file name="CUSTORDR"/>
          <file> </file> <!-- default file matching rule -->
     </instance>
     <instance server="FAIRCOMS@192.168.0.2">
          <file name="ITEMMAST"/>
     </instance>
     <instance server="FAIRCOMS@10.0.0.4">
          <rpc>no</rpc>
          <file name="CUSTMAST"/>
     </instance>
</config>
```

**Note** - The first instance includes a default file matching rule: <file\> </file\>. This rule ensures that c-treeRTG can handle any possible file, including files that do not match any other rules. Because it matches all files, it should be placed after all other rules. A default file matching rule is required when using multiple instances.

The following example is more simple. It just tells to use the custom extension ".cix" for the key files working on the c-tree server named FAIRCOMS and started on localhost (as default).

```ini
<config>
   <indexfilesuffix>.cix</indexfilesuffix>
</config>
```
