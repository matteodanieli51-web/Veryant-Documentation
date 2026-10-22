## Activate the License

If you provided license keys during the installation, on Windows, you should skip reading this chapter.

isCOBOL Server looks for the following configuration property for the license key:

```cobol
iscobol.license.2026=<license_key>
```

The key should be stored in one of the following files (if they exist):

### Windows

1. \\etc\\iscobol.properties in the drive where the working directory is
2. C:\\Users\\<username\>\\iscobol.properties (the setup wizard saves licenses here, if you don’t skip activation)
3. iscobol.properties found in the Java Classpath
4. a custom configuration file passed on the command line
5. %ISCOBOL%\\iscobol.properties

### Unix/Linux

1. /etc/iscobol.properties
2. $HOME/iscobol.properties
3. iscobol.properties found in the Java Classpath
4. a custom configuration file passed on the command line
5. $ISCOBOL/iscobol.properties

**NOTE** - Files are listed in the order they’re processed. If the license key appears in more than one of the above files, then the last occurrence is considered.+
