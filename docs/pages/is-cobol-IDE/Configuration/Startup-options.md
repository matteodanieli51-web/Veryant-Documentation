## Startup options

The isCOBOL IDE runs inside a Java Virtual Machine (JVM). The command-line options used by this JVM at startup are stored in a configuration file named *isIDE.ini*, placed in the product installation directory.

By changing this file it’s possible to change the associated JVM and change the JVM options.

For example, if you wish to give isCOBOL IDE more memory, alter the value of the -Xmx option.

This is also the place to configure iscobol.font properties as the IDE doesn’t look for them in iscobol.properties files. If you wish to customize the quick loaded fonts (DEFAULT, MEDIUM, LARGE, SMALL, FIXED and TRADITIONAL) so that the IDE Screen Designer and Report Designer render them differently, you should set the corresponding isCOBOL property here, using the -D java option. For example, by adding the following line

```cobol
-Discobol.font.default=Arial-12
```

the IDE will use the font Arial with size 12 to represent controls whose font is set to ‘Default Font’ in the Screen Designer and Report Designer.

### isIDE.ini customization example

| Default isIDE.ini | Customized isIDE.ini |
| :--- | :--- |
| -startup<br>plugins/org.eclipse.equinox.launcher_1.6.500.v20230717-2134.jar<br>--launcher.library<br>plugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.2.700.v20221108-1024<br>-perspective<br>IscobolPerspective<br>--launcher.defaultAction<br>openFile<br>-vm<br>C:/Veryant/isCOBOL_Evolve2025R2/jre/bin/javaw.exe<br>-JavacCompiler=C:\Program Files\Java\jdk-11\bin\javac.exe<br>-LocalDocLocation=C:\Veryant\isCOBOL_Evolve2025R2\doc\index.html<br>-vmargs<br>-Xms256m<br>-Xmx2048m<br>-Xverify:none<br>-XX:+UseG1GC<br>-XX:+UseStringDeduplication<br>-Dosgi.instance.area.default=@user.home/workspace | -startup<br>plugins/org.eclipse.equinox.launcher_1.6.500.v20230717-2134.jar<br>--launcher.library<br>plugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.2.700.v20221108-1024<br>-perspective<br>IscobolPerspective<br>--launcher.defaultAction<br>openFile<br>-vm<br>C:/jdk-17.0.12/bin/javaw.exe<br>-JavacCompiler=C:\Program Files\Java\jdk-11\bin\javac.exe<br>-LocalDocLocation=C:\Veryant\isCOBOL_Evolve2025R2\doc\index.html<br>-vmargs<br>-Xms256m<br>-Xmx4096m<br>-Xverify:none<br>-XX:+UseG1GC<br>-XX:+UseStringDeduplication<br>-Dosgi.instance.area.default=@user.home/workspace<br>-Discobol.font.default=Arial-12 |

In the customized *isIDE.ini* we changed the associated JVM and the maximum heap value, and we added a new option for font setting.

Changes to *isIDE.ini* are applied when the IDE is restarted. Invalid settings in this file will prevent the IDE to start.
