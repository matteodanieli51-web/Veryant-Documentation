# isCOBOL 2022 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2022
  - iscobol.compiler.license.2022
  - iscobol.easydb.license.2022
  - iscobol.eis.license.2022
  - iscobol.balancer.license.2022
  - iscobol.mobile.license.2022
- the included c-tree client library version is v3.0.1.472
- comp-1 and comp-2 conversion to float and double is now performed when compiling with -cm option
- Java 17 is now supported, except for WebClient
- WebClient is now installed with a separated setup, allowing also the Cluster and Session components
- WebClient admin interface is more modern and better organized
- isCOBOL IDE is now based on Eclipse 2021-09 4.21, so the minimum JDK required is 11
- by default the class created compiling from IDE are still compatible with JRE 1.8
