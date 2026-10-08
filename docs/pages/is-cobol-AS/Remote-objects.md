# Remote objects

The isCOBOL Application Server can also work as a repository for backend programs that can be called from client machines. Programs running in stand-alone as well as programs running on a client pc in Thin Client environment can call programs that reside on a server computer where an isCOBOL Application Server is running. This objective is achieved through a simple CALL Statement. The connectivity with the Application Server that hosts the remote objects is configured by setting [iscobol.remote.code_prefix](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration).

Programs loaded from remote.code_prefix are executed server-side using server resources. These programs can communicate with the calling program through LINKAGE SECTION items. They cannot have a user interface, they cannot display anything and must not accept user input. Only backend programs can run correctly as remote objects.

C functions can’t be called remotely; only COBOL programs can. If you need to call a C function on the server, create a bridge COBOL program, install the bridge program on the server along with the C function and call the bridge program instead of calling the C function directly.

The runtime will only search for remote COBOL programs that are called synchronously with a Format 1 [CALL](../is-cobol-evolve/Language-Reference/Procedure-Division-Statements/CALL). In order to call a remote program asynchronously, use the [C$ASYNCRUN](../is-cobol-evolve/Appendices/Library-Routines/C$ASYNCRUN) routine.

The call to a remote object establishes a connection between the local runtime and the isCOBOL Application Server that hosts the object. This connection is closed when a Format 2 [CANCEL](../is-cobol-evolve/Language-Reference/Procedure-Division-Statements/CANCEL) statement is executed by the local runtime or when the local runtime session terminates.

## Example:

Consider the following setting:

```cobol
iscobol.remote.code_prefix=isc://192.168.0.1:10999
```

And the following statement:

```cobol
CALL "PROG1" USING param-1, param2 GIVING rc.
```

isCOBOL will try to load PROG1 from the local CLASSPATH and code_prefix first. If the program is not found, then isCOBOL will try to load PROG1 through an Application Server running on the ip 192.168.0.1 on port 10999. isCOBOL will search for the program remotely in all the paths listed in the CLASSPATH and code_prefix of the remote machine (ip 192.168.0.1). If the program is still not found, then a "ClassNotFound" error is returned.

Any Exception thrown on the server is returned to the client, including the internal StopRunException, so that a client program can be interrupted when there is a STOP RUN statement or an exception (e.g. wrong linkage section) in the server program: in the former case the program will stop silently without showing any message.

If the remote programs are compiled with the [-cp](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option, then this different syntax must be used to set the [iscobol.remote.code_prefix](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration):

```cobol
iscobol.remote.code_prefix=iscp://192.168.0.1:10999
```

## Configuration

Remote objects use the server side configuration, that is the configuration with which the Application Server was started.

By setting the [iscobol.remote_conf](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) configuration property, it’s possible to specify a remote configuration file that will be appended to the server side configuration and used for the next calls to remote objects. The configuration file must be located on the server.

### Example:

```cobol
      *specify the remote configuration file                 
       set environment "remote_conf" to "/opt/config/myapp.properties".
      *call the remote program 
       call "SrvPrintPdf" using date-from, date-to.
```

## Using Aliases

Remote calls can be done through aliases. An alias is a logical name used client side to identify a specific program run with a specific configuration file.

In order to activate such feature for remote calls, the following property must be set in the server side configuration:

```cobol
iscobol.as.call.use_aliases=true
```

Aliases are defined in the server side configuration with properties in the format:

```cobol
iscobol.as.call.alias.<alias_name>=<PROGRAM_NAME>,<configuration_file>
```

For example, the following server configuration file defines two aliases

- the first alias runs the program PROG1 with the default configuration
- the second alias runs the program TEST with the configuration file /usr/test/config1.properties

```cobol
iscobol.as.call.use_aliases=true
iscobol.as.call.alias.utility1=PROG1
iscobol.as.call.alias.utility2=TEST,/usr/test/config1.properties
```

On the client side the program calls the alias name instead of the program name. For example, if you want to run the TEST program remotely using the remote configuration file /usr/test/config1.properties, you will just do:

```cobol
CALL "utility2".
```

## User Authentication

If [iscobol.as.authentication \*](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) is set to 2 in the server configuration, [iscobol.user.name](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) and [iscobol.user.password](../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) must be set client side in order to specify login information.
