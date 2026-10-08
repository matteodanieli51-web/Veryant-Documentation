## Import COBOL program

### Command:

```cobol
isIDE -data workspaceLocation -nosplash --launcher.suppressErrors -application com.iscobol.plugins.screenpainter.IscobolScreenPainter.importCobolProgramApplication [project projectName] [program programSource or folder folder][suffix suffix][logfile logFilename]
```

- *workspaceLocation* is the workspace directory.
- **-nosplash** is suggested to avoid the splash screen.
- **--launcher.suppressErrors** is suggested to avoid interactive message boxes on error. If this option is used, then errors are saved to the file ".log" in the workspace ".metadata" folder.
- *projectName* is the project where the imported COBOL source file should be added. If the **project** option is omitted, the first project in the workspace is used.
- *programSource* is the name of a COBOL source file. Use **program** instead of **folder** if you wish to import a single source file.
- *folder* is a directory where COBOL source files can be found. All source files will be imported. Use **folder** instead of **program** if you wish to import multiple files at once.
- **suffix** allows you to specify a custom extension. By default “.cbl” is used.
- **logfile** allows you to choose the name of the file to contain the printed logs. If not specified, the IDE will create a file named "iscobol_builder<yyyyMMddHHmmss\>.log" in the working directory.
