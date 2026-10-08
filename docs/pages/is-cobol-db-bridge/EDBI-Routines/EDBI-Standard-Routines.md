## EDBI Standard Routines

EDBI standard routines are included in the runtime library (iscobol.jar).

You will find the *edbisource* directory, where all of the source code of internal EDBI routines under the easydb directory on a standard isCOBOL root installation. You can customize their code and use the compile scripts stored in the same directory to create a customized library whose classes will be used as replacement of the default ones.

Three of the routines, EDBI-COMMIT.cbl, EDBI-ROLLBACK.cbl and EDBI-CONNECT.cbl allow users to adapt SQL during COMMIT, ROLLBACK and CONNECT step.

Twelve of the COBOL routines are for data conversion, EDBI-DT6DCBDB.cbl, EDBI-DT6DDBCB.cbl, EDBI-DT6MCBDB.cbl, EDBI-DT6MDBCB.cbl, EDBI-DT6YCBDB.cbl, EDBI-DT6YDBCB.cbl, EDBI-DT8DCBDB.cbl, EDBI-DT8DDBCB.cbl, EDBI-DT8MCBDB.cbl, EDBI-DT8MDBCB.cbl, EDBI-DT8YCBDB.cbl, EDBI-DT8YDBCB.cbl.

If you wish to customize one or more of these routines, proceed as follows:

1. edit the source code of the EDBI routine that you wish to customize
2. compile the routine with [-sysc](\) option
3. put the resulting class file in a folder or a jar library
4. add the folder or the jar to the beginning of the Classpath setting
