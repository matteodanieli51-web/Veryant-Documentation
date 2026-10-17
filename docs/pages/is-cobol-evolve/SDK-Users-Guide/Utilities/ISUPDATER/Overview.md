## ISUPDATER (Update Facility)

### Overview

isCOBOL implements a software update feature that allows you to download updates through the HTTP and HTTPS protocols. It's a general-purpose updater that can be used to download any type of file, not only COBOL programs.

#### The update process

The isupdater tool connects to a given HTTP server and checks if a new version of the files is available. If a new version is found, the isupdater downloads the files. The HTTP server (server side) and isupdater (client side) are configured through property files. Files are stored in ZIP archives on the server and are automatically unzipped once downloaded to the client.

#### isCOBOL Server as an HTTP server

The isCOBOL Server can work as an HTTP server for isupdater, so you don’t have to set up an HTTP server in order to take advantage of the software update feature.

#### Post update operations

At the end of the update process, isupdater can automatically run a program that takes care of post update operations such as copying the downloaded files in the proper folder. This program can be a standard COBOL program or a Java class executable from the command line (e.g. a Java class with a main() method).

#### Post update launch

Isupdater can automatically run a given class at the end of the update process. This class must be accessible in the Classpath.

#### ISUPDATER in the Thin Client environment

The isCOBOL Client automatically invokes the ISUPDATER utility in order to have libraries that are up to date with the remote isCOBOL Server. This process is explained in the [Automatic Client update](\) chapter.

#### ISUPDATER in the runtime environment

The isCOBOL Runtime invokes the ISUPDATER utility when launched with the [-update](../../Compiler-and-Runtime/Runtime-Framework/Runtime-Options#-update) option.
