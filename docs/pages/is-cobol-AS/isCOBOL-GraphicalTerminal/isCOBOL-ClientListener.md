## isCOBOL ClientListener

The isCOBOL Client Listener allows you to use a common SSH based terminal emulator with tunneling capabilities to run COBOL programs so that programs developed for UNIX environments with character terminals can be executed by the isCOBOL Framework taking advantage of the isCOBOL Server architecture.

The main advantages provided by this feature are:

1. Due to the thin client architecture, there is only one Java process on the server serving multiple clients. This allows you to save resources. Without the thin client technology, each client terminal would create a separate Java process on the server, wasting resources.
2. If the COBOL program calls programs written in other languages (such as C programs, for example) these programs can accept user input and display data on the same client terminal. It wouldn’t be possible in a standard thin client architecture.

**Note:** Veryant recommends PuTTY as the proper SSH emulator to be used. It can be downloaded for free at [http://www.chiark.greenend.org.uk/~sgtatham/putty/](http://www.chiark.greenend.org.uk/~sgtatham/putty/).
