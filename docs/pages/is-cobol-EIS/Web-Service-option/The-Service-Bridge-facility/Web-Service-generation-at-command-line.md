### Web Service generation at command-line

The only action required in the source code is the mapping between Linkage Section data items and Web Service parameters. If no action is taken, the Compiler generates a Web Service parameter for each elementary COBOL data item and the parameter is assumed to be input/output. In this case instead we wish to define the first group item as input, the second as i/o, and the third as output, because the archive record buffer is shared between caller and callee, while the other two parameters are one-way.

This is achieved through [ELK Directives](../../../is-cobol-evolve/Language-Reference/ELK-Directives/ELK-Directives). The original Linkage Section code will change from

```cobol
       01  lnk-op-code             pic x.
           88 lnk-insert           value "I".
           88 lnk-update           value "U".
           88 lnk-read             value "R".
           88 lnk-read-next        value "N".
           88 lnk-read-previous    value "P".
           88 lnk-delete           value "D".
           88 lnk-first            value "F".
           88 lnk-last             value "L".
       01  lnk-song-data.
           05 lnk-sd-id            pic 9(5).
           05 lnk-sd-title         pic x(30).
           05 lnk-sd-length        pic x(5).
           05 lnk-sd-artist        pic x(20).
           05 lnk-sd-album         pic x(30).
           05 lnk-sd-genre         pic x(15).
           05 lnk-sd-label         pic x(30).
           05 lnk-sd-year          pic 9(4).
           05 lnk-sd-authors       occurs 5.
              10 lnk-sd-author     pic x(20).
       01  lnk-return-status.
           05 lnk-status           pic x(2).
              88 lnk-ok            value "OK".
              88 lnk-ko            value "KO".
           05 lnk-file-status      pic x(2).
              05 lnk-status-message   pic x(50).
```

to

```cobol
    >>elk input
       01  lnk-op-code             pic x.
           88 lnk-insert           value "I".
           88 lnk-update           value "U".
           88 lnk-read             value "R".
           88 lnk-read-next        value "N".
           88 lnk-read-previous    value "P".
           88 lnk-delete           value "D".
           88 lnk-first            value "F".
           88 lnk-last             value "L".
       01  lnk-song-data.
           05 lnk-sd-id            pic 9(5).
           05 lnk-sd-title         pic x(30).
           05 lnk-sd-length        pic x(5).
           05 lnk-sd-artist        pic x(20).
           05 lnk-sd-album         pic x(30).
           05 lnk-sd-genre         pic x(15).
           05 lnk-sd-label         pic x(30).
           05 lnk-sd-year          pic 9(4).
           05 lnk-sd-authors       occurs 5.
              10 lnk-sd-author     pic x(20).
      >>elk output
       01  lnk-return-status.
           05 lnk-status           pic x(2).
              88 lnk-ok            value "OK".
              88 lnk-ko            value "KO".
           05 lnk-file-status      pic x(2).
           05 lnk-status-message   pic x(50).
```

After this quick modification, we can compile the program as follows:

```cobol
iscc -c=compiler.properties SONGS.cbl
```

The file compiler.properties should include one or more [Library Routines Configuration](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#library-routines-configuration) entries. For the moment, we just activate the Sevice Bridge feature. It will generate a SOAP RPC Web Service. So, compiler.properties contains:

```cobol
iscobol.compiler.servicebridge=1
```

At the end of the compilation process, you will find a folder named "servicebridge" with a source file inside:

- *soapSONGS.cbl* : the bridge program that allows our program to be called as Web Service

In the compiler output folder (the working directory, in this case) instead you will find:

- *SONGS.class* : the class of the COBOL program just compiled
- *SONGS.wsdl* : the XML descriptor of the service

Refer to the installed sample README file for instructions about the deployment and testing of these items.

We’ve just demonstrated how to create a SOAP Web Service. With the next step, we’re going to generate a REST Web Service instead. To achieve it, change compiler.properties as follows:

```cobol
iscobol.compiler.servicebridge=1
iscobol.compiler.servicebridge.type=REST
```

Then compile again with the command:

```cobol
iscc -c=compiler.properties SONGS.cbl
```

At the end of the compilation process, you will find a folder named "servicebridge" with one file inside:

- *restSONGS.cbl* : the bridge program that allows our songs program to be called as REST Web Service.

Refer to the installed sample README file for instructions about the deployment and testing of these items.

An alternative way to activate the Service Bridge facitlity is to set the necessary properties directly in the source code, using the [SET Directive](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/SET-Directive). For example:

```cobol
      >>set "servicebridge" "1"
      >>set "servicebridge.type" "REST"
       PROGRAM-ID. SONGS.
```

In this case, no specific configuration is required at compile time, so the compile command is just:

```cobol
iscc SONGS.cbl
```
