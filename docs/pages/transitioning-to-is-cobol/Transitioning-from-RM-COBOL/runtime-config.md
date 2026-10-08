## Run time and configuration

- [iscobol.file.index.check_all_keys (boolean)](\) should be set to true in the configuration in order to activate the check on keys structure.
- [iscobol.gui.screen_col_zero (boolean)](\) should be set to true in the configuration for compatibility on the DISPLAY at COLUMN 0.
- [iscobol.memory.alpha_edited (boolean)](\) should be set to true in the configuration for compatibility on alphabetic-edited and alphanumeric-edited items setting.
- [iscobol.terminal.autowrap (boolean)](\) should be set to true since RM/COBOL automatically wraps text in the terminal.
- By default, isCOBOL uses 2002 ANSI standard file status codes. These codes differ from those usually used by RM/COBOL. If RM/COBOL programs were written to the 1974 RM/COBOL standard, you should add the following line to the configuration:

```cobol
iscobol.file.status=com.iscobol.io.FileStatus74
```

If RM/COBOL programs were written in RM/COBOL-85, instead, set:

```cobol
iscobol.file.status=com.iscobol.io.FileStatus85
```

- RM/COBOL (but not RM/COBOL-85) automatically closes all non-print files in a subprogram when that program exits. This is not default behavior with isCOBOL, but you can obtain it by adding the following entry to the configuration:

```cobol
iscobol.file.close_on_exit=1
```

or by compiling programs with the following compiler option:

```cobol
-coe
```

- Under RM/COBOL, if the main program has a Linkage Section, it is initialized by the parameter passed on the command line. In isCOBOL the main program cannot reference a Linkage Section. To handle this difference, use a stub main program called "runcobol" that uses chaining to intercept the command-line and pass it to the original main program with a CALL statement.

A basic implementation of this stub main program is installed with isCOBOL in the *sample/extend-and-customize/rm-run* folder. The program is intended to be used as replacement of RM/COBOL runcobol command and supports the following command-line flags: A for arguments, S for switches and T for memory allocation.

If you used a command like this in RM/COBOL:

```cobol
runcobol test1 a = "a b c" S = 10101111 -T = 512000
```

You can replace it with:

```cobol
ISCRUN RUNCOBOL test1 a = "a b c" S = 10101111 -T = 512000
```
