### WINPRINT-SET-PRINTER-EX

This functions selects a printer and set more features of that printer than the [WINPRINT-SET-PRINTER](./WINPRINT-SET-PRINTER) allows.

The printer settings are evaluated only at the OPEN OUTPUT of the print-file. Calling this op-code in the middle of the print job has no effect.

When printing to PDF or Print Preview, the active printer is used to calculate margins. If you wish to avoid this, call the WINPRINT-SET-PRINTER-EX function with *wprterr-no-printers* set to true. You will be allowed to set only *winprint-curr-copies* and *winprint-curr-orientation.*

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-PRINTER-EX
                          WINPRINT-SELECTION
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-SET-PRINTER-EX | Constant |  |  |
| WINPRINT-SELECTION | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | Note - members not mentioned below are not used by this function. |  |
|  |  | *winprint-name*<br>It is the name of the printer.<br>When the function is called and winprint-no-of-printers is zero, the function searches for a printer with the name specified and selects it. |  |
|  |  | *winprint-no-of-printers*<br>It is the number of the printer to be selected. When this member is zero, the function selects the printer with the name specified in winprint-name. |  |
|  |  | *winprint-quality*<br>It is the print quality. Note that most laser printers do not support quality, while most dot-matrix printers do. Valid values, defined in [isprint.def](../../Copybooks/isprint.def) , are: |  |
|  |  | WPRTSEL-QUALITY-DEFAULT | Default quality. |
|  |  | WPRTSEL-QUALITY-HIGH | High quality. |
|  |  | WPRTSEL-QUALITY-MEDIUM | Medium quality. |
|  |  | WPRTSEL-QUALITY-LOW | Low quality. |
|  |  | WPRTSEL-QUALITY-DRAFT | Draft quality. |
|  |  | *winprint-curr-orientation*<br>Is the paper orientation. Valid values are: |  |
|  |  | WPRTSEL-ORIENT-DEFAULT | Default paper orientation. |
|  |  | WPRTSEL-ORIENT-PORTRAIT | Portrait. |
|  |  | WPRTSEL-ORIENT-LANDSCAPE | Landscape. |
|  |  | *winprint-curr-copies*<br>Is the number of copies the printer will print with the next job. |  |
|  |  | *winprint-curr-duplex*<br>Is the  duplex setting. |  |
|  |  | WPRT-SIMPLEX | No duplex. |
|  |  | WPRT-DUPLEX-VERTICAL | Duplex vertical. |
|  |  | WPRT-DUPLEX-HORIZONTAL | Duplex horizontal. |
|  |  | *winprint-curr-collate*<br>Is the current collate state. Valid values are: |  |
|  |  | WPRT-COLLATE-OFF | Collate disabled |
|  |  | WPRT-COLLATE-ON | Collate enabled |
|  |  | *winprint-curr-papersize*<br>Is the paper format. Set one of the available conditions to true. For example, setting the wprt-a4 condition to true would set the paper format to A4, setting the wprt-letter condition to true would set the paper format to Letter.<br>Available papersizes are listed below.<br>If no papersize is forced, the runtime uses either Letter or A4 depending on the country specified by the *user.country* Java property: for US and CANADA, Letter is used; for other countries, A4 is used.<br>Note that, if the [iscobol.resource.country](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property is set, this property is considered instead of the *user.country* Java property.<br>In a thin client environment [iscobol.resource.country](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is always evaluated server side, while *user.country* is evaluated on the machine that executes the print. |  |
|  |  | *winprint-curr-tray*<br>Is the printer tray.<br>**Note** - this field is no longer supported since Java 17.<br>Valid values, defined in [isprint.def](../../Copybooks/isprint.def) , are: |  |
|  |  | WPRT-UPPER-TRAY |  |
|  |  | WPRT-LOWER-TRAY |  |
|  |  | WPRT-MIDDLE-TRAY |  |
|  |  | WPRT-MANUAL-TRAY |  |
|  |  | WPRT-ENVELOPE-TRAY |  |
|  |  | WPRT-ENVMANUAL-TRAY |  |
|  |  | WPRT-AUTO-TRAY |  |
|  |  | WPRT-TRACTOR-TRAY |  |
|  |  | WPRT-SMALLFMT-TRAY |  |
|  |  | WPRT-LARGEFMT-TRAY |  |
|  |  | WPRT-LARGECAPACITY-TRAY |  |
|  |  | WPRT-CASSETTE-TRAY |  |
|  |  | WPRT-FORMSOURCE-TRAY |  |
|  |  | *winprint-curr-color*<br>It turns colors on or off. Set the variable to 1 in order to use colors or set it to 0 if you want a monochrome print.<br>Note - Setting winprint-curr-color to 0 doesn't guarantee that the printer output will be black and white. The runtime doesn't perform any color conversion, it just passes the monochrome setting to the printer, then it's the printer’s duty to honor it. Most of the physical printers are able to convert the graphics to black and white, but the isCOBOL Print Preview window and the internal PDF printer are not. |  |
|  |  | *winprint-job-title*<br>Is the title of the job in the print spooler. |  |

**Note -** If no printer is available in the system, set *wprterr-no-printers* to true before calling this function in order to avoid errors. You will be allowed to set only *winprint-curr-copies* and *winprint-curr-orientation.*

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |

#### List of supported papersizes

| Data-item (available in [isprint.def](../../Copybooks/isprint.def)) | Value | Description |
| --- | --- | --- |
| wprt-letter<br>wprt-lettersmall<br>wprt-tabloid<br>wprt-ledger<br>wprt-legal<br>wprt-statement<br>wprt-executive<br>wprt-a3<br>wprt-a4<br>wprt-a4small<br>wprt-a5<br>wprt-b4<br>wprt-b5<br>wprt-folio<br>wprt-quarto<br>wprt-10x14<br>wprt-11x17<br>wprt-note<br>wprt-env_9<br>wprt-env_10<br>wprt-env_11<br>wprt-env_12<br>wprt-env_14<br>wprt-csheet<br>wprt-dsheet<br>wprt-esheet<br>wprt-env_dl<br>wprt-env_c5<br>wprt-env_c3<br>wprt-env_c4<br>wprt-env_c6<br>wprt-env_c65<br>wprt-env_b4<br>wprt-env_b5<br>wprt-env_b6<br>wprt-env_italy<br>wprt-env_monarch<br>wprt-env_personal<br>wprt-fanfold_us<br>wprt-fanfold_std_german<br>wprt-fanfold_lgl_german<br>wprt-japanese-postcard<br>wprt-env-9x11<br>wprt-10x11<br>wprt-15x11<br>wprt-env-invite<br>wprt-us-letter-extra<br>wprt-us-legal-extra<br>wprt-tabloid-extra<br>wprt-a4-extra<br>wprt-letter-transverse<br>wprt-a4-transverse<br>wprt-letter-extra-transverse<br>wprt-supera-a4<br>wprt-superb-a3<br>wprt-us-letter-plus<br>wprt-a4-plus | 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>43<br>44<br>45<br>46<br>47<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60 | na-letter, 215900x279400 um<br>na-letter, 215900x279400 um<br>tabloid, null<br>ledger, 279400x431800 um<br>na-legal, 215900x355600 um<br>Statement 5 1/2 x 8 1/2 in, 139700x215900 um<br>executive, 184150x266700 um<br>iso-a3, 297000x420000 um<br>iso-a4, 210000x297000 um<br>iso-a4, 210000x297000 um<br>iso-a5, 148000x210000 um<br>jis-b4, 257000x364000 um<br>jis-b5, 182000x257000 um<br>folio, 215900x330200 um<br>quarto, 215900x275082 um<br>na-10x14-envelope, 254000x355600 um<br>11x17 in, 279400x431800 um<br>Note 8 1/2 x 11 in, 215900x279400 um<br>na-number-9-envelope, 98425x225425 um<br>na-number-10-envelope, 104775x241300 um<br>na-number-11-envelope, 114300x263525 um<br>na-number-12-envelope, 120650x279400 um<br>na-number-14-envelope, 127000x292100 um<br>c, 431800x558800 um<br>d, 558800x863600 um<br>e, 863600x1117600 um<br>Envelope DL 110 x 220mm, 110000x220000 um<br>iso-c5, 162000x229000 um<br>iso-c3, 324000x458000 um<br>iso-c4, 229000x324000 um<br>iso-c6, 114000x162000 um<br>Envelope C65 114 x 229 mm, 114000x229000 um<br>iso-b4, 250000x353000 um<br>iso-b5, 176000x250000 um<br>iso-b6, 125000x176000 um<br>italian-envelope, 110000x230000 um<br>monarch-envelope, 98298x190500 um<br>personal-envelope, 92075x165100 um<br>US Std Fanfold 14 7/8 x 11 in, 198120x279400 um<br>German Std Fanfold 8 1/2 x 12 in, 215900x304800 um<br>German Legal Fanfold 8 1/2 x 13 in, 215900x330200 um<br>japanese-postcard, 100000x148000 um<br>na-9x11-envelope, 228600x279400 um<br>10 x 11 in, 254000x279400 um<br>15 x 11 in, 279400x381000 um<br>Envelope Invite 220 x 220 mm, 220000x220000 um<br>US Letter Extra 9 1/2 x 12 in, 241300x304800 um<br>US Legal Extra 9 1/2 x 15 in, 241300x381000 um<br>US Tabloid Extra 11.69 x 18 in, 296926x457200 um<br>A4 Extra 9.27 x 12.69 in , 235458x322326 um<br>Letter Transverse 8 1/2 x 11 in, 215900x279400 um<br>A4 Transverse 210 x 297 mm, 210000x297000 um<br>Letter Extra Transverse 9 1/2 x 12 in, 241300x304800 um<br>SuperA/SuperA/A4 227 x 356 mm, 227000x356000 um<br>SuperB/SuperB/A3 305 x 487 mm, 305000x487000 um<br>US Letter Plus 8.5 x 12.69 in, 215900x322326 um<br>A4 Plus 210 x 330 mm, 210000x330000 um |
| wprt-a5-transverse<br>wprt-b5-transverse<br>wprt-a3-extra<br>wprt-a5-extra<br>wprt-b5-extra<br>wprt-a2<br>wprt-a3-transverse<br>wprt-a3-extra-transverse<br>wprt-oufuko-postcard<br>wprt-a6 | 61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70 | A5 Transverse 148 x 210 mm, 148000x210000 um<br>B5 (JIS) Transverse 182 x 257 mm, 182000x257000 um<br>A3 Extra 322 x 445 mm, 322000x445000 um<br>A5 Extra 174 x 235 mm, 174000x235000 um<br>B5 (ISO) Extra 201 x 276 mm, 201000x276000 um<br>iso-a2, 420000x594000 um<br>A3 Transverse 297 x 420 mm, 297000x420000 um<br>A3 Extra Transverse 322 x 445 mm, 322000x445000 um<br>oufuko-postcard, 148000x200000 um<br>iso-a6, 105000x148000 um |
