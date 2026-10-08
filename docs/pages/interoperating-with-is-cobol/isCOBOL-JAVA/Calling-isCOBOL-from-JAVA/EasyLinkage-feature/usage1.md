### The EasyLinkage feature

#### Usage 1 (Bridge to COBOL program)

The isCOBOL Compiler can generate bridge classes that a Java program can use to easily call your COBOL programs. These bridge classes include an object for each Linkage Section data item; such object allows to set and inquire the data item value. The bridge class provides a method named *run()* that allows to call the COBOL program.

Note that only standard COBOL programs identified by a PROGRAM-ID can be called through EasyLinkage. It’s not possible to call COBOL objects that are identified by a CLASS-ID.

In order to make the Compiler generate bridge classes, the EasyLinkage feature must be activated through the following configuration setting:

```cobol
iscobol.compiler.easylinkage=1
```

See [Properties for the EasyLinkage feature](\) for all the configuration settings that affect the EasyLinkage feature.

EasyLinkage and its settings can also be set directly in the source code through the [SET Directive](\).

The generated bridge class is produced according to the current compiler options. For example, if the \-jj option is used on the command line, then the Java source of the bridge program is left on disc. The only option ignored is \-od; the bridge class is always generated in the "easylinkage" subfolder in the directory indicated by the setting of [iscobol.compiler.generate.root_dir](\) whose default is the same directory as the COBOL source file.

The generated bridge class provides the following constructors:

1. **linkLNK()**: Creates a new instance of the bridge class and a new instance of each Cobolvar object mapping the Linkage Section parameters of the called program.
2. **linkLNK(boolean *create*)**: Creates a new instance of the bridge class. If *create* is true, it also creates a new instance of each Cobolvar object mapping the Linkage Section parameters of the called program. *create* should be set to false if you’re going to use custom Cobolvar objects instead of the ones generated from the called program Linkage Section.

The generated bridge class provides Cobolvar object for each Linkage Section parameter. For example, given the following Linkage Section:

```cobol
    LINKAGE SECTION.
    77 P1 PIC X(32).
    77 P2 PIC S9(9) COMP.
```

the following objects will be available:

```cobol
public com.iscobol.types.PicX p1;
public com.iscobol.types.NumericVar p2;
```

The generated bridge class also provides the following public methods:

| | |
| --- | --- |
| int | **run**()Calls the COBOL program and returns the program exit status.The Cobolvar objects generated from the Linkage Section of the called program are passed as parameter to the called program. |
| int | **run**(boolean *isNew*)Calls the COBOL program and returns the program exit status.The Cobolvar objects generated from the Linkage Section of the called program are passed as parameter to the called program.If isNew is true, the COBOL program is canceled before being called. |
| int | **run**(Object[] argv)Calls the COBOL program and returns the program exit status.The Cobolvar objects in argv are passed as parameter to the called program. |
| int | **run**(Object[] argv, boolean *isNew*)Calls the COBOL program and returns the program exit status.The Cobolvar objects in argv are passed as parameter to the called program.If isNew is true, the COBOL program is canceled before being called. |
| | |

Let’s analyze a small practical example.

Consider the following COBOL program:

```cobol
    program-id. prog1.
    linkage section.
    77 p1 pic 9.
    procedure division using p1.
    main.
        add 1 to p1.
        goback.
```

The EasyLinkage feature, run with default settings, generates a bridge class named linkPROG1 that includes an object named p1.

The following Java program calls PROG1 through the bridge class by passing the p1 parameter set to 1 and expecting it set to 2 when PROG1 returns.

```cobol
public class test {
   public static void main (String[] args) throws Exception {
      //create an instance of linkPROG1
      linkPROG1 prog1 = new linkPROG1();
      //set the p1 parameter to 1
      prog1.p1.set(1);
      //do the call
      prog1.run();
      //check if p1 was incremented by 1
      if (prog1.p1.toint() == 2) System.out.print("OK");
   }
}
```

Note that the COBOL program uses the GOBACK statement in order to return to the calling Java program. If STOP RUN is used instead the whole JVM terminates.

If the COBOL program includes entry points, the Java program can call each entry point as a separate function. However, it’s important to call the main program first, like you would do with a caller COBOL program, otherwise the entry points are not available.
