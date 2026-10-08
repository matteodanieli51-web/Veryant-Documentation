## Framework Improvements

- New profiling facility

To help tune application performance isCOBOL 2015 R1 includes a profiling facility during the execution of a program. This built-in facility provides an easy way to choose the COBOL program that should be profiled, prompting the runtime to collect information about the amount of time spent in different parts of the code. All this information is placed into an output file called iscobol.txt.prof.

It is very easy to profile any isCOBOL application because this profiling facility can be used on isCOBOL programs at runtime level without any need for the compiler option. This built-in facility is activated when a program is executed with the "-javaagent" flag:

```cobol
iscrun -J-javaagent:isprofiler.jar IO_PERFORMANCE
```

That creates an iscobol.hprof.txt file containing:

```cobol
isCOBOL profile rev $Revision: 18624 $ created Tue Apr 14 14:35:08 CEST 2015
elapsed   time = 3.94
evaluated time = 2.52
overhead1=56; overhead2=75
-------+-------+---------+-----------+-----------------
self % |accum %| seconds |   count   |program:paragraph
-------+-------+---------+-----------+-----------------
 25.96%| 25.96%|     0.65|          1|IO_INDEXED:DELETE_FILE1_TEST
 16.09%| 42.06%|     0.40|          1|IO_INDEXED:LOAD_FILE1_TEST
 14.80%| 56.86%|     0.37|          1|IO_INDEXED:UPDATE_FILE1_TEST
  9.15%| 66.01%|     0.23|          1|IO_INDEXED:READ_FILE1_TEST
  8.66%| 74.68%|     0.21|          1|IO_SEQUENTIAL:LOAD_FILE1_TEST
  5.34%| 80.02%|     0.13|          1|IO_RELATIVE:UPDATE_FILE1_TEST
  4.56%| 84.59%|     0.11|          1|IO_RELATIVE:DELETE_FILE1_TEST
  3.22%| 87.81%|     0.08|          1|IO_PERFORMANCE:MAIN_LOGIC
  3.20%| 91.01%|     0.08|          1|IO_RELATIVE:LOAD_FILE1_TEST
  3.12%| 94.14%|     0.07|          1|IO_SEQUENTIAL:READ_FILE1_TEST
  2.73%| 96.88%|     0.06|          1|IO_RELATIVE:READ_FILE1_TEST
  1.69%| 98.57%|     0.04|          1|IO_INDEXED:MAIN_LOGIC
  0.52%| 99.10%|     0.01|          4|IO_INDEXED:START_TIMER
  0.40%| 99.50%|     0.01|          4|IO_RELATIVE:START_TIMER
  0.37%| 99.88%|     0.00|          2|IO_SEQUENTIAL:START_TIMER
  0.03%| 99.92%|     0.00|          1|IO_RELATIVE:MAIN_LOGIC
  0.03%| 99.96%|     0.00|          1|IO_SEQUENTIAL:MAIN_LOGIC
  0.01%| 99.98%|     0.00|          4|IO_INDEXED:STOP_TIMER
  0.01%| 99.99%|     0.00|          4|IO_RELATIVE:STOP_TIMER
  0.00%|100.00%|     0.00|          2|IO_SEQUENTIAL:STOP_TIMER
```

- Enhanced Win$Printer and Print functionalities

To simplify the background color definition, a new op-code named WINPRINT-SETBACKGROUND-COLOR was provided. It sets the background-color to be used during printing.

Code example:

```cobol
           initialize wprtdata-text-color
           move wprt-color-yellow to wprtdata-text-color
           call "win$printer"  using WINPRINT-SET-BACKGROUND-COLOR
                                     wprtdata-text-color
```

In order to renovate the printing output with some useful information like page-number, name of report, date of printing, etc, a new op-code WINPRINT-SET-HEADER-FOOTER for WIN$PRINTER was provided. The following example shows how to have the date printed on the header and the number of page printed on the footer:

```cobol
          call "win$printer" using  WINPRINT-SET-HEADER-FOOTER
                                    "&b Printed on date &D"
                                    "&b Page &p of &P"
                                    h-large-font
```

To be able to generate an encrypted PDF file, new attributes are now supported in WIN$PRINTER library routine to manage passwords:

Code example:

```cobol
           initialize pdfcrypt-type
           add pdfcrypt-std-128 pdfcrypt-all-permissions
               giving pdfcrypt-type
           call "win$printer" using winprint-set-attribute
                 "ENCRYPTION" pdfcrypt-type
           call "win$printer" using winprint-set-attribute
                 "USER_PASSWORD" "MyPwd"
```
