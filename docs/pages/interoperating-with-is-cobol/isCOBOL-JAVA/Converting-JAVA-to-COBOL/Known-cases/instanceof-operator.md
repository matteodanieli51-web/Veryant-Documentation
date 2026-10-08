#### The instanceof operator

The instanceof keyword is a binary operator used to test if an object (instance) is a subtype of a given type.

There is no equivalent statement in COBOL, but you can use the isAssignableFrom() method exposed by java.lang.Class.

The following Java source

```cobol
import java.io.OutputStream;
import java.io.FileOutputStream;
 
public class InstOfTest {
    public static void main (String[] args) {
        try {
            FileOutputStream f = new FileOutputStream("/tmp/foo");
            if (f instanceof OutputStream) {
                System.out.println("The f object is an OutputStream");
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
```

can be translated to

```cobol
       program-id. InstOfTest.
       
       configuration section.
       repository.
           class OutputStream      as "java.io.OutputStream"
           class FileOutputStream  as "java.io.FileOutputStream"
           class JClass            as "java.lang.Class"
           .
           
       working-storage section.
       77 f object reference FileOutputStream.
       
       procedure division.
       main.
           try
              set f to FileOutputStream:>new("/tmp/foo")
              if JClass:>forName("java.io.OutputStream")
                       :>isAssignableFrom (f:>getClass())
                 display "The f object is an OutputStream"
                        upon sysout
              end-if
           catch exception
              exception-object:>printStackTrace()
           end-try.
           goback.
```
