## Execution

### Run unit organization

At runtime, the highest-level unit of a COBOL application is the run unit. A run unit is an independent entity that may be executed without communicating with, or being coordinated with, any other run unit except that it may process files or set and test switches that were written or will be read by other run units. A run unit contains one or more runtime modules.

A runtime module results from compiling a compilation unit. Each runtime module contains one or more runtime elements.

A runtime element results from the compilation of a method or program. When a runtime element is activated, parameters upon which it is to operate may be passed to it by the runtime element that calls it.

A run unit and each of its contained runtime modules may also contain resources and data storage areas needed for the execution and intercommunication of the runtime elements contained in the run unit.

A run unit may additionally contain runtime modules and data storage areas derived from the compilation of compilation units written in languages other than COBOL.
