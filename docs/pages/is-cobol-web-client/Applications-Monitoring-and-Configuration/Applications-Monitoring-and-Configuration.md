# Applications Monitoring and Configuration

**Note** - The applications configuration is saved in the file *webclient/webclient.config* under the isCOBOL installation folder. It’s good practice to make a backup copy of this file every time you change it, as it may be overwritten by the installation of an isCOBOL SDK update. Alternatively you can move this file outside the isCOBOL SDK installatio folder and point it via the [-c <arg\> ](../WebClient-commands/Command-line-startup-options) command line option.

Applications created in the WebClient can be monitored and configured through the WebClient Admin Console.

By default, the Admin Console is reachable via HTTP on the port 8090 of the server where you started the webclient-admin service, i.e.

```cobol
http://localhost:8090
```

Refer to [Jetty Configuration](../JETTY-and-JMS-Configuration) for instructions about how to use a different port.

The Admin credentials are required in order to access this app.

There are 4 sections:

[Overview](./Overview)
[Applications](./Applications/Applications)
[Sessions](./Sessions)
[Logs](./Logs)
