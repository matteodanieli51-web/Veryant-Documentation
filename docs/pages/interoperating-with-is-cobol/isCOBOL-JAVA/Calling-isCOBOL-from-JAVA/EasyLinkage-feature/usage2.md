#### Usage 2 (Java replacement for called functions)

The EasyLinkage feature is able to generate a stub class for every CALL statement found in the compiled program. This alternative usage is useful if you plan to provide a Java replacement or a Java implementation for some called functions. Two scenarios where this feature may be useful are:

- replacement of C functions with equivalent Java functions in order to have a pure Java application,

- implementation of a library routine that is currently missing in isCOBOL.

In order to make the Compiler generate stub classes, the EasyLinkage feature must be activated through the following configuration setting:

```cobol
iscobol.compiler.easylinkage=2
```

See [Properties for the EasyLinkage feature](\) for all the configuration settings that affect the EasyLinkage feature.

EasyLinkage and its settings can also be set directly in the source code through the [SET Directive](\).

The \-od compiler option is ignored; the bridge class is always generated in the "easylinkage" subfolder in the directory pointed by [iscobol.compiler.generate.root_dir](\) whose default is the same directory as the COBOL source file.

Let’s analyze a small practical example.

Consider the following COBOL program:

```cobol
    program-id. showtempdir.
 
    working-storage section.
    77 buflen   pic s9(4) comp-5.
    77 pathname pic x(128).
 
    procedure division.
    main.          
        set buflen to size of pathname.
        call "GetTempPathA" using by value     buflen 
                                     by reference pathname.
        display pathname.
        goback.  
```

The program calls the GetTempPathA Windows API in order to retrieve the path of the system’s temporary directory. This program will work only on Windows systems and requires the isCOBOL interface to C (the dyncall library) in order to work.

By compiling the program with EasyLinkage enabled, you obtain a Java source named GETTEMPPATHA.java, that includes the following method:

```cobol
   @Override
 
   public Object call(Object[] argv) {
      final int argl=(argv==null)?0:argv.length;
 
      switch (argl) {
      default:
      case 2: pathname.link((CobolVar)argv[1]);
      case 1: buflen.link((CobolVar)argv[0]);
      case 0: break;
      }
 
/*  Write here the routine logic
 *        This is the call prototype:
*
 *   try {
 *      returnCode.set(Factory.call("_new_GETTEMPPATHA", null,
 *                                  new CobolVar[] {pathname.byRef(),
 *                                               buflen.byVal()}));
 *   }
 *   catch (CallOverflowException ex) {
 *      throw new WrapperException(ex);
 *   }
 *
/
      return returnCode;
   }
```

You can replace the commented code with the Java code to retrieve the temporary directory, e.g. :

```cobol
   @Override
 
   public Object call(Object[] argv) {
      final int argl=(argv==null)?0:argv.length;
 
      switch (argl) {
      default:
      case 2: pathname.link((CobolVar)argv[1]);
      case 1: buflen.link((CobolVar)argv[0]);
      case 0: break;
      }
 
      String tmpdir = System.getProperty("java.io.tmpdir");
      int tmpdirlen = tmpdir.length();
      if (buflen.toint() >= tmpdirlen) {
          pathname.set(tmpdir);
      } 
      returnCode.set(tmpdirlen);
      return returnCode;
   }
```

After compiling GETTEMPPATHA.java, you have a replacement for the GetTempPathA function.

From now on, the COBOL program will use the Java replacement instead of the original Windows API. In this way the program can work on every operating system and doesn’t require C libraries anymore.

EasyLikage uses the following rules to generate stub classes:

1. The name of the generated class will be the upper-case conversion of the name of the called function.

2. If the name is a data item rather than a constant string, then the data item name is used.

3. If the same function is called multiple times with different parameters, a separate stub for each different call is generated, along with a main stub that takes care of invoking the correct class depending on the parameters.

4. If the stub class already exists, it’s not generated again, in order to avoid accidental overwriting of code added by the user.
