### Suggestions for faster compilation in isCOBOL IDE

Put project and sources on local disk instead of a network disk, if possible. If you need to share the project among multiple PCs, consider using SVN or some other type of source version control instead of putting the files on a network drive.

If sources need to stay on network disk for some reason, try to have at least the other necessary files on the client (like .list in list folder, .class in output folder). You would create a workspace on your PC, and point to the folders there when creating objects and listings, for instance. This minimizes some network traffic, while keeping the important files safe on the network.

Turn off the option to refresh project when compiling:

1. Click on *Window* in the menu bar and choose *Preferences*
2. Expand the *isCOBOL* tree and choose *Compile/Build*
3. Change the value of *Refresh Project Automatically* to ‘Do Not Refresh Automatically’

Turn off automatic build:

1. Click on *Project* in the menu bar
2. Uncheck *Build Automatically*

Turn off the real time reconciling feature:

1. Click on *Window* in the menu bar and choose *Preferences*
2. Expand the *isCOBOL* tree and choose *Editor*
3. Change the *Enable reconciling* value from ‘Always’ to ‘When opening file’ or ‘Never’

Turn off the option to build before launching:

1. Click on *Window* in the menu bar and choose *Preferences*
2. Expand the *Run/Debug* tree and choose *Launching*
3. Uncheck the option *Build* (if *required*) before *launching*

Increase the memory used by IDE if the machine has enough RAM. Tune the -Xms and -Xmx options set in isIDE.ini file. You can find the *isIDE.ini* file in the isCOBOL IDE installation folder. You’ll need to experiment with the amount of memory, depending on your specific environment. Try doubling it at first.

Check if the Antivirus activity causes IDE slow performance. It’s good practice to exclude the isCOBOL IDE installation folder and the location of the workspace from the list of folders checked by your Antivirus.
