### File names interpretation

The isCOBOL Framework resolves the full path of a file as follows:

The first element of the file name, that is, all the text before the first slash character (/), is replaced with the value of DD_<name\> system environment variable, if such variable is set. For example, if a file's physical name is dirc/file1 and the system environment variable DD_dirc=/tmp is set, the file name used by the runtime will be /tmp/file1.

If a DD_<name\> setting is not found in the system environment, the following procedure is performed:

1. If [iscobol.file.env_naming (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_env_naming) is set in the configuration, the physical file name is searched for among the environment variables. During this search hyphens are translated to underscores and names are made lowercase to be case insensitive before the comparison between file name and configuration property name.

**Note**: the conversion affects only properties set through SET ENVIRONMENT. For properties set in the external configuration, it’s your responsibility to use underscores and lowercase names, otherwise they will not match.

2. The physical name is made upper-case or lower-case depending on [iscobol.file.case](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.
3. If [iscobol.file.remove_name_spaces (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) is set to true, then spaces are removed from the file name.
4. If [iscobol.file.index.strip_extension (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) is set to true and the file name includes an extension, then the extension is removed (only for indexed files).
5. Unless the file name starts with either "-F" or "+F", the extension specified by [iscobol.file.suffix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) property is appended to the resulting name.
6. Unless the file name starts with either "-F" or "+F", the resulting name is appended to the [iscobol.file.prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) paths.
7. If the resulting name is not an absolute path, it is appended to the working directory specified by the [C$CHDIR](\) routine, if any.

Once the full name is ready, it’s passed to the file handler.

**Note** - if the file is indexed and the [iscobol.file.index.open_hook \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) configuration property is set the full-name is passed to a hook program, which might alter the file-name.

Some file handlers might perform additional operations on the file name. For example:

JIsam

- JIsam automatically appends the .dat extension to the data file name and the .idx extension to the index file name before opening the disc file. These extensions can be configured by [iscobol.file.index.data_suffix \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.index.index_suffix \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) properties.

- If the full-name constructed by isCOBOL is a relative path, the path will be relative to the current working directory.

c-tree

- c-tree automatically appends the .dat extension to the data file name and the .idx extension to the index file name before opening the disc file. These extensions can be configured by [iscobol.file.index.data_suffix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) and [iscobol.file.index.index_suffix](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client) when [Configuring the client through Framework properties](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-Framework-properties), or by [<datafilesuffix\>](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/datafilesuffix) and [<indexfilesuffix\>](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/indexfilesuffix.md) when [Configuring the client through CTREE_CONF](../../../../c-treeRTG-for-iscobol/Configuring-the-client/Configuring-the-client-through-CTREE_CONF/config).

- All pathnames are resolved on the server side by the c-tree Server. Relative paths are relative to the server working directory (see [LOCAL_DIRECTORY](../../../../c-treeRTG-for-iscobol/Configuring-the-c-tree-Server) for details).

Database Bridge

- Database Bridge converts all hypens and dots to underscore in the full-name before accessing the table.

- paths are not considered unless [iscobol.easydb.dirlevel](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-easydb-runtime-configuration) property is set to a value greater than zero.

remote

- if the File Server machine is a different platform than the local PC (e.g. Linux server and Windows client), a full path built on the local PC may not be understood correctly by the server (e.g. Linux can’t interpret "C:" at the beginning of a path), therefore you should set the FILE-PREFIX according to the server platform as the full path will be resolved server side.
