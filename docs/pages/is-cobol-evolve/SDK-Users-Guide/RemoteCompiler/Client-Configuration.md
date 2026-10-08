## Client configuration

In order to perform a remote compilation, the following settings must be active in the client configuration:

```cobol
iscobol.remotecompiler.host=servername
iscobol.remotecompiler.preprocnames=preprocessors
```

Where:

- *servername* is the name or the IP address of the machine where the RemoteCompiler is listening
- *preprocessors* is the list of preprocessors that will be executed. All the values of the name attribute of the <preProcessor\> tag in the server configuration file are valid. Multiple values must be separated by comma. The following case insensitive special values are supported:

| Value | Effect |
| --- | --- |
| ALL | all preprocessors defined in the [Server configuration](./Server-Configuration) are executed. |
| NONE | none of the preprocessors defined in the [Server configuration](./Server-Configuration) is executed. A simple COBOL compilation is performed. In this case the property [iscobol.remotecompiler.compileonserver (boolean)](../Compiler-and-Runtime/Configuration/Configuration-Properties#remotecompiler-configuration) is implicitly set to true. |

With the above settings, each time you invoke the isCOBOL Compiler, it will compile remotely instead of locally. The objects that it receives from the server will be stored according to the -od option in the compiler command line on the client.

These additional settings are available client side:

- [iscobol.remotecompiler.port](../Compiler-and-Runtime/Configuration/Configuration-Properties#remotecompiler-configuration)
- [iscobol.remotecompiler.compileonserver (boolean)](../Compiler-and-Runtime/Configuration/Configuration-Properties#remotecompiler-configuration)
- [iscobol.remotecompiler.createerrorfiles (boolean)](../Compiler-and-Runtime/Configuration/Configuration-Properties#remotecompiler-configuration)
- [iscobol.remotecompiler.createlistingfiles (boolean)](../Compiler-and-Runtime/Configuration/Configuration-Properties#remotecompiler-configuration)
- [iscobol.remotecompiler.preprocnames](../Compiler-and-Runtime/Configuration/Configuration-Properties#remotecompiler-configuration)
- [iscobol.remotecompiler.translateddir](../Compiler-and-Runtime/Configuration/Configuration-Properties#remotecompiler-configuration)

The following sample configuration shows how to precompile using proCOBOL on the server and retrieve the translated source to be compiled on the local PC:

```cobol
iscobol.remotecompiler.host=myserver
iscobol.remotecompiler.port=12345
iscobol.remotecompiler.preprocnames=procob
```

The following sample configuration shows how to compile programs remotely keeping the resulting classes on the server. Compiled classes are sent back to the client anyway:

```cobol
iscobol.remotecompiler.host=myserver
iscobol.remotecompiler.port=12345
iscobol.remotecompiler.preprocnames=NONE
iscobol.remotecompiler.compileonserver=1
```
