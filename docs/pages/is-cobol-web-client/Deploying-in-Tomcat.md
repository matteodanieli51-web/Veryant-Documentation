# Deploying in Tomcat

Even though WebClient comes with an embedded Jetty server, it is also possible to deploy it in an external servlet container like Tomcat. Other Jakarta and JEE servers can work as well, as long as they support the Servlet 3.0 spec.

## WebClient Server & Admin

To deploy WebClient Server and WebClient Admin to Tomcat follow these steps:

1. Copy *webclient/webclient-server.war* and *webclient/admin/webclient-admin-server.war* to Tomcat's *webapps* folder.
2. Copy *webclient/admin/webclient-admin.properties* to the WebClient’s root folder to have it in the same folder as *webclient.properties*.
3. Edit *webclient/webclient.properties* to enable and set the webclient.server.websocketUrl property, e.g.

```cobol
# websocket URL of this server, if deployed outside embedded Jetty
webclient.server.websocketUrl = ws://localhost:8080
```

4. Edit *webclient/webclient-admin.properties* to add the webapp name E.g.

```cobol
# public URL on which applications are accessible on public internet
webclient.server.publicUrl = http://localhost:8080/webclient-server
...
# comma-separated list of websocket URLs to webclient cluster servers
webclient.server.websocketUrl = ws://localhost:8080/webclient-server
```

5. Edit *webclient/webclient.config* to set the adminConsoleUrl property as follows:

```cobol
"adminConsoleUrl" : "http://localhost:8080/webclient-admin-server" 
```

6. In Tomcat’s *catalina.properties* add the following properties:

```cobol
webclient.warLocation=webapps/webclient-server.war
webclient.configFile={webclient_home}/webclient.config
webclient.tempDirBase={webclient_home}/tmp
webclient.rootDir={webclient_home}
```

Notes:

- Replace {*webclient_home*\} with the directory where WebClient was installed. For example, on Windows, use "C:\\Veryant\\isCOBOL\_WEBC2026R1\\webclient".
- Tomcat should be executed from its root folder, otherwise the path to *webclient.war* needs to be adjusted.
- The above snippets use the Tomcat’s default port 8080. Change this port number if you started Tomcat on a different port.

7. Browse to "[http://localhost:8080/webclient-server](https://www.example.com)" to reach the WebClient home page.

## WebClient Cluster Server & Admin

The WebClient’s cluster environment is implemented using three pieces of software:

- WebClient Cluster Server
- WebClient Admin
- WebClient Session Pool

WebClient Session Pool is a Java application and can’t be deployed in Tomcat.

WebClient Cluster Server and WebClient Admin, instead, are web applications and can be deployed in Tomcat.

To deploy WebClient Cluster Server and WebClient Admin to Tomcat follow these steps:

1. Copy *webclient/cluster/cluster-server/webclient.war* and *webclient/admin/webclient-admin-server.war* to Tomcat's *webapps* folder.
2. Copy *webclient/admin/webclient-admin.properties* to *webclient/cluster/cluster-server*. You need this file in WebClient Cluster Server’s root folder, along with *webclient.properties*.
3. Edit *webclient/cluster/cluster-server/webclient.properties* to enable and set the webclient.server.websocketUrl property, e.g.

```cobol
# websocket URL of this server, if deployed outside embedded Jetty
webclient.server.websocketUrl = ws://localhost:8080
```

4. Edit *webclient/cluster/cluster-server/webclient-admin.properties* to add the webapp name, e.g.

```cobol
# public URL on which applications are accessible on public internet
webclient.server.publicUrl = http://localhost:8080/webclient
...
# comma-separated list of websocket URLs to webclient cluster servers
webclient.server.websocketUrl = ws://localhost:8080/webclient
```

5. Edit *webclient/cluster/cluster-server/webclient-server.config* to set the adminConsoleUrl property as follows:

```cobol
"adminConsoleUrl" : "http://localhost:8080/webclient-admin-server" 
```

6. In Tomcat’s *catalina.properties* add the following properties:

```cobol
webclient.warLocation=webapps/webclient-server.war
webclient.configFile={webclient_home}/cluster/cluster-server/webclient-server.config
webclient.tempDirBase={webclient_home}/cluster/cluster-server/tmp
webclient.rootDir={webclient_home}/cluster/cluster-server
```

Notes:

- Replace {*webclient_home*\} with the directory where WebClient was installed. For example, on Windows, use "C:\\Veryant\\isCOBOL\_WEBC2026R1\\webclient".
- Tomcat should be executed from its root folder, otherwise the path to *webclient.war* needs to be adjusted.
- The above snippets use the Tomcat’s default port 8080. Change this port number if you started Tomcat on a different port.

7. Browse to "[http://localhost:8080/webclient](https://www.example.com)" to reach the WebClient home page.

## Deploying in Tomcat on headless Linux

If Tomcat is running on headless Linux, then it must be started along with the Xvfb framework, with a command like:

```cobol
#!/bin/bash
/etc/service/xvfb/run &
catalina.sh run
```
