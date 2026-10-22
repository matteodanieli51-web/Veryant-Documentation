## webcclient-and-admin

The webcclient-and-admin command allows you to start WebClient server and WebClient Admin Console as a single process. This command is particurlarly suitable for development environments.

### Usage

```cobol
webcclient-and-admin [options]
```

See [Command-line startup options](./Command-line-startup-options) for the list of available options.

Before running the command, edit the *webclient/webclient.config* file and replace:

```cobol
"adminConsoleUrl" : "http://localhost:8090"
```

with:

```cobol
"adminConsoleUrl" : "http://localhost:8080/admin"
```

If you need to configure anything related to the admin application (i.e. a different secret key or a public URL different than localhost), edit the *webclient/admin/webclient-admin.properties* file.
