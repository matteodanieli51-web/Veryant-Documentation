## Converting Java Source Code to Object-oriented COBOL

### Introduction

The Java world offers many objects that can be integrated into your application enhancing it with additional features.

Sample Java code snippets and/or programs are provided as samples for most of these objects.

There are two ways to take advantage of these objects in a COBOL application:

1. Implement the functionality using the Java programming language and expose it to COBOL as one or more callable subprograms.

2. Implement the functionality directly in COBOL using OOP (Object Oriented Programming) syntax.

This article describes the second option providing suggestions for converting a Java source code example into the equivalent OOP COBOL code.

The COBOL code is usually easier to maintain because:

1. It is easier to read and maintain for a COBOL programmer

2. It can be all debugged using the isCOBOL Debugger (i.e. no Java source debugging required)

To convert a Java code example to the equivalent COBOL code, we’ll demonstrate how to read the content of a web page.

Here is a Java example that does the job:

```cobol
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
 
public class webcontent {
   public static void main(String[] args) {
   try {
       URL url = new URL("https://www.veryant.com");
       URLConnection uc = url.openConnection();
       BufferedReader bf = 
       new BufferedReader(
       new InputStreamReader(uc.getInputStream()));
       String inputLine;
       while ((inputLine = bf.readLine()) != null) {
          System.out.println(inputLine);
       }
       bf.close();
     } catch (Exception e) {
       e.printStackTrace();
     }
   }
}
```
