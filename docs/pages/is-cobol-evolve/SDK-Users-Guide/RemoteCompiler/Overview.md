# RemoteCompiler

## Overview

isCOBOL Evolve offers the ability to compile programs remotely. This feature is particularly useful when you need to precompile the source code and the precompiler is available only on a server machine.

The isCOBOL RemoteCompiler consists of a server listener that receives source files from the clients, precompiles and compiles them locally on the server, and eventually sends the resulting classes and translated source files back to the clients.
