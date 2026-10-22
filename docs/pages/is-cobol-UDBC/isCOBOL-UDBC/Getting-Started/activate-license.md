### Activate the License

If you provided license keys during the installation, on Windows, you should skip reading this chapter.

isCOBOL UDBC looks for the following configuration property for the license key:

```cobol
iscobol.udbc.license.2025=
```

The key should be stored in one of the following files (if they exist):

#### Windows

1. \etc\iscobol.properties in the drive where the working directory is
2. C:\\Users\<username>\iscobol.properties (the setup wizard saves licenses here, if you don’t skip activation)
3. %ISCOBOL%\iscobol.properties

#### Unix/Linux

1. /etc/iscobol.properties
2. $HOME/iscobol.properties
3. $ISCOBOL/iscobol.properties

**NOTE** - Files are listed in the order they’re processed. If the license key appears in more than one of the above files, then the last occurrence is used.
