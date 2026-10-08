### Editing, compiling and running Cobol-WOW programs

Once the Cobol-WOW project has been imported in the IDE, the user can edit it in the same way he did with the Cobol-WOW Designer: draw controls by dragging them from the palette to the screen and edit the code by double clicking on the control.

The code editor in isCOBOL’s IDE is slightly different from Cobol-WOW’s Designer.

Cobol-WOW allows you to choose the section from a combo box, while isCOBOL IDE shows all the sections in a tree view on the left:

![](images/WOW-designer.png)

In order to generate the source code of your programs:

1. Right click on the program name in the Project Explorer’s Structural View
2. Select *Generate Program* from the menu

Or

1. Left click on the program name in the Project Explorer’s Structural View
2. Click on the *Generate Program* button in the IDE’s tool-bar

In order to compile a program:

1. Right click on the program name in the Project Explorer’s Structural View
2. Select *Compile* from the menu

Or

1. Left click on the program name in the Project Explorer’s Structural View
2. Click on the *Compile* button in the IDE’s tool-bar

Note that, if you compile a program without generating it first, the IDE generates it automatically before compiling.

In order to execute a program:

1. Right click on the program name in the Project Explorer’s Structural View
2. Choose Run As from the menu
3. Choose *isCOBOL Application* from the sub menu1

Or

1. Left click on the program name in the Project Explorer’s Structural View
2. Click on the *Run* button in the IDE’s tool-bar

1Note that Cobol-WOW programs can’t run in webDirect environment. If you select *isCOBOL EIS webDirect* from the *Run As* menu, the effects are unpredictable.

In order to debug a program:

1. Right click on the program name in the Project Explorer’s Structural View
2. Choose *Debug* As from the menu
3. Choose *isCOBOL Application* from the sub menu [1]

Or

1. Left click on the program name in the Project Explorer’s Structural View
2. Click on the *Debug* button in the IDE’s tool-bar

[1] Note that Cobol-WOW programs can’t run in webDirect environment. If you select *isCOBOL EIS webDirect* from the *Debug As* menu, the effects are unpredictable.

The isCOBOL Debugger is different than the one in Cobol-WOW. Refer to [Debugger](\) for details about the usage of the isCOBOL Debugger.

Note that pressing the *Pause* button on the keyboard while debugging a WOW program doesn’t enter the debugger like it does with standard GUI COBOL programs. In order to enter the debugger, you need to click on the *Pause* button in the Debugger tool-bar.
