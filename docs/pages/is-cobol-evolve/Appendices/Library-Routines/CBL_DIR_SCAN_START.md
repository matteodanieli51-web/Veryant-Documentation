## CBL_DIR_SCAN_START

The CBL_DIR_SCAN_START library routine opens a list of files.

**Note -** The CBL_DIR_SCAN routines are supported for compatibility. If you’re writing new programs with isCOBOL, you may consider using [C$LIST_DIRECTORY](./C$LIST_DIRECTORY/C$LIST_DIRECTORY) instead.

### Syntax:

```cobol
 CALL "CBL_DIR_SCAN_START" USING dirHandle
                                 pattern
                                 searchAttribute
                                 flags
                          GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *dirHandle* | Handle | Receives the handle of the directory. |
| *pattern* | Group Item | Group item defined as follows:<br>*pattern-content* can contain a full or partial directory path with or without a filename or just a filename. |
| *searchAttribute* | PIC 9(4) COMP-5 | Valid values are:<br>**1** - Search for a file<br>**2** - Search for a directory<br>**4** - Search for any entry that is neither a file or a directory |
| *flags* | PIC 9(4) COMP-5 | Valid values are:<br>**1** - Turns on processing of escape sequences in *pattern*<br>**2** - Turns on the use of wildcards in *pattern* |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | An error occurred. |

### Examples:

**Example -** Open a directory with CBL_DIR_SCAN_START and then get the contents of it

```cobol
working-storage section.
77  hDir                    handle.

01  pattern.
    03 pattern-length       pic x(2) comp-n.
    03 pattern-content      pic x(128).

77  search-attribute        pic x(4) comp-n.
77  search-flags            pic x(4) comp-n.

01  dir-entry.
    03  dir-attribute       pic x(4) comp-n.
    03  dir-date-stamp.
        05 dir-year         pic x(4) comp-n.
        05 dir-month        pic x(2) comp-n.
        05 dir-day          pic x(2) comp-n.
        05 dir-hour         pic x(2) comp-n.
        05 dir-minute       pic x(2) comp-n.
        05 dir-second       pic x(2) comp-n.
        05 dir-millisec     pic x(2) comp-n.
        05 dir-dst          pic x(1) comp-n.
        05 dir-size         pic x(8) comp-n.
        05 dir-name.
           07 dir-name-len  pic x(2) comp-n value 32.
           07 dir-entry-name pic x(32).
...
procedure division.
...
list-directory.
   initialize  pattern
   move "./*"  to pattern-content
   move 3      to pattern-length
   move 1      to search-attribute
   move 3      to search-flags
   call "cbl_dir_scan_start" using hDir
        pattern
        search-attribute
        search-flags
   if return-code not = 0
      display message "Invalid directory"
      exit paragraph
   end-if
   perform until exit
      initialize dir-entry-name
      call "cbl_dir_scan_read" using hDir, dir-entry
      if return-code = 0
         display dir-entry-name
      else
         exit perform
      end-if
   end-perform
   call "cbl_dir_scan_end" using hDir.
```
