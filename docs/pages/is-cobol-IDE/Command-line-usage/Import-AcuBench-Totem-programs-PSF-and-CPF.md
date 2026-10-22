## Import AcuBench/Totem programs (PSF and CPF)

### Command:

```cobol
isIDE -data workspaceLocation -nosplash --launcher.suppressErrors -application com.iscobol.plugins.screenpainter.IscobolScreenPainter.importApplication [project projectName] [file programFile or folder folder] [cellWdithFact cell-width] [cellHeightFact cell-height] [leftText left-text-val] [logfile logFilename]
```

- *workspaceLocation* is the workspace directory.
- **-nosplash** is suggested to avoid the splash screen.
- **--launcher.suppressErrors** is suggested to avoid interactive message boxes on error. If this option is used, then errors are saved to the file ".log" in the workspace ".metadata" folder.
- *projectName* is the project where the imported program should be added. If the **project** option is omitted, the first project in the workspace is used.
- *programFile* is the name of a PSF or CPF file. Use **file** instead of **folder** if you wish to import a single program.
- *folder* is a directory where PSF and CPF files can be found. All PSF and CPF files will be imported. Use **folder** instead of **file** if you wish to import multiple programs at once.
- **cellWidthFact**, **cellHeightFact** and leftText allow you to set the corresponding advanced options that are available in the import wizard; see [Importing programs from AcuBench](../Importing-programs-from-AcuBench/Importing-programs-from-AcuBench) and [Importing programs from Totem](../Importing-programs-from-Totem/Importing-programs-from-Totem) for details.
- **logfile** allows you to choose the name of the file to contain the printed logs. If not specified, the IDE will create a file named "iscobol_builder<yyyyMMddHHmmss\>.log" in the working directory.
