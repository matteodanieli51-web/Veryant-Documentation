## webcclient-admin

The webcclient-admin command starts the WebClient Admin Console in foreground mode.

### Usage

```cobol
webcclient-admin [options]
```

See [Command-line startup options](./Command-line-startup-options) for the list of available options.

Edit the *webclient/admin/webclient-admin.properties* configuration file to configure the WebClient Admin Console. In particular, you might need to change the *webclient.server.publicUrl* property and the *webclient.server.websocketUrl* property if the WebClient server that you wish to administer is not running on the same machine or is running on a port other than 8080.
