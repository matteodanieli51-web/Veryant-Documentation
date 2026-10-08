## Compatibility enhancements

isCOBOL 2024 R2 release improves the compatibility with other COBOL dialects such as ACUCOBOL-GT© and RM/COBOL©. Additionally, the ESQL syntax has been enhanced to improve the compatibility with DB2 Preprocessor.

### COBOL compatibility

New library routines have been added:

- The P$SETBOXSHADE routine, implemented for RM compatibility, sets the color and density to be used by P$DRAWBOX. This is useful for graphical print output for customers that use the CALL P$* series of routines. The following code snippet shows the usage of the new routine:

```cobol
           CALL "P$SETBOXSHADE" USING "Black", 10
           CALL "P$DRAWBOX" USING 2.5, 3.0, "Absolute", "Inches", .25, 
                                 .25, "Inches", "No".
           CALL "P$SETBOXSHADE" USING "Red", 20
           CALL "P$DRAWBOX" USING 3.5, 3.0, "Absolute", "Inches", .25,
                                 .25, "Inches", "Yes".

```

to create 2 boxes; the first is black and not filled, the second is red with low intensity and filled inside.

- The C$REGEXP routine, implemented for ACU compatibility, is used to search strings using regular expressions. Though using isCOBOL’s OOP syntax to use java.util.regex.* is more powerful, the new routine makes it easier to port code as-is when migrating from ACUCOBOL-GT Extend code. The routine has different op-codes to compile a regexp, check for matches in a string, or for every group when performing group checks. If an error occurs detailed information is available using the CREGEXP-LASTERROR opcode and the memory allocated for handles can be released using the CREGEXP-RELEASE-MATCH and CREGEXP-RELEASE op-codes.

This is a code snippet of the new routine:

```cobol
       ...
       77 ret-regexp pic s99.
       77 w-string pic x(50).
       77 reg-expr pic x(50).
       77 h-regexp handle.
       77 h-result handle.
       ...
           CALL "C$REGEXP" USING CREGEXP-GET-LEVEL GIVING ret-regexp
           move "This is a big house with garden" to w-string
           string "(big)\s+(house)" x"00" delimited by size into reg-expr
           CALL "C$REGEXP" USING CREGEXP-COMPILE, reg-expr
                          GIVING h-regexp
           if h-regexp not = null
              move 0 to w-length, match-start, match-end
              CALL "C$REGEXP" USING CREGEXP-MATCH, h-regexp, w-string, 
                                    w-length, match-start, match-end
                           GIVING h-result
              if h-result = 0
                 CALL "C$REGEXP" USING CREGEXP-LAST-ERROR GIVING ret-regexp
              else
                 compute w-bytes = match-end - match-start
                 display "found:" w-string(match-start:w-bytes)
              end-if
              CALL "C$REGEXP" USING CREGEXP-NUMGROUPS h-result
                             GIVING ret-regexp
              move ret-regexp to num-groups
              perform varying w-group from 1 by 1 until w-group > num-groups
                 CALL "C$REGEXP" USING CREGEXP-GETMATCH, h-result, 
                                       w-group, idx-start, idx-end
                                GIVING ret-regexp
       ...
              end-perform
           end-if
           CALL "C$REGEXP" USING CREGEXP-RELEASE-MATCH h-result
           CALL "C$REGEXP" USING CREGEXP-RELEASE h-regexp
       ...
```

that shows how to use the different op-codes to perform searches.
