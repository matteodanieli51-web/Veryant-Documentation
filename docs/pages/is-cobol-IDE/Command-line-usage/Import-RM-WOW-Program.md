## Import RM WOW Program

### Command:

```cobol
isIDE -data workspaceLocation -nosplash --launcher.suppressErrors -application com.veryant.wow.screendesigner.importWspApplication [project projectName] [file wspFile or folder folder][logfile logFilename]
```

- *workspaceLocation* is the workspace directory.
- **-nosplash** is suggested to avoid the splash screen.
- **--launcher.suppressErrors** is suggested to avoid interactive message boxes on error. If this option is used, then errors are saved to the file ".log" in the workspace ".metadata" folder.
- *projectName* is the project where the imported COBOL source file should be added. If the **project** option is omitted, the first project in the workspace is used.
- *wspFile* is the name of a WOW program. Use **file** instead of **folder** if you wish to import a single wsp file.
- *folder* is a directory where WOW program files can be found. All WOW programs will be imported. Use **folder** instead of **file** if you wish to import multiple WOW programs at once.
- **logfile** allows you to choose the name of the file to contain the printed logs. If not specified, the IDE will create a file named "iscobol_builder<yyyyMMddHHmmss\>.log" in the working directory.
