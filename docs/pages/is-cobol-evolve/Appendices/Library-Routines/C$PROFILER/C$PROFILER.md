## C$PROFILER

The C$PROFILER library routine allows you to control the activity of the isCOBOL’s profiler. See [Profiling COBOL programs](../../Performance-Tuning/Profiling-COBOL-programs) for more details about profiling COBOL programs.

### Syntax:

```cobol
 CALL "C$PROFILER" USING opCode
                         parameters
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| opCode | Function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [CPROF-DISABLE](./CPROF-DISABLE) | Stop profiling the runtime activity. |
|  | [CPROF-ENABLE](./CPROF-ENABLE) | Restart profiling the runtime activity. |
|  | [CPROF-FLUSH](./CPROF-FLUSH) | Generate reports. |
|  | [CPROF-SET](./CPROF-SET) | Set the report files and formats. |
| parameters | Parameters depend on the opcode. |  |

### Return code:

returnCode can be any signed numeric data item. The meaning depends on the opcode.

### Examples:

**Example -** Profile only the batch activity of a program excluding the interaction with the user

```cobol
       PROGRAM-ID. CREATE-TEMP-FILES.

       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           select the-file assign to temp-file-name
                  organization line sequential.

       FILE SECTION.
       fd the-file.
       01 file-record pic x(80).

       WORKING-STORAGE SECTION.
           copy "iscobol.def".
       01 temp-dir       pic x any length.
       01 separator      pic x any length.
       01 temp-file-name pic x any length.
       01 cnt            pic 9(3).
       01 crt-status     special-names crt status pic 9(5).

       SCREEN SECTION.
       01 screen-1.
        03 push-button
           title "&Start activity"
           line 3, col 3, size 30 cells
           exception-value 100
           .


       PROCEDURE DIVISION.
      * Turn off the profiler during user interaction
       MAIN.
           call "c$profiler" using cprof-disable.
      * Note - the above call is not necessary if you set iscobol.profiler.enable=0 in the configuration
           display standard graphical window.
           display screen-1.
           perform until crt-status = 27
             accept screen-1
                on exception
                   if crt-status = 100
                      perform CREATE-100-FILES
                   end-if
             end-accept
           end-perform.
           destroy screen-1.
           goback.

       CREATE-100-FILES.
           call "c$getenv" using "java.io.tmpdir", temp-dir.
           call "c$getenv" using "file.separator", separator.
           set file-prefix to temp-dir.
      * Turn on the profiler just before the batch process
           call "c$profiler" using cprof-enable.
           perform 100 times
              perform BUILD-FILE-NAME
              perform MAKE-FILE
           end-perform.
      * Turn off the profiler when the batch process ends
           call "c$profiler" using cprof-disable.
      * Set the report format to html, give the file a name
           call "c$profiler" using cprof-set, "html", "profiler_output".

      * Create a report with the current data, then clear the data
           call "c$profiler" using cprof-flush.
      * Open the report
           call "c$easyopen" using "profiler_output/index.html".
       BUILD-FILE-NAME.
           add 1 to cnt.
           initialize temp-file-name.
           string temp-dir
                  separator
                  "temp_"
                  cnt
                  delimited by size into temp-file-name.

       MAKE-FILE.
           open output the-file.
           close the-file.
```
