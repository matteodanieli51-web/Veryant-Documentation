## Properties

Javabeans have common properties and special properties.

Example:

The following snippet defines a date field in the screen section:

```cobol
03 myDateField     java-bean
   clsid           "com.toedter.calendar.JDateChooser"
   line            2
   col             2
   size            30
   lines           1.5
```

#### Common properties

Common properties can be set and retrieved with the standard MODIFY and INQUIRE statements, acting on the implicit control handle, myDateField in the example above.

The following statement makes the control invisible:

```cobol
modify myDateField, visible = 0
```

#### Special properties

Special properties can be set or retrieved with the standard methods, setProperty and getProperty, of the java-bean object.

setProperty has two parameters: propertyName and propertyValue.

getProperty has only one parameter (propertyName) and returns propertyValue.

Property definitions are stored in the definition files created by the [CPGEN](../../../../SDK-Users-Guide/Utilities/CPGEN) utility. Refer the javadoc of the java-bean for more information about its special properties.

Property definitions are comment entries with the following structure:

```cobol
*> NAME: propertyName , TYPE: parameterType (classReference) readWriteFlag
```

*propertyName* is the name of the property. It must be passed, enclosed in single or double quotes, as the first parameter of the setProperty and getProperty methods. propertyName is not case-sensitive.

*parameterType* represents the type of the item passed as the second parameters of the setProperty method or returned by the getProperty method.

*readWriteFlag* allows the user to know if the property can be set, retrieved or both. Possible values are:

|  |  |
| --- | --- |
| R | Property can be retrieved with the getProperty method. |
| W | Property can be set with the setProperty method. |
| R/W | Property can be retrieved with the getProperty method and set with the setProperty method. |

The reference to the java-bean can be defined in the screen section, in the DISPLAY statement or retrieved with the INQUIRE statement.

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

The object reference can then be used to set or retrieve special properties.

Example:

```cobol
objDateField:>setProperty("weekOfYearVisible" 0)
```

```cobol
SET myVariable TO objDateField:>getProperty("weekOfYearVisible")
```
