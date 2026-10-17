## Run time and configuration

- By default, isCOBOL uses 2002 ANSI standard file status codes. These codes differ from those usually used by ICOBOL. To have the same file status codes, add the following line to the isCOBOL configuration:

```cobol
iscobol.file.status=com.iscobol.io.FileStatusDG
```

- The following entry should be used in the configuration in order to have the same screen positioning rules of ICOBOL:
iscobol.gui.screen_col_plus_base=0
