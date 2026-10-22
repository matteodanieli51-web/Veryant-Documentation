## Import SL/FD copy files

### Command:

```cobol
isIDE -data workspaceLocation -nosplash --launcher.suppressErrors -application com.iscobol.plugins.screenpainter.IscobolScreenPainter.importFDSLApplication [project projectName] [file copyFile or folder folder] [fdsuffix suffix][slsuffix suffix][logfile logFilename]
```

- *workspaceLocation* is the workspace directory.
- **-nosplash** is suggested to avoid the splash screen.
- **--launcher.suppressErrors** is suggested to avoid interactive message boxes on error. If this option is used, then errors are saved to the file ".log" in the workspace ".metadata" folder.
- *projectName* is the project where the imported file layout should be added. If the **project** option is omitted, the first project in the workspace is used.
- *copyFile* is the name of a FD copy file. Use **file** instead of **folder** if you wish to import a single FD copy file.
- *folder* is a directory where FD and SL copy files can be found. All FD and SL copy files will be imported. Use **folder** instead of **file** if you wish to import multiple files at once.
- **fdsuffix** and **slsuffix** allow you to specify custom extensions. By default “.fd” and “.sl” are used.
- **logfile** allows you to choose the name of the file to contain the printed logs. If not specified, the IDE will create a file named "iscobol_builder<yyyyMMddHHmmss\>.log" in the working directory.
