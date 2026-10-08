## Runtime enhancements

The isCOBOL runtime has been enhanced with the ability to redirect CALL statements to a different program, along with new configuration options.

### Redirect CALL

The existing configuration *iscobol.call_cancel.hook=classname* can now be used to redirect a CALL to another program and modify the parameters.

The com.iscobol.rts.CallHandler interface has been improved with the ability to redirect the call to another program by raising the dedicated exception com.iscobol.rts.MapCallException. For example, consider a program that calls another program named PROGA, passing a string and a number as parameters, e.g.

```cobol
    77 parx   pic x(5) value 'abc'.
    77 par9   pic 9(3) value 0.
    ...
        call "PROGA" using parx, par9.
```

Using the configuration *iscobol.call_cancel.hook=MYCALLHANDLER*, the MYCALLHANDLER class-id program is invoked just before executing PROGA. The logic in the BeforeCall method of MYCALLHANDLER modifies the parameter values by turning the string uppercase and the number incremented by 1, then it redirects the call to a program named PROGB by raising a MapCallException, as demonstrated in the following code snippet:

```cobol
    class-id. MYCALLHANDLER as "MYCALLHANDLER" implements jCallhandler.
    configuration section.
    repository.
        class jCallHandler     as "com.iscobol.rts.CallHandler"
        class jCallOverExc     as "com.iscobol.rts.CallOverflowException"
        class mapcallexception as "com.iscobol.rts.MapCallException"
        class picx             as "com.iscobol.types.PicX"
        class pic9             as "com.iscobol.types.NumericVar"
        ...
    method-id. mybeforeCall as "beforeCall" override.
    working-storage section.
    77  class-name   pic x any length.
    77  parx         object reference picx.
    77  par9         object reference pic9.
        ...
    linkage section.
    77  iscobol-call object reference jIscobolCall.
    77  j-objects    object reference JObjects.
    procedure division using iscobol-call, j-objects raising jCallOverExc.
        ...
        set class-name to self:>getName(iscobol-call)
        if class-name = "PROGA"
            set parx to j-objects(i) as picx
            move function upper-case(parx) to parx
            set par9 to j-objects(i) as pic9
            add 1 to par9
            raise mapcallexception:>new("PROGB", j-objects)
            ...
```

When the program is run, PROGB is called instead of PROGA, and it receives the modified parameter values. This feature may be useful in testing environments to simulate alternative scenarios without changing the COBOL programs code.

### New configurations

The following is a list of new properties introduced in this release, in both the Runtime and the utilities.

When parsing JSON strings, a new property named *iscobol.json_parse.read_on_mismatch* can be set to true to ignore errors when the JSON stream doesn't exactly match the COBOL group structure. The runtime will set the values of all COBOL items that have a matching item in the JSON stream, leaving the other items unchanged.

For COBOL programs running in character mode, *iscobol.dispsign* can be set to false to avoid showing the separated sign during character display.

When working with Java-beans controls in graphical interface programs running in ThinClient or WebClient environments, Java-bean methods should be serializable as they run on the client and need to be streamed from the server. When testing programs in standalone environments, where serialization is not mandatory, developers can now set the option *iscobol.gui.javabean.serialization_check* to true to force java-bean serialization. This setting helps developers test code as if it were running using the isCOBOL Application Server.

When working with databases and accessing data via JDBC drivers, the transaction isolation level can be set by using the configuration option *iscobol.jdbc.transaction_isolation*.

When using Database Bridge with EDBI routines for MSSQL, the setting *iscobol.jdbc.cursor.concurrency* can be set to 1007 for improved performance.

When accessing DBMaker with the native DCI interface, you can now set the configuration *iscobol.dci_routines.use_connector* to true to make DCI routines use the DCIC connector.

When handling errors, the configuration property *iscobol.file.errors_ok* can now be set to 3 to enable MF-compatible I/O errors.

In the ISUPDATER utility, a new entry named *lib.iscobolJars* can be defined in the configuration file to manage the SDK jars folder, useful when adding third party .jar files that are needed by the COBOL application.
