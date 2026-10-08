## JOE

isCOBOL programs can be distributed from a server with isCOBOL Application Server; this is the architecture of choice for multiuser applications due to its many benefits. However, in order to get the best results all the processing needs to be in the isCOBOL environment.

Many legacy applications are made intermixing COBOL programs and interpreted scripts of some kind (e.g. Bourne shell). Until now these scripts needed to be rewritten into COBOL programs in order to run in isCOBOL Application Server.

This process can be lengthy and the results unsatisfactory because:

- interpreted procedures are now compiled procedures;
- procedures written with a language oriented to manage operating system tasks are now written using COBOL (a Business Oriented Language).

So, in order to speed up the migration process getting at the same time a better result, it would be useful to have a scripting language whose features are:

- ability to access any isCOBOL/Java resource: isCOBOL (as well as Java) is operating system independent therefore the Java environment is its virtual operating system;
- easy to change in order to get similar to any script language in terms of capability and readability;
- easy to customize in order to get frequently used operations at hand;
- easy to extend in order to be useful also for future applications’ enhancements, not only for the migration process;
- easy to understand and use;
- 100% compatible with the isCOBOL Application Server architecture.

The Java Objects Executor (JOE for short) complies with the above requests.

JOE’s only task is to execute methods of Java/isCOBOL objects in sequence on the fly: how it can be used to mimic any scripting language it will become clearer later.
