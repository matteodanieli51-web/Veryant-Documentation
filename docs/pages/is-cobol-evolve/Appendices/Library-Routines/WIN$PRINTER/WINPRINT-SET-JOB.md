### WINPRINT-SET-JOB

The WINPRINT-SET-JOB function sets or returns the identifier of the job that is currently spooling into the printer.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-JOB
                          jobID
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SET-JOB | Constant |  |
| jobID | SIGNED-INT | If set to 0, the function returns the job ID of the current print job.<br>If set to a value greater than zero, the function causes the next calls to WIN$PRINTER to affect the print job identified by *jobID*. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. It contains the current jobID if the *jobID* parameter was zero. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |

#### Example:

Produce two print jobs simoultaneously using different fonts and margins for each job.

```cobol
      input-output section.
       file-control.
           select file1 assign to print "-p pdf print1.pdf"
                 organization is sequential.
           select file2 assign to print "-p pdf print2.pdf"
                 organization is sequential.
       data division.
       file section.
       fd  file1.
       01  rec-file1 pic x(90).
       fd  file2.
       01  rec-file2 pic x(90).
       working-storage section.
           copy "isprint.def".
           copy "fonts.def".
       77  ind  pic 99.
       77  job1-id usage signed-int.
       77  job2-id usage signed-int.
       77  h-font1 usage handle of font.
       77  h-font2 usage handle of font.
       procedure division.
       main-logic.
           initialize wfont-data.
           set wfdevice-win-printer to true.
           move "Courier New" to wfont-name.
           move 10 to wfont-size.
           call   "w$font" using wfont-get-font,
                                 h-font1, wfont-data
           initialize wfont-data.
           set wfdevice-win-printer to true.
           move "times new roman" to wfont-name.
           move 10 to wfont-size.
           call   "w$font" using wfont-get-font,
                                 h-font2, wfont-data

           open output file1
           call "win$printer" using winprint-set-job 0
                             giving job1-id.

           open output file2
           call "win$printer" using winprint-set-job 0
                             giving job2-id.

           call "win$printer" using winprint-set-job job1-id.

           initialize wprtdata-set-font.
           move h-font1 to wprtdata-font.
           call "win$printer" using winprint-set-font,
                                    winprint-data
          initialize wprtdata-margins
           move 5  to wprtdata-top-margin
                      wprtdata-bottom-margin
                      wprtdata-left-margin
                      wprtdata-right-margin
           move wprtmargin-centimeters to wprtdata-margin-units
           call "win$printer" using winprint-set-margins
                                    winprint-data

           call "win$printer" using winprint-set-job job2-id.

           initialize wprtdata-set-font.
           move h-font2 to wprtdata-font.
           call "win$printer" using winprint-set-font,
                                     winprint-data
           initialize wprtdata-margins
           move 10  to wprtdata-top-margin
                      wprtdata-bottom-margin
                      wprtdata-left-margin
                      wprtdata-right-margin
           move wprtmargin-centimeters to wprtdata-margin-units
           call "win$printer" using winprint-set-margins
                                    winprintdata
           perform varying ind from 1 by 1 until ind > 10
              initialize rec-file1
              string "out1 row" ind delimited by size into rec-file1
              write rec-file1
              initialize rec-file2
              string "out2 row" ind delimited by size into rec-file2
              write rec-file2
           end-perform
           close file1
           close file2
           goback
           .
```
