## isCOBOL Runtime

The isCOBOL runtime 2023 R1 includes a new file handler named VisionJ to access Vision files without the need for native code. It also supports new library routines and improved existing routines and configurations.

### New file handler VisionJ

A new value is supported for iscobol.file.index to fully access Vision file formats from versions 3 to 6, with the exception of encrypted files, without the need to create the Vision File Connector based on native code. The short alias name is VisionJ, while the full class name that needs to be used in CLASS clause of SELECT of the file definition is com.iscobol.io.DynamicVisionJ. This file handler manages locks in conjunction with ACUCOBOL-GT runtime, making it a good solution for mixed production sites where there are still ACUCOBOL-GT applications running. The approach is similar to the Vision File Connector but with higher performance since there is no need of pipe communication between processes.

As shown Figure 11, *Comparing VisionJ vs Vfc*, performance comparison was made using the IO-INDEXED program provided in the sample/io-performace folder to test 100,000 records managed by new the VisionJ file handle and the existing Vision file connector, known also as VFC. The test was run on Windows 11 Pro 64-bit with i7-8550U CPU @ 1.80GHz and 16 GB of RAM and on Linux Fedora 37 64-bit with i7-9750H CPU @ 2.60Ghz × 12 and 32 GB of RAM.

Figure 11. Comparing VisionJ vs Vfc.

![](../images/perf-visionj.png)

These tests show that the new VisionJ handler is faster in all operations and especially in the READ access, where the improvement is more than 50%. The new file handler is also integrated in all Veryant products, including the isCOBOL File Server and isCOBOL UDBC driver as well as isCOBOL utilities such as GIFE and ISMIGRATE. Specific configurations can be set with the prefix iscobol.visionj. For example, to create Vision files version four, set iscobol.visionj.v_version=4.

### New and improved library routines and configurations

New library routines have been implemented to improve compatibility with the MicroFocus dialect, such as:

- CBL_GET_KBD_STATUS to know if there are characters available from the keyboard
- CBL_READ_KBD_CHAR to retrieve the character that was typed, in ASCII
- CBL_THREAD_SLEEP to sleep the given number of milliseconds

The following code snippet shows the syntax and how to use these new library routines:

```cobol
      77  key-status   pic x comp-x.
      77  wcharacter   pic x.
           ...
           perform until wcharacter = x"1B" |ESC
             call "CBL_GET_KBD_STATUS" using key-status  
             if key-status = 1
                call "CBL_READ_KBD_CHAR" using wcharacter
                ...
                call "CBL_THREAD_SLEEP" using 5                  
             end-if
           end-perform
```

To simplify the string conversion from one encoding to another a new routine named *C$STRING_CONVERT* is now available. This is used in multiple instances; for example to prepare data to be passed to a web service or to convert data received from a third-party application in the charset used by the isCOBOL application. The following code snippet shows how to convert the Euro sign from Windows Cp1252 charset where the character is stored by 1 byte x”80” into UTF-8 charset where the same character is stored in 3 bytes x”E282AC”:

```cobol
       77  w-string        pic x(10).
       77  w-string-utf8   pic x(10).
       ...
           initialize  w-string-utf8       
           move "€" to w-string
           call "C$STRING_CONVERT" using w-string 
                                         w-string-utf8 
                                         "Cp1252" 
                                         "UTF-8" 
```

Library routines that refer to file names in parameters now support the use of pic N instead of pic X to correctly manage the files whose name includes characters that are not supported by the current encoding. For example, the following code snippet allows you to correctly retrieve the file name with Chinese characters even if the application is running on a Windows Latin-1 platform where the default encoding is CP1252:

```cobol
       copy "isopensave.def" replacing ==pic x== by ==pic n==.
       77  file-name         pic n(256).
       01  file-info.
           03 file-size      pic x(8) comp-x.
           03 file-date      pic 9(8) comp-x.
           03 file-time      pic 9(8) comp-x.
       77  ret-code          pic s9.
       ...
           initialize opensave-data
           call "C$OPENSAVEBOX" using opensave-open-box
                                      opensave-data
                               giving ret-code
           if ret-code = 1
              move opnsav-filename to file-name
              call "C$FILEINFO" using file-name
                                      file-info
                               giving ret-code
              ...
           end-if
```

In general, these library routines allow you to pass both pic X or pic N fields when the parameter is elementary, like the first parameter of C$FILEINFO. In cases where a parameter is a structure 01 level included in a .def copy file, like the opensave-data for C$OPENSAVEBOX, it’s necessary to use the copy replacing syntax to ensure that the child levels in the structure defined in the copy file will also use a pic N syntax.

The W$KEYBUF routine has been enhanced to support the Alt+letter/num combination key using {@?} syntax to pass a value from @A to @Z for letters or from @0 to @9 for numbers. For example, the following code snippet sends Alt+5 key to the next accept:

```cobol
       copy "iscobol.def".
       77  w-comb-key  pic x(4).
       ...
           move "{@5}" to w-comb-key
           call "W$KEYBUF" using wkbuf-add-to-end, w-comb-key 
```

These are the new supported configurations options:

- *iscobol.ctree.bound_library* to set the library name to be loaded in bound_server mode, when iscobol.ctree.bound_server=true is set. It has a default value of “ctdbsapp”, the correct value for c-treeRTG version 3.0.2.668 released with 2023R1. In previous versions of ctree the library was named “ctreedbs”. Set this configuration variable to “ctreedbs” if you wish to start an older c-tree version in bound mode.
- *iscobol.gui.implied_decimal* to have the implied_decimal feature on both character accept and graphical entry-fields. When set to true, if no decimal separator is specified by the user, a decimal separator is automatically applied by the Runtime according to the picture of the data-item bound to the input field.
