## Compiler options

- When compiling source files of a Micro Focus application, the following options should always be used:

```cobol
-cm -dcm -ccmf
```

- If you don’t want underscores to be treated as hyphens, because this may generate ambiguous identifiers in your code, then the following option should be used:

```cobol
-smfu
```

- Unless you were using the STICKY-LINKAGE directive with either the value “1” or the value “2”, you should use this option as well:

```cobol
-clk0
```

- If you were using some Microsoft Cobol extensions, then the following option should be used as well:

```cobol
-cms
```

- Micro Focus compile flags are not supported by isCOBOL, but in most cases their effect can be obtained using one of the isCOBOL Compiler options or in another way. The following table lists the Micro Focus compile flags whose effect can be obtained also with isCOBOL:

| Micro Focus flag | isCOBOL solution |
| --- | --- |
| ADDSYN | Use -rm= compiler option |
| ALIGN | Use -align= compiler option |
| ANIM | Use -d compiler option |
| APOST | Use -apost compiler option |
| ARITHMETIC=OSVS | Use -cva compiler option |
| ASSIGN | Use -cax compiler option |
| BOUND | Set iscobol.array_check=1 in the configuration |
| CHANGE-MESSAGE | Set iscobol.compiler.messagelevel properly in the configuration |
| CHECKDIV | Default behavior using isCOBOL |
| CHECKDIV(*dialect*) | Set iscobol.checkdiv=1 in the configuration if dialect is one of the following: COBOL370, ENTCOBOL, MVS, OS390, OSVS or VSC2.<br>Set iscobol.checkdiv=0 (or don’t set iscobol.checkdiv) in the configuration if dialect is either ANSI or ISO2002. |
| CHECKNUM | Set iscobol.check.numeric_content=1 in the configuration |
| COBFSTATCONV | Set iscobol.file.status properly in the configuration |
| COBOL370 | Use -cv compiler option |
| CONSTANT | Set iscobol.compiler.constant properly in the configuration |
| CONVERTRET | Use -d5 compiler option |
| COPYEXT | Use -ce= compiler option |
| COPYLIST | Use -lf compiler option |
| CURRENT-DATE | Take advantage of the [CurrentDate Class (com.iscobol.rts.CurrentDate)](\) feature |
| DATAMAP | Use -ld compiler option |
| DEFAULTBYTE | Use -dv= compiler options |
| DOS/VS | Use -cv compiler option |
| ERRLIST | Use -ef compiler option |
| FAULTFIND | Set iscobol.exception.dump=1 and iscobol.display_message=3 in the configuration |
| FLAGQ | Use -es compiler option |
| FOLD-COPY-NAME | Use -scnl and -scnu compiler options |
| FOLD-CALL-NAME | Use -ssnl and -ssnu compiler options |
| HIDE-MESSAGE | Set iscobol.compiler.messagelevel properly in the configuration |
| IBMCOMP | Use -dcmi compiler option instead of -dcm |
| INDD | Set iscobol.compiler.indd in the configuration |
| KEYCHECK | Set iscobol.file.extra_keys_ok properly in the configuration |
| LIST, LISTPATH, LISTWIDTH, LW | Use -lf and -lo= compiler options |
| MAKESYN | Use -rm compiler option |
| NOBOUND | Compile with the -m1 option,don’t set iscobol.substring.check=1 or iscobol.array.check=1 in the configuration,set iscobol.substring.unbound=1 in the configuration. |
| NOTRUNC | Use -dznt compiler option |
| NSYMBOL | If "DBCS", use -cndbcs compiler optionIf "NATIONAL", no action required |
| ODOSLIDE | Use -cod1 compiler option |
| OPTIONAL-FILE | Set iscobol.file.io_creates=1 and iscobol.file.extend_creates=1 in the configuration |
| OVERRIDE | Use -rc compiler option |
| OSVS | Use -cv compiler option |
| OUTDD | Set iscobol.compiler.outdd in the configuration |
| PERFORM-TYPE | Use either -pt0 or -pt1 or -pt2 compiler options |
| PRINT | Use -lo compiler option |
| REMOVE | Use -rw= compiler option |
| RM | Use -dcii compiler option |
| SEQUENTIAL | Sequential files type is controlled by -cfl compiler option |
| SIGN | If "ASCII", use -dcm compiler option<br>If "EBCDIC", use -dci or -dcii compiler option<br>If "MBP", use -dcb compiler option<br>If "NCR", use -dcn compiler option<br>If "REALIA", use -dcr compiler option<br>If "VAX", use -dcv compiler option |
| SOURCEFORMAT | If "FIXED", use -sa compiler option<br>If "FREE", use -sf compiler option<br>If "VARIABLE", use -sv compiler option |
| SPZERO | Default behavior using isCOBOL |
| TRACE | Set iscobol.tracelevel properly in the configuration |
| TRUNC"ANSI" | Use -dzta compiler option |
