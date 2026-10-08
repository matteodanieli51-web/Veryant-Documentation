## Normal run unit termination

When normal run unit termination occurs, the runtime system performs the following:

1. An implicit [CLOSE](../../Procedure-Division-Statements/CLOSE) Statement without any phrases is executed for each file that is in the open mode. These implicit [CLOSE](../../Procedure-Division-Statements/CLOSE) Statements shall be executed for all open files in the run unit, even when an error occurs during the execution of one or more of the [CLOSE](../../Procedure-Division-Statements/CLOSE) Statements. Any declaratives associated with these files are not executed.
2. Any storage obtained with an [M$ALLOC](\) routine and not yet released by a [M$FREE](\) routine is released.
3. All instance objects are destroyed.

**NOTE** - Any open files in an object are closed before the object is deleted.

4. Any resources occupied by dynamic capacity tables or any-length elementary items are freed.
