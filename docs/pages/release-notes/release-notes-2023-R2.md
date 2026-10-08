# isCOBOL 2023 Release 2

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2023
  - iscobol.compiler.license.2023
  - iscobol.easydb.license.2023
  - iscobol.eis.license.2023
  - iscobol.balancer.license.2023
- the included c-tree client library version is v3.0.2.977
- added the compiler options set by default: -b -oe
until previous release the default compiler options were: -g -cghv added -m1 compiler option by default when using -cp
If necessary it's possible to disable some of them passing -no-option_name
- changed iscobol.jdbc.autocommit default value to false
- EDBI routines for SQLServer now use PRIMARY KEY instead of UNIQUE INDEX to map the file record key
