# isCOBOL 2020 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2020
  - iscobol.compiler.license.2020
  - iscobol.easydb.license.2020
  - iscobol.eis.license.2020
  - iscobol.balancer.license.2020
  - iscobol.mobile.license.2020
- the included c-tree client library version is 11.6.0.65103
- In previous releases, a program compiled with -cp option could call another program via CALL CLIENT only if this program isn't compiled with -cp. This limitation prevented some programs from working correctly Now the CALL CLIENT to a program compiled with -cp is fully supported, as long as both programs are compiled with -cp. If you have programs compiled with -cp that call other programs using CALL CLIENT, re-compile the called programs with -cp as well
- In previous releases, bitmap events were always fired. Now they're fired only if the NOTIFY-MOUSE style is used
- To obtain the previous behaviour you can use iscobol.compiler.gui.bitmap.defaults=notify-mouse
- changed some default configuration values:
  - iscobol.as.multitasking default value is now 2
  - iscobol.jvm_options default value is now "-Xmx128m -Xms128m"
  - renamed eis/wd2 folder into eis/webdirect
