## Language in message boxes and framework dialogs

The text labels in graphical message boxes and framework dialogs such as the one shown by [WPALETTE-CHOOSE-COLOR](../../Appendices/Library-Routines/W$PALETTE/W$PALETTE-CHOOSE-COLOR) are translated according to the current locale, that is the language tag specified by the *user.language* and *user.country* Java properties, whose default value matches with the language of the operating system.

For example, if the program displays a message box of type mb-yes-no while running on a French operating system, the buttons will have the labels "Oui" and "Non". But if the same program is run on the same operating system having the *user.language* Java property set to "it" (Italian), then the buttons will have the labels "Sì" and "No".

*Note* - If the [iscobol.resource.country](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) and [iscobol.resource.language](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) properties are set, they’re considered instead of the *user.country* and *user.language* Java properties.

*Note* - The [C$OPENSAVEBOX](../../Appendices/Library-Routines/C$OPENSAVEBOX/C$OPENSAVEBOX) dialogs on Windows are implemented by calling operating system API functions and their text labels always use the language of the operating system.

The translation is performed according to the content of properties files stored in the com/iscobol/rts package in the iscobol.jar library. These files have a name that starts with "IscobolMessages" and ends with a language tag. The runtime loads the property file whose language tag matches with the current language set in the JVM.

It’s possible to customize these translations or provide new ones by adding a library (or a folder) with the same package name before iscobol.jar in the CLASSPATH.

This is the list of available translations:

| Property file | Corresponding language tag | Corresponding language |
| --- | --- | --- |
| IscobolMessages.properties | n/a | Default (used when none of the below languages is applicable) |
| IscobolMessages_ar.properties | user.language=ar | Arabic |
| IscobolMessages_de.properties | user.language=de | German |
| IscobolMessages_el.properties | user.language=el | Greek |
| IscobolMessages_en.properties | user.language=en | English |
| IscobolMessages_es.properties | user.language=es | Spanish |
| IscobolMessages_fr.properties | user.language=fr | French |
| IscobolMessages_it.properties | user.language=it | Italian |
| IscobolMessages_ja.properties | user.language=ja | Japanese |
| IscobolMessages_nl.properties | user.language=nl | Dutch |
| IscobolMessages_pt.properties | user.language=pt | Portuguese |
| IscobolMessages_pt_BR.properties | user.language=ptuser.country=BR | Brazilian Portuguese |
| IscobolMessages_ru.properties | user.language=ru | Russian |
| IscobolMessages_zh_CN.properties | user.language=zhuser.country=CN | Chinese |
| IscobolMessages_zh_TW.properties | user.language=zhuser.coutry=TW | Taiwanese |

Here’s an example.

Suppose that your application runs on an Estonian operating system. No translation file is present in the iscobol.jar library for this language, so the default one is used and messages appear in English. In order to add the Estonian language to the framework you can do the following:

1. Change to a temporary folder where you will build the custom package, e.g.

```cobol
cd %TEMP%
```

2. Create the folder structure:

```cobol
mkdir com\iscobol\rts
```

3. Extract the file com\\iscobol\\rts\\IscobolMessages.properties from the iscobol.jar library and copy it to %TEMP%\\com\\iscobol\\rts. You can use an archive manager or the jar command for this task.
4. Rename the file to use the proper language tag:

```cobol
ren com\iscobol\rts\IscobolMessages.properties IscobolMessages_et.properties
```

5. Edit the file and replace the value of each entry with the corresponding Estonian translation (for example, change "authentication=Authentication" to "authentication=Autentimine").
6. include the folder structure in a jar:

```cobol
jar -cf lang_et.jar com\iscobol\rts
```

7. Copy lang_et.jar to the “jars” folder of your isCOBOL SDK:

```cobol
copy %TEMP%\lang_et.jar %ISCOBOL%\jars
```

From now on, when you run a COBOL program using the isCOBOL SDK, you will see text labels in Estonian language where applicable.

*Note* - the above sample commands are applicable to the Windows operating system and assume that the JDK bin directory is in the Path. On Unix/Linux platforms the same commands are slightly different.
