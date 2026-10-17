### The com.iscobol.java.IsCobol Class

The ability to call a COBOL program from a Java program is provided by the com.iscobol.java.IsCobol class that is stored in the iscobol.jar library. Along with the com.iscobol.java.IsCobol class Veryant provides the com.iscobol.java.CobolVarHelper class and the CobolVarExternalHelper class, that allow you to easily define COBOL data items to be passed to the called program.

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

The following Java program can call the above COBOL program:

```cobol
import com.iscobol.java.*;
import com.iscobol.rts.ICobolVar;
public class test {
   public static void main (String[] args) {
      //create an instance of CobolVarHelper and use it to generate the variable: 77 P1 PIC 9(1)
      CobolVarHelper cbh = new CobolVarHelper("FOO", CobolVarHelper._DCA).pic9("P1", 1, 0);
      ICobolVar p1 = cbh.get("P1");
      //set the P1 to 1
      p1.set(1);
      //to the call
      IsCobol.call("PROG1", new Object[] { p1 });
      //check if the variable was incremented by 1
      if (p1.toint() == 2) System.out.print("OK");
   }
}
```

Consult the javadoc installed with isCOBOL in the folder $ISCOBOL_HOME/javadoc for the full reference of the IsCobol and CobolVarHelper classes.

#### The com.iscobol.rts.IscobolRuntimeException and com.iscobol.java.StopRunAsException Classes

The IscobolRuntimeException and com.iscobol.java.StopRunAsException classes are included in the Framework libraries. They provide the COBOL error description.

Consult the javadoc installed with isCOBOL in the *javadoc* subfolder for a reference of the available methods.
