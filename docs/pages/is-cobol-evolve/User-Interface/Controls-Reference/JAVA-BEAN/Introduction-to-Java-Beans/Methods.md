## Methods

Methods definitions are stored in the definition files created by the [CPGEN](../../../../SDK-Users-Guide/Utilities/CPGEN) utility. Refer the javadoc of the java-bean for more information about its methods.

Java-beans methods can be invoked with the [callMethod](../../../../Appendices/Internal-Objects/CobolGUIJavaBean-Class/callMethod) method of the CobolGUIJavaBean class.

```java
public Object callMethod(String methodName, Object[] parameters)
```

Invokes a java-bean method

#### Parameters:

*methodName* - Name of the java-bean method to be invoked

*parameters* - Array of Objects representing the paramenters of the method to be invoked. Use null if method has no parameters.

#### Returns:

The object returned by *methodName*.

```java
public Object callMethod(String methodName, String signature, Object[] parameters)
```

Invokes a java-bean method with a specific signature

#### Parameters:

*methodName* - Name of the java-bean method to be invoked

*signature* - Signature of the method to be invoked

*parameters* - Array of Objects representing the paramenters of the method to be invoked. To call a method with no parameters, use callMethod(String methodName, null).

#### Returns:

The object returned by *methodName*.

```java
public Object callMethod(String methodName[, Object parameter1][, Object parameter2][, Object parameter3][, Object parameter4][, Object parameter5])
```

Invokes a java-bean method

#### Parameters:

*methodName* - Name of the java-bean method to be invoked

*parameters* (1 to 5)- Object representing the parameters of the method to be invoked. You can use up to 5 parameters.

#### Returns:

The object returned by *methodName*.

Example:

```cobol
03 myDateField     java-bean
   clsid           "com.toedter.calendar.JDateChooser"
   line            2
   col             2
   size            30
   lines           1.5
   object in       objDateField
```

```cobol
display java-bean
   clsid           "com.toedter.calendar.JDateChooser"
   line            2
   col             2
   size            30
   lines           1.5
   handle in       myDateField
   object in       objDateField
```

```cobol
inquire myDateField, object in objDateField
```

The object reference can then be used to invoke methods.

Example:

```cobol
objDateField:>callMethod("updateUI")
```
