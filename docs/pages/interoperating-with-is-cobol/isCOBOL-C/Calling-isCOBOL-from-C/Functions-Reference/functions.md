### Functions Reference

The iscobolc library provides the following functions:

[isCobolInit](./isCobolInit) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolInit -->

[isCobolCall](./isCobolCall) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCall -->

[isCobolCallNoStop](./isCobolCallNoStop) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCallNoStop -->

[isCobolCancel](./isCobolCancel) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCancel -->

[isCobolFunc](./isCobolFunc) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolFunc -->

[isCobolTidy](./isCobolTidy) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolTidy -->

[isCobolExit](./isCobolExit) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolExit -->

[isCobolError](./isCobolError) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolError -->

[isCobolGetJNIEnv](./isCobolGetJNIEnv) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolGetJNIEnv -->

[isCobolGoback](./isCobolGoback) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolGoback -->

For each one of the above functions, an additional extended function is provided to work in multi-thread environments.

[isCobolInitEx](./isCobolInitEx) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolInitEx -->

[isCobolCallEx](./isCobolCallEx) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCallEx -->

[isCobolCallNoStopEx](./isCobolCallNoStopEx) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCallNoStopEx -->

[isCobolCancelEx](./isCobolCancelEx) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCancelEx -->

[isCobolFuncEx](./isCobolFuncEx) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolFuncEx -->

[isCobolErrorEx](./isCobolErrorEx) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolErrorEx -->

[isCobolGetJNIEnvEx](./isCobolGetJNIEnvEx) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolGetJNIEnvEx -->

[isCobolGobackEx](./isCobolGobackEx) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolGobackEx -->

[isCobolThreadTidy](./isCobolThreadTidy) <!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolThreadTidy -->

These functions are defined in the iscobolc.h header file, that is installed with isCOBOL in the folder $ISCOBOL_HOME/native/include.

**Note**: COBOL programs called thru [isCobolCall](./isCobolCall) and [isCobolFunc](./isCobolFunc) are not aware of the C environment. An environment variable set by the C program cannot be retrieved by the COBOL program using the ACCEPT FROM ENVIRONMENT statement. In order to set an environment variable for the COBOL program, create a separate COBOL program that sets the variable using the SET ENVIRONMENT statement and then call this program using [isCobolFunc](./isCobolFunc).
<!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolCall -->
<!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolFunc -->
<!-- /pages/interoperating-with-is-cobol/isCOBOL-C/Calling-isCOBOL-from-C/Functions-Reference/isCobolFunc -->
