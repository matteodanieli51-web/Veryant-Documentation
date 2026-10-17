## C$EASYOPEN

The C$EASYOPEN library routine opens a file with the associated application, exactly as when the user double click on it in the operating system.

The routine is always asynchronous, it doesn’t wait for the user to close the associated application.

By default C$EASYOPEN takes advantage of the *java.awt.Desktop* class in order to open a file with the associated software, but it can be configured to use different methods by setting [iscobol.easyopen.method](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) in the configuration.

In thin client environment, if the file is stored on the client machine, then you can open it there by calling the routine via CALL CLIENT, instead, if the file is stored on the server machine, then you can get it downloaded to the client's temp folder and opened on the client by setting the csFlag parameter to 1.

**Note -** this routine is deprecated. The [CDESKTOP-OPEN](./C$DESKTOP/CDESKTOP-OPEN) function of [C$DESKTOP](./C$DESKTOP/C$DESKTOP) should be used instead.

### Syntax:

```cobol
 CALL "C$EASYOPEN" USING fileName
                        [csFlag]
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Specifies the name of the file to be open. |
| *csFlag* | PIC 9 | This optional parameter is evaluated in thin client environment.<br>Set it to 0 or omit it in order to open the file on the server.<br>Set it to 1 in order to open the file on the client.<br>In order to open the file on the client, the routine downloads it in the user temp directory on the client machine, then it opens it from there. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | File not found. |
| 2 | An error occurred during the copy from server to client in thin client environment. |
| 3 | Generic error. The most common causes are: |

### Examples:

**Example -** Open a PDF with the computer's default program for PDF files

```cobol
*> define retCode as pic 9(n)

call "c$easyopen" using "c:\myapp\pdfs\custreport.pdf"
                  giving retCode
if retCode not = 0
   display message "custreport.pdf could not be open"
end-if.
```
