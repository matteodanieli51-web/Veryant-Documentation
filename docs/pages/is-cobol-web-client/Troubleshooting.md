# Troubleshooting

In this section we list the most common issues with the WebClient software and provide suggestions on how to analyze and resolve them.

## Errors on the webclient command line

```cobol
Uncaught exception.
java.lang.IllegalStateException: Not possible to clean the temp folder. Make sure no other instance of webswing is running or use '-d true' option to create a new temp folder.
```

The most common cause for this error is that the port specified in *jetty.properties* is busy, probably occupied by another WebClient process. However, the temp folder may be locked for other reasons. Try adding *-d true* to the command line as suggested by the error message; if WebClient still doesn’t start, check the active processes in the system to ensure that there’s no other WebClient running.

## Errors shown in the webclient console output and traced in webclient.log

```cobol
java.lang.IllegalStateException: Please change webclient.connection.secret system property to a non-default value in production!
```

This is not a blocking error, it’s just a warning. To make it disappear, change the value of *webclient.connection.secret* in *webclient.properties*.

```cobol
ERROR [Webswing Process Handler] (SwingProcessImpl.java:381) [demo_anonym_16ab8ef908f_1634894384867] Caused by: java.awt.AWTError: Can't connect to X11 window server using ':0.0' as the value of the DISPLAY variable.
ERROR [Webswing Process Handler] (SwingProcessImpl.java:381) [demo_anonym_16ab8ef908f_1634894384867] at java.desktop/sun.awt.X11GraphicsEnvironment.initDisplay(Native Method)
ERROR [Webswing Process Handler] (SwingProcessImpl.java:381) [demo_anonym_16ab8ef908f_1634894384867] at java.desktop/sun.awt.X11GraphicsEnvironment$1.run(X11GraphicsEnvironment.java:102)
```

Linux only. Probably the xvfb package is not installed in the WebClient server. This package is needed to render the Swing application for the browser. Install the xvfb package and then start the webclient with the command: *xvfb-run webcclient*.

Usually the package can be installed from the Linux distribution's repository.

## Errors shown in the webclient-admin console output and traced in admin.log

```cobol
ERROR [ tyrus-jdk-client-2] (AdminWebSocketConnectionImpl.java:123) Websocket closed to server [ws://localhost:8080], close code [1003], reason [Connection not secured!]!
```

This error is returned when the connection secret configured in *webclient-admin.properties* doesn’t match the connection secret configured in *webclient.properties*.

## Errors shown in the web browser

```cobol
Unable to authorize your request
```

The application si disabled. Enable it as described in [Applications](./Applications-Monitoring-and-Configuration/Applications/Applications).

```cobol
Your Connection URL is wrong
Please correct your connection URL to match your webswing app URL
```

This message is shown by the TestTool user interface when it’s unable to launch the application. Ensure that the [CORS Origins](./Applications-Monitoring-and-Configuration/Applications/Change-the-application-configuration/Change-the-application-configuration#web-config) setting of the application includes the value "\*".
