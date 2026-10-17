## Creating a new program

The isCOBOL IDE creates and maintains two kinds of programs:

### Standard Programs

Standard programs are written from scratch by the user. The user uses the Code Editor to maintain the source code.

To create a new text file (source file or copybook) in the project, right click in the [isCOBOL Explorer](../The-isCOBOL-IDE-Perspective/isCOBOL-Explorer) area and choose *New / Source File or New / Copy File* from the pop-up menu.

**Note**: Every new program is created with the -sf option set by default amongst its compiler options. This means that the IDE will try to compile the source code as a Free format source code. If you plan to write (or paste from other sources) code written in a different format (Ansi or Terminal) you should edit your compiler options accordingly. See [Compiling](./Compiling) for details.

### Screen Programs

Screen Programs are designed by the user through the Designers views (see [The isCOBOL IDE Perspective](../The-isCOBOL-IDE-Perspective/The-isCOBOL-IDE-Perspective) for details). The isCOBOL IDE automatically generates the COBOL code for these programs. Screen Programs will be covered in-depth in [Screen Programs](../Screen-Programs/Screen-Programs).

Screen Programs and standard programs can coexist in the same Project.
