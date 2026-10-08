## webcclient-session

The webcclient-session command starts the WebClient Session Pool in foreground mode.

### Usage

```cobol
webcclient-session [options]
```

See [Command-line startup options](./Command-line-startup-options) for the list of available options.

Edit the *webclient/cluster/session-pool/webclient-sessionpool.properties* configuration file to configure the WebClient Admin Console. In particular, you might need to change the *webclient.server.websocketUrl* property if the WebClient Cluster Server that you wish to attach is not running on the same machine or is running on a port other than 8080.

See [Cluster Deployment](../Cluster-Deployment) for more information on this argument.
