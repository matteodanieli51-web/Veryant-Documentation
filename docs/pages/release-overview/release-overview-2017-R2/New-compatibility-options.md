## New compatibility options

isCOBOL programs using character-based user interfaces can now take advantage of additional configuration options that provide better compatibility with other COBOL dialects, such as MicroFocus ®, RM/COBOL® and ACUCOBOL-GT®.

- iscobol.terminal.data_range=minVal[,maxVal] filters characters on the accept statement that are not in the specified ASCII range, converting them to spaces. For example, setting iscobol.terminal.data\_range=1 will automatically convert low-value (x”00”) characters to space.

- iscobol.terminal.no_autoclear=true will prevent the autoclear function from executing on character accept statements without update

- iscobol.terminal.numeric_autoclear=false will prevent the autoclear function from running on numeric accept statements, to better support editing on numeric accepts with update, for example when editing dates with separator characters or numbers with decimal separator.

New routines have been implemented to provide higher compatibility with other COBOL dialects:

- CBL_GET_SCR_SIZE, to return information about the size of the screen,
- CBL_CLEAR_SCR, to clear the whole screen using a specified character and attribute,
- CBL_WRITE_SCR_N_CHAR, to write a repeated character in a specific screen position,
- CBL_WRITE_SCR_N_CHATTR, to write a repeated character and attribute in a specific screen position.

The ISMIGRATE utility has been enhanced with a new option to strip the file extension from the destination filename. Migrated files with extensions stripped can be used in isCOBOL applications by setting the new Framework property iscobol.file.index.strip_extension=true. When this property is set to true, the file extension will be stripped from the physical file name declared in SELECT statement for indexed files, to match the file names generated in the migration process. The default value for this property is false.
