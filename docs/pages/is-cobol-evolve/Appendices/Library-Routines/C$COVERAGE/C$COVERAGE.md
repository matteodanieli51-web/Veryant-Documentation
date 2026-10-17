## C$COVERAGE

The C$COVERAGE library routine allows you to control the activity of the isCOBOL’s Code Coverage. See [isCOBOL Code Coverage](../../../SDK-Users-Guide/Advanced-Features/isCOBOL-Code-Coverage/Introduction) for more details about profiling COBOL programs.

### Syntax:

```cobol
 CALL "C$COVERAGE" USING opCode
                         parameters
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| opCode | Function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [CCOV-FLUSH](./CCOV-FLUSH) | Generate reports. |
|  | [CCOV-SET](./CCOV-SET) | Set the report files and formats. |
| parameters | Parameters depend on the opcode. |  |

### Return code:

returnCode can be any signed numeric data item. The meaning depends on the opcode.

### Examples:

**Example -** Generate the coverage report at program exit. The report will be different depending on whatever you clicked the "Start Activity" button or not before exiting.

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

       MAIN.
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
           call "c$coverage" using ccov-set, "html", "coverage_output".
           call "c$coverage" using ccov-flush.
           call "c$easyopen" using "coverage_output/index.html".
           goback.

       CREATE-100-FILES.
           call "c$getenv" using "java.io.tmpdir", temp-dir.
           call "c$getenv" using "file.separator", separator.
           set file-prefix to temp-dir.
           perform 100 times
              perform BUILD-FILE-NAME
              perform MAKE-FILE
           end-perform.

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
