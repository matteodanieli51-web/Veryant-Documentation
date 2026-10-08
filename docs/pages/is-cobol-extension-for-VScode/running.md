# Running

To run the current program, select "isCOBOL: run current file" from the command palette or press Ctrl-Shift-F5.

To run the whole application, set [Veryant > Main: Program](\) in the settings, then select "isCOBOL: run project" from the command palette or click the green play button in the [Editor tool-bar](\).

The runtime configuration properties should be stored in one of the following files (if they exist):

## Windows

1. \etc\iscobol.properties in the drive where the working directory is
2. C:\\Users\\iscobol.properties (the setup wizard saves licenses here, if you don’t skip activation)
3. iscobol.properties found in the Java Classpath (the output directory of the project is included in the Classpath)
4. a custom configuration file passed with the *-c <configuration_file>*  option in [Veryant > Runtime: Options](\)
5. %ISCOBOL%\iscobol.properties

## Unix/Linux

1. /etc/iscobol.properties
2. $HOME/iscobol.properties
3. iscobol.properties found in the Java Classpath (the output directory of the project is included in the Classpath)
4. a custom configuration file passed with the *-c <configuration_file>*  option in [Veryant > Runtime: Options](\)
5. $ISCOBOL/iscobol.properties

**NOTE** - Files are listed in the order they’re processed. If the license key appears in more than one of the above files, then the last occurrence is considered.
