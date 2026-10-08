# isCOBOL 2017 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2017
  - iscobol.compiler.license.2017
  - iscobol.easydb.license.2017
  - iscobol.eis.license.2017
  - iscobol.balancer.license.2017
  - iscobol.mobile.license.2017
- the minimum java version required is now 1.7
- the c-tree client library version is 11.2.2.22002; ensure that the c-tree server version is aligned or replace the client library with the correct one in the isCOBOL bin directory
- the -efd compiler option has been changed to generate .xml files only for indexed files. To have the previous behaviour, use the new compiler option -efa to generate .xml files for all files
