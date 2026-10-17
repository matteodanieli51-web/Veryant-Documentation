# isCOBOL 2015 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2015
  - iscobol.compiler.license.2015
  - iscobol.easydb.license.2015
  - iscobol.eis.license.2015
  - iscobol.balancer.license.2015
  - iscobol.mobile.license.2015
- the c-tree client library version is 10.4.0.39701; ensure that the c-tree server version is aligned or replace the client library with the correct one in the isCOBOL bin directory
- Starting from isCOBOL 2015 R1, Java 1.4 is no longer supported. You should bind your isCOBOL to a Java 1.5 or later
- the iscobol.file.index.autolock_allowed property effects on c-tree have changed. The new (more consistent) behavior is:
   -  property not set -> lock error returned
   -  property set to true -> lock error not returned
   -  property set to false -> lock error returned
