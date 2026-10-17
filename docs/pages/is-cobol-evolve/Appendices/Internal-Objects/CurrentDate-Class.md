## CurrentDate Class (com.iscobol.rts.CurrentDate)

The com.iscobol.rts.CurrentDate class allows the specification of an artificial date.

When an ACCEPT FROM CENTURY-DATE, ACCEPT FROM TIME or a FUNCTION CURRENT-DATE is performed, the Framework runs the internal class com.iscobol.rts.CurrentDate that returns the current date and time by invoking the "now" method of the GregorianCalendar Java object.

If you wish to make the Framework return a datetime that is different than the current one, you can write a main program that inherits the CurrentDate class, uses its “set” method to set a custom date and then calls the main program of the COBOL application. For the whole runtime session, each inquire on date and time will return the custom values.

A working sample is supplied with isCOBOL and is available in the *sample/extend-and-customize/date-simulator* directory.

The program CHDATE is a sort of custom runtime that sets the custom datetime and launches a COBOL program. The usage is:

```shell
iscrun CHDATE custom_date program_name
```

Where custom_date is a 8 digits or 14 digits number that identifies a datetime in the format YYYYMMDDhhnnss. The hhnnss part is optional; if omitted, the current time is used. Program_name is the name of the COBOL program to start.

Example:

```shell
iscrun CHDATE 20010212 MYPROG
```

All inquiries on the current datetime made by MYPROG and the programs it calls will return 12th February 2001, whatever the current system datetime is.
