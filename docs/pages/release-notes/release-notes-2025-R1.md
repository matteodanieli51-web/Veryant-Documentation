# isCOBOL 2025 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2025
  - iscobol.compiler.license.2025
  - iscobol.easydb.license.2025
  - iscobol.eis.license.2025
  - iscobol.balancer.license.2025
- The included c-tree client library version is v3.0.2.1113
- when changing a capacity data item with statements different then SET, the new compiler Severe error is returned: "#319 Receiver is read only". If you really need to change the capacity data item, use SET statement
