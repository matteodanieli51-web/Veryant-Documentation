### Setup of an update server for the isCOBOL SDK

In this chapter we explain the best practices for setting up an update server that can be used by both the [-update](../../Compiler-and-Runtime/Runtime-Framework/Runtime-Options#-update) option of iscrun and the [Automatic Client update](\) to update their runtime component before starting.

Our update server will be able to serve different client platforms to best show how to update the native items included in the isCOBOL SDK. Most of the isCOBOL Framework components are pure Java programs and therefore are cross-platform. However there are a couple of components that are (or include) native platform dependent items. These items are:

- native libraries like iscobolc (bin\\iscobolc.dll on Windows, /native/lib/libiscobolc.so on Linux/Unix and /native/lib/libiscobolc.jnilib on MacOSX),
- The SWT library for the web-browser implementation installed in the lib folder.

The suggested steps are:

1. Create a folder that will host the files for the update.
2. Within the folder just created, create the following sub folders and fill them as suggested:

| Folder | What to put inside |
| --- | --- |
| jars | All the jars found in the isCOBOL jars folder, if any. |
| lib | All the jars found in the isCOBOL lib folder except for org.eclipse.swt..jarYou can take these libraries from any isCOBOL distribution as they’re cross-platform. If your application calls programs on the client side via CALL CLIENT in a Thin Client environment, collect the classes of these programs in a jar library and add the library to this lib folder. |
| libWin64 | org.eclipse.swt.win32.win32.x86_64-3.131.0.jar taken from the isCOBOL installation for Windows 64 bit |
| libLinux64 | org.eclipse.swt.gtk.linux.x86_64-3.131.0.jar taken from the isCOBOL tar.gz for Linux 64 bit |
| libMac64 | org.eclipse.swt.cocoa.macosx.aarch64-3.131.0.jar taken from the isCOBOL tar.gz for Mac OSX 64 bit |
| nativeWin32 | All the DLL files found in the bin directory of the isCOBOL installation for Windows 32 bit |
| nativeWin64 | All the DLL files found in the bin directory of the isCOBOL installation for Windows 64 bit |
| nativeLinux32 | All the so files found in the native/lib directory of the isCOBOL tar.gz for Linux 32 bit |
| nativeLinux64 | All the so files found in the native/lib directory of the isCOBOL tar.gz for Linux 64 bit |
| nativeMac64 | All the jnilib files found in the native/lib directory of the isCOBOL tar.gz for Mac OSX 64 bit |

When you are done, you should have the following environment:

| Folder | Content |
| --- | --- |
| jars | This folder will be empty unless you added some custom jar libraries to the isCOBOL SDK. |
| lib | asm-9.6.jar<br>asm-commons-9.6.jar<br>asm-tree-9.6.jar<br>barcode4j.jar<br>bcprov-jdk18on-1.78.1.jar<br>charva.jar<br>commons-codec-1.20.0.jar<br>commons-collections4-4.5.0.jar<br>commons-compress-1.28.0.jar<br>commons-io-2.21.0.jar<br>commons-math3-3.6.1.jar<br>commons-logging-api.jar<br>commons-logging.jar<br>ctree-rtg.jar<br>curvesapi-1.08.jar<br>flatlaf-3.6.jar<br>image4j-0.7.2.jar<br>iscobol.jar<br>isprofiler.jar<br>isupdater.jar<br>jacoco-core-0.8.11.jar<br>javassist.jar<br>jcommon-1.0.23.jar<br>jcommon-xml-1.0.23.jar<br>jcalendar-1.4.jar<br>jcommon-1.0.23.jar<br>jcommon-xml-1.0.23.jar<br>jdom.jar<br>jfreechart-1.5.1.jar<br>jna-5.2.0.jar<br>jna-platform-5.2.0.jar<br>joe-1.3.jar<br>log4j-api-2.25.2.jar<br>log4j-core-2.25.2.jar<br>openpdf-2.0.3v1.jar<br>poi-5.5.1.jar<br>poi-ooxml-5.5.1.jar<br>poi-ooxml-lite-5.5.1.jar<br>SparseBitSet-1.3.jar<br>utility.jar<br>wow.jar<br>wowax.jar<br>xmlbeans-5.3.0.jar<br>zxing-core-1.7.jar  <br><br>... and optionally the jar library that hosts programs called via CALL CLIENT. |
| libWin64 | org.eclipse.swt.win32.win32.x86_64-3.131.0.jar |
| libLinux64 | org.eclipse.swt.gtk.linux.x86_64-3.131.0.jar |
| libMac64 | org.eclipse.swt.cocoa.macosx.aarch64-3.131.0.jar |
| nativeWin32 | ctree.dll<br>dyncall.dll<br>dyncall_n.dll<br>flatlaf-3.6-windows-x86.dll<br>iscobolc.dll<br>iscobolc_n.dll<br>msvcm90.dll<br>msvcp90.dll<br>msvcr90.dll<br>Terminal.dll |
| nativeWin64 | ctree.dll<br>dyncall.dll<br>dyncall_n.dll<br>flatlaf-3.6-windows-x86_64.dll<br>iscobolc.dll<br>iscobolc_n.dll<br>msvcm90.dll<br>msvcp90.dll<br>msvcr90.dll |
| nativeLinux32 | libctree.so<br>libdyncall.so<br>libdyncall_n.so<br>libflatlaf-3.6-linux-x86.so<br>libiscobolc.so<br>libiscobolc_n.so<br>libTerminal.so |
| nativeLinux64 | libctree.so<br>libdyncall.so<br>libdyncall_n.so<br>libflatlaf-3.6-linux-x86_64.so<br>libiscobolc.so<br>libiscobolc_n.so<br>libTerminal.so |
| nativeMac64 | libctree.jnilib<br>libiscobolc.jnilib<br>libiscobolc_n.jnilib<br>libflatlaf-3.6-macos-x86_64.dylib<br>libTerminal.jnilib |

3. Create a file named *swupdater.properties* in the same directory of the above folders and fill it as follows:

```cobol
swupdater.version.iscobol=<build number of the SDK from which you copied the items>
swupdater.lib.iscobol=lib
swupdater.lib.win.32.iscobol=libWin32
swupdater.lib.win.64.iscobol=libWin64
swupdater.lib.linux.32.iscobol=libLinux32
swupdater.lib.linux.64.iscobol=libLinux64
swupdater.lib.mac.64.iscobol=libMac64
swupdater.version.iscobolJars=<build number of the SDK from which you copied the items>
swupdater.lib.iscobolJars=jars
swupdater.version.iscobolNative=<build number of the SDK from which you copied the items>
swupdater.lib.win.32.iscobolNative=nativeWin32
swupdater.lib.win.64.iscobolNative=nativeWin64
swupdater.lib.linux.32.iscobolNative=nativeLinux32
swupdater.lib.linux.64.iscobolNative=nativeLinux64
swupdater.lib.mac.64.iscobolNative=nativeMac64
```

The server configuration is ready, now you can start an isCOBOL Server with the -hs option as described in [isCOBOL Server as an HTTP server](../ISUPDATER/Server-Configuration#iscobol-server-as-an-http-server). The isCOBOL server must point to the directory created in step 1, either by starting the isCOBOL Server from that directory or by using the -hsroot option to point to that directory.

Alternatively, instead of using isCOBOL Server, you can install the directory created at step 1 into your favorite HTTP server (e.g. Apache or IIS).
