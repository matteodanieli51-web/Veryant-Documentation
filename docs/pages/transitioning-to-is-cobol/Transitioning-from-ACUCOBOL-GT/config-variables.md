## Configuration variables

- Most of the ACUCOBOL-GT configuration variables have an equivalent configuration property in isCOBOL. The easiest way to convert the ACUCOBOL-GT configuration file to the equivalent isCOBOL property file is by using the [ISCONFIG](\) utility.
- ACUCUBOL-GT allowed users to specify the configuration file through the A_CONFIG system environment variable; isCOBOL doesn’t have an equivalent system environment variable, so your options are:
  - name the configuration file "iscobol.properties" and place it in a directory where it will be automatically loaded (see [Configuration files](\) for details), or
  - pass the configuration file on the command line through the [-c](\) option.
- In order to have Acucobol-GT behaviors that are not default in isCOBOL, the following boolean properties should be set in the isCOBOL configuration:

```cobol
iscobol.ccopy.client_temp_as_base_dir=true
iscobol.env.trunc_on_null=true
iscobol.file.env_naming=true
iscobol.file.index.check_all_keys=true
iscobol.key.default_shortcuts_enabled=false
iscobol.national.acu_compatibility=true
iscobol.memory.alpha_edited=true
iscobol.properties.acu_compat=true
iscobol.terminal.autowrap=true
```

In order to have an ACUCOBOL-GT compatible behavior on sequential files, set:

```cobol
iscobol.file.linesequential=lseqacu
iscobol.file.sequential=seqacu
```

If the programs have GUI, the following settings should be used as well:

```cobol
iscobol.gui.grid.lm_on_columns=false
iscobol.gui.ignore_invalid_handle=1
```

If you display 3-D buttons over tool-bars and you’re not interested in having the ability to detach the tool-bar from the window, then you should also set:

```cobol
iscobol.gui.tool_bar.native=false
```

To have the same cell size as ACUCOBOL-GT when using internal fonts, set:

```cobol
iscobol.font.default=Microsoft Sans Serif-Bold-08
iscobol.font.default.cell=7,13
iscobol.font.medium=Microsoft Sans Serif-Bold-08
iscobol.font.medium.cell=7,13
iscobol.font.large=Microsoft Sans Serif-Bold-10
iscobol.font.large.cell=8,16
iscobol.font.small=Microsoft Sans Serif-08
iscobol.font.small.cell=7,13
iscobol.font.traditional=Fixedsys Excelsior 2.00-11
iscobol.font.traditional.cell=8,12
iscobol.font.fixed=Fixedsys Excelsior 2.00-11
iscobol.font.fixed.cell=8,15
```

Note that the Fixedsys Excelsior font is usually not installed by default in the operating system. The TTF file is provided along with isCOBOL so you can install the font.

To have the same message box layout as ACUCOBOL-GT, set:

```cobol
iscobol.gui.messagebox.font=Segoe Ui-8
```

The [ISCONFIG](\) utility takes care of the above settings.

- If you ACCEPT FROM ENVIRONMENT a variable that was not set, ACUCOBOL-GT returns the variable default value, isCOBOL returns spaces or zero (depending on the destination item picture) instead.
- DLL_CONVENTION is available in isCOBOL but does not support alphabetic values like "WINAPI". Use numeric values.
- The KEYSTROKE feature lacks the ability to make special and function keys ( like F1 and Enter ) send characters to the program. They can only produce exceptions. For example, this setting is valid for isCOBOL:

```cobol
KEYSTROKE Exception=100 ^M
```

While this one is not:

```cobol
KEYSTROKE Data=65 ^M
```

- MOUSE_FLAGS configuration variable is not supported by isCOBOL. isCOBOL allows to set mouse flags in the ACCEPT Statement. So, for example, the following code:

```cobol
SET ENVIRONMENT "MOUSE-FLAGS" TO "2". |enables left button pressed action
ACCEPT Screen1.
```

Must be changed as follows:

```cobol
ACCEPT Screen1 MOUSE FLAGS 2.
```

- The same feature as DECIMAL-POINT configuration variable is provided through the compiler option [-sddp](\).
- COLOR\_MAP HIGH, LOW and DEFAULT can be remapped using [iscobol.colormap.high *](\), [iscobol.colormap.low *](\) and [iscobol.colormap.default *](\) configuration properties. Other COLOR_MAP settings are not supported.
- When a file is created by OPEN I-O having IO-CREATES set to 1, ACUCOBOL-GT sets the file status to "00", isCOBOL sets the file status to "05", instead.
- When a file is created by OPEN EXTEND having EXTEND-CREATES set to 1, ACUCOBOL-GT sets the file status to "00", isCOBOL sets the file status to "05", instead.
- The CODE_CASE feature can be obtained at compile time by using the [-ssnl](\) and [-ssnu](\) options.
- The hotkey configuration is slightly different in isCOBOL. An entry like the following one:

```cobol
Hot-Key MYPROG = 201
```

need to be translated to:

```cobol
iscobol.hot_key.MYPROG=201
```

- The WAIT_FOR_LOCKS configuration variable could be set to 1 meaning "wait for the locked record if no Declarative is available for the file, otherwise return error". The same behavior can be obtained in isCOBOL by compiling programs with the [-crlk](\) option.
- The isCOBOL equivalent of A_CHECKDIV is the property [iscobol.checkdiv *](\).
- The isCOBOL equivalent of WINDOW_TITLE is the property [iscobol.gui.window_title](\).
- The isCOBOL equivalent of ICON is the property [iscobol.gui.icon_file](\).
- The WIN3_GRID setting supports less values in isCOBOL. You can specify only high intensity colors using values from 1 to 7.
- In isCOBOL, setting a keystroke to a different function doesn’t reset the current setting, but appends information to it. For example, having the following setting in the environment:

```cobol
KEYSTROKE Exception=100 k1
```

If you perform:

```cobol
SET ENVIRONMENT "KEYSTROKE" TO "Edit=next"
```

In ACUCOBOL-GT you obtain:

```cobol
KEYSTROKE Edit=Next k1
```

In isCOBOL you obtain:

```cobol
KEYSTROKE Edit=Next Exception=100 k1
```

This rule applies also to the *iscobol.key* properties.

- The ACUCONNECT_RUNTIME_FLAGS configuration variable doesn’t have an exact equivalent in isCOBOL, as isCOBOL doesn’t allow to set runtime options for remote programs. However, isCOBOL allows to specify a configuration file for remote programs, so, if you used ACUCONNECT_RUNTIME_FLAGS to specify just the -c option, you can replace:

```cobol
ACUCONNECT_RUNTIME_FLAGS=-c /path/to/remote_configuration_file
```

with

```cobol
iscobol.remote_conf=/path/to/remote_configuration_file
```

• Command line switches are passed through the [iscobol.switches *](\) configuration property in isCOBOL. For example, the following two commands:

```cobol
wrun32 -1 prog1
wrun32 -12 prog1
```

can be translated as follows:

```cobol
iscrun -J-Discobol.switches=1 PROG1
iscrun -J-Discobol.switches=1,2 PROG1
```

- If you used the syntax CALL PROGRAM "PROGRAM_NAME/A/B" where A and B are switches to be activated, set:

```cobol
iscobol.call_program.set_switches=1
```
