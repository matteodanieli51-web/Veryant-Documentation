# isCOBOL and Tuxedo

## Working With Oracle Tuxedo

Tuxedo (Transactions for Unix, Extended for Distributed Operations) is a middleware platform used to manage distributed transaction processing in distributed computing environments. It distributes applications across multiple platforms, databases, and operating systems using message-based communications and distributed transaction processing.

isCOBOL developers using the Oracle Tuxedo platform for distributed transaction processing and message-based application development can create Tuxedo clients and Tuxedo services from COBOL applications. The isCOBOL SDK is certified for Oracle Tuxedo 12c on all supported platforms.

isCOBOL and Tuxedo can work together in a distributed processing (client/server) environment providing two flavors of execution:

- Legacy COBOL approach based on calling C routines provided from Tuxedo
- Java approach based on OOP java methods to be used to create clients and services.

In a distributed processing environment, the interaction occurs as depicted in the following diagram:

![](images/Tuxedo.png)

In this environment, isCOBOL interoperates with Tuxedo using the same routines used to call C programs (COBOL-calling-C routines on the client and C-calling-COBOL routines on the server) or using a pure Java approach based on [Oracle Tuxedo Java Programming guide](https://docs.oracle.com/cd/E72452_01/tuxedo/docs1222/pgj/pgint.html) that can take advantage of a traditional Tuxedo multithread model.

In Tuxedo client/server distributed applications, the client requests the services of a server, which may have multiple services to provide, and the outcome of the request is returned to the client by the service. This architecture allows you to distribute application processing among multiple machines to optimize performance.

### Tuxedo Server Program

A Tuxedo server is a process that provides one or more services to a client. To build server processes, applications combine their service subroutines with a controlling program provided by the Tuxedo system.

#### Using legacy COBOL approach

To create a Tuxedo server with the legacy COBOL approach, follow these steps:

1. create and compile a COBOL program that performs a specific task or service,
2. create a configuration file for the service to establish the identifiers,
3. link the isCOBOL runtime libraries into the controlling program provided by the Tuxedo system.

Contact Veryant for more details about this process.

#### Using Tuxedo Java server (TMJAVASVR)

To create a Tuxedo server under TMJAVASVR, you should write a CLASS-ID program, that must respect these conditions:

- It has to inherit the TuxedoJavaServer class and have a default constructor.
- Methods, which will be advertised as Java services, have to take the TPSVCINFO interface as the only input argument and should be declared to public.
- It has to implement tpsvrinit() method, which will be called when Tuxedo Java server starts up.
- It has to implement tpsvrdone() method, which will be called when Tuxedo Java server shuts down.
- The service could use Tuxedo Java ATMI (e.g, tpcall, tpbegin, etc).
- The service could return result to client by using tpreturn and exit by throwing exception.

In this environment it’s possible to debug the CLASS-ID via remote debugging.

Contact Veryant for more details.

### Tuxedo Client Program

A Tuxedo client is a software module that forwards a user request to a server that offers the requested service.

#### Using legacy COBOL approach

To create a Tuxedo client with the legacy COBOL approach, you must relink the isCOBOL native libraries and Java JNI libraries with the Tuxedo libraries.

1. Add the necessary Tuxedo calls to your COBOL program. These calls–used to open and close resources, begin and end transactions, and support communication between clients and servers–are collected in a Tuxedo API known as the Application to Transaction Monitor Interface (ATMI). ATMI functions are described in the Tuxedo documentation,
2. run *buildclient* to generate the client executable,
3. set client environment variables.

Contact Veryant for examples and more details about this process.
