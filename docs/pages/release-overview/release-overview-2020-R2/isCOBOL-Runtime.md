## isCOBOL Runtime

Starting from isCOBOL 2020R2, new configuration settings and new library routines are available to customize behavior and improve compatibility.

The new configuration settings are:

- iscobol.key.<\keystroke>=search=<\context> to customize the search action in a specific component. By default, pressing Ctrl+F on grid, print-preview and web-browser makes the Search panel appear. The key combination can be customized: for example it can be set to Shift+F4 by using the following configuration settings:
- iscobol.key.\*f=search=
- iscobol.key.^f4=search=grid,print-preview,web-browser

If you need to disable the Ctrl+F feature for the web-browser only, the following setting can be used:

```cobol
iscobol.key.*f=search=print-preview,grid
```

- iscobol.call_cancel.hook=className to specify a hook class for CALL and CANCEL statements. The class can be written in pure Java or in COBOL using the appropriate syntax CLASS-ID to implement the interface “com.iscobol.rts.CallHandler”. The list of required methods that need to be defined for this interface are:
  - public void afterCall(IscobolCall call, Object\[\] argv);
  - public void afterCancel(IscobolCall call);
  - o public void afterCancelAll();
  - public void beforeCall(IscobolCall call, Object\[\] argv);
  - public boolean beforeCancel(IscobolCall call);
  - public boolean beforeCancelAll();
- iscobol.jdbc.auto_connect=true to automatically connect to the database without using an explicit ESQL CONNECT statement in the program. When the first ESQL statement is executed, the connection is automatically established.
- iscobol.jdbc.user=userName to supply a username credential without specifying it in the iscobol.jdbc.url property. This can be used also in conjunction with iscobol.jdbc.auto_connect=true
- iscobol.jdbc.password=pwd to supply the connection password without specifying it in the iscobol.jdbc.url property. This can be used also in conjunction with iscobol.jdbc.auto_connect=true

New library routines have been implemented to enhance the compatibility with the MicroFocus® dialect:

- CBL_ALLOC_MEM to allocate memory. The allocated memory amount is expressed in bytes, and it returns a pointer used to release allocated memory.
- CBL_FREE\MEM to release the previously allocated memory.
- CBL_GET_CURRENT_DIR to retrieve the current folder name.
- CBL_READ_DIR to retrieve the current folder absolute path name.

The following is a code snippet of a migrated COBOL program that calls all the new supported library routines:

```cobol
           WORKING-STORAGE SECTION.
           77  path-name         pic x(256).
           77  path-name-length  pic x comp-x.
           77  dir-status-code   pic x(2) comp-5.
           77  flags             pic x(4) comp-5.
           77  name-length       pic x(4) comp-5.
           77  mem-pointer       usage pointer.
           77  mem-size          pic x(4) comp-5.
           77  mem-flags         pic x(4) comp-5.
           77  mem-status-code   pic x(2) comp-5.
           ...
           PROCEDURE DIVISION. 
           ...
               call "CBL_READ_DIR" using path-name 
                                         path-name-length 
                               returning dir-status-code
               call "CBL_GET_CURRENT_DIR" using by value     flags
                                                by value     name-length
                                                by reference path-name
                                                returning    dir-status-code
               call "CBL_ALLOC_MEM" using          mem-pointer
                                          by value mem-size  
                                          by value mem-flags
                                         returning mem-status-code
               call "CBL_FREE_MEM"  using by value mem-pointer
                                         returning mem-status-code 
```
