# isCOBOL 2018 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2018
  - iscobol.compiler.license.2018
  - iscobol.easydb.license.2018
  - iscobol.eis.license.2018
  - iscobol.balancer.license.2018
  - iscobol.mobile.license.2018
- the included c-tree client library version is 11.5.2.51048
- ctreej name in file.index refers now to com.iscobol.io.DynamicCtreeJ instead of faircom.rtg.DynamicCtreeJ
- the classes for ctreej access are now included in a separated file (ctree-rtg.jar)
- easydbcp in file.index doesn't exist anymore, easydb now can be used also with programs compiled with -cp
- isbal.jar and ishttp.jar don't exist anymore, they are included in iscobol.jar
- the embedded Apache POI has been upgraded to 3.17 version
