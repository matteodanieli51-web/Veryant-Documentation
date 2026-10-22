# isCOBOL 2024 Release 1

## Important release notes

- Veryant products now look for the following license properties:
  - iscobol.license.2024
  - iscobol.compiler.license.2024
  - iscobol.easydb.license.2024
  - iscobol.eis.license.2024
  - iscobol.balancer.license.2024
- the included c-tree client library version is v3.0.2.1113
- SDK native components on Linux 64bit porting now require glibc 2.34
- IDE is now based on Eclipse 2023-09 (v4.29)

**Note**: starting from this version default encoding on projects is set to UTF-8 on every operating system

- grid heading cells joined through span properties are now considered as a single cell so you need to refer to the first one
- the RETURNING clause in INSERT/UPDATE/DELETE is now supported only under the -csora optionsince it works only on Oracle. If you used this syntax with previous releases, add -csora copmiler option
- changed the way to paste text in character based accept, now by default it is done with the mouse right click. To keep the previous behaviour, so with mouse middle click, set the configuration iscobol.terminal.paste_key=mmdw
- Jakarta servlet containers are now used in isCOBOL EIS servlets, WebServices and WebDirect. If you need to use JEE servlet containers, read details about how to use the appropriate configuration
