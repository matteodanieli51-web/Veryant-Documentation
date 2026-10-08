# How to enable HTTPS

By default WebClient tools communicate over the standard HTTP protocol.

In order to switch to the HTTPS protocol, proceed as follows:

1. Be sure you have a valid keystore file, either self-signed or released by a CA authority
2. Edit the jetty.properties files to disable HTTP and enable HTTPS, providing the path to your keystore and the keystore password, i.e.

```cobol
...
jetty.webclient.server.http=false
...
jetty.webclient.server.https=true
jetty.webclient.server.https.truststore=C:/TestSSL/test.jks
jetty.webclient.server.https.truststore.password=secret
jetty.webclient.server.https.keystore=C:/TestSSL/test.jks
jetty.webclient.server.https.keystore.password=secret
```

The following files are affected:

- webclient/jetty.properties
- webclient/admin/jetty.properties
- webclient/cluster/cluster-server/jetty.properties

3. Update the *adminConsoleUrl* value in webclient/webclient.config and webclient/cluster/cluster-server/webclient-server.config to reflect the HTTPS port set in webclient/admin/jetty.properties, i.e.

```cobol
  "adminConsoleUrl" : "https://localhost:9443/"  
```

4. Edit the webclient.properties files to configure HTTPS by providing the path to your keystore and the keystore password, i.e.

```cobol
webclient.server.websocket.truststore = C:/TestSSL/test.jks
webclient.server.websocket.truststore.password = secret
webclient.server.websocket.hostnameVerifier.disabled = true
```

The following files are affected:

- webclient/webclient.properties
- webclient/admin/webclient-admin.properties
- webclient/cluster/cluster-server/webclient.properties
- webclient/cluster/session-pool/webclient-sessionpool.properties

5. Edit webclient/admin/webclient-admin.properties to provide SSL-enabled URLs according to the settings configured for Jetty, i.e.

```cobol
...
webclient.server.publicUrl = https://localhost:8443
...
webclient.server.websocketUrl = wss://localhost:8443
...
```

6. Edit webclient/cluster/session-pool/webclient-sessionpool.properties to provide SSL-enabled URLs according to the settings configured for Jetty, i.e.

```cobol
...
webclient.server.websocketUrl = wss://localhost:8443
...
```

7. Start (or restart) the services.

**Note** - the SSL security can be configured at an higher level (e.g. on the HTTP Server) when using [Reverse Proxy](./Reverse-Proxy).
