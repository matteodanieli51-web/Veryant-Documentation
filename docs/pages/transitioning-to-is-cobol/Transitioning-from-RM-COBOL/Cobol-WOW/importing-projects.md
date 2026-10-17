### Importing projects from Cobol-WOW in isCOBOL IDE

Veryant’s IDE is able to import programs from existing Cobol-WOW projects.

In order to import projects from Cobol-WOW in the IDE:

1. Click on *File* in the menu bar and choose *Import*
2. Expand the *isCOBOL* group and select *RM Cobol WOW Program*

![](images/WOW-import1.png)

3. Browse for the folder where the Cobol-WOW projects are stored and press Enter to load the list of available programs:
![](images/WOW-import2.png)

The *Advanced* button allows you to choose which character set was used in the code of the Cobol-WOW projects. Use it if you notice wrongly decoded characters on the screen after the import.
4. Select the desired programs and click *Finish*.
Note that only projects of version 12 are supported. If you try to import a Cobol-WOW project whose version is unsupported, then the program doesn’t appear in the IDE and the following exception is shown in the *Error Log* view:

![](images/WOW-importErr.png)

In order to get rid of the error, you can open the Cobol-WOW project with a Cobol-WOW designer version 12, make a small useless modification and save. In this way the project files will be compatible with isCOBOL IDE.
