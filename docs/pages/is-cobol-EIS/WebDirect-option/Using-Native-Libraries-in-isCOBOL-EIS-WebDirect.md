## Using Native Libraries in isCOBOL EIS WebDirect

Usually DCI and other file handlers provide a file connector solution. When a file connector is available, it's preferable to use it instead of using native libraries. In order to use the file connector you just set the iscobol.file.index and iscobol.file.connector.program(.connector_name) properties to proper values in the iscobol.properties file installed in your webapp.

If a file connector is not available or you have to use other native libraries for features not related to file handling, proceed as follows:

- If the servlet container (Tomcat) is running on Windows, the folder containing the native library must appear in the PATH (System PATH setting, not User PATH). Alternatively, you can copy the necessary native libraries into the Tomcat bin folder.
- If you're working on UNIX/Linux, instead, ensure that the directory containing the native library is listed in the library path (e.g. LD_LIBRARY_PATH, LIBPATH, SHLIB_PATH, etc.)

For example, in a typical configuration, */opt/tomcat/bin/setenv.sh* is the appropriate place to set global CLASSPATH and LD_LIBRARY_PATH for Tomcat. In some cases, you can also set variables in $HOME/.tomcatrc.

If you're using a container different than Tomcat, consult the documentation for the specific product.

Note that it’s not possible to have more than one WebDirect web application using the same native library. The following error is returned when two web applications try to load the same native library:

```cobol
java.lang.UnsatisfiedLinkError: Native Library library_name already loaded in
another classloader
```

### Using c-treeRTG in web applications in Tomcat

Even though it includes native libraries, c-tree is suitable to be used by multiple web applications in the same servlet container without issues. The following steps describe how to set it up in Tomcat.

- copy *iscobol.jar* (that includes the ctreej file handler) to the WEB-INF/lib folder of your webapps
- copy *ctree-rtg.jar* (that includes the c-tree client implementation) to the lib folder of Tomcat
- have the ctree library available in the library path:
  - If Tomcat is running on Windows, the folder containing the native library must appear in the PATH (System PATH setting, not User PATH). Alternatively, you can copy the necessary native libraries into the Tomcat bin folder.
  - If Tomcat is running on UNIX/Linux, ensure that the directory containing the native library is listed in the library path (e.g. LD_LIBRARY_PATH, LIBPATH, SHLIB_PATH, etc.)

- assign your indexed files to the ctreej file handler by setting the [iscobol.file.index](../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file_index) configuration property to the value “ctreej”.

If you're using a container other than Tomcat, consult the documentation for the specific product.
