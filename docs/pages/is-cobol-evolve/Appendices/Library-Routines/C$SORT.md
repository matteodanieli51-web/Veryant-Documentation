## C$SORT

The C$SORT library routine sorts indexed, relative, sequential and line sequential files. It takes only one parameter that matches with the instructions you would pass to the [ISSORT (External Sort)](../../SDK-Users-Guide/Utilities/ISSORT) utility on the command line.

The routine internally uses the SORT verb, so it’s affected by the configuration settings whose name starts with "iscobol.sort" (e.g. [iscobol.sort.memsize](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties)). The routine uses the file handler specified in the configuration to sort a specific kind of file. For example, when sorting indexed files, the routine uses the file handler specified by the [iscobol.file.index](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) property. The activity of this routine is traced in the isCOBOL log if [iscobol.tracelevel](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) includes the value 8 (trace file activity).

### Syntax:

```cobol
 CALL "C$SORT" USING sortInstructions
              GIVING returnCode
```

### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *sortInstructions* | PIC X(n)  or string literal | Specifies the instructions for the sort.<br>Refer to [ISSORT (External Sort)](../../SDK-Users-Guide/Utilities/ISSORT) documentation for details about the allowed syntax. |  |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| 2 | Unsupported feature |
| 15 | Command statement error(s) detected |
| 100 | I/O error |

### Examples:

**Example -** Sort the indexed file named *idxfile* by reading records on the primary key in descending order, discard records whose data at offset 37 length 4 bytes represents a numeric value less than 902. Save the result to a line sequential file named *output.txt*.

```cobol
call "c$sort" using "sort fields (1, 6, ch, d) "
               & "use idxfile org ix record f 40 key (1, 6, p, 7, 15, c, 22, 15, ad) "
               & "give output.txt org ls record f 40 "
               & "include cond = 37,4,ge,902".
if return-code not = 0
   display message "Sort failed"
end-if
```
