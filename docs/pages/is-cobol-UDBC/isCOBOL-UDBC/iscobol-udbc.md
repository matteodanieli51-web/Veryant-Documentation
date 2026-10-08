# isCOBOL UDBC

## Overview

The UDBC Server receives connections from SQL clients and provides them with access to COBOL files through the isCOBOL File Server. See [isCOBOL File Server](\) for more information on how to set up the isCOBOL File Server in order to allow remote access to files.

EFD dictionaries for each file are required. Compile COBOL programs with the [\-efd](\) option to create an EFD dictionary for each file described in the FILE SECTION.

The below picture summarizes how SQL clients access COBOL files.

![](images/UDBC.png)
