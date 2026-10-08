# Managing multiple WebClient servers from the same WebClient Admin Console

The WebClient Admin Console can connect more than one WebClient server and allow you to monitor and configure these servers in one single place. When this approach is used, the configuration is synchronized between the various WebClient servers (every WebClient server will include the same apps and the same users). This is useful for load balancing purposes.

In order to attach multiple WebClient servers

- the Admin Console and the various WebClient servers must use the same secret key. The secret key is defined in the file *webclient/webclient.properties* for WebClient and in the file *webclient/admin/webclient-admin.properties* for the Admin Console. The default setting is:

```cobol
webclient.connection.secret = change_this_in_production_000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```

- the WebSocket URL of the various WebClient servers must be listed in the file *webclient/admin/webclient-admin.properties* at the webclient.server.websocketUrl setting. By default this setting points to a WebClient on the localhost, e.g.

```cobol
webclient.server.websocketUrl = ws://localhost:8080
```

You can replace this value or add new values to it. Multiple values must be comma separated. For example, assuming that we have another WebClient listening on server2 on the default port 8080, we will change the setting as follows:

```cobol
webclient.server.websocketUrl = ws://localhost:8080,ws://server2:8080
```
