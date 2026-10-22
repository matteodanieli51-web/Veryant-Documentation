## Deployment through setup programs

Veryant provides executable setup programs for Windows and tgz archives for Unix/Linux. The client machines should be provided with the proper setup files and the user should follow these steps in order to run programs in thin client.

### Windows

1. install either isCOBOL_*yyyy_R_n*_Windows_*arc.msi* (it requires Java installed on the machine) or isCOBOL_*yyyy_R_n*_THIN_Windows_*arc.msi* (it doesn’t require Java on the machine as it installs its own JVM) where where *yyyy* is the year, *R* is the release number, *n* is the build number and *arc* is the system architecture.

**Note** - the Java virtual machine installed by the THIN setup is Java 1.8.0_372 Azul with Java FX embedded.

2. open the isCOBOL Shell from the Windows Start menu. The isCOBOL Shell is available in the isCOBOL programs group.
3. Run one of the commands documented in [Usage of isCOBOL Client](../Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client).

### Unix/Linux

1. Unpack the tgz in a folder of your choice
2. add the isCOBOL bin directory to the $PATH
3. Run one of the commands documented in [Usage of isCOBOL Client](../Usage-of-isCOBOL-Client/Usage-of-isCOBOL-Client).
