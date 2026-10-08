## Server configuration

The isCOBOL RemoteCompiler is activated by the following command on the server machine:

```cobol
iscremotecc [-J-Discobol.remotecompiler.conf=configfile]
```

The RemoteCompiler configuration file is loaded by default from the user home directory. The default configuration file is: $USER_HOME/remoteCompiler.xml. Set the [iscobol.remotecompiler.conf](../Compiler-and-Runtime/Configuration/Configuration-Properties#remotecompiler-configuration) property to specify a different configuration file.

The configuration file has the following structure:

```cobol
<!ELEMENT remoteCompiler (preProcessor+)>
<!ATTLIST remoteCompiler
portNumber CDATA #IMPLIED
outputFolder CDATA #IMPLIED
cleanOutputFolderWhenExit (true | false) "true"
deploymentFolder CDATA #IMPLIED>
 
<!ELEMENT preProcessor (optionList,environment*)>
<!ATTLIST preProcessor
name CDATA #REQUIRED
executable CDATA #REQUIRED
outputFileExt CDATA #IMPLIED
listFileExt CDATA #IMPLIED
errorFileExt CDATA #IMPLIED>
 
<!ELEMENT environment (variable*)>
<!ATTLIST environment
append (true | false) "true">
 
<!ELEMENT variable EMPTY>
<!ATTLIST variable
name CDATA #REQUIRED
value CDATA #REQUIRED>
 
<!ELEMENT optionList (option+)>
<!ELEMENT option (#PCDATA)>
<!ATTLIST option
if (listing|error) #IMPLIED
```

The main tag <remoteCompiler\> describes the RemoteCompiler server. The following attributes are available:

- *portNumber* is the number of the port where the RemoteCompiler listens for client connections. If omitted, the port 11999 is used.
- *outputFolder* is the directory where translated source files and compiled classes will be stored. If omitted, the user TEMP folder is used.
- *cleanOutputFolderWhenExit* specifies if files should be deleted once they’ve been sent to the client. The default behavior is “true” in cases where this flag is omitted.
- *deploymentFolder* is a folder on the server where class files are stored after the compilation. Classes are sent to the client in any case, but, if this attribute is specified, a copy of these classes is kept on the server also. If the attribute is not specified, then classes are just sent to the client.

The <preProcessor\> tag describes a preprocessor. Multiple  tags can appear as a child of the  tag. For each  the following attributes are available:

- *name* is a logical name that identifies the preprocessor. You can use any name here. This setting is mandatory.
- *executable* is the executable file of the preprocessor. This setting is mandatory.
- *outputFileExt* is the extension of the translated files. If omitted, the default value “cbl” is used.
- *listFileExt* is the extension of the list files if the preprocessor supports listing. If omitted, the default value “list” is used.
- *errorFileExt* is the extension of the error files if the preprocessor supports error files. If omitted, the default value “err” is used.

Each <preProcessor\> tag can contain a list of environment variables and a list of command-line options that configure the preprocessor executable behavior.

Environment variables are listed in the <environment\> tag, where the following attribute is available:

- *append*: if true the environment variables are appended to the existing environment, otherwise they replace it.

Each variable is identified by the <variables\> tag with the two mandatory attributes name and value.

Options are listed in the  environment. Each option is identified by the <option\> tag. The tag content may contain the keywords ${inputfile}, ${outputfile}, ${errorfile}, ${listingfile}. The content of the <option\> tags is concatenated with the value of the <preprocessor\> *executable* attribute. If the *if* attribute is specified and its value is "listing", the content of the tag is added to the command string only if the client request specifies the generation of the listing files. If its value is ”error”, the content of the tag is added to the command string only if the client request specifies the generation of the error files. The *if* condition is true when the corresponding isCOBOL option (*-lf* for listing and *-e* for errors) appears in the client compiler command line.

The following symbols are available for use in the <option\> tag:

- ${inputfile} is automatically set to the name of the source file sent by the client.
- ${outputfile} is automatically set to the name of the translated file.
- ${listingfile} is automatically set to the name of the listing file.
- ${errorfile} is automatically set to the name of the error file.

The following snippet shows an example of usage of the <option\> tag with the *if* attribute:

```cobol
<option if="list">-listopt ${listingfile}</option>
<option if="err">-erropt ${errorfile}</option>
```

The following sample configuration shows how to precompile with proCOBOL:

```cobol
<remoteCompiler portNumber="12345" cleanOutputFolderWhenExit="true">
    <preProcessor name="procob"
        executable="/usr/local/bin/procob"
        outputFileExt="cob">
        <optionList>
            <option>-iname=${inputfile}</option>
            <option>-oname=${outputfile}</option>
        </optionList>
    </preProcessor>
</remoteCompiler>
```

The following sample configuration shows the minimal settings required for a pure COBOL remote compilation, without using precompilers.

```cobol
<remoteCompiler portNumber="12345" cleanOutputFolderWhenExit="true" deploymentFolder="/opt/myCobolApp/programs"/>
```

### User Authentication

If [iscobol.as.authentication \*](../Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-server-thin-client-configuration) is set to 2 in the server configuration, users will be prompted to provide login information at each compilation.
