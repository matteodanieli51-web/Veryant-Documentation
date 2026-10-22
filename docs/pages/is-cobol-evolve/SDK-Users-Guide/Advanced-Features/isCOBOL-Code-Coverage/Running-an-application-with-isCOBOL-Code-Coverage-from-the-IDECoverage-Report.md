### Running an application with isCOBOL Code Coverage from the IDE

Test coverage is integrated in the isCOBOL IDE.

You can easily perform a test coverage as follows:

1. highlight the main source file name in the isCOBOL Explorer or click on the editor window for the main program file,
2. click on the *Run* menu and choose *COBOL Coverage As -> isCOBOL Application* or click on the corresponding button in the toolbar:![](../../../images/coverageBtn.png)

The above operations trigger the program execution.

When the runtime session terminates, the [Coverage](../../../../is-cobol-IDE/The-isCOBOL-IDE-Perspective/Coverage) view shows the coverage report. ![](../../../images/IDE-coverage.png)

isCOBOL IDE automatically sets the isCOBOL Code Coverage configuration as follows:

- [iscobol.coverage.classfiles](../../Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-code-coverage-configuration) is set to the *output* folder of the project,
- [iscobol.coverage.sessionname](../../Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-code-coverage-configuration) is set to the name of the project,
- [iscobol.coverage.sourcefiles](../../Compiler-and-Runtime/Configuration/Configuration-Properties#iscobol-code-coverage-configuration) is set to the list of folders in the *-sp* Compiler option plus the *source* folder of the project.
