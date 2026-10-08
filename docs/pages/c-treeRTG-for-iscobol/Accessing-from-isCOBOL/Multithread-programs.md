## Multithread programs

The runtime session's connection to the c-tree server is made when the first file is opened. This connection is bound to the life of the thread that opened this first file. Therefore, it's important that the thread that performs the first open of a c-tree file stays alive for the whole runtime session.

Consider the following sample situation: There is a main menu program from which the user can call subprograms. The subprograms are each called in a thread so that the user can switch from one to another any time. The subprograms perform i/o on c-tree files. In a situation like this, the user might perform the following steps:

1. Run the menu program as thread #1.
2. Launch a subprogram as thread #2 (e.g. Customer Handling).
3. Launch another subprogram as thread #3 (e.g. Statistics).
4. Close the first subprogram (thread #2), leaving only thread #1 and #3 active.

In this situation, if Customer Handling were to open the first file, then the connection to the c-tree server would be lost when Customer Handling was closed, and the other programs running in the runtime session, like Statistics, will encounter i/o errors.

The menu program must open the first file to create the connection to the c-tree server, as it is the only program that will stay alive for the whole runtime session. A quick and easy workaround to this problem would be to open and close a file in the menu program to establish the connection to the c-tree Server, for instance:

```cobol
 open input a-file.
 close a-file.
```
