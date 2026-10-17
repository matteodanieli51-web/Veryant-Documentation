# Code generation

Once the program has been designed, you can ask the IDE to generate the source code.

In order to generate FD/SL copybooks, in the *Data* page of the [isCOBOL Explorer](./The-isCOBOL-IDE-Perspective/isCOBOL-Explorer):

1. Right click on the fd name.
2. Choose *Generate FD/SL* from the pop-up menu.

In order to generate the code for the whole program, in the *Structural* page of the [isCOBOL Explorer](./The-isCOBOL-IDE-Perspective/isCOBOL-Explorer):

1. Click on the program name to select it.
2. Click the *Generate Program* button in the tool-bar. ![](./images/gen.png)

or, alternatively

1. Right click on the program name..
2. Choose *Generate Program* from the pop-up menu

At this point, the quickest way to reach the generated source is:

1. Right click on the program name.
2. Choose View *%Program%.cbl* from the pop-up menu.

The IDE will automatically show the Code Editor with the generated source code inside\.

**Warning**: any modification done inside the source code tagged areas (the blocks of code delimited by \*begin and \*end comments) will be lost during the next generation.

The code is generated in the following project folders, that you can manage in the [File](./The-isCOBOL-IDE-Perspective/isCOBOL-Explorer#file) view:

| | |
| --- | --- |
| fdsl | includes the fd and sl copybooks of File Layouts |
| screenpgm | includes the copybooks of Screen Programs |
| source | includes the main source file of each Screen Program |
| | |

If you created subfolders as explained at [Creating a new Screen Program in a subfolder](./Screen-Programs/Creating-a-new-Screen-Program#Creating-a-new-Screen-Program-in-a-subfolder) and [Creating a new File Layout in a subfolder](./File-Layouts/Creating-a-new-File-Layout#Creating-a-new-File-Layout-in-a-subfolder), the same subfolders will appear under *fdsl*, *screenpgm* and *source*, including the code generated for Screen Programs and File Layouts from the project’s subfolders.

## Code Generator settings

In order to configure which parts of the code must be generated in addition to the output format and other code generation options:

1. Click on the *Window* menu.
2. Choose *Preferences*.
3. Choose *isCOBOL* / *Code Generator* from the tree.

The *Code Generator* options also include *Program Tag*. In this panel its possible to choose one or more copybooks that must always be generated in the program’s Working Storage and Procedure Division.

When the code generation is completed, generated files are available in the source, screen and cpy folders of your project and they can be compiled, run and debugged as the standard COBOL programs. Refer to [Compiling](./Working-With-Projects/Compiling) and [Run and Debug](./Working-With-Projects/Run-and-Debug/Run-and-Debug) for information about compiling and debugging programs.

Do not modify generated files directly. When you need to modify a Screen Program, always do it using designers and paragraph editors and then regenerate the code, otherwise your modification will be overwritten during the next code generation.
