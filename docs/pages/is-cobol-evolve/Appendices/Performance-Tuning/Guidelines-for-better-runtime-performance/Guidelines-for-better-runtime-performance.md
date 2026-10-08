## Guidelines for better runtime performance

Lite objects and high speed are always very appreciated in a COBOL application, but compiling and running programs with default settings does not always provide them. This chapter is intended to help you in tuning performance and optimize programs in order to obtain the best from your COBOL application.

The most important actions to be performed in order to optimize performance are:

- use -*server* Java option, if available
- avoid debug information in the programs
- avoid logging the Runtime activity

In the next pages you will find further information about performance tuning.

isCOBOL provides a profiler that can help in understanding which areas of your COBOL application are more time-consuming. See [Profiling COBOL programs](../Profiling-COBOL-programs) for more information. After reading the profiler report you can try to optimize the code by following the suggestions in the proper chapter of this guide. For example, if the profiler report says that most of the time was spent in paragraphs that access the database via SQL, try to apply the suggestions of [JDBC/ESQL](./Data-Access/JDBC-ESQL).
