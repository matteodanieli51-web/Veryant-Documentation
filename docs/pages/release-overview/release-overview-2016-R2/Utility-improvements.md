## Utility improvements

### isUPDATER enhancements

isUPDATER has been enhanced to supports folder names for updates in addition to zip files. Native, OS specific updates, can be downloaded as needed by appropriately setting the isUPDATER configuration file. This will save time and bandwidth, by allowing the download of only necessary components.

An example of multiple OS configuration settings:

```cobol
swupdater.version.iscobol=875.2
swupdater.lib.iscobol=lib
swupdater.version.iscobolNative=875.2
swupdater.lib.linux.32.iscobolNative=native/linux32_libs
swupdater.lib.linux.64.iscobolNative=native/linux64_libs
swupdater.lib.win.32.iscobolNative=win32_libs
swupdater.lib.win.64.iscobolNative=win64_libs
```
