### JAR Files and the Jar Utility

A Java Archive (JAR) file is an archive containing one or more files or directories, similar to a UNIX tar file or a Zip file. JAR files primarily contain Java class files, but any type of file can be included. These files use the file name extension “.jar”.

Jar is also the name of the utility program that is used to create, update, list contents, and extract contents from JAR files. The jar utility is included in the JDK and its usage is similar to the UNIX tar utility.

#### Usage examples

1. Create a jar library named *myApp.jar* putting all the classes of your project into it:

```cobol
cd /develop/myApp/output
jar -cf myApp.jar *.class
```

2. Update *myApp.jar* by replacing MENU.class that has just been modified and recompiled:

```cobol
cd /develop/myApp/output
jar -uf myApp.jar MENU.class
```

3. List the classes contained in myApp.jar by displaying their name on the system output:

```cobol
jar -tf myApp.jar
```

**Note** - The content of a jar can also be viewed with a graphical interface if you open the jar file using an archive manager like WinZip, WinRar or 7Zip.
