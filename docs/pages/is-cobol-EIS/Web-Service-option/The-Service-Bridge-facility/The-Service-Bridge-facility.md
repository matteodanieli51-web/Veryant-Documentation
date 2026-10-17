## The Service Bridge facility

The creation of SOAP and REST Web Services is made easy by the isCOBOL Server Bridge facility. With this feature enabled, every time the Compiler compiles a legacy COBOL program with Linkage Section, it generates a bridge class that allows the program to be used as a Web Service.

The feature is activated and controlled through the [Library Routines Configuration](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#library-routines-configuration) entries that can be set either in the configuration file or directly in the source through the [SET Directive](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/SET-Directive.md). isCOBOL IDE users instead can use the [isCOBOL Service Editor](../../../is-cobol-IDE/The-isCOBOL-IDE-Perspective/Editors/isCOBOL-Service-Editor).

Let’s consider the legacy COBOL program "SONGS.cbl" installed among isCOBOL samples. This program allows the user to manage an archive of songs. It has the following Linkage Section:

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

In the next two chapters we’ll see how to transform it in a Web Service through the Service Bridge facility, with and without isCOBOL IDE.
