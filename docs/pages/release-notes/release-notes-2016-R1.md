# isCOBOL 2016 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2016
  - iscobol.compiler.license.2016
  - iscobol.easydb.license.2016
  - iscobol.eis.license.2016
  - iscobol.balancer.license.2016
  - iscobol.mobile.license.2016
- the c-tree client library version is 10.4.0.54030; ensure that the c-tree server version is aligned or replace the client library with the correct one in the isCOBOL bin directory
- the dci 5.2 and previous versions are no more supported when calling a DCI_ routines
- programs compiled in previous releases with -dci option, now require -dci -d1 options to maintain the previous behaviour
- WITH ENCRYPTION clause in select is now supported by compiler, previous versions treated it as a comment. If you like to continue without encryption, you should remove the clause
- ZK included in isCOBOL WD2 is now updated to version 8
- The web-app content has been changed, to update existing web-app developed with previous versions, it's necessary to update these parts:
  - all .jar files under lib
  - standard new iscobol.css file
  - additional iscobol-wd2.css file (if used) to be set in iscobol.wd2.additional_stylesheet 
- css class priorities have been changed, and style properties redefined in the css stylesheet file must be implemented with the "!important" attribute to override iscobol-generated styles
