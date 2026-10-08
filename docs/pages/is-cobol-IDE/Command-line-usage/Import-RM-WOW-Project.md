## Import RM WOW Project

### Command:

```cobol
isIDE -data workspaceLocation -nosplash --launcher.suppressErrors -application com.veryant.wow.screendesigner.importWpjApplication [project projectName] [file wpjFile or folder folder][logfile logFilename] [charset cs]
```

- *workspaceLocation* is the workspace directory.
- **-nosplash** is suggested to avoid the splash screen.
- **--launcher.suppressErrors** is suggested to avoid interactive message boxes on error. If this option is used, then errors are saved to the file ".log" in the workspace ".metadata" folder.
- *projectName* is the project where the imported COBOL source file should be added. If the **project** option is omitted, the first project in the workspace is used.
- *wpjFile* is the name of a WOW project. Use **file** instead of **folder** if you wish to import a single wpj file.
- *folder* is a directory where WOW project files can be found. All WOW projects will be imported. Use **folder** instead of **file** if you wish to import multiple WOW proejcts at once.
- **logfile** allows you to choose the name of the file to contain the printed logs. If not specified, the IDE will create a file named "iscobol_builder<yyyyMMddHHmmss\>.log" in the working directory.
- *cs* specifies the charset of the imported file.
