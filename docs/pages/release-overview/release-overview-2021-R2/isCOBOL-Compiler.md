## isCOBOL Compiler

Starting from the isCOBOL 2021R2 release, the compiler option -sp, used to set the location of copy files, is not needed to include standard isCOBOL copy files. When a COBOL source refers to an isCOBOL .def file, the compiler automatically looks for it in the isCOBOL\_SDK sample/isdef folder.

The above folder is also searched for even if the -sp option is supplied, but a .def file is not found in the specified location.

The ANY LENGTH data item can now be used in LINKAGE SECTION items in the called program, even if the caller program passes a fixed length data item, allowing for more flexibility. An item declared as ANY LENGTH in the LINKAGE SECTION will accept both fixed length or variable length parameters, and if the caller passes a fixed length data item, the called program will treat it as a fixed length size.

The ON EXCEPTION clause is now supported on SET ENVIRONMENT statements to catch the failed SET on sticky configurations. This is useful, for example, when the Application Server loads its configuration that should not be overwritten by a ThinClient application that loads a remote configuration file.

For example, if the server starts with the configuration:

```cobol
iscobol.as.authentication=1
```

and a program running in ThinClient executes:

```cobol
       set environment "as.authentication" to "0"
           on exception
              display "setenv failed"
       end-set
```

the ON EXCEPTION clause will be executed as the SET statement of this sticky configuration fails.
