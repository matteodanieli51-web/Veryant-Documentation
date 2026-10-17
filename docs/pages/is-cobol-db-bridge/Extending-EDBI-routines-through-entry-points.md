# Extending EDBI routines through entry points

The code of EDBI routines can be customized by adding additional operations in dedicated entry points.

This feature is activated by the [iscobol.compiler.easydb.entry_points (boolean)](\) Compiler’s configuration property or by the [-entrypoints](./DatabaseBridge-generator-edbiis) option of EDBIIS.

If the feature is activated, the generated EDBI routine will reference the following copybooks:

| Copybook | Content |
| --- | --- |
| edb.ini | The ENVIRONMENT DIVISION of the program. Here you can specify SPECIAL-NAMES as well as a REPOSITORY for classes that you wish to reference. |
| edb.wrk | Additional WORKING-STORAGE data items. |
| edb.prd | Additional PROCEDURE DIVISION code. <br>The following paragraphs must be included here:<br>BEFORE-TABLE-OPEN.<br>BEFORE-TABLE-OPEN-EX.<br>AFTER-TABLE-OPEN.<br>AFTER-TABLE-OPEN-EX.<br>BEFORE-TABLE-CLOSE.<br>BEFORE-TABLE-CLOSE-EX.<br>AFTER-TABLE-CLOSE.<br>AFTER-TABLE-CLOSE-EX.<br>BEFORE-TABLE-INSERT.<br>BEFORE-TABLE-INSERT-EX.<br>AFTER-TABLE-INSERT.<br>AFTER-TABLE-INSERT-EX.<br>BEFORE-TABLE-UPDATE.<br>BEFORE-TABLE-UPDATE-EX.<br>AFTER-TABLE-UPDATE.<br>AFTER-TABLE-UPDATE-EX.<br>BEFORE-TABLE-DELETE.<br>BEFORE-TABLE-DELETE-EX.<br>AFTER-TABLE-DELETE.<br>AFTER-TABLE-DELETE-EX.<br>BEFORE-TABLE-READ.<br>BEFORE-TABLE-READ-EX.<br>BEFORE-TABLE-LOCK.<br>AFTER-TABLE-LOCK.<br>AFTER-TABLE-LOCK-EX.<br>BEFORE-TABLE-UNLOCK.<br>BEFORE-TABLE-UNLOCK-EX.<br>AFTER-TABLE-UNLOCK.<br>AFTER-TABLE-UNLOCK-EX.<br>BEFORE-DROP-CREATE.<br>BEFORE-DROP-CREATE-EX.<br>AFTER-DROP-CREATE.<br>AFTER-DROP-CREATE-EX.<br>BEFORE-TABLE-DROP.<br>BEFORE-TABLE-DROP-EX.<br>AFTER-TABLE-DROP.<br>AFTER-TABLE-DROP-EX.<br>BEFORE-TABLE-START.<br>BEFORE-TABLE-START-EX.<br>AFTER-TABLE-START.<br>AFTER-TABLE-START-EX. |

It’s your duty to create these copybooks and make them available at compile time.

The copybooks host the data items and the statements that you wish to add to the standard EDBI routine code. BEFORE-operation and AFTER-operation paragraphs are performed by the EDBI routine before and after each i-o operation.
