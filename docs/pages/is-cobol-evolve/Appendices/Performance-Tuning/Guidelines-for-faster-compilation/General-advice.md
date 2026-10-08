### General advice

Writing a file on disk has a cost, so it’s important to reduce the number of files that the Compiler will generate. Review your Compiler options and configuration looking for the below items, and check if you really need them or if you can discard them:

| Compiler options | |
| --- | --- |
| -efa<br>-efd | Generate EFD dictionaries required by several tools and file handlers |
| -efc | Generate ISS dictionaries required by c-tree in order to link files to the SQL Engine |
| -ef | Generate error files that include the list of errors and warnings returned by the Compiler |
| -ld-lf | Generate list files that include the source code and all the copybooks |

| Compiler configurations / directives | |
| --- | --- |
| iscobol.compiler.easydb=1<br>$SET “easydb” “1” | Generate bridge programs that allow you to use COBOL I/O statements on a RDBMS |
| iscobol.compiler.easylinkage=1<br>$SET “easylinkage” “1” | Generate a bridge program that allows your COBOL program to be called from Java programs |
| iscobol.compiler.servicebridge=1<br>$SET “servicebridge” “1” | Generate bridge classes that allow your COBOL program to be called via WebService technology |

EFD and ISS dictionaries as well as DatabaseBridge routines are generated for each FD found in the COBOL source. The same FD could be included in multiple programs, so the Compiler may regenerate the same dictionary and DatabaseBridge routine multiple times without reason. In order to avoid the regeneration of the same dictionary and DatabaseBridge routine it’s good practice to gather all your FDs in a dummy program and compile only this dummy program with the options and configurations that make the Compiler generate dictionaries and DatabaseBridge routines.
