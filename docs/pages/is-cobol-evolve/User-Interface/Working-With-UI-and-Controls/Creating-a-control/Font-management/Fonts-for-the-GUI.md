### Fonts for the GUI

There are 6 internal fonts that are always available in a graphical host system:

- default font
- small font
- medium font
- large font
- traditional font
- fixed font

These fonts are mapped to Java logical fonts by default. Java logical fonts are the five font families defined by the Java platform which must be supported by any Java runtime environment: Serif, SansSerif, Monospaced, Dialog, and DialogInput. These logical fonts are not actual font libraries. Instead, the logical font names are mapped to physical fonts by the Java runtime environment.

You can map them to different fonts installed in the system by setting the following configuration properties:

- [iscobol.font.default \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-interface-gui)
- [iscobol.font.small \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-interface-gui)
- [iscobol.font.medium \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-interface-gui)
- [iscobol.font.large \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-interface-gui)
- [iscobol.font.traditional \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-interface-gui)
- [iscobol.font.fixed \*](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-interface-gui)

The handles to these fonts are defined in the [isfonts.def](../../../../Appendices/Copybooks/fonts.def) copybook.

In addition to the above internal fonts you can load other fonts from the underlying host sytem and from disc files.

To load a font from the underlying host system, use the [WFONT-GET-FONT](../../../../Appendices/Library-Routines/W$CREATEFONT) function.

To load a font from a disc file, use the [W$CREATEFONT](../../../../Appendices/Library-Routines/W$CREATEFONT) routine and then the [WFONT-GET-FONT](../../../../Appendices/Library-Routines/W$FONT/WFONT-GET-FONT) function.

If the load is successful, the [WFONT-GET-FONT](../../../../Appendices/Library-Routines/W$FONT/WFONT-GET-FONT) returns a handle to the font that you can use with graphical controls properties.
