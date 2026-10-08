### Debug a remote application

isCOBOL IDE allows you to debug a program that is running in a local or remote Application Server. The Application Server must have been started having [iscobol.rundebug \*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) set to either 1 or 2 in the configuration.

1. click on *Run* menu
2. choose *Debug Configurations*....
3. choose *Remote isCOBOL Application* from the tree

![](../../images/IDE-dbg-remote.png)

4. compile the fields as follows

- *Connect* page

a. **Name**: free text, type any name. This name will appear in the Debug History menu for future uses

b. **Host**: server name or IP address where a remote debugger is listening

c. **Port**: port where a remote debugger is listening

- *Source* page

a. Browse for the source files of the programs you want to debug

Press the *Debug* button to start debugging.
