## Generate and build projects

### Command:

```cobol
isIDE -data workspaceLocation -nosplash --launcher.suppressErrors -application com.iscobol.plugins.screenpainter.IscobolScreenPainter.builderApplication [project projectName] [refresh] [clean] [build] [generate] [logfile logFilename]
```

- *workspaceLocation* is the workspace directory.
- **-nosplash** is suggested to avoid the splash screen.
- **--launcher.suppressErrors** is suggested to avoid interactive message boxes on error. If this option is used, then errors are saved to the file ".log" in the workspace ".metadata" folder.
- **project** specifies the name of the project to process. If omitted, all the projects in the workspace are processed.
- **refresh**, if specified, performs the same operation of *Project -> Refresh* for each processed project.
- **clean**, if specified, performs the same operation of *Project -> Clean* for each processed project.
- **generate**, if specified, performs the same operation of *Project -> Generate Project* for each processed project.
- **build**, if specified, performs the same operation of *Project -> Build Project* for each processed project.
- **logfile** allows you to choose the name of the file to contain the printed logs. If not specified, the IDE will create a file named "iscobol_builder<yyyyMMddHHmmss\>.log" in the working directory.

**Note** - The 'build' option implies 'generate', so if you specify both 'build' and 'generate', 'generate' will be ignored.
