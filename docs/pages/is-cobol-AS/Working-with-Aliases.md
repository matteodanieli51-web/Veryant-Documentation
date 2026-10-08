# Working with Aliases

Programs can be run in the Application Server through aliases. An alias is a logical name used client side to identify a specific program run with a specific configuration file.

In order to activate such feature, the following property must be set in the server side configuration:

```ini
iscobol.as.use_aliases=true
```

Aliases are defined in the server side configuration with properties in the format:

```ini
iscobol.as.alias.<alias_name>=<PROGRAM_NAME>,<configuration_file>
```

Note - PROGRAM_NAME can include paths as long as [iscobol.code_prefix](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) is set in the configuration.

For example, the following server configuration file defines two aliases

- the first alias runs the program MAIN with the default configuration
- the second alias runs the program TEST with the configuration file /usr/test/config1.properties

```ini
iscobol.as.use_aliases=true
iscobol.as.alias.menu=MAIN
iscobol.as.alias.test_alias=TEST,/usr/test/config1.properties
```

On the client side the isCOBOL Client specifies the alias name instead of the program name in its command-line. For example, if a client wants to run the TEST program with the /usr/test/config1.properties configuration file, it will just run:

```shell
iscclient -hostname my-server TEST_ALIAS
```

The effect will be the same as running the equivalent more complex command:

```shell
iscclient -hostname my-server -c /usr/test/config1.properties TEST
```

**Note** - The alias name on the client command-line is case insensitive, it means that the following commands are all valid and produce the same effect:

- iscclient -hostname my-server TEST_ALIAS
- iscclient -hostname my-server test_alias
- iscclient -hostname my-server Test_Alias

Aliases for isCOBOL Client options

When [iscobol.as.use_aliases (boolean)](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) is set to true, the following aliases must be defined in order to make all the isCOBOL Client options work correctly:

```cobol
iscobol.as.alias.asa$gadmin=ASA$GADMIN
iscobol.as.alias.asa$gpanel=ASA$GPANEL
iscobol.as.alias.cobfileio=COBFILEIO
iscobol.as.alias.cpk=CPK
iscobol.as.alias.gife=GIFE
iscobol.as.alias.isl=ISL
iscobol.as.alias.ismigrate=ISMIGRATE
iscobol.as.alias.jdbc2fd=JDBC2FD
iscobol.as.alias.jutil=JUTIL
iscobol.as.alias.xml2wrk=XML2WRK
```
