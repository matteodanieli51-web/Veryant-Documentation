## Troubleshooting

In this section we cover the most common issues that can be encountered while using the isCOBOL Graphical Debugger.

### The Graphical Debugger shows the warning message the "source code could be wrong".

This warning message is shown when a program was compiled with [Source code preprocessing](../Compiler-and-Runtime/Compiler/Source-code-preprocessing/Source-code-preprocessing) and the debugger is loading the source files from disc (i.e. the configuration property [iscobol.debug.embedded\_source (boolean)](../Compiler-and-Runtime/Configuration/Configuration-Properties#debugger-configuration) is set to false). The debugger can’t guarantee that the source code just loaded from disc matches with the one altered by preprocessing at compile time.
