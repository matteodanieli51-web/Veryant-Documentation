### Update the source code while debugging

isCOBOL IDE allows you to change the source code of a paragraph while you’re debugging a program.

This feature requires that programs are compiled with the -dx option and without the -sns and -big options.

To take advantage of this feature:

1. start debugging the program by clicking on the following button:![](../../images/dgb_btn.png)
2. identify the code that you wish to change and apply your changes.

**Note**: The following changes are not permitted:

a. Add, remove or rename a graphical control

b. Add, remove or rename a data item

c. Add, remove or rename a paragraph or section

3. click on *Project* menu and choose *Build Project*
4. continue debugging until you reach the changed code

**Note**: all the changes made to a paragraph code will be active starting from the next time the paragraph is executed. If you change the paragraph code while you’re debugging it, then the changes will not have effect.
