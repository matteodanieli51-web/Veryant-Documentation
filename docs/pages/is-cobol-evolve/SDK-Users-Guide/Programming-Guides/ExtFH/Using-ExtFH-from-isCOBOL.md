### Using ExtFH from isCOBOL

isCOBOL’s file handling mechanism is based on a pluggable architecture that allows any custom file handlers as described below.

isCOBOL also supplies a special set of classes that can interface any file handler compliant with the Micro Focus ExtFH interface, both 32 and 64 bit.

The EXTFH implementation must reside in a shared library, whose name is, by default, EXTFH (its file name will be libEXTFH.so on Unix-like systems and EXTFH.DLL on Windows). The name of the library can be changed by setting the following property in the configuration:

```cobol
iscobol.extfh.libname=MyExtfhLib
```

The library must contain a function named EXTFH and must be built by the user linking the appropriate libraries for file handling with the Java native interface com_iscobol_extfh_EXTFH.o provided with isCOBOL.

For your convenience a Visual C project is installed on Windows along with isCOBOL, while a Makefile is provided for the other platforms. They are a good starting point to perform the link.

Along with the Java interface, another C module named xfhname is provided, both in source and object format. By modifying xfhname source code it is possible to change the name of the function EXTFH in order to avoid name conflicts.

```cobol
extern void EXTFH (char* op, char* fcd);
void (*extfhFunction)(char* op, char* fcd) = EXTFH;
```

ExtFH is a single interface for any type of file and, by default, it fully substitutes the standard file handler. isCOBOL permits the use of the ExtFH interface for each file type. Twelve classes are provided (six for 32 bit ExtFH and six for 64 bit ExtFH). The following settings must appear in the configuration in order to make isCOBOL use ExtFH for the specific file types.

(for 32 bit ExtFH)

```cobol
iscobol.file.index=com.iscobol.extfh.ExtfhIndex
iscobol.file.relative=com.iscobol.extfh.ExtfhRelative
iscobol.file.sequential=com.iscobol.extfh.ExtfhSequential
iscobol.file.linesequential=com.iscobol.extfh.ExtfhLineSequential
iscobol.file.input=com.iscobol.extfh.ExtfhInput
iscobol.file.output=com.iscobol.extfh.ExtfhOutput
```

(for 64 bit ExtFH)

```cobol
iscobol.file.index=com.iscobol.extfh3.ExtfhIndex
iscobol.file.relative=com.iscobol.extfh3.ExtfhRelative
iscobol.file.sequential=com.iscobol.extfh3.ExtfhSequential
iscobol.file.linesequential=com.iscobol.extfh3.ExtfhLineSequential
iscobol.file.input=com.iscobol.extfh3.ExtfhInput
iscobol.file.output=com.iscobol.extfh3.ExtfhOutput
```

A new C function has been implemented to help determine which files must be managed by ExtFH. It is an extension to ExtFH which can be used at run-time, that accepts a file name parameter and returns the file’s organization. The prototype is shown below:

```cobol
int isFileHandledByExtfh (char *path, int fileType);
```

Parameters:

| | |
| --- | --- |
| path | the name of the file; this variable is 256 byes long and can be changed by the function; in this case the modified name is passed back to the standard isCOBOL file manager, independently from the value returned by the function. |
| fileType | an integer whose content indicates the file type according to the following table:                <br>1 TYPE_INDEX                   <br>2 TYPE_RELATIVE                   <br>3 TYPE_SEQUENTIAL                   <br>4 TYPE_LINE_SEQUENTIAL                   <br>5 TYPE_OUTPUT                   <br>6 TYPE_INPUT |
| | |

If this function returns 0 it means that this file must be handled by isCOBOL while any other returned value means that this file must be handled through the EXTFH interface.

In the module xfhname a stub function that always returns 1 is supplied in order to work when the above extension is not required, so if this function is implemented with the EXTFH function, the stub must be removed.

If the property [iscobol.extfh.intrinsic_file_manager (boolean)](../../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) is set in the configuration, then the isFileHandledByExtfh function is invoked each time a file is opened. If it returns 0 then the isCOBOL file manager is called according to the standard configuration properties, otherwise the file will be handled through the EXTFH interface.
