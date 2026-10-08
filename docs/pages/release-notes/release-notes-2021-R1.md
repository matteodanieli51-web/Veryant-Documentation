# isCOBOL 2021 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2021
  - iscobol.compiler.license.2021
  - iscobol.easydb.license.2021
  - iscobol.eis.license.2021
  - iscobol.balancer.license.2021
  - iscobol.mobile.license.2021
- the included c-tree client library version is v3.0.0.336
- the minimum Java release required is now 1.8
- WebClient is now composed of 2 components:
  - webclient for web server part on default port 8080
  - webclient-admin for admin web server part on default port 8090
- webclient.config has been changed. Upgrading WebClient, it's necessary to migrate the existing configuration
- webclient new web app created is disabled by default. You need to press Enable button before using it
- webclient and webdirect folders are now on the isCOBOL root, no more under eis folder
- NULL under -ca is no more translated to ZERO providing better Acucobol compatibility
