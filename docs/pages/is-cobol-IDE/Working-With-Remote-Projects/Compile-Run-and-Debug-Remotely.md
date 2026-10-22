## Compile, Run and Debug Remotely

To work remotely, right click on the project name in the [isCOBOL Explorer](../The-isCOBOL-IDE-Perspective/isCOBOL-Explorer) and select *Change Current Mode* from the pop-up menu, then select one of the modes inherited from the IDE Remote Server bound to the project.

After it, the commands *Compile, Run As isCOBOL Application* and *Debug As isCOBOL Application* work remotely through the IDE Remote Server.

When you use a remote compiler mode, the IDE sends the source code and copybooks to the IDE Remote Server. The IDE Remote Server compiles the source code according to the options set server side and keeps the class on the server.

When you use a remote runtime mode, the IDE starts a thin client: the program is executed server side and the local PC shows the program user interface. In debug mode, the graphical Debugger is started on the local PC and it allows you to debug the program that is running on the server.

**Note** - The *-ide* option runs the ApplicationServer with *iscobol.as.multitasking=1* to separate the process from other clients. Therefore, when running a program remotely through the IDE Remote server, the following libraries will not return valid information: A$LIST_USERS, A$LIST_LOCKS, A$USERINFO, and A$SEND_MESSAGE.
