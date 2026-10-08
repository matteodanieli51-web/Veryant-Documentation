# isCOBOL 2017 Release 2

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2017
  - iscobol.compiler.license.2017
  - iscobol.easydb.license.2017
  - iscobol.eis.license.2017
  - iscobol.balancer.license.2017
  - iscobol.mobile.license.2017
- the included c-tree client library version is 11.2.2.37148
- the compiler result has been changed avoiding to show 0 warning, error, etc. use -verbose compiler option if you prefer the old output
- isrun.jar and edbi.jar don't exist anymore, they are included in iscobol.jar
- to execute the isCOBOL utilities under Isrun or Client, now it's necessary to pass the -utility option. Example: isrun -utility GIFE
- push-buttons can now be activated by pressing Enter when they have the focus only if the iscobol.key.enter setting includes "termination=13". Set iscobol.gui.push_activated_by_enter=1 to make push-buttons always activable by pressing Enter like it happened in previous releases
