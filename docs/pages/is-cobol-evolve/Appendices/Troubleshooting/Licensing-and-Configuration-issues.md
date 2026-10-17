## Licensing and Configuration issues

It’s very important to keep in mind that the isCOBOL configuration is built up by merging multiple files and settings. A configuration property is searched in the following list of places:

- the configuration file specified on the command line by [-conly=config_file](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#conly)

or, if the above option is not used

1. the system environment variables
2. the iscobol.properties file in the /etc directory
3. the iscobol.properties file in the user home directory
4. the iscobol.properties files found in the directory and jar libraries listed in the Classpath
5. the configuration file specified on the command line by [-c=config_file](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#c)
6. the iscobol.properties file in the folder specified by the ISCOBOL environment variable
7. the single properties specified on the command line by -D*propertyname*\=

If a property appears in more than one of the above places, the last occurrence is considered.

When a “missing license” error occurs, you need to search for iscobol.license entries in all of the above places and ensure that the value is a valid license code.

When addressing a runtime license issue, you can add the [-license](../../SDK-Users-Guide/Compiler-and-Runtime/Runtime-Framework/Runtime-Options#license) option to the command line. In this way the runtime will print a list of licenses found in the system.

Unfortunately there’s no way to retrieve license information when the “missing license” error occurs, so, if you’re afraid that your license code is invalid or expired, then you should send it to Veryant technicians for analysis.

To monitor the active configuration of the COBOL application you can take advantage of the isCOBOL logging feature. This feature is activated by setting the [iscobol.tracelevel](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#trace_level) property to a value different than zero and optionally by setting [iscobol.logfile](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#logfile) to the name of the log file you wish to create.

If you’re looking for the list of settings read by configuration and subsequent changes made by the programs, it’s enough to set the trace level to the value of 1.
