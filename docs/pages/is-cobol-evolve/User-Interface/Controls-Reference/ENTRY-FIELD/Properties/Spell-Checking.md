## Spell-Checking

This property allows you to enable a real time spell checking on the field.

Setting this property to "default" activates the spell checking using the current language defined in the environment.

Setting this property to a specific Language Tag activates the spell checking using a specific language of a specific coutry. The supported Language Tags are: ast-ES, be-BY, br-FR, ca, ca-ES, ca-ES-valencia, da-DK, de, de-AT, de-CH, de-DE, de-DE-x-simple-language, el-GR, en, en-AU, en-CA, en-GB, en-NZ, en-US, en-ZA, eo, es, fa, fr, gl-ES, is-IS, it, ja-JP, km-KH, lt-LT, ml-IN, nl, pl-PL, pt, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sl-SI, sv, ta-IN, tl-PH, uk-UA, xx-XX, zh-CN. For more information about these values, refer to the table available in the Java documentation: [https://www.oracle.com/java/technologies/javase/jdk8-jre8-suported-locales.html](https://www.oracle.com/java/technologies/javase/jdk8-jre8-suported-locales.html).

The mistyped words are underlined and leaving the mouse pointer over them spawns a tool-tip that suggests the proper correction. The tool-tip delay is controlled by the configuration property [iscobol.gui.entryfield.spell_checking_delay](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) whose default is a half second.

Setting this property to spaces disables the feature.

At run time, the spell checking feature requires additional items that need to be installed separately:

- use *LanguageTool-3.1.zip* if you’re working with Java version 8,
- use *LanguageTool-4.3.zip* if you’re working with Java version 9 or greater.

Contact the Veryant support if you need help in retrieving the above items.

1. Unzip the file in a folder of your choice. The following structure will be created:

```cobol
CHANGES.md
CHANGES.txt
COPYING.txt
languagetool-commandline.jar
languagetool-server.jar
languagetool.jar
libs
META-INF
org
README.md
testrules.bat
testrules.sh
third-party-licenses
```

2. Don’t alter the folder structure and add the full path of *languagetool.jar* to the Classpath.  For example, if the above structure was copied to the folder *C:\LanguageTool* on Windows, use the following command:

```shell
set CLASSPATH=C:\LanguageTool\languagetool.jar;%CLASSPATH%
```

   If you wish to alter the folder structure, then you should add all these items  to the Classpath separately:

   - all the jars that were in the root folder
   - all the jars that were in the "lib" subfolder
   - the folder containing the "org" subfolder

In a thin client installation the Language Tool items must be installed client side and must be available in the client side Classpath.

**Example** - Define an entry-field control with spell checking using the default locale:

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     spell-checking "default"
     .
```
