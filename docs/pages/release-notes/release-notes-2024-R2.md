# isCOBOL 2024 Release 2

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2024
  - iscobol.compiler.license.2024
  - iscobol.easydb.license.2024
  - iscobol.eis.license.2024
  - iscobol.balancer.license.2024
- the included c-tree client library version is v3.0.2.1113
- the default logic of proposal property on entry-field has been changed from "starts with" to "contains". If you need to use the previous logic, it's possible to set the new property proposal-filter-type 2
