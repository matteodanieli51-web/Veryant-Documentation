### ctutil

ctutil allows you to examine files, extract data records, change the maximum record size, and rebuild corrupted indexes. The functions are designed to allow you to specify all possible task parameters up front, so that the utility can run unattended or with a minimum of user interactions.

#### Usage

```shell
ctutil [-c config_file] [-l] [-o file_password]
 Information options
   -info       file [-x] [-f]
   -exist      path
 Definition options
   -make       file iss_file
   -makeidx    file iss_file
   -alter      file iss_file [-hot | -full]
   -augment    file size
   -partition  file rule index
   -setpath    file
   -tron       file T|P|F|W
   -maxsize    file max_file_size
   -segment    file max_file_size max_segments
   -conv       file [convention_ID]
   -compress   file
   -uncompress file
   -setowner   file password 0|1
   -clrowner   file
 Maintenance options
   -copy       source_file dest_file
   -clone      source_file dest_file
   -filecopy   source_file dest_file [-overwrite]
   -rename     source_file dest_file [-overwrite]
   -remove     file
   -upgrade    source_file [dest_file]
 Consistency options
   -check      file [-x] [-k=index]
   -rebuild    file [-purgedups] [-delidx] [-repairdata]
   -compact    file [-purgedups] [-delidx] [-repairdata]
   -fileid     file
 Import/export options
   -load       file seq_file [-t|p | -b|r2 [-v[2|4|8][n|x]]] [-n] [-r|s] [-rs=recsiz]
   -unload     file seq_file [-t|p | -b [-v[2|4|8][n|x]]] [-k=index] [-f]
 SQL options
   -sqlinfo    file [iss_file [-conv=convention_ID]]
   -sqllink    file [admin_password] database_name
               [-symb=table_name] [-prefix=table_prefix]
               [-owner=user_name] [-public[=ro]]
   -sqlunlink  file [admin_password] database_name
               [-symb=table_name] [-prefix=table_prefix]
               [-owner=user_name]
   -sqlize     file iss_file [admin_password] database_name
               [-symb=table_name] [-prefix=table_prefix]
               [-owner=user_name] [-public[=ro]]
               [-conv=convention_ID] [-rule=rules_file]
   -sqlrefresh file iss_file [admin_password] database_name
               [-symb=table_name] [-prefix=table_prefix]
               [-owner=user_name] [-conv=convention_ID]
               [-rule=rules_file]
   -applyrules iss_file rules_file
   -sqlcheck   file iss_file [-conv=convention_ID] [-show=show_type]
 String-image options
   -getimg     file
   -makeimg    file image_string
   -checkimg   file image_string
   -rblimg     file image_string
   -addimg     file image_string
 Miscellaneous options
   -cryptconf  config_file output_file
   -test       [config|connect|filerules]
   -run        command_list_file
```

#### General rules

- *config_file* specifies the configuration file to be used instead of the default. See [Configuring the client through CTREE_CONF](../../../Configuring-the-client/Configuring-the-client-through-CTREE_CONF/Configuring-the-client-through-CTREE_CONF) for details about the configuration file.
- When the *-l* option is specified, the utility dumps the configuration in XML format before the command output.
- option names have been changed. Old names ( that begin with _ct instead of - ) are still supported for backward compatibility.
- The -o option specifies the owner name (file password) required to fully access the file.

  For instance, the following command creates a new file with a password:

  ```shell
  ctutil -o secretword -make file file.xdd
  ```

  To open and get info on the same file:

  ```shell
  ctutil -o secretword -info file
  ```

- Wherever a c-tree file is requested as parameter, you can use wildcard characters to specify multiple files at once. The command will be repeated for each file that matches with the pattern. Although this feature is available for each option, it makes sense to use it only in some cases, for example:

  ```shell
  ctutil -info /myapp/data/*
  ```

  prints the info of every c-tree file in the data folder, while

  ```shell
  ctutil -rebuild /myapp/data/*
  ```

  rebuilds all the c-tree files in the data folder, but

  ```shell
  ctutil -unload /myapp/data/* foo.txt
  ```

  unloads the content of all the c-tree files in the data folder to the foo.txt file, resetting foo.txt at each unload and resulting in a foo.txt file that contains only the data of the last c-tree file.

#### Commands

- [-addimg](./addimg)
- [-alter](./alter)
- [-applyrules](./applyrules)
- [-augment](./augment)
- [-check](./check)
- [-checkimg](./checkimg)
- [-clone](./clone)
- [-clrowner](./clrowner)
- [-compact](./compact)
- [-compress](./compress)
- [-conv](./conv)
- [-copy](./copy)
- [-cryptconf](./cryptconf)
- [-exists](./exists)
- [-filecopy](./filecopy)
- [-fileid](./fileid)
- [-getimg](./getimg)
- [-info](./info)
- [-load](./load)
- [-loadtext](./loadtext)
- [-make](./make)
- [-makeidx](./makeidx)
- [-makeimg](./makeimg)
- [-maxsize](./maxsize)
- [-partition](./partition)
- [-rblimg](./rblimg)
- [-rebuild](./rebuild)
- [-remove](./remove)
- [-rename](./rename)
- [-segment](./segment)
- [-setowner](./setowner)
- [-setpath](./setpath)
- [-sign](./sign)
- [-sqlinfo](./sqlinfo)
- [-sqllink](./sqllink)
- [-sqlunlink](./sqlunlink)
- [-sqlize](./sqlize)
- [-sqlcheck](./sqlcheck)
- [-sqlrefresh](./sqlrefresh)
- [-test](./test)
- [-tron](./tron)
- [-upgrade](./upgrade)
- [-uncompress](./uncompress)
- [-unload](./unload)
- [-unloadtext](./unloadtext)
- [-run](./run)
