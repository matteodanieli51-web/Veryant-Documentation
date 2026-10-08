## Compiler options

- When compiling source files of an ACUCOBOL-GT application, the following options should always be used:

```cobol
-ca -cnlz -smat -wlu
```

- If the ACUCOBOL-GT version is 7.0 or later, the following option should also be used:

```cobol
-dvexta=32
```

- If you didn't use -Cf option with the ACUCOBOL-GT compiler, then the following option should be used with the isCOBOL compiler:

```cobol
-crv
```

- If you didn't use -Ck option with the ACUCOBOL-GT compiler, then the following option should be used with the isCOBOL compiler:

```cobol
-cko
```

- If you didn't use -Za option with the ACUCOBOL-GT compiler, then the following option should be used with the isCOBOL compiler:

```cobol
-m1
```

- If you didn't use -Zz option with the ACUCOBOL-GT compiler, then the following option should be used with the isCOBOL compiler:

```cobol
-cudc
```

- If you have level 78 items defined just below group items to measure their size, then the following option should be used:

```cobol
-s78c
```

This is a typical case where -s78c is necessary:

```cobol
01 group1.
   03 data-item1 pic x(10).
   03 data-item2 pic 9(3).
78 group1-sz      value length of group1.
```

- If you have $ signs in COPY statements in order to reference environment variables in the copybook path, then the following option should be used:

```cobol
-sevc
```

- Some ACUCOBOL-GT options are available in isCOBOL with the same name and produce the same effect. Some others are not available in isCOBOL, but their effect can be obtained anyway. The following table lists the known ACUCOBOL-GT options along with their equivalent in the isCOBOL environment, if available:

| ACUCOBOL-GT option | isCOBOL solution |
| --- | --- |
| --noTrunc | Use -dznt |
| --truncANSI | Use -dzta |
| -a | Default behavior using isCOBOL |
| -Ca | Use -vansi |
| -Cb | Default behavior using isCOBOL |
| -Ce | The same option is available in isCOBOL.Use -ce=*extensions* compiler option |
| -Ci | Use -ci -dcd.Add iscobol.gui.screen_col_plus_base=0 to the configuration |
| -Ck | Default behavior using isCOBOL |
| -Cm | Not available in isCOBOL.isCOBOL has an option named -cm, but it’s for other purposes |
| -Cp | Default behavior using isCOBOL |
| -Cr | Use -cr, -crlk and -va compiler options.Set iscobol.gui.screen_col_zero=true in the configuration. |
| -Cv | The same option is available in isCOBOL.Use -cv compiler option |
| -D1 | The same option is available in isCOBOL.Use -d1 compiler option |
| -D5 | The same option is available in isCOBOL.Use -d5 compiler option |
| -D6 | Add the following entry to the configuration file:iscobol.compiler.regexp="(?i)(pic\\s+9\\([0-9]+\\)\\s+)(packed-decimal)" "$1 comp-6" |
| -Da# | Use -align=# |
| -Dca | The same option is available in isCOBOL.Use -dca compiler option |
| -Dcb | The same option is available in isCOBOL.Use -dcb compiler option |
| -Dci | The same option is available in isCOBOL.Use -dci compiler option |
| -Dcm | The same option is available in isCOBOL.Use -dcm compiler option |
| -Dcn | The same option is available in isCOBOL.Use -dcn compiler option |
| -Dcr | The same option is available in isCOBOL.Use -dcr compiler option |
| -Dcv | The same option is available in isCOBOL.Use -dcv compiler option |
| -Dd31 | Default behavior using isCOBOL.In order to have the same precision on the last decimal digits, use -cfp36 compiler option |
| -Df | Use -cv compiler option |
| -Di | Use -dia compiler option |
| -Dm | Use -dcdm compiler option |
| -Ds | The same option is available in isCOBOL.Use -ds compiler option |
| -Dv=# | Use -dv=# and -dvexta=# compiler options |
| -Dw32 | Default behavior using isCOBOL. |
| -Dw64 | Use -d64 compiler option. Note that only USAGE POINTER data items are affected. |
| -Dz | The same option is available in isCOBOL.Use -dz compiler option |
| -e | Use -eo=*folder* compiler option.isCOBOL allows to specify the destination folder for error files, but not the file name. Files are always named ProgramName.err |
| -Fa | Use -efa compiler option.isCOBOL generates dictionaries in XML format. Acucobol-GT’s XFD and isCOBOL XML are not compatible |
| -Fm | The same option is available in isCOBOL.Use -fm compiler option |
| -Fo | Use -efo=*folder* compiler option |
| -Fx | Use -efd compiler option.isCOBOL generates dictionaries in XML format. Acucobol-GT’s XFD and isCOBOL XML are not compatible |
| -Ga | Use either -d or -dx compiler options |
| -Lf | The same option is available in isCOBOL, but isCOBOL list files are not in ANSI format by default.Use -lf and -la compiler options combined |
| -Lo | Use -lo=*folder* compiler option.isCOBOL allows to specify the destination folder for list files, but not the file name. Files are always named ProgramName.list |
| -Ls | Use -ld compiler option |
| -o | Use -od=*folder* compiler option.isCOBOL allows to specify the destination folder for object files, but not the file name. Files are always named PROGRAMNAME.class |
| -Rc | The same option is available in isCOBOL.Use -rc=*word1,word2* compiler option |
| -Rw | The same option is available in isCOBOL, but the usage is slightly different.In isCOBOL the option can’t be repeated, so all the reserved words must be specified at once separated by comma. E.g. the following Acu options:-rw *word1* -rw *word2* are translated to isCOBOL as follows:-rw=*word1,word2* |
| -S# (where # is the number of columns for each tab) | Use -stl=# compiler option |
| -Sa | The same option is available in isCOBOL.Use -sa compiler option and avoid using -smat |
| -Si | Add [IF Directive*](\) to the source |
| -Sl | The same option is available in isCOBOL.Use -sl compiler option. |
| -Sp | The same option is available in isCOBOL.Use -sp=*folders* compiler option. **Note** - The isCOBOL compiler looks for copybooks and resources with relative pathname in the current directory first. The paths specified by the -sp option are considered only if the item is not found in the current directory. |
| -Sr | Use -stl=8,4 |
| -St | The same option is available in isCOBOL.Use -st compiler option and avoid using -smat |
| -Sx | Add [IF Directive](\) to the source |
| -v | The same option is available in isCOBOL.Use -v compiler option |
| -Va | Not available in isCOBOL.isCOBOL has an option named -va, but it’s for other purposes |
| -Vc | Default behavior using isCOBOL |
| -Vh | The same option is available in isCOBOL.Use -vh compiler option |
| -Vl | Default behavior using isCOBOL, unless -vh is used |
| -Vu | The same option is available in isCOBOL.Use -vu compiler option |
| -Vx | The same option is available in isCOBOL.Use -vx compiler option |
| -Za | Set iscobol.array_check=1 and iscobol.substring_check=1 in the configuration |
| -Zd | Use either -d or -dx compiler options |
| -Zi | The same option is available in isCOBOL.Use -zi compiler option |
| -Zo | Use -efo=*folder* compiler option |
| -Zr | Use -pt1 compiler option |
| -Zr0 | Use -pt0 compiler option |
| -Zr1 | Use -pt1 compiler option |
| -Zx | Use -efd compiler option.isCOBOL generates dictionaries in XML format. Acucobol-GT’s XFD and isCOBOL XML are not compatible |
| -Zy | The same option is available in isCOBOL.Use -zy compiler option |
| -Zz | Default behavior using isCOBOL |

The latest ACUCOBOL-GT compilers support conditional compilation through the use of special constructs in the COBOL source file and by accepting command-line arguments that turn on compiler directives and set constants to values. This feature is implemented in compatibility with Micro Focus. Refer to [Compiler options](\) in the *Transitioning from Micro Focus* guide for details about how to obtain the same result with isCOBOL.
