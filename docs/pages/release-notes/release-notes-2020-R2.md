# isCOBOL 2020 Release 2

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2020
  - iscobol.compiler.license.2020
  - iscobol.easydb.license.2020
  - iscobol.eis.license.2020
  - iscobol.balancer.license.2020
  - iscobol.mobile.license.2020
- the included c-tree client library version is 11.9.0.581
- when compiling with -d or -dx option, the $DebugInfo class is no more created and the source code is included in the program class
- compiler -g option (include SMAP information in the class) is now set by default; to disable it, you can use -jo=-g:none. Note that programs compiled with -jo=-g:none can't be used with Code Coverage and Unit Test
- the compiler now creates the generated sources under specific subfolders:
  - easydb for database bridge generation
  - easylinkage for easylinkage generation
  - servicebridge for web service bridge generation
  - bean for web service bean generation
- the compiler now treats RECORD IS VARYING IN SIZE FROM 0 as the minimum record size
