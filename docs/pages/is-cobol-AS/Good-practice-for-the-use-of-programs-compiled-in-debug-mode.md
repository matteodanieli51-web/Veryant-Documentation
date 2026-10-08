# Good practice for the use of programs compiled in debug mode

Classes compiled in debug mode are not fully thread safe. The additional code injected for debugging includes static data items and is not thread safe.

## Using these classes in a long lasting Java runtime session may lead to memory leaks.

For the above reason, it is strongly recommended to avoid using classes compiled in debug mode in thin client environments where the isCOBOL server is live 24/7 or is rarely restarted (e.g. production environment). In addition, it’s know that classes compiled in debug mode are even slower in performance.

The good practices for debugging in thin client environments are either using a separate isCOBOL Server or using the same isCOBOL Server with a separate code-prefix setting.

Using a separate isCOBOL Server

You can set up two isCOBOL Servers on two different ports.

The first Server will run classes without debug, while the other will run classes with debug.

```cobol
iscserver -J-Discobol.code_prefix=/path/to/classes-without-debug -port 10901
iscserver -J-Discobol.code_prefix=/path/to/classes-with-debug -port 10902
```

**Note** - the code_prefix setting is passed on the command line for readability; in a real scenario you might think to use a configuration file for the configuration settings.

Standard clients will connect to the first application Server and run programs in release mode:

```cobol
isclient -hostname server-ip -port 10901 MENU
```

Clients that wish to debug programs can connect to the second Server instead:

```cobol
isclient -hostname server-ip -port 10902 -d MENU
```

## Using a single isCOBOL Server with separate code-prefix setting

Separate the classes in debug from the classes without debug using two distinct directories.

Have two configuration files with different code prefix, e.g.

- a file named *release.properties* that includes the entry

```cobol
iscobol.code_prefix=/path/to/classes-without-debug
```

- a file named *debug.properties* that includes the entry

```cobol
iscobol.code_prefix=/path/to/classes-with-debug
```

Be sure that [iscobol.as.multitasking](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) is not set to 0 in the Server configuration. The default value 2 is the suggested one.

Standard clients will use the remote configuration file that points to classes without debug:

```cobol
isclient -hostname server-ip -port 10999 -c /path/to/release.properties MENU
```

Clients that wish to debug programs can use the other configuration file instead:

```cobol
isclient -hostname server-ip -port 10999 -c /path/to/debug.properties -d MENU
```
