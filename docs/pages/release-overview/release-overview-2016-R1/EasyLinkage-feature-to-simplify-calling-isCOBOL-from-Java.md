## EasyLinkage feature to simplify calling isCOBOL from Java

Some new compiler properties are added to generate a java bridge program that allows to easily run an isCOBOL program from Java. The EasyLinkage feature simplify the previous usage of invoke isCOBOL programs from Java because now there is no need for Java developer to know the cobol variable type and structure of parameters in Linkage Section.

Considering to have the linkage section inside a cobol program named PROG1 defined in this way:

```cobol
         linkage section.
         77 P1 pic 9(5) comp.
         77 P2 pic x(20).
         procedure division using p1 p2.
         ...
```

The compiler automatically generate a java class named linkPROG1, so this “bridge class” will be used from a Java source in this way:

```cobol
  public class test {
     public static void main (String[] args) throws Exception {
              //create an instance of linkPROG1
               linkPROG1 prog1 = new linkPROG1();
               //set the p1 parameter to 123 and p2 parameter to "ABC"
               prog1.p1.set(123);
               prog1.p2.set("ABC");
               //do the call
               prog1.run();
               //show the returned parameters
               System.out.print("p1=" + prog1.p1.toint());
               System.out.print("p2=" + prog1.p2.toString());
            }
      }
```

To better configure the output generations of EasyLinkage feature, isCOBOL compiler support the following properties:

- iscobol.compiler.easylinkage=true to generate the bridge program
- iscobol.compiler.easylinkage.prefix=prefix to use a different prefix (default "link")
- iscobol.compiler.easylinkage.package=packagename to generate with the package
- iscobol.compiler.easylinkage.cut= <…> to cut val1 prefix in the linkage variable names
- iscobol.compiler.easylinkage.decoration=false to avoid the use of decorated variable names
