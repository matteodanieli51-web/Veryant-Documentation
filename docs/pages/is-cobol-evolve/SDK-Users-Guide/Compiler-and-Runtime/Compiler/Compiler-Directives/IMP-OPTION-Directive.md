#### IMP OPTION Directive

The IMP OPTION directive sets compiler options for a program.

```cobol
>> IMP OPTION String
```

##### Syntax

1. *String* is a text string delimited by quotes that contains the compiler options. Refer to the [Compiler Options](\) section for further details.
2. This directive must appear as first row in the source file. It cannot be used in the body of the source code.

##### General rules

1. If the character "-" precedes the option, it's used during the compilation process; if the "-no-" prefix precedes the option, it is not used during the compilation process. For backward compatibility the "#" character is supported as synonym of "-no-".
2. Options with a value override the value specified on the command line, if any. For example, if you have -sns=100 in the command-line and "-sns=200" in the IMP OPTION directive, the program will be compiled with sns set to 200.
In order to remove an option with a value, the equal sign must be specified along with the option name. For example, if you have -sns=100 in the command-line and you want to remove it through IMP OPTION, the correct syntax is >>IMP OPTION “-no-sns=” not just >>IMP OPTION “-no-sns”.
3. The following compiler options can be used only in the command line and are ignored if they appear in String: -exec, -la, -lf, -lfo, -lo, -od, sf, -st, -sa, -sl, -sv, -smat and -zmf.

When these options are used in String they don’t produce any effect but they are still registered in the list of used options and so displayed by the [-info](\) runtime option.

##### Example

The following program will be always compiled with -dz and never compiled with -di:

```cobol
           >>IMP OPTION "-dz -no-di"
       program-id. eg001.
        ...
```
