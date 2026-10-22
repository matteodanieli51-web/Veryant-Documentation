## Exception objects

Exception objects are used similarly to predefined exception conditions. They provide, however, more flexibility and allow access to a wider variety of information for resolving exception situations, compared to the predefined or user-defined exception conditions, especially when used in object oriented applications.

Although in principle any object of any class could serve as an exception object, there will more likely be a specific class for a specific kind of exception. This allows the application to invoke a method tailored for handling that exception.

There might be, for example, a class called INVALID-ACCOUNT, whose objects correspond to individual occurrences of the invalid account condition. The application can create and "raise" such an object when the application detects a transaction with an invalid account number. Let's assume the object reference pointing to this object is called AN-INVALID-ACCOUNT. As soon as the application method (assuming it is a method rather than a program) detects the error, it can execute a RAISE AN-INVALID-ACCOUNT statement.

Note that the RAISE AN-INVALID-ACCOUNT returns the exception to the invoking runtime element only if this use of the class INVALID-ACCOUNT has been "announced" by listing that class (or a superclass of it) in the procedure division header of the method containing the [RAISE](../Procedure-Division-Statements/RAISE) statement.

Similarly, an interface-name rather than a class-name may be specified in the procedure division header of a source element containing a [RAISE](../Procedure-Division-Statements/RAISE) statement. In this case, the object being raised shall be described with an IMPLEMENTS clause that references the specified interface in order to qualify for propagation.
