## Compiler Issues

The compilation process with isCOBOL is divided in two steps:

1. the cobol source is parsed and, if no error occurs, an intermediate java source is generated
2. the java source is compiled by the JDK compiler and the class file of the COBOL program is created

The most of compiler errors appears in the first step. These errors may be caused by misspelled keywords, wrong usage of features or missing source files. Consult [Compiler Errors](../Compiler-Errors) for a detailed description of the most common compiler errors.

If an error occurs during the second step, it means that the isCOBOL Compiler generated an invalid java source. This kind of problem should never exist. If you reproduce it, then you should report it to Veryant technicians providing all necessary items and information that allow to reproduce the error. The Compiler will be patched to handle the problem in the first step instead of producing an invalid java source in the future.
