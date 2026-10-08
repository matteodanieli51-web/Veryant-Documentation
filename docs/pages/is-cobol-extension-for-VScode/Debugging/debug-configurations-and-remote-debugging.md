## Debug configurations and Remote debugging

![](../images/vs-debug-configurations.png)

The secondary side bar that appears when you start debugging allows you to choose between two preset debug configurations:

| | |
| --- | --- |
| COBOL debug | This configuration allows you to debug a program in the current project or workspace, like the program that is currently loaded in the editor or the program that you specified in [Veryant > Main: Program.](\) |
| COBOL attach debugger | This configuration allows you to attach a remote runtime for remote debugging. By default it connects to localhost on port 9999, but you can change these parameters as explained below. |
| | |

You can edit these configurations and add new ones by selecting Add Configuration... in the dropdown.

Editing debug configuration is useful if you need to remote debug on a different IP and port or if you need to setup multiple remote debugging configurations, to debug programs running on different machines.

By selecting *Add Configuration...*, the editor shows the current configuration.

This is the default configuration:

```java
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        
        {
            "type": "COBOL",
            "request": "launch",
            "name": "COBOL debug",
            "commandLine": "",
            "stopOnEntry": true
        },
        {
            "type": "COBOL",
            "request": "attach",
            "name": "COBOL attach debugger",
            "commandLine": "",
            "stopOnEntry": true,
            "host": "127.0.0.1",
            "port": 9999
        }
    ]
}
```

To edit the configuration, a basic knowledge of the JSON language is required.

Remote debugging starts as soon as you select a configuration of type "COBOL attach debugger" from the drop down.

Remote debugging has two requisites:

• the program source code must be available in the current project,

• the remote runtime must have been launched with [iscobol.rundebug.redirect_streams (boolean) \*](\) set to false in his configuration.
