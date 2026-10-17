## Configuring CLASSPATH and code_prefix

For the proper functioning of isCOBOL DatabaseBridge at run time, the following items must be available in the Classpath:

| Classpath |
| --- |
| Classpath |
| • COBOL programs<br>• database JDBC driver jar library<br>• folder(s) with EDBI routine classes<br>• iscobol.jar library[A] |

If [iscobol.code_prefix](\) is set in the configuration, then the above items must be distributed among Classpath and code\_prefix as follows:

| Classpath | iscobol.code_prefix |
| --- | --- |
| • database JDBC driver jar library<br>• iscobol.jar library[A] | • COBOL programs<br>• folder(s) with EDBI routine classes |

\[A\] The isCOBOL wrappers take care of adding this item to the Classpath automatically.

The COBOL application is now ready to be run with the RDBMS.
