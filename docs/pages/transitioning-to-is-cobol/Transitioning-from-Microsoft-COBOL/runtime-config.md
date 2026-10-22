## Run time and configuration

- By default, isCOBOL uses 2002 ANSI standard file status codes. These codes differ from those usually used by Microsoft COBOL. To have the same file status codes, add the following line to the isCOBOL configuration:

```cobol
iscobol.file.status=com.iscobol.io.FileStatusMS
```
