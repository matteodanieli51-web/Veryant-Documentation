## isCOBOL Runtime

isCOBOL Evolve 2026 R1 provides updated versions of several third-party libraries to improve security and modernize applications. It also includes enhanced library routines.

### Updated third party libraries

The Apache POI library, used by isCOBOL to create Excel‑compatible .xlsx files—for example when exporting grid control content—has been upgraded in the isCOBOL 2026 R1 release from version 4.1.2 to version 5.5.1.

The previous iText library used to create pdf files, for example when creating printer files using “-P PDF filename.pdf”, has been migrated to OpenPDF. PDF encryption is handled by the Bouncy Castle library, which has been updated from version 1.38 to version 1.78.1.

Keeping libraries up to date is essential to prevent bugs and security vulnerabilities, ensuring that applications remain stable, secure, and protected against newly discovered threats.

### Library routines enhancements

A new library routine named C$PROGINSTACK has been implemented to check if a program is in the current stack. This can help programs better manage the execution of recursive calls. The library takes a program name as parameter, and the return code is 0 if the program is not in the stack or 1 if it is. The following code snippet shows the usage of the new routine:

```cobol
           move "pr-cust" to program-name
           call "C$PROGINSTACK" using program-name
                               giving routine-status
          if routine-status = 0
             ...
             end-if
```
