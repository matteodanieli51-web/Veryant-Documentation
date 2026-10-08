## Additional improvements

isCOBOL 2022R1 improves several utilities:

- in GIFE, the Graphical Indexed and relative File Editor utility, a new configuration has been added:

  - *iscobol.gife.custom_font=FontName-size* to customize the font used in the GIFE user interface. By default, it loads the default Font of the current LookAndFeel used, which varies based on the options –system, --nimbus, --metal, etc.

- in JDBC2FD, the utility that enables you to connect to RMDBS database and generate the COBOL copy files (.sl for the Select, .fd for the File Definition, .wrk for FD/Working structure), a new configuration has been added:

  - *iscobol.jdbc2fd.current_schema_only=true* to load only the items of the current schema by JDBC2FD. This simplifies the filter on table names loaded after the connection.
