## Import AcuBench/Totem file layout (DLT and CLF)

### Command:

```cobol
isIDE -data workspaceLocation -nosplash --launcher.suppressErrors -application com.iscobol.plugins.screenpainter.IscobolScreenPainter.importDltApplication [project projectName] [file dltFile or folder folder] [logfile logFilename]
```

- *workspaceLocation* is the workspace directory.
- **-nosplash** is suggested to avoid the splash screen.
- **--launcher.suppressErrors** is suggested to avoid interactive message boxes on error. If this option is used, then errors are saved to the file ".log" in the workspace ".metadata" folder.
- *projectName* is the project where the imported file layout should be added. If the **project** option is omitted, the first project in the workspace is used.
- *dltFile* is the name of a DLT or CLF file. Use **file** instead of **folder** if you wish to import a single file layout.
- *folder* is a directory where DLT and CLF files can be found. All DLT and CLF files will be imported. Use **folder** instead of **file** if you wish to import multiple files at once.
- **logfile** allows you to choose the name of the file to contain the printed logs. If not specified, the IDE will create a file named "iscobol_builder<yyyyMMddHHmmss\>.log" in the working directory.
