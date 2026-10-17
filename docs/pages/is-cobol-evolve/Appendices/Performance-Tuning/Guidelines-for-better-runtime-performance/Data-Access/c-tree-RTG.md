#### c-tree RTG

The following suggestions are applicable to c-treeRTG:

##### General

- Avoid accessing files via network drives or UNC paths. Start the c-tree Server on the machine here files are stored instead.
- If the c-tree server runs on a separate machine than the isCOBOL Runtime, the network speed and latency might affect performance.

##### Server-side

- Use the latest c-tree version available.
- Keep the default [PAGE_SIZE](../../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server#page_size) of 32 KB, if possible, instead of reducing it for backward compatibility.
- Increase the values of [DAT_MEMORY](../../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server#dat_memory) and [IDX_MEMORY](../../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server#idx_memory) in ctsrvr.cfg.
- Enable the SHAREMEM protocol in ctsrvr.cfg, if not yet enabled.
- In thin client it’s better to call [C$LOCKPID](../../../Library-Routines/C$LOCKPID) instead of using the BaseLockManager if you need to know who’s locking a record.
- In thin client you can run the c-tree server in the same process as isCOBOL Server. Set [iscobol.ctree.bound_server (boolean)\*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#ctree_bound_server) to true in the isCOBOL Server configuration. The c-tree server will start as part of the isCOBOL Server process at the first OPEN of an indexed file performed by a Client. Working in this mode, the performance is better than having c-tree server running as a separate process. It’s still possible to connect to the c-tree server using external tools, utilities and runtimes.
- If your files are under transaction with logging, consider setting [DELAYED_DURABILITY](../../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server#delayed_durability) and increase the value of [LOG_SPACE](../../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server#log_space) to 1 GB in ctsrvr.cfg.

##### Client-side

- When configuring [<instance\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/instance) or [iscobol.file.index.server](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_server), avoid specifying "@localhost" or "@127.0.0.1" in the server name when the c-tree Server runs on the same machine as the runtime. The connection to the localhost is performed by default, and it’s performed via shared memory (faster) instead of TCP/IP (slower) if you don’t use the @ character in the server name.

- Take advantage of prefetch, batchaddition and bulkaddition where applicable. For details:

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [<prefetch\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/prefetch) | [iscobol.file.index.prefetch (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_prefetch)<br>[iscobol.file.index.prefetch.allowwriters (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_prefetch_allowwriters)<br>[iscobol.file.index.prefetch.records](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_prefetch_records) |
| [<batchaddition\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/batchaddition) | [iscobol.file.index.batchaddition (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_batchaddition)<br>[iscobol.file.index.batchaddition.records](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_batchaddition_records) |
| [<bulkaddition\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/bulkaddition) | [iscobol.file.index.bulkaddition (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_bulkaddition) |

- Avoid the use of a file connector, if possible. Use ctreej instead.
- For temporary files, memory files should be used. For details:

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [<memoryfile\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/memoryfile) | [iscobol.file.index.memoryfile (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_memoryfile) |

- Disable c-tree activity logging, so avoid the following settings:

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [<log\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/log) | [iscobol.file.index.log.debug.batchaddition (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_log_debug_batchaddition)<br>[iscobol.file.index.log.debug.prefetch (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_log_debug_prefetch)<br>[iscobol.file.index.log.error (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_log_error)<br>[iscobol.file.index.log.error.atend (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_log_error_atend)<br>[iscobol.file.index.log.error.notfound (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_log_error_notfound)<br>[iscobol.file.index.log.file](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_log_file)<br>[iscobol.file.index.log.info (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_log_info)<br>[iscobol.file.index.log.profile (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_log_profile) |

- Enabling the ctfixed option forces creating fixed-length record data files as fixed-length c-tree files. If you enable ctfixed, you may see a small performance enhancement as there is additional overhead in processing variable-length record data files.

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [<ctfixed\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/ctfixed) | [iscobol.file.index.fixed_length (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_fixed_length) |

- If the COBOL application performs several OPEN operations on the same files, consider to add the files to a pool:

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [<filepool\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/filepool) | [iscobol.file.index.filepool](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_filepool) |

- c-treeRTG allows data and key compression to reduce disk space utilization and network traffic with a potential impact on performance. Enabling compression using the RLE algorithm provides the advantages of compressed data with a very small impact on CPU usage. Since most applications are saturated at the I/O level, the slight increase in CPU usage but less overhead on the I/O channel typically results in performance gains.

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [<datacompress\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/datacompress) | [iscobol.file.index.datacompress (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_datacompress)<br>[iscobol.file.index.datacompress.level](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_datacompress_level)<br>[iscobol.file.index.datacompress.strategy](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_datacompress_strategy)<br>[iscobol.file.index.datacompress.type](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_datacompress_type) |
| [<keycompress\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/keycompress) | [iscobol.file.index.keycompress (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_keycompress)<br>[iscobol.file.index.keycompress.leading (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_keycompress_leading)<br>[iscobol.file.index.keycompress.padding (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_keycompress_padding)<br>[iscobol.file.index.keycompress.rle (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_keycompress_rle)<br>[iscobol.file.index.keycompress.vlennod (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_keycompress_vlennod) |

- The optimisticadd option enables adding keys before the data during WRITE operations. When optimisticadd is disabled, c-tree attempts to add unique keys before adding the data record. This eliminates the overhead of deleting a data record when the unique key check fails, speeding up the insert process. Disable optimisticadd if the COBOL application frequently performs WRITE operations conflicting with existing records.

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [<optimisticadd\>](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/optimisticadd) | [iscobol.file.index.optimisticadd (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_optimisticadd) |

- The deferautocommit option turns on optimization that improves performance for functions that use autocommit. Similar to the c-tree [DELAYED_DURABILITY](../../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server#delayed_durability) keyword, guarantees atomicity and consistency of transaction but not durability because the last transaction could be lost.

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [deferautocommit](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/transaction#deferautocommit) | [iscobol.file.index.transaction.deferautocommit](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_transaction_deferautocommit) |

- You might consider disabling transaction logging if if data is stored on secure media (hardware redundancy, etc.). To remove transaction logging from existing files, use the *ctutil* utility with the [-tron](../../../../../c-treeRTG-for-iscobol/c-tree-Utilities/Command-line-utilities/ctutil/tron) option. To have new files created without transaction logging, set the following configuration entry:

| Configuration via CTREE_CONF | Configuration via iscobol.properties |
| --- | --- |
| [logging](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/transaction#logging) | [iscobol.file.index.transaction.logging (boolean)](../../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client#file_index_transaction_logging) |
