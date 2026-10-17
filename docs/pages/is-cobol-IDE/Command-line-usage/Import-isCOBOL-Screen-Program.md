## Import isCOBOL Screen Program

### Command:

```cobol
isIDE -data workspaceLocation -nosplash --launcher.suppressErrors -application com.iscobol.plugins.screenpainter.IscobolScreenPainter.importIspApplication [project projectName] [file ispFile or folder folder][logfile logFilename] [c2013r1] [c2016r2]
```

- *workspaceLocation* is the workspace directory.
- **-nosplash** is suggested to avoid the splash screen.
- **--launcher.suppressErrors** is suggested to avoid interactive message boxes on error. If this option is used, then errors are saved to the file ".log" in the workspace ".metadata" folder.
- *projectName* is the project where the imported COBOL source file should be added. If the **project** option is omitted, the first project in the workspace is used.
- *ispFile* is the name of a screen program. Use **file** instead of **folder** if you wish to import a single isp file.
- *folder* is a directory where screen program files can be found. All screen programs will be imported. Use **folder** instead of **file** if you wish to import multiple screen programs at once.
- **logfile** allows you to choose the name of the file to contain the printed logs. If not specified, the IDE will create a file named "iscobol_builder<yyyyMMddHHmmss\>.log" in the working directory.
- *c2013r1* enables the compatibility with the 2013 R1 release.
- *c2016r2* enables the compatibility with the 2016 R2 release.
