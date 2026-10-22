# isCOBOL 2025 Release 2

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2025
  - iscobol.compiler.license.2025
  - iscobol.easydb.license.2025
  - iscobol.eis.license.2025
  - iscobol.balancer.license.2025
- The included c-tree client library version is v3.0.2.1113
- The minimum date value used by EasyDB on MSSQL for date fields set to zero, low-values or spaces is now 1753-01-01. You can set iscobol.easydb.min_date=19000101 in the configuration to restore the minimum date value used by previous releases
- The jcalendar library has been updated to 1.4 version
- The itext-2.1.7v5.jar library has been replaced by openpdf-2.0.3v1.jar
