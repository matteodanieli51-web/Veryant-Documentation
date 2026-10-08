### Toolbar

The toolbar contains shortcut icons and a dropdown menu for easy access to debugger functions. There are only a few that do not have a corresponding command:

| | |
| :--- | :--- |
| Memory indicator | Shows information about memory usage. When clicked, the garbage collector feature is activated, unreferenced resources are released, and the memory heap is compacted. |
| Source code selector | When several source codes are loaded, it allows the user to choose which one is displayed in the Source area. |
| Autostep speed selector | Allows the user to change the time interval between automatic steps. The value is expressed in seconds. |
| | |

After the Source Code Selector an exclamation mark icon is shown. The color of this icon provides additional information about the source code loaded by the Debugger:

| Exclamation Mark Color | Meaning |
| :--- | :--- |
| Blue | The source code was loaded separately. <br>It happens if you’re debugging classes compiled with isCOBOL 2020 R1 or previous as well as if [iscobol.debug.embedded_source (boolean)](../../Compiler-and-Runtime/Configuration/Configuration-Properties#debugger-configuration) is set to false in the configuration or the program was compiled in two steps (compile to java source using the [-jj](../../Compiler-and-Runtime/Compiler/Compiler-Options#java-options) option and then compile from java to class using the javac compiler). <br>The blue color means that the source code is consistent with the class file, so the last modification of the main source file and the copybooks is prior to the last modification of the class file. |
| Green | The source code was extracted from the class file. |
| Red | The source code was loaded separately. <br>It happens if you’re debugging classes compiled with isCOBOL 2020 R1 or previous as well as if [iscobol.debug.embedded_source (boolean)](../../Compiler-and-Runtime/Configuration/Configuration-Properties#debugger-configuration) is set to false in the configuration or the program was compiled in two steps (compile to java source using the [-jj](../../Compiler-and-Runtime/Compiler/Compiler-Options#java-options) option and then compile from java to class using the javac compiler). <br>The red color means that the source code is not consistent with the class file, so the last modification of the main source file or one of the copybooks is more recent than the last modification of the class file. In this situation the debug experience may be affected by odd behaviors like wrong statements being highlighted by the step commands or the impossibility to set a breakpoint on a specific line.In order to resolve this issue, recompile the program. |
