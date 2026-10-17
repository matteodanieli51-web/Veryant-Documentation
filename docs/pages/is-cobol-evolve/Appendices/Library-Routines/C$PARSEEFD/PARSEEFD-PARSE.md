### PARSEEFD-PARSE

The PARSEEFD-PARSE function parses a specified EFD file.

#### Syntax:

```cobol
 CALL "C$PARSEEFD" USING PARSEEFD-PARSE
                         efdName
                         fileName
                         flags
                         PARSEEFD-DESCRIPTION
                  GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| PARSEEFD-PARSE | Constant |  |
| efdName | PIC X(n) | Specifies the name of the EFD file to parse, with or without path information. |
| fileName | PIC X(n) | Specifies an indexed data file to be compared against the parsed EFD file. If the characteristics of the specified data file do not match the EFD, the parsed EFD is freed and the return-value is set to 0. If this parameter is empty, the EFD file is not compared to any file. |
| flags | PIC 9(n) | Specifies the type of information that will be returned from other op-codes. This parameter can be 0 (if no flags are set), or the sum of any of the following values defined in [isparseefd.def](../../Copybooks/isparseefd.def):<br>Normally this is returned as elem-1(1), elem-1(2), elem-1(3), elem-2(1), elem-2(2), elem-2(3), elem-3(1), elem-3(2) and elem-3(3).<br>If PARSEEFD-FLAG-DEEP-FIRST is specified, the items are instead returned as elem-1(1), elem-2(1), elem-3(1), elem-1(2), elem-2(2), elem-3(2), elem-1(3), elem-2(3) and elem-3(3). The same data is returned, but in a different order. |
| PARSEEFD-DESCRIPTION | Group Item | Structure that contains the information returned by the function. This group item, defined in [isparseefd.def](../../Copybooks/isparseefd.def), has the following structure: |
|  | 01  parseefd-description.    03  parseefd-header-line.        05  parseefd-version                  pic x comp-n.        05  parseefd-select-name              pic x(30).        05  parseefd-filename                 pic x(30).        05  parseefd-filetype                 pic x comp-n.            88  parseefd-sequential-file         value 4.            88  parseefd-relative-file           value 8.            88  parseefd-indexed-file            value 12.    03  parseefd-record-line.        05  parseefd-max-rec-size             pic x(4) comp-n.        05  parseefd-min-rec-size             pic x(4) comp-n.        05  parseefd-num-keys                 pic x comp-n.    03  parseefd-condition-line.        05  parseefd-number-conditions        pic xx comp-n.    03  parseefd-fields-line.        05  parseefd-number-fields            pic x(4) comp-n.    03  parseefd-v6-information.        05  parseefd-cobol-trigger            pic x(100).        05  parseefd-compile-line.            07  parseefd-sign-flag            pic x(2) comp-n.                88  parseefd-sign-acu            value 0.                88  parseefd-sign-ibm            value 4.                88  parseefd-sign-mf             value 8.                88  parseefd-sign-ncr            value 20.                88  parseefd-sign-vax            value 36.                88  parseefd-sign-mbp            value 72.                88  parseefd-sign-rea            value 128.            07  parseefd-max-digits           pic x(2) comp-n.                88  parseefd-18-digits           value 40.                88  parseefd-31-digits           value 68.            07  parseefd-pgm-period           pic x.            07  parseefd-pgm-comma            pic x.            07  parseefd-encoding             pic x(2) comp-n.                88  parseefd_ascii               value 0.                88  parseefd_wide                value 1.                88  parseefd_utf-8               value 2.                88  parseefd_utf-16-le           value 3.                88  parseefd_utf-16-be           value 5.                88  parseefd_utf-32-le           value 4.                88  parseefd_utf-32-be           value 6. |  |
|  | PARSEEFD-VERSION | Version number of this EFD file |
|  | PARSEEFD-SELECT-NAME | Logical name of the file |
|  | PARSEEFD-FILENAME | Physical name of the file |
|  | PARSEEFD-FILETYPE | Data file type. Valid values are 4 (sequential file), 8 (relative file), and 12 (indexed file). |
|  | PARSEEFD-COBOL-TRIGGER | Name of the COBOL program to be executed as a trigger, if any. |
|  | PARSEEFD-MAX-REC-SIZE  and MIN-REC-SIZE | Maximum and minimum size values for a record in this file. |
|  | PARSEEFD-NUM-KEYS | Number of keys described in the EFD. |
|  | PARSEEFD-SIGN-FLAG | Sign compatibility |
|  | PARSEEFD-MAX-DIGITS | Maximum numeric digits. |
|  | PARSEEFD-PGM-PERIOD | Decimal value of the character used as the program period. |
|  | PARSEEFD-PGM-COMMA | Decimal value of the character used as the program comma. |
|  | PARSEEFD-NUMBER-CONDITIONS | Number of conditions described in the EFD file. |
|  | PARSEEFD-NUMBER-FIELDS | Number of fields available in the EFD. |
|  | PARSEEFD-ENCODING | Encoding of the EFD file. |

#### Return code:

*returnCode* can be any signed numeric data item.  For this function, the return value is the handle to the EFD. This handle must be used in future calls to C$PARSEEFD to get more information about the EFD, and to free the EFD when you are finished.

If *returnCode* is 0, an error occurred. You can get information about errors by examining f-errno and f-int-errno external data items, which are defined in the [isfilesys.def](../../Copybooks/isfilesys.def) copybook.
