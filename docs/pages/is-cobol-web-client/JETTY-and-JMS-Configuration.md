# JETTY and JMS Configuration

The WebClient tools are based on Eclipse Jetty, a Java HTTP (Web) server and Java Servlet container.

WebClient uses the Java Message Service (JMS) to communicate with the underlying COBOL applications.

## Jetty Configuration

By default the WebClient and WebClient Cluster start on port 8080 while the WebClient Admin Console starts on port 8090. WebClient Test Tool starts on port 8888.

You can change these settings by editing the files *webclient/jetty.properties, webclient/cluster/cluster-server/jetty.properties, webclient/admin/jetty.properties and webclient/test-tool/jetty.properties* under the installation folder. It’s good practice to make a backup copy of these files every time you change them, as they may be overwritten by the installation of an isCOBOL SDK update.

| Entry | Meaning |
| --- | --- |
| jetty.webclient.server.host | IP address or machine name where the service listens for connections. <br>Replacing 0.0.0.0 with any IP address will allow connections only from that IP address. |
| jetty.webclient.server.http | Enable or disable listening on the HTTP protocol |
| jetty.webclient.server.http.port | Port number the server listens to for HTTP connections |

*Note* - If you wish to disable the HTTP protocol, don’t comment *jetty.webclient.server.http*, but set it to "false". If the entry is commented, the service may not start.

The file jetty.properties contains also entries to enable secure HTTP (HTTPS).

| Entry | Meaning |
| --- | --- |
| jetty.webclient.server.https | Enable or disable listening on the HTTPS protocol |
| jetty.webclient.server.https.port | Port number the server listens to for HTTPS connections |
| jetty.webclient.server.https.truststore | Location of the truststore file |
| jetty.webclient.server.https.truststore.password | Truststore password |
| jetty.webclient.server.https.keystore | Location of the keystore file |
| jetty.webclient.server.https.keystore.password | Keystore password |

## JMS Configuration

By default JMS uses the port 34455. You can change this port via the *webclient.jmsUrl* property on the command line.

The value of this property must be specified in the form "nio://<serverNameOrIp\>:<port\>".

For example, in order to start WebClient on localhost using the port 12345 for JMS, use this command:

- Windows

```cobol
cd %ISCOBOL%\bin
webcclient.exe -J-Dwebclient.jmsUrl=nio://127.0.0.1:12345
```

- Linux

```cobol
cd $ISCOBOL/bin
./webcclient -J-Dwebclient.jmsUrl=nio://127.0.0.1:12345
```
